var game;
(function (game) {
    var ui;
    (function (ui) {
        var skins;
        (function (skins) {
            var DownButtonSkin = (function (_super) {
                __extends(DownButtonSkin, _super);
                function DownButtonSkin() {
                    _super.call(this);
                    this.__s = egret.gui.setProperties;
                    this.__s(this, ["height", "width"], [52, 80]);
                    this.elementsContent = [this.__4_i()];
                    this.states = [
                        new egret.gui.State("up", []),
                        new egret.gui.State("down", []),
                        new egret.gui.State("disabled", [])
                    ];
                }
                var d = __define,c=DownButtonSkin;p=c.prototype;
                p.__4_i = function () {
                    var t = new egret.gui.UIAsset();
                    this.__s(t, ["fillMode", "height", "source", "width", "x", "y"], ["scale", 52, "resource/assets/UI/btn/btn_move_down.png", 80, 0, 0]);
                    return t;
                };
                return DownButtonSkin;
            })(egret.gui.Skin);
            skins.DownButtonSkin = DownButtonSkin;
            egret.registerClass(DownButtonSkin,"game.ui.skins.DownButtonSkin");
        })(skins = ui.skins || (ui.skins = {}));
    })(ui = game.ui || (game.ui = {}));
})(game || (game = {}));
