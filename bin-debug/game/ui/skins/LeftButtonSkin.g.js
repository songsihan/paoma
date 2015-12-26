var game;
(function (game) {
    var ui;
    (function (ui) {
        var skins;
        (function (skins) {
            var LeftButtonSkin = (function (_super) {
                __extends(LeftButtonSkin, _super);
                function LeftButtonSkin() {
                    _super.call(this);
                    this.__s = egret.gui.setProperties;
                    this.__s(this, ["height", "width"], [80, 52]);
                    this.elementsContent = [this.__4_i()];
                    this.states = [
                        new egret.gui.State("up", []),
                        new egret.gui.State("down", []),
                        new egret.gui.State("disabled", [])
                    ];
                }
                var d = __define,c=LeftButtonSkin;p=c.prototype;
                p.__4_i = function () {
                    var t = new egret.gui.UIAsset();
                    this.__s(t, ["height", "source", "width", "x", "y"], [80, "resource/assets/UI/btn/btn_move_left.png", 52, 0, 0]);
                    return t;
                };
                return LeftButtonSkin;
            })(egret.gui.Skin);
            skins.LeftButtonSkin = LeftButtonSkin;
            egret.registerClass(LeftButtonSkin,"game.ui.skins.LeftButtonSkin");
        })(skins = ui.skins || (ui.skins = {}));
    })(ui = game.ui || (game.ui = {}));
})(game || (game = {}));
