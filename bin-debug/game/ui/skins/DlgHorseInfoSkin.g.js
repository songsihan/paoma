var game;
(function (game) {
    var ui;
    (function (ui) {
        var skins;
        (function (skins) {
            var DlgHorseInfoSkin = (function (_super) {
                __extends(DlgHorseInfoSkin, _super);
                function DlgHorseInfoSkin() {
                    _super.call(this);
                    this.__s = egret.gui.setProperties;
                    this.__s(this, ["height", "width"], [640, 1136]);
                    this.elementsContent = [this.__20_i()];
                    this.states = [
                        new egret.gui.State("normal", []),
                        new egret.gui.State("disabled", [])
                    ];
                }
                var d = __define,c=DlgHorseInfoSkin;p=c.prototype;
                d(p, "skinParts"
                    ,function () {
                        return DlgHorseInfoSkin._skinParts;
                    }
                );
                p.__11_i = function () {
                    var t = new egret.gui.Group();
                    this.__s(t, ["height", "width", "x", "y"], [30, 200, 193, 86]);
                    t.elementsContent = [this.__9_i(), this.__10_i()];
                    return t;
                };
                p.__12_i = function () {
                    var t = new egret.gui.Label();
                    this.__s(t, ["size", "text", "x", "y"], [23, "力量", 15, 0]);
                    return t;
                };
                p.__13_i = function () {
                    var t = new egret.gui.Rect();
                    this.__s(t, ["fillAlpha", "fillColor", "height", "strokeAlpha", "strokeColor", "width", "x", "y"], [1, 0x28A621, 20, 0, 0xE02727, 120, 73, 4]);
                    return t;
                };
                p.__14_i = function () {
                    var t = new egret.gui.Group();
                    this.__s(t, ["height", "width", "x", "y"], [30, 200, 183, 76]);
                    t.elementsContent = [this.__12_i(), this.__13_i()];
                    return t;
                };
                p.__15_i = function () {
                    var t = new egret.gui.Label();
                    this.__s(t, ["size", "text", "x", "y"], [23, "力量", 15, 0]);
                    return t;
                };
                p.__16_i = function () {
                    var t = new egret.gui.Rect();
                    this.__s(t, ["fillAlpha", "fillColor", "height", "strokeAlpha", "strokeColor", "width", "x", "y"], [1, 0xD9B01E, 20, 0, 0xE02727, 100, 73, 4]);
                    return t;
                };
                p.__17_i = function () {
                    var t = new egret.gui.Group();
                    this.__s(t, ["height", "width", "x", "y"], [30, 200, 173, 66]);
                    t.elementsContent = [this.__15_i(), this.__16_i()];
                    return t;
                };
                p.__18_i = function () {
                    var t = new egret.gui.VerticalLayout();
                    t.gap = 10;
                    return t;
                };
                p.__19_i = function () {
                    var t = new egret.gui.Group();
                    this.__s(t, ["height", "horizontalCenter", "verticalCenter", "width"], [154, 58, 3.5, 200]);
                    t.layout = this.__18_i();
                    t.elementsContent = [this.__8_i(), this.__11_i(), this.__14_i(), this.__17_i()];
                    return t;
                };
                p.__20_i = function () {
                    var t = new egret.gui.Group();
                    this.__s(t, ["height", "width", "x", "y"], [279, 472, 100, 340]);
                    t.elementsContent = [this.__3_i(), this.__4_i(), this.__5_i(), this.__19_i(), this.closeBtn_i()];
                    return t;
                };
                p.__3_i = function () {
                    var t = new egret.gui.UIAsset();
                    this.__s(t, ["bottom", "fillMode", "horizontalCenter", "left", "right", "source", "top", "verticalCenter"], [2, "scale", 0, 0, 0, "resource/assets/bg_paoma/bg_black_bet.png", -2, -2]);
                    return t;
                };
                p.__4_i = function () {
                    var t = new egret.gui.UIAsset();
                    this.__s(t, ["source", "x", "y"], ["resource/assets/img_paoma/horse_white.png", 36, 64]);
                    return t;
                };
                p.__5_i = function () {
                    var t = new egret.gui.UIAsset();
                    this.__s(t, ["source", "x", "y"], ["resource/assets/img_paoma/label_endurance.png", 120, 179]);
                    return t;
                };
                p.__6_i = function () {
                    var t = new egret.gui.Label();
                    this.__s(t, ["size", "text", "x", "y"], [23, "力量", 15, 0]);
                    return t;
                };
                p.__7_i = function () {
                    var t = new egret.gui.Rect();
                    this.__s(t, ["fillAlpha", "fillColor", "height", "strokeAlpha", "strokeColor", "width", "x", "y"], [1, 0xF30D28, 20, 0, 0xE02727, 150, 73, 4]);
                    return t;
                };
                p.__8_i = function () {
                    var t = new egret.gui.Group();
                    this.__s(t, ["height", "width", "x", "y"], [30, 200, 203, 96]);
                    t.elementsContent = [this.__6_i(), this.__7_i()];
                    return t;
                };
                p.__9_i = function () {
                    var t = new egret.gui.Label();
                    this.__s(t, ["size", "text", "x", "y"], [23, "耐力", 15, 0]);
                    return t;
                };
                p.closeBtn_i = function () {
                    var t = new egret.gui.Button();
                    this.closeBtn = t;
                    this.__s(t, ["height", "skinName", "width", "x", "y"], [44, new egret.gui.ButtonSkin("resource/assets/btn_paoma/btn_close_normal.png", "resource/assets/btn_paoma/btn_close_clicked.png"), 44, 421, 0]);
                    return t;
                };
                p.__10_i = function () {
                    var t = new egret.gui.Rect();
                    this.__s(t, ["fillAlpha", "fillColor", "height", "strokeAlpha", "strokeColor", "width", "x", "y"], [1, 0x2298ED, 20, 0, 0xE02727, 100, 73, 4]);
                    return t;
                };
                DlgHorseInfoSkin._skinParts = ["closeBtn"];
                return DlgHorseInfoSkin;
            })(egret.gui.Skin);
            skins.DlgHorseInfoSkin = DlgHorseInfoSkin;
            egret.registerClass(DlgHorseInfoSkin,"game.ui.skins.DlgHorseInfoSkin");
        })(skins = ui.skins || (ui.skins = {}));
    })(ui = game.ui || (game.ui = {}));
})(game || (game = {}));
