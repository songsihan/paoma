/**
 * 游戏中的玩家
 */
var game;
(function (game) {
    var Player = (function (_super) {
        __extends(Player, _super);
        function Player(armature) {
            _super.call(this, armature);
            this.keys = "";
            this.nextSkillId = 0;
        }
        var d = __define,c=Player;p=c.prototype;
        //开放的角色移动的接口
        p.MoveLeft = function () {
            if (!this.CheckCanOperate())
                return;
            _super.prototype.MoveTo.call(this, _super.prototype.GetWidth.call(this) / 2, _super.prototype.GetPosY.call(this));
            _super.prototype.SetAction.call(this, "run");
            _super.prototype.SetDirection.call(this, -1);
        };
        p.MoveRight = function () {
            if (!this.CheckCanOperate())
                return;
            var width = game.Game.GetInstance().GetStageWidth();
            _super.prototype.MoveTo.call(this, width, _super.prototype.GetPosY.call(this));
            _super.prototype.SetAction.call(this, "run");
            _super.prototype.SetDirection.call(this, 1);
        };
        p.MoveUp = function () {
            if (!this.CheckCanOperate())
                return;
            _super.prototype.MoveTo.call(this, _super.prototype.GetPosX.call(this), _super.prototype.GetHeight.call(this) + game.STAGE_UP_DIFF);
            _super.prototype.SetAction.call(this, "run");
        };
        p.MoveDown = function () {
            if (!this.CheckCanOperate())
                return;
            var height = game.Game.GetInstance().GetStageHeight();
            _super.prototype.MoveTo.call(this, _super.prototype.GetPosX.call(this), height - game.STAGE_DOWN_DIFF);
            _super.prototype.SetAction.call(this, "run");
        };
        p.StopMove = function () {
            if (!this.CheckCanOperate())
                return;
            _super.prototype.SetAction.call(this, "stop");
            _super.prototype.StopMove.call(this);
        };
        p.onFrameEvent = function (evt) {
            _super.prototype.onFrameEvent.call(this, evt);
            if (evt.frameLabel == "attack" || evt.frameLabel == "knockdown") {
                var skillId = _super.prototype.GetUseSkillId.call(this);
                var enemey = game.Game.GetInstance().GetEnemey();
                var config = game.SkillConfig.GetInstance().GetConfig(skillId);
                if (!config)
                    return;
                var bKnockDown = config.konckDown && evt.frameLabel == "knockdown";
                game.GameRuleJudge.GetInstance().JudgeFight(this, enemey, config.attack_distance, bKnockDown);
            }
        };
        p.OnClick = function (key) {
            var skillId = _super.prototype.GetUseSkillId.call(this);
            if (skillId != 0 && this.nextSkillId != 0) {
                return;
            }
            console.log(skillId);
            if (skillId == 0) {
                //不可能出现无定义的情况出现
                var skillId = game.SkillConfig.GetInstance().GetContinueSkillByKeys(key);
                this.keys = key;
                this.UseSkill(skillId);
            }
            else {
                this.keys = this.keys + key;
                var nextSkillId = game.SkillConfig.GetInstance().GetContinueSkillByKeys(this.keys);
                if (!nextSkillId) {
                    this.keys = "";
                    this.nextSkillId = 0;
                }
                else {
                    this.nextSkillId = nextSkillId;
                }
            }
        };
        p.OnActionFinish = function () {
            if (this.nextSkillId != 0) {
                this.action = "stop";
                _super.prototype.UseSkill.call(this, this.nextSkillId);
                this.nextSkillId = 0;
                return;
            }
            _super.prototype.OnActionFinish.call(this);
        };
        p.Update = function () {
            _super.prototype.Update.call(this);
            // this.AutoAdjustDir();
            game.Game.GetInstance().ResortDisplayList();
        };
        p.AutoAdjustDir = function () {
            var enemey = game.Game.GetInstance().GetEnemey();
            var enemeyPosX = enemey.GetPosX();
            var selfPosX = this.GetPosX();
            var dir = Math.abs(enemeyPosX - selfPosX) / (enemeyPosX - selfPosX);
            if (this.GetDirection() != dir) {
                this.SetDirection(dir);
            }
        };
        return Player;
    })(game.Role);
    game.Player = Player;
    egret.registerClass(Player,"game.Player");
})(game || (game = {}));
