/**
 * 游戏中的人物配置
 */
var game;
(function (game) {
    var RoleConfig = (function () {
        function RoleConfig() {
            this.roleConfig = new Array();
            this.roleConfig.push({ age: 18, pic: 'fulong_png', head: 'head_fulong_single_png', date: '5月3日', height: 1.78, type: "截拳" });
            this.roleConfig.push({ age: 21, pic: 'liuzaiqing_png', head: 'head_liuzaiqing_single_png', date: '12月16日', height: 1.84, type: "新月" });
            this.roleConfig.push({ age: 25, pic: 'fukong_png', head: 'head_void_wizard_single_png', date: '8月9日', height: 1.77, type: "暗影" });
            this.roleConfig.push({ age: 43, pic: 'tiezhang_png', head: 'head_tiezhang_single_png', date: '10月5日', height: 1.74, type: "白鹤" });
            this.roleConfig.push({ age: 18, pic: 'lorica_png', head: 'head_lorica_single_png', date: '2月17日', height: 1.83, type: "" });
            this.roleConfig.push({ age: 18, pic: 'garson_png', head: 'head_garson_single_png', date: '6月23日', height: 1.71, type: "" });
        }
        var d = __define,c=RoleConfig;p=c.prototype;
        RoleConfig.GetInstance = function () {
            if (!this.instance) {
                this.instance = new RoleConfig();
            }
            return this.instance;
        };
        p.GetRoleByKey = function (roleId) {
            return this.roleConfig[roleId];
        };
        return RoleConfig;
    })();
    game.RoleConfig = RoleConfig;
    egret.registerClass(RoleConfig,"game.RoleConfig");
})(game || (game = {}));
