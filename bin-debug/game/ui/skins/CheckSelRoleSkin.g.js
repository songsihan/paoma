var game;
(function (game) {
    var ui;
    (function (ui) {
        var skins;
        (function (skins) {
            var CheckSelRoleSkin = (function (_super) {
                __extends(CheckSelRoleSkin, _super);
                function CheckSelRoleSkin() {
                    _super.call(this);
                    this.__s = egret.gui.setProperties;
                    this.__s(this, ["height", "width"], [106, 277]);
                    this.elementsContent = [this.__7_i(), this.__8_i()];
                    this.states = [
                        new egret.gui.State("up", []),
                        new egret.gui.State("down", []),
                        new egret.gui.State("disabled", []),
                        new egret.gui.State("upAndSelected", [
                            new egret.gui.SetProperty("__7", "left", -1),
                            new egret.gui.SetProperty("__7", "top", -1),
                            new egret.gui.SetProperty("", "height", 173),
                            new egret.gui.SetProperty("", "width", 209)
                        ]),
                        new egret.gui.State("downAndSelected", [
                            new egret.gui.SetProperty("__7", "left", 0),
                            new egret.gui.SetProperty("__7", "top", 0),
                            new egret.gui.SetProperty("", "height", 173),
                            new egret.gui.SetProperty("", "width", 208)
                        ]),
                        new egret.gui.State("disabledAndSelected", [])
                    ];
                }
                var d = __define,c=CheckSelRoleSkin;p=c.prototype;
                p.__7_i = function () {
                    var t = new egret.gui.UIAsset();
                    this.__7 = t;
                    this.__s(t, ["height", "left", "source", "top", "width"], [106, 0, "resource/assets/UI/btn/btn_select_role.png", 0, 277]);
                    return t;
                };
                p.__8_i = function () {
                    var t = new egret.gui.UIAsset();
                    this.__s(t, ["height", "source", "width", "x", "y"], [107, "resource/assets/UI/bg/bg_selecr_role.png", 278, 0, 0]);
                    return t;
                };
                return CheckSelRoleSkin;
            })(egret.gui.Skin);
            skins.CheckSelRoleSkin = CheckSelRoleSkin;
            egret.registerClass(CheckSelRoleSkin,"game.ui.skins.CheckSelRoleSkin");
        })(skins = ui.skins || (ui.skins = {}));
    })(ui = game.ui || (game.ui = {}));
})(game || (game = {}));
