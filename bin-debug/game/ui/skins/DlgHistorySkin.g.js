var game;
(function (game) {
    var ui;
    (function (ui) {
        var skins;
        (function (skins) {
            var DlgHistorySkin = (function (_super) {
                __extends(DlgHistorySkin, _super);
                function DlgHistorySkin() {
                    _super.call(this);
                    this.__s = egret.gui.setProperties;
                    this.__s(this, ["height", "width"], [640, 1136]);
                    this.elementsContent = [this.__34_i()];
                    this.states = [
                        new egret.gui.State("normal", []),
                        new egret.gui.State("disabled", [])
                    ];
                }
                var d = __define,c=DlgHistorySkin;p=c.prototype;
                d(p, "skinParts"
                    ,function () {
                        return DlgHistorySkin._skinParts;
                    }
                );
                p.__11_i = function () {
                    var t = new egret.gui.Label();
                    this.__s(t, ["text", "x", "y"], ["2-4", 56, 8]);
                    return t;
                };
                p.__12_i = function () {
                    var t = new egret.gui.UIAsset();
                    this.__s(t, ["source", "x", "y"], ["resource/assets/icon_new/icon_horse_black.png", 113, 0]);
                    return t;
                };
                p.__13_i = function () {
                    var t = new egret.gui.UIAsset();
                    this.__s(t, ["source", "x", "y"], ["resource/assets/icon_new/icon_horse_blue.png", 163, 0]);
                    return t;
                };
                p.__14_i = function () {
                    var t = new egret.gui.Label();
                    this.__s(t, ["text", "x", "y"], ["x40", 333, 8]);
                    return t;
                };
                p.__15_i = function () {
                    var t = new egret.gui.Group();
                    this.__s(t, ["height", "width", "x", "y"], [44, 500, 43, 79]);
                    t.elementsContent = [this.__11_i(), this.__12_i(), this.__13_i(), this.__14_i()];
                    return t;
                };
                p.__16_i = function () {
                    var t = new egret.gui.Label();
                    this.__s(t, ["text", "x", "y"], ["2-4", 56, 8]);
                    return t;
                };
                p.__17_i = function () {
                    var t = new egret.gui.UIAsset();
                    this.__s(t, ["source", "x", "y"], ["resource/assets/icon_new/icon_horse_black.png", 113, 0]);
                    return t;
                };
                p.__18_i = function () {
                    var t = new egret.gui.UIAsset();
                    this.__s(t, ["source", "x", "y"], ["resource/assets/icon_new/icon_horse_blue.png", 163, 0]);
                    return t;
                };
                p.__19_i = function () {
                    var t = new egret.gui.Label();
                    this.__s(t, ["text", "x", "y"], ["x40", 333, 8]);
                    return t;
                };
                p.__20_i = function () {
                    var t = new egret.gui.Group();
                    this.__s(t, ["height", "width", "x", "y"], [44, 500, 53, 89]);
                    t.elementsContent = [this.__16_i(), this.__17_i(), this.__18_i(), this.__19_i()];
                    return t;
                };
                p.__21_i = function () {
                    var t = new egret.gui.Label();
                    this.__s(t, ["text", "x", "y"], ["2-4", 56, 8]);
                    return t;
                };
                p.__22_i = function () {
                    var t = new egret.gui.UIAsset();
                    this.__s(t, ["source", "x", "y"], ["resource/assets/icon_new/icon_horse_black.png", 113, 0]);
                    return t;
                };
                p.__23_i = function () {
                    var t = new egret.gui.UIAsset();
                    this.__s(t, ["source", "x", "y"], ["resource/assets/icon_new/icon_horse_blue.png", 163, 0]);
                    return t;
                };
                p.__24_i = function () {
                    var t = new egret.gui.Label();
                    this.__s(t, ["text", "x", "y"], ["x40", 333, 8]);
                    return t;
                };
                p.__25_i = function () {
                    var t = new egret.gui.Group();
                    this.__s(t, ["height", "width", "x", "y"], [44, 500, 63, 99]);
                    t.elementsContent = [this.__21_i(), this.__22_i(), this.__23_i(), this.__24_i()];
                    return t;
                };
                p.__26_i = function () {
                    var t = new egret.gui.Label();
                    this.__s(t, ["text", "x", "y"], ["2-4", 56, 8]);
                    return t;
                };
                p.__27_i = function () {
                    var t = new egret.gui.UIAsset();
                    this.__s(t, ["source", "x", "y"], ["resource/assets/icon_new/icon_horse_black.png", 113, 0]);
                    return t;
                };
                p.__28_i = function () {
                    var t = new egret.gui.UIAsset();
                    this.__s(t, ["source", "x", "y"], ["resource/assets/icon_new/icon_horse_blue.png", 163, 0]);
                    return t;
                };
                p.__29_i = function () {
                    var t = new egret.gui.Label();
                    this.__s(t, ["text", "x", "y"], ["x40", 333, 8]);
                    return t;
                };
                p.__30_i = function () {
                    var t = new egret.gui.Group();
                    this.__s(t, ["height", "width", "x", "y"], [44, 500, 73, 109]);
                    t.elementsContent = [this.__26_i(), this.__27_i(), this.__28_i(), this.__29_i()];
                    return t;
                };
                p.__31_i = function () {
                    var t = new egret.gui.VerticalLayout();
                    return t;
                };
                p.__32_i = function () {
                    var t = new egret.gui.Group();
                    this.__s(t, ["height", "width", "x", "y"], [244, 500, 33, 89]);
                    t.layout = this.__31_i();
                    t.elementsContent = [this.__10_i(), this.__15_i(), this.__20_i(), this.__25_i(), this.__30_i()];
                    return t;
                };
                p.__33_i = function () {
                    var t = new egret.gui.Label();
                    this.__s(t, ["text", "x", "y"], ["历史记录", 247, 3]);
                    return t;
                };
                p.__34_i = function () {
                    var t = new egret.gui.Group();
                    this.__s(t, ["height", "horizontalCenter", "verticalCenter", "width"], [361, 0, 0, 610]);
                    t.elementsContent = [this.__3_i(), this.__4_i(), this.__5_i(), this.__32_i(), this.__33_i(), this.closeBtn_i()];
                    return t;
                };
                p.__3_i = function () {
                    var t = new egret.gui.UIAsset();
                    this.__s(t, ["height", "source", "width", "x", "y"], [361, "resource/assets/bg_new/bg_black_history.png", 610, 0, 0]);
                    return t;
                };
                p.__4_i = function () {
                    var t = new egret.gui.Label();
                    this.__s(t, ["size", "text", "x", "y"], [25, "历史组合", 118, 51]);
                    return t;
                };
                p.__5_i = function () {
                    var t = new egret.gui.Label();
                    this.__s(t, ["size", "text", "x", "y"], [25, "历史赔率", 341, 49]);
                    return t;
                };
                p.__6_i = function () {
                    var t = new egret.gui.Label();
                    this.__s(t, ["text", "x", "y"], ["2-4", 56, 8]);
                    return t;
                };
                p.__7_i = function () {
                    var t = new egret.gui.UIAsset();
                    this.__s(t, ["source", "x", "y"], ["resource/assets/icon_new/icon_horse_black.png", 113, 0]);
                    return t;
                };
                p.__8_i = function () {
                    var t = new egret.gui.UIAsset();
                    this.__s(t, ["source", "x", "y"], ["resource/assets/icon_new/icon_horse_blue.png", 163, 0]);
                    return t;
                };
                p.__9_i = function () {
                    var t = new egret.gui.Label();
                    this.__s(t, ["text", "x", "y"], ["x40", 333, 8]);
                    return t;
                };
                p.closeBtn_i = function () {
                    var t = new egret.gui.Button();
                    this.closeBtn = t;
                    this.__s(t, ["height", "skinName", "width", "x", "y"], [44, new egret.gui.ButtonSkin("resource/assets/btn_new/btn_close_normal.png", "resource/assets/btn_new/btn_close_clicked.png"), 44, 565, 13]);
                    return t;
                };
                p.__10_i = function () {
                    var t = new egret.gui.Group();
                    this.__s(t, ["height", "width", "x", "y"], [44, 500, 33, 69]);
                    t.elementsContent = [this.__6_i(), this.__7_i(), this.__8_i(), this.__9_i()];
                    return t;
                };
                DlgHistorySkin._skinParts = ["closeBtn"];
                return DlgHistorySkin;
            })(egret.gui.Skin);
            skins.DlgHistorySkin = DlgHistorySkin;
            egret.registerClass(DlgHistorySkin,"game.ui.skins.DlgHistorySkin");
        })(skins = ui.skins || (ui.skins = {}));
    })(ui = game.ui || (game.ui = {}));
})(game || (game = {}));
