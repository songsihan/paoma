    
/**
 * 游戏中的玩家
 */
module game {
    export class Player extends game.Role {
        private keys: string;
        protected nextSkillId: number;

        public constructor(armature : dragonBones.FastArmature) 
        {
            super(armature);
            this.keys = "";
            this.nextSkillId = 0;
        }

        //开放的角色移动的接口
        public MoveLeft()
        {
            if (!this.CheckCanOperate()) return;

            super.MoveTo(super.GetWidth() / 2, super.GetPosY());

            super.SetAction("run");

            super.SetDirection(-1);
        }

        public MoveRight()
        {
            if (!this.CheckCanOperate()) return;

            var width = game.Game.GetInstance().GetStageWidth();

            super.MoveTo(width, super.GetPosY());

            super.SetAction("run");

            super.SetDirection(1);
        }

        public MoveUp()
        {
            if (!this.CheckCanOperate()) return;

            super.MoveTo(super.GetPosX(), super.GetHeight() + STAGE_UP_DIFF);
            super.SetAction("run");
        }

        public MoveDown()
        {
            if (!this.CheckCanOperate()) return;

            var height = game.Game.GetInstance().GetStageHeight();
            super.MoveTo(super.GetPosX(), height - STAGE_DOWN_DIFF);
            super.SetAction("run");
        }

        public StopMove()
        {
            if (!this.CheckCanOperate()) return;

            super.SetAction("stop");
            super.StopMove();
        }

        public onFrameEvent(evt: dragonBones.FrameEvent):void
        {
            super.onFrameEvent(evt);

            if (evt.frameLabel == "attack" || evt.frameLabel == "knockdown")
            {
                var skillId = super.GetUseSkillId();
                var enemey = game.Game.GetInstance().GetEnemey();
                var config = game.SkillConfig.GetInstance().GetConfig(skillId)
                if (!config) return;

                var bKnockDown = config.konckDown && evt.frameLabel == "knockdown";
                game.GameRuleJudge.GetInstance().JudgeFight(this, enemey, config.attack_distance, bKnockDown);
            }
        }

        public OnClick(key: string)
        {   
            var skillId = super.GetUseSkillId();

            if (skillId != 0 && this.nextSkillId != 0)
            {
                return;
            }

            console.log(skillId);

            if (skillId == 0)
            {
                //不可能出现无定义的情况出现
                var skillId = game.SkillConfig.GetInstance().GetContinueSkillByKeys(key);

                this.keys = key;

                this.UseSkill(skillId);

            }
            else
            {
                this.keys = this.keys + key;

                var nextSkillId = game.SkillConfig.GetInstance().GetContinueSkillByKeys(this.keys);
                if (!nextSkillId)
                {
                    this.keys = "";
                    this.nextSkillId = 0;
                }
                else
                {
                    this.nextSkillId = nextSkillId;
                }
            }
        }

        public OnActionFinish()
        {
            if (this.nextSkillId != 0)
            {
                this.action = "stop";
                super.UseSkill(this.nextSkillId);
                this.nextSkillId = 0;
                return;
            }

            super.OnActionFinish();
        }

        public Update()
        {
            super.Update();

           // this.AutoAdjustDir();

            game.Game.GetInstance().ResortDisplayList();
        }

        public AutoAdjustDir()
        {
            var enemey = game.Game.GetInstance().GetEnemey();
            var enemeyPosX = enemey.GetPosX();
            var selfPosX = this.GetPosX();

            var dir = Math.abs(enemeyPosX - selfPosX) / (enemeyPosX - selfPosX);

            if (this.GetDirection() != dir)
            {
                this.SetDirection(dir);
            }
        }
    }
}