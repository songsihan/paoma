var game;
(function (game) {
    var ui;
    (function (ui) {
        var skins;
        (function (skins) {
            var UpButtonSkin = (function (_super) {
                __extends(UpButtonSkin, _super);
                function UpButtonSkin() {
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
                var d = __define,c=UpButtonSkin;p=c.prototype;
                p.__4_i = function () {
                    var t = new egret.gui.UIAsset();
                    this.__s(t, ["autoScale", "height", "source", "width", "x", "y"], [true, 52, "resource/assets/UI/btn/btn_move_up.png", 80, 0, 0]);
                    return t;
                };
                return UpButtonSkin;
            })(egret.gui.Skin);
            skins.UpButtonSkin = UpButtonSkin;
            egret.registerClass(UpButtonSkin,"game.ui.skins.UpButtonSkin");
        })(skins = ui.skins || (ui.skins = {}));
    })(ui = game.ui || (game.ui = {}));
})(game || (game = {}));
