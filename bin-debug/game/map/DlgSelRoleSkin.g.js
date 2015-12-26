var game;
(function (game) {
    var map;
    (function (map) {
        var DlgSelRoleSkin = (function (_super) {
            __extends(DlgSelRoleSkin, _super);
            function DlgSelRoleSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [640, 1136]);
                this.elementsContent = [this.__3_i(), this.imgSelRole_i(), this.__4_i(), this.btnFight_i(), this.imgRoleName_i(), this.__5_i(), this.imgRoleInfo_i(), this.imgSelectedBorder_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [
                        new egret.gui.SetProperty("btnFight", "x", 933),
                        new egret.gui.SetProperty("btnFight", "y", 550)
                    ])
                ];
            }
            var d = __define,c=DlgSelRoleSkin;p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return DlgSelRoleSkin._skinParts;
                }
            );
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "source", "touchEnabled", "width", "x", "y"], [113, "resource/assets/UI/bg/bg_start.png", true, 300, 820, 501]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["resource/assets/UI/icon/icon_role_info.png", 71, 453]);
                return t;
            };
            p.btnFight_i = function () {
                var t = new egret.gui.Button();
                this.btnFight = t;
                t.setStyle("bold", true);
                t.setStyle("fontFamily", "Shonar Bangla");
                t.setStyle("italic", true);
                t.setStyle("textAlign", "left");
                t.setStyle("textColor", 0xFA0101);
                t.setStyle("verticalAlign", "top");
                this.__s(t, ["height", "skinName", "width", "x", "y"], [78, new egret.gui.ButtonSkin("resource/assets/UI/btn/btn_start_normal.png", "resource/assets/UI/btn/btn_start_clicked.png"), 210, 872, 522]);
                return t;
            };
            p.imgRoleInfo_i = function () {
                var t = new egret.gui.UIAsset();
                this.imgRoleInfo = t;
                this.__s(t, ["autoScale", "height", "source", "width", "x", "y"], [false, 167, "resource/assets/UI/pic/role_info_0.png", 201, 80, 127]);
                return t;
            };
            p.imgRoleName_i = function () {
                var t = new egret.gui.UIAsset();
                this.imgRoleName = t;
                this.__s(t, ["source", "x", "y"], ["resource/assets/UI/pic/role_name_0.png", 135, 33]);
                return t;
            };
            p.imgSelRole_i = function () {
                var t = new egret.gui.UIAsset();
                this.imgSelRole = t;
                this.__s(t, ["height", "source", "width", "x", "y"], [636, "resource/assets/role/fulong.png", 924, -67, 3]);
                return t;
            };
            p.imgSelectedBorder_i = function () {
                var t = new egret.gui.UIAsset();
                this.imgSelectedBorder = t;
                t.setStyle("verticalAlign", "middle");
                this.__s(t, ["autoScale", "fillMode", "height", "source", "touchEnabled", "width", "x", "y"], [true, "repeat", 387, "resource/assets/UI/bg/bg_select_role.png", true, 508, 806, 93]);
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "source", "width", "x", "y"], [640, "resource/assets/bigImg/bg_role_choice.jpg", 1136, 0, 0]);
                return t;
            };
            DlgSelRoleSkin._skinParts = ["imgSelRole", "btnFight", "imgRoleName", "imgRoleInfo", "imgSelectedBorder"];
            return DlgSelRoleSkin;
        })(egret.gui.Skin);
        map.DlgSelRoleSkin = DlgSelRoleSkin;
        egret.registerClass(DlgSelRoleSkin,"game.map.DlgSelRoleSkin");
    })(map = game.map || (game.map = {}));
})(game || (game = {}));
