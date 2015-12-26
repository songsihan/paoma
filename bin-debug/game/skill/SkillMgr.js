/**
 * 游戏中的角色
 */
var game;
(function (game) {
    var SkillMgr = (function () {
        function SkillMgr(role) {
            this.role = role;
        }
        var d = __define,c=SkillMgr;p=c.prototype;
        p.UseSkill = function (skillId) {
            if (this.role.IsUsingSkill())
                return;
            var config = game.SkillConfig.GetInstance().GetConfig(skillId);
            if (!config)
                return;
            //技能表现
            this.role.SetAction(config.action);
            if (config.sound != "") {
                game.GameSound.GetInstance().PlaySound(config.sound, false);
            }
        };
        return SkillMgr;
    })();
    game.SkillMgr = SkillMgr;
    egret.registerClass(SkillMgr,"game.SkillMgr");
})(game || (game = {}));
