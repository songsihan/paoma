var game;
(function (game) {
    var ui;
    (function (ui) {
        var skins;
        (function (skins) {
            var ButtonASkin = (function (_super) {
                __extends(ButtonASkin, _super);
                function ButtonASkin() {
                    _super.call(this);
                    this.__s = egret.gui.setProperties;
                    this.__s(this, ["height", "width"], [120, 122]);
                    this.elementsContent = [this.__4_i()];
                    this.states = [
                        new egret.gui.State("up", []),
                        new egret.gui.State("down", []),
                        new egret.gui.State("disabled", [])
                    ];
                }
                var d = __define,c=ButtonASkin;p=c.prototype;
                p.__4_i = function () {
                    var t = new egret.gui.UIAsset();
                    this.__s(t, ["bottom", "left", "right", "source", "top"], [0, 0, 0, "resource/assets/skill/fulong/icon_skill_11.png", 0]);
                    return t;
                };
                return ButtonASkin;
            })(egret.gui.Skin);
            skins.ButtonASkin = ButtonASkin;
            egret.registerClass(ButtonASkin,"game.ui.skins.ButtonASkin");
        })(skins = ui.skins || (ui.skins = {}));
    })(ui = game.ui || (game.ui = {}));
})(game || (game = {}));
