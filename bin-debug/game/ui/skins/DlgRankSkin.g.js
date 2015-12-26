var game;
(function (game) {
    var ui;
    (function (ui) {
        var skins;
        (function (skins) {
            var DlgRankSkin = (function (_super) {
                __extends(DlgRankSkin, _super);
                function DlgRankSkin() {
                    _super.call(this);
                    this.__s = egret.gui.setProperties;
                    this.__s(this, ["height", "width"], [640, 1136]);
                    this.elementsContent = [this.__24_i()];
                    this.states = [
                        new egret.gui.State("normal", []),
                        new egret.gui.State("disabled", [])
                    ];
                }
                var d = __define,c=DlgRankSkin;p=c.prototype;
                d(p, "skinParts"
                    ,function () {
                        return DlgRankSkin._skinParts;
                    }
                );
                p.__11_i = function () {
                    var t = new egret.gui.Label();
                    this.__s(t, ["text", "x", "y"], ["1-2", 15, -2]);
                    return t;
                };
                p.__12_i = function () {
                    var t = new egret.gui.Label();
                    this.__s(t, ["text", "x", "y"], ["1万", 16, 27]);
                    return t;
                };
                p.__13_i = function () {
                    var t = new egret.gui.Group();
                    this.__s(t, ["height", "width", "x", "y"], [60, 84, 0, 0]);
                    t.elementsContent = [this.__10_i(), this.__11_i(), this.__12_i()];
                    return t;
                };
                p.__14_i = function () {
                    var t = new egret.gui.UIAsset();
                    this.__s(t, ["source", "x", "y"], ["resource/assets/bg_new/bg_choose_orange.png", 0, 2]);
                    return t;
                };
                p.__15_i = function () {
                    var t = new egret.gui.Label();
                    this.__s(t, ["text", "x", "y"], ["1-2", 15, -2]);
                    return t;
                };
                p.__16_i = function () {
                    var t = new egret.gui.Label();
                    this.__s(t, ["text", "x", "y"], ["1万", 16, 27]);
                    return t;
                };
                p.__17_i = function () {
                    var t = new egret.gui.Group();
                    this.__s(t, ["height", "width", "x", "y"], [60, 84, 10, 10]);
                    t.elementsContent = [this.__14_i(), this.__15_i(), this.__16_i()];
                    return t;
                };
                p.__18_i = function () {
                    var t = new egret.gui.UIAsset();
                    this.__s(t, ["source", "x", "y"], ["resource/assets/bg_new/bg_choose_orange.png", 0, 2]);
                    return t;
                };
                p.__19_i = function () {
                    var t = new egret.gui.Label();
                    this.__s(t, ["text", "x", "y"], ["1-2", 15, -2]);
                    return t;
                };
                p.__20_i = function () {
                    var t = new egret.gui.Label();
                    this.__s(t, ["text", "x", "y"], ["1万", 16, 27]);
                    return t;
                };
                p.__21_i = function () {
                    var t = new egret.gui.Group();
                    this.__s(t, ["height", "width", "x", "y"], [60, 84, 20, 20]);
                    t.elementsContent = [this.__18_i(), this.__19_i(), this.__20_i()];
                    return t;
                };
                p.__22_i = function () {
                    var t = new egret.gui.HorizontalLayout();
                    t.gap = 16;
                    return t;
                };
                p.__23_i = function () {
                    var t = new egret.gui.Group();
                    this.__s(t, ["height", "width", "x", "y"], [60, 284, 550, 1]);
                    t.layout = this.__22_i();
                    t.elementsContent = [this.__13_i(), this.__17_i(), this.__21_i()];
                    return t;
                };
                p.__24_i = function () {
                    var t = new egret.gui.Group();
                    this.__s(t, ["height", "width", "x", "y"], [60, 1136, 0, 0]);
                    t.elementsContent = [this.__3_i(), this.__6_i(), this.__9_i(), this.__23_i()];
                    return t;
                };
                p.__3_i = function () {
                    var t = new egret.gui.UIAsset();
                    this.__s(t, ["height", "source", "width", "x", "y"], [60, "resource/assets/bg_new/bg_black_horse.png", 1136, 0, 0]);
                    return t;
                };
                p.__4_i = function () {
                    var t = new egret.gui.UIAsset();
                    this.__s(t, ["source", "x", "y"], ["resource/assets/bg_new/bg_number_1.png", 0, 0]);
                    return t;
                };
                p.__5_i = function () {
                    var t = new egret.gui.UIAsset();
                    this.__s(t, ["source", "x", "y"], ["resource/assets/icon_new/icon_horse_blue.png", -1, 1]);
                    return t;
                };
                p.__6_i = function () {
                    var t = new egret.gui.Group();
                    this.__s(t, ["height", "width", "x", "y"], [44, 94, 201, 6]);
                    t.elementsContent = [this.__4_i(), this.__5_i(), this.labelFirst_i()];
                    return t;
                };
                p.__7_i = function () {
                    var t = new egret.gui.UIAsset();
                    this.__s(t, ["source", "x", "y"], ["resource/assets/bg_new/bg_number_2.png", 0, 0]);
                    return t;
                };
                p.__8_i = function () {
                    var t = new egret.gui.UIAsset();
                    this.__s(t, ["source", "x", "y"], ["resource/assets/icon_new/icon_horse_orange.png", -1, 1]);
                    return t;
                };
                p.__9_i = function () {
                    var t = new egret.gui.Group();
                    this.__s(t, ["height", "width", "x", "y"], [44, 94, 344, 6]);
                    t.elementsContent = [this.__7_i(), this.__8_i(), this.labelSecond_i()];
                    return t;
                };
                p.labelFirst_i = function () {
                    var t = new egret.gui.Label();
                    this.labelFirst = t;
                    this.__s(t, ["text", "x", "y"], ["1", 57, 5]);
                    return t;
                };
                p.labelSecond_i = function () {
                    var t = new egret.gui.Label();
                    this.labelSecond = t;
                    this.__s(t, ["text", "x", "y"], ["2", 57, 5]);
                    return t;
                };
                p.__10_i = function () {
                    var t = new egret.gui.UIAsset();
                    this.__s(t, ["source", "x", "y"], ["resource/assets/bg_new/bg_choose_orange.png", 0, 2]);
                    return t;
                };
                DlgRankSkin._skinParts = ["labelFirst", "labelSecond"];
                return DlgRankSkin;
            })(egret.gui.Skin);
            skins.DlgRankSkin = DlgRankSkin;
            egret.registerClass(DlgRankSkin,"game.ui.skins.DlgRankSkin");
        })(skins = ui.skins || (ui.skins = {}));
    })(ui = game.ui || (game.ui = {}));
})(game || (game = {}));
