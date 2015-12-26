
/**
 * 游戏中的角色
 */
module game {
    export class Role extends egret.DisplayObjectContainer{
        protected armature : dragonBones.FastArmature;
        protected armatureDisplay: any;
        protected shadow: egret.Bitmap;
        protected isMoving: boolean;
        protected targetX: number;
        protected targetY: number;
        protected skillMgr: game.SkillMgr;
        protected action: string;
        protected skillId: number;

        protected roleWidth: number;
        protected roleHeight: number;
        protected isKnockMoving: boolean;

        public constructor(armature : dragonBones.FastArmature) 
        {
            super();

            this.isMoving = false;

            this.skillId = 0;

            this.targetX = 0;
            this.targetY = 0;

            this.skillMgr = new game.SkillMgr(this);

            this.shadow = new egret.Bitmap();
            this.shadow.texture = RES.getRes("shadow_img");

            this.addChild(this.shadow);

            this.armature = armature;

            this.armatureDisplay = armature.display;

            this.addChild(this.armatureDisplay);

            this.roleWidth = this.armatureDisplay.width;
            this.roleHeight = this.armatureDisplay.height;

            this.shadow.anchorOffsetX = this.roleWidth / 2

            dragonBones.WorldClock.clock.add(this.armature);

            this.addEventListener( egret.Event.ENTER_FRAME, function():void
                        {
                            dragonBones.WorldClock.clock.advanceTime( 0.01 );
                            this.Update();
                        }, 
                        this );

            armature.addEventListener(dragonBones.AnimationEvent.COMPLETE, this.onAnimationEvent,this);
            armature.addEventListener(dragonBones.AnimationEvent.START, this.onAnimationEvent,this);
            armature.addEventListener(dragonBones.AnimationEvent.LOOP_COMPLETE, this.onAnimationEvent,this);

            armature.addEventListener(dragonBones.FrameEvent.ANIMATION_FRAME_EVENT, this.onFrameEvent,this);

            this.SetAction("stop");
        }

    
        public SetPos(x:number, y:number)
        {
            this.armatureDisplay.x = x;
            this.armatureDisplay.y = y;
            this.shadow.x = x;
            this.shadow.y = y;
        }

        public SetAction(action: string)
        {
            this.armature.animation.gotoAndPlay(action)
            this.action = action;
        }

        public MoveTo(x:number, y:number)
        {
            if (this.armatureDisplay.x == x && this.armatureDisplay.y == y)
            {
                if (this.isMoving) 
                {
                    this.isMoving = false;
                }

                return;
            }

            this.isMoving = true;

            this.targetX = x;
            this.targetY = y;
        }

        public StopMove()
        {
            this.isMoving = false;
        }

        //设置方向 1 正方形 -1负方向
        public SetDirection(dir: number)
        {
            this.armatureDisplay.scaleX = dir;
        }

        public onFrameEvent(evt: dragonBones.FrameEvent):void
        {
            if (evt.frameLabel == "attack")
            {

                if (this.action == "attack01"
                    || this.action == "attack02"
                    || this.action == "attack03"
                    )
                {
                    //取巧做法 ！
                    this.action = "stop";
                }
            }
        }

        public CheckCanOperate()
        {
            if (this.action == "attack01"
                || this.action == "attack02"
                || this.action == "attack03"
                || this.action == "skill01"
                || this.action == "skill02"
                || this.action == "skill03"
                || this.action == "skill04"
                || this.action == "stroke"
                || this.action == "up"
                || this.action == "hit"
                || this.action == "die"
            )
            {
                return false;
            }

            return true;
        }

        public UnderAttack()
        {
            if (this.action == "hit") return;
            
            this.SetAction("hit");

            game.GameSound.GetInstance().PlaySound("resource/sound/hit_light.mp3", false);
        }
        
        private onAnimationEvent(evt: dragonBones.AnimationEvent)
        {
            switch(evt.type)
            {
                case dragonBones.AnimationEvent.START:
                    break;
                case dragonBones.AnimationEvent.LOOP_COMPLETE:
                    this.OnActionFinish();
                    break;
                case dragonBones.AnimationEvent.COMPLETE:
                    this.OnActionFinish();
                    break;
            }
        }

        public OnActionFinish()
        {
            if ( this.action == "attack01"
                || this.action == "attack02"
                || this.action == "attack03"
                || this.action == "skill01"
                || this.action == "skill02"
                || this.action == "skill03"
                || this.action == "skill04"
                || this.action == "stroke"
                || this.action == "up"
                || this.action == "hit"
                )
            {
                this.SetAction("stop");
            }
            else if(this.action == "die")
            {
                this.SetAction("up");
            }

            this.skillId = 0;
        }

        public GetWidth()
        {
            return this.roleWidth;
        }

        public GetHeight()
        {
            return this.roleHeight
        }

        public GetPosX()
        {
            return this.armatureDisplay.x
        }

        public SetPosX(x:number)
        {
            this.armatureDisplay.x = x;
            this.shadow.x = x;
        }

        public SetPosY(y:number)
        {
            this.armatureDisplay.y = y;
            this.shadow.y = y;
        }

        public GetPosY()
        {
            return this.armatureDisplay.y
        }

        public GetDirection()
        {
            return this.armatureDisplay.scaleX;
        }

        public UseSkill(skillId: number)
        {
            this.skillMgr.UseSkill(skillId);
            this.skillId = skillId;
        }

        public GetUseSkillId():number
        {
            return this.skillId;
        }

        public KnockDown(dir: number, dist: number)
        {
            var targetX = this.GetPosX() + dir * dist;
            targetX = Math.max(this.GetWidth() / 2, targetX);

            var width = game.Game.GetInstance().GetStageWidth();
            targetX = Math.min(width, targetX);

            this.MoveTo(targetX, this.GetPosY())

            this.SetAction("die");
        }

        public IsDefend(): boolean
        {
            return this.action == "defend";
        }

        public Defend()
        {
            this.SetAction("defend");
        }

        public UnDefend()
        {
            this.SetAction("stop");
        }

        public IsUsingSkill():boolean
        {
            if (this.action == "attack01"
                || this.action == "attack02"
                || this.action == "attack03"
                || this.action == "skill01"
                || this.action == "skill02"
                || this.action == "skill03"
                || this.action == "skill04"
                || this.action == "stroke")
            {
                return true;
            }

            return false;
        }
        
        public Update()
        {
            if (this.isMoving)
            {
                var posX = this.GetPosX();
                var posY = this.GetPosY();

                if (posX == this.targetX && posY == this.targetY)
                {
                    this.isMoving = false;
                    return;
                }

                if (posX != this.targetX)
                {
                    var distanceX = this.targetX - posX;
                    var dir = distanceX / Math.abs(distanceX);
                    var speedX = MOVE_SPEED * dir;

                    if (Math.abs(distanceX) < MOVE_SPEED )
                    {
                        speedX = Math.abs(distanceX) * dir;
                    }
                    
                    posX = posX + speedX;
                }
               
                if (posY != this.targetY)
                {
                    var distanceY = this.targetY - posY;
                    var dir = distanceY / Math.abs(distanceY);
                    var speedY = MOVE_SPEED * dir;

                    if (Math.abs(distanceY) < MOVE_SPEED)
                    {
                        speedY = Math.abs(distanceY) * dir;
                    }
                    posY = posY + speedY;                    
                }

                this.SetPos(posX, posY);
            }
        }
    }
}