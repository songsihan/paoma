var game;
(function (game) {
    var ui;
    (function (ui) {
        var skins;
        (function (skins) {
            var ButtonSkin = (function (_super) {
                __extends(ButtonSkin, _super);
                function ButtonSkin() {
                    _super.call(this);
                    this.__s = egret.gui.setProperties;
                    this.__s(this, ["height", "width"], [106, 277]);
                    this.elementsContent = [this.__5_i()];
                    this.__4_i();
                    this.states = [
                        new egret.gui.State("up", [
                            new egret.gui.SetProperty("", "height", 57),
                            new egret.gui.SetProperty("", "width", 157)
                        ]),
                        new egret.gui.State("down", [
                            new egret.gui.SetProperty("", "width", 157),
                            new egret.gui.SetProperty("", "height", 57)
                        ]),
                        new egret.gui.State("disabled", [
                            new egret.gui.AddItems("__4", "", "before", "__5"),
                            new egret.gui.SetProperty("", "height", 57),
                            new egret.gui.SetProperty("", "width", 157)
                        ])
                    ];
                }
                var d = __define,c=ButtonSkin;p=c.prototype;
                p.__4_i = function () {
                    var t = new egret.gui.UIAsset();
                    this.__4 = t;
                    this.__s(t, ["fillMode", "source", "width", "x"], ["scale", "resource/assets/UI/btn/btn_yellow_disable.png", 154, 2]);
                    return t;
                };
                p.__5_i = function () {
                    var t = new egret.gui.UIAsset();
                    this.__5 = t;
                    this.__s(t, ["source", "x", "y"], ["resource/assets/UI/btn/btn_select_role.png", 0, 0]);
                    return t;
                };
                return ButtonSkin;
            })(egret.gui.Skin);
            skins.ButtonSkin = ButtonSkin;
            egret.registerClass(ButtonSkin,"game.ui.skins.ButtonSkin");
        })(skins = ui.skins || (ui.skins = {}));
    })(ui = game.ui || (game.ui = {}));
})(game || (game = {}));
