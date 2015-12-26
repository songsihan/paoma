/**
 * 游戏中的技能配置
 */
var game;
(function (game) {
    var SkillConfig = (function () {
        function SkillConfig() {
            this.skillConfig = new Array();
            this.skillConfig.push({ skillId: 0, action: "", attack_distance: 0 });
            //李小龙技能 1-5
            this.skillConfig.push({ skillId: 1, action: "attack01", attack_distance: 50, konckDown: false, sound: "resource/sound/5_stonkerhit01.mp3" });
            this.skillConfig.push({ skillId: 2, action: "attack02", attack_distance: 50, konckDown: false, sound: "resource/sound/5_stonkerhit01.mp3" });
            this.skillConfig.push({ skillId: 3, action: "attack03", attack_distance: 50, konckDown: true, sound: "resource/sound/5_stonkerhit01.mp3" });
            this.skillConfig.push({ skillId: 4, action: "skill01", attack_distance: 50, konckDown: false, sound: "resource/sound/5_stonkerhit01.mp3" });
            this.skillConfig.push({ skillId: 5, action: "skill02", attack_distance: 50, konckDown: true, sound: "resource/sound/5_stonkerhit01.mp3" });
            this.skillConfig.push({ skillId: 6, action: "skill03", attack_distance: 80, konckDown: true, sound: "resource/sound/5_stonkerhit01.mp3" });
            this.skillConfig.push({ skillId: 7, action: "skill04", attack_distance: 80, konckDown: true, sound: "resource/sound/5_stonkerhit01.mp3" });
            this.skillConfig.push({ skillId: 8, action: "stroke", attack_distance: 80, konckDown: true, sound: "resource/sound/5_stonkerhit01.mp3" });
            //白骑士技能
            this.skillConfig.push({ skillId: 9, action: "attack01", attack_distance: 50, konckDown: false, sound: "resource/sound/zj_baiqishi_a.mp3" });
            this.skillConfig.push({ skillId: 10, action: "attack02", attack_distance: 50, konckDown: false, sound: "resource/sound/zj_baiqishi_aa.mp3" });
            this.skillConfig.push({ skillId: 11, action: "attack03", attack_distance: 50, konckDown: true, sound: "resource/sound/zj_baiqishi_aaa.mp3" });
            this.skillConfig.push({ skillId: 12, action: "skill01", attack_distance: 50, konckDown: false, sound: "resource/sound/zj_bqs_tbe.mp3" });
            this.skillConfig.push({ skillId: 13, action: "skill02", attack_distance: 50, konckDown: true, sound: "resource/sound/zj_bqs_tb.mp3" });
            this.skillConfig.push({ skillId: 14, action: "skill03", attack_distance: 80, konckDown: true, sound: "resource/sound/zj_bqs_t1.mp3" });
            this.skillConfig.push({ skillId: 15, action: "skill04", attack_distance: 80, konckDown: true, sound: "resource/sound/zj_bqs_t2.mp3" });
            this.skillConfig.push({ skillId: 16, action: "stroke", attack_distance: 80, konckDown: true, sound: "resource/sound/zj_bqs_t2.mp3" });
            this.skillContinueConfig = new Array();
            this.skillContinueConfig['A'] = 9;
            this.skillContinueConfig['AA'] = 10;
            this.skillContinueConfig['AAA'] = 11;
            this.skillContinueConfig['B'] = 12;
            this.skillContinueConfig['BA'] = 13;
            this.skillContinueConfig['BB'] = 14;
            this.skillContinueConfig['BBB'] = 15;
            this.skillContinueConfig['C'] = 16;
        }
        var d = __define,c=SkillConfig;p=c.prototype;
        SkillConfig.GetInstance = function () {
            if (!this.instance) {
                this.instance = new SkillConfig();
            }
            return this.instance;
        };
        p.GetConfig = function (skillId) {
            return this.skillConfig[skillId];
        };
        p.GetContinueSkillByKeys = function (keys) {
            return this.skillContinueConfig[keys];
        };
        return SkillConfig;
    })();
    game.SkillConfig = SkillConfig;
    egret.registerClass(SkillConfig,"game.SkillConfig");
})(game || (game = {}));
