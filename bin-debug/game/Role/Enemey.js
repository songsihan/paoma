/**
 * 游戏中的角色
 */
var game;
(function (game) {
    var Enemey = (function (_super) {
        __extends(Enemey, _super);
        function Enemey(armature) {
            _super.call(this, armature);
            this.AI = new game.RoleAI(this);
        }
        var d = __define,c=Enemey;p=c.prototype;
        p.Update = function () {
            _super.prototype.Update.call(this);
            this.AI.Behave();
            this.AI.OnTiker();
        };
        p.onFrameEvent = function (evt) {
            _super.prototype.onFrameEvent.call(this, evt);
            if (evt.frameLabel == "attack" || evt.frameLabel == "knockdown") {
                var skillId = _super.prototype.GetUseSkillId.call(this);
                var enemey = game.Game.GetInstance().GetPlayer();
                var config = game.SkillConfig.GetInstance().GetConfig(skillId);
                if (!config)
                    return;
                var bKnockDown = config.konckDown && evt.frameLabel == "knockdown";
                game.GameRuleJudge.GetInstance().JudgeFight(this, enemey, config.attack_distance, bKnockDown);
            }
        };
        p.UnderAttack = function () {
            _super.prototype.UnderAttack.call(this);
            this.AI.ResetMoving();
        };
        p.AutoAdjustDir = function () {
            if (this.IsUsingSkill())
                return;
            var enemey = game.Game.GetInstance().GetPlayer();
            var enemeyPosX = enemey.GetPosX();
            var selfPosX = this.GetPosX();
            var dir = Math.abs(enemeyPosX - selfPosX) / (enemeyPosX - selfPosX);
            if (this.GetDirection() != dir) {
                this.SetDirection(dir);
            }
        };
        return Enemey;
    })(game.Role);
    game.Enemey = Enemey;
    egret.registerClass(Enemey,"game.Enemey");
})(game || (game = {}));
