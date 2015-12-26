/**
 * 游戏中的角色
 */
var game;
(function (game) {
    var Role = (function (_super) {
        __extends(Role, _super);
        function Role(armature) {
            _super.call(this);
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
            this.shadow.anchorOffsetX = this.roleWidth / 2;
            dragonBones.WorldClock.clock.add(this.armature);
            this.addEventListener(egret.Event.ENTER_FRAME, function () {
                dragonBones.WorldClock.clock.advanceTime(0.01);
                this.Update();
            }, this);
            armature.addEventListener(dragonBones.AnimationEvent.COMPLETE, this.onAnimationEvent, this);
            armature.addEventListener(dragonBones.AnimationEvent.START, this.onAnimationEvent, this);
            armature.addEventListener(dragonBones.AnimationEvent.LOOP_COMPLETE, this.onAnimationEvent, this);
            armature.addEventListener(dragonBones.FrameEvent.ANIMATION_FRAME_EVENT, this.onFrameEvent, this);
            this.SetAction("stop");
        }
        var d = __define,c=Role;p=c.prototype;
        p.SetPos = function (x, y) {
            this.armatureDisplay.x = x;
            this.armatureDisplay.y = y;
            this.shadow.x = x;
            this.shadow.y = y;
        };
        p.SetAction = function (action) {
            this.armature.animation.gotoAndPlay(action);
            this.action = action;
        };
        p.MoveTo = function (x, y) {
            if (this.armatureDisplay.x == x && this.armatureDisplay.y == y) {
                if (this.isMoving) {
                    this.isMoving = false;
                }
                return;
            }
            this.isMoving = true;
            this.targetX = x;
            this.targetY = y;
        };
        p.StopMove = function () {
            this.isMoving = false;
        };
        //设置方向 1 正方形 -1负方向
        p.SetDirection = function (dir) {
            this.armatureDisplay.scaleX = dir;
        };
        p.onFrameEvent = function (evt) {
            if (evt.frameLabel == "attack") {
                if (this.action == "attack01"
                    || this.action == "attack02"
                    || this.action == "attack03") {
                    //取巧做法 ！
                    this.action = "stop";
                }
            }
        };
        p.CheckCanOperate = function () {
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
                || this.action == "die") {
                return false;
            }
            return true;
        };
        p.UnderAttack = function () {
            if (this.action == "hit")
                return;
            this.SetAction("hit");
            game.GameSound.GetInstance().PlaySound("resource/sound/hit_light.mp3", false);
        };
        p.onAnimationEvent = function (evt) {
            switch (evt.type) {
                case dragonBones.AnimationEvent.START:
                    break;
                case dragonBones.AnimationEvent.LOOP_COMPLETE:
                    this.OnActionFinish();
                    break;
                case dragonBones.AnimationEvent.COMPLETE:
                    this.OnActionFinish();
                    break;
            }
        };
        p.OnActionFinish = function () {
            if (this.action == "attack01"
                || this.action == "attack02"
                || this.action == "attack03"
                || this.action == "skill01"
                || this.action == "skill02"
                || this.action == "skill03"
                || this.action == "skill04"
                || this.action == "stroke"
                || this.action == "up"
                || this.action == "hit") {
                this.SetAction("stop");
            }
            else if (this.action == "die") {
                this.SetAction("up");
            }
            this.skillId = 0;
        };
        p.GetWidth = function () {
            return this.roleWidth;
        };
        p.GetHeight = function () {
            return this.roleHeight;
        };
        p.GetPosX = function () {
            return this.armatureDisplay.x;
        };
        p.SetPosX = function (x) {
            this.armatureDisplay.x = x;
            this.shadow.x = x;
        };
        p.SetPosY = function (y) {
            this.armatureDisplay.y = y;
            this.shadow.y = y;
        };
        p.GetPosY = function () {
            return this.armatureDisplay.y;
        };
        p.GetDirection = function () {
            return this.armatureDisplay.scaleX;
        };
        p.UseSkill = function (skillId) {
            this.skillMgr.UseSkill(skillId);
            this.skillId = skillId;
        };
        p.GetUseSkillId = function () {
            return this.skillId;
        };
        p.KnockDown = function (dir, dist) {
            var targetX = this.GetPosX() + dir * dist;
            targetX = Math.max(this.GetWidth() / 2, targetX);
            var width = game.Game.GetInstance().GetStageWidth();
            targetX = Math.min(width, targetX);
            this.MoveTo(targetX, this.GetPosY());
            this.SetAction("die");
        };
        p.IsDefend = function () {
            return this.action == "defend";
        };
        p.Defend = function () {
            this.SetAction("defend");
        };
        p.UnDefend = function () {
            this.SetAction("stop");
        };
        p.IsUsingSkill = function () {
            if (this.action == "attack01"
                || this.action == "attack02"
                || this.action == "attack03"
                || this.action == "skill01"
                || this.action == "skill02"
                || this.action == "skill03"
                || this.action == "skill04"
                || this.action == "stroke") {
                return true;
            }
            return false;
        };
        p.Update = function () {
            if (this.isMoving) {
                var posX = this.GetPosX();
                var posY = this.GetPosY();
                if (posX == this.targetX && posY == this.targetY) {
                    this.isMoving = false;
                    return;
                }
                if (posX != this.targetX) {
                    var distanceX = this.targetX - posX;
                    var dir = distanceX / Math.abs(distanceX);
                    var speedX = game.MOVE_SPEED * dir;
                    if (Math.abs(distanceX) < game.MOVE_SPEED) {
                        speedX = Math.abs(distanceX) * dir;
                    }
                    posX = posX + speedX;
                }
                if (posY != this.targetY) {
                    var distanceY = this.targetY - posY;
                    var dir = distanceY / Math.abs(distanceY);
                    var speedY = game.MOVE_SPEED * dir;
                    if (Math.abs(distanceY) < game.MOVE_SPEED) {
                        speedY = Math.abs(distanceY) * dir;
                    }
                    posY = posY + speedY;
                }
                this.SetPos(posX, posY);
            }
        };
        return Role;
    })(egret.DisplayObjectContainer);
    game.Role = Role;
    egret.registerClass(Role,"game.Role");
})(game || (game = {}));
