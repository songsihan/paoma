var game;
(function (game) {
    var ui;
    (function (ui) {
        var skins;
        (function (skins) {
            var RightButtonSkin = (function (_super) {
                __extends(RightButtonSkin, _super);
                function RightButtonSkin() {
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
                var d = __define,c=RightButtonSkin;p=c.prototype;
                p.__4_i = function () {
                    var t = new egret.gui.UIAsset();
                    this.__s(t, ["height", "source", "width", "x", "y"], [80, "resource/assets/UI/btn/btn_move_right.png", 52, 0, 0]);
                    return t;
                };
                return RightButtonSkin;
            })(egret.gui.Skin);
            skins.RightButtonSkin = RightButtonSkin;
            egret.registerClass(RightButtonSkin,"game.ui.skins.RightButtonSkin");
        })(skins = ui.skins || (ui.skins = {}));
    })(ui = game.ui || (game.ui = {}));
})(game || (game = {}));
