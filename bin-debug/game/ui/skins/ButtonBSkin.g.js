var game;
(function (game) {
    var ui;
    (function (ui) {
        var skins;
        (function (skins) {
            var ButtonBSkin = (function (_super) {
                __extends(ButtonBSkin, _super);
                function ButtonBSkin() {
                    _super.call(this);
                    this.__s = egret.gui.setProperties;
                    this.__s(this, ["height", "width"], [126, 132]);
                    this.elementsContent = [this.__4_i()];
                    this.states = [
                        new egret.gui.State("up", []),
                        new egret.gui.State("down", []),
                        new egret.gui.State("disabled", [])
                    ];
                }
                var d = __define,c=ButtonBSkin;p=c.prototype;
                p.__4_i = function () {
                    var t = new egret.gui.UIAsset();
                    this.__s(t, ["bottom", "left", "right", "source", "top"], [2, 0, 0, "resource/assets/skill/fulong/icon_skill_12.png", -2]);
                    return t;
                };
                return ButtonBSkin;
            })(egret.gui.Skin);
            skins.ButtonBSkin = ButtonBSkin;
            egret.registerClass(ButtonBSkin,"game.ui.skins.ButtonBSkin");
        })(skins = ui.skins || (ui.skins = {}));
    })(ui = game.ui || (game.ui = {}));
})(game || (game = {}));
