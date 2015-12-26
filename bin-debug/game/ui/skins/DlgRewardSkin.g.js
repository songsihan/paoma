var game;
(function (game) {
    var ui;
    (function (ui) {
        var skins;
        (function (skins) {
            var DlgRewardSkin = (function (_super) {
                __extends(DlgRewardSkin, _super);
                function DlgRewardSkin() {
                    _super.call(this);
                    this.__s = egret.gui.setProperties;
                    this.__s(this, ["height", "width"], [640, 1136]);
                    this.elementsContent = [this.__23_i()];
                    this.states = [
                        new egret.gui.State("normal", []),
                        new egret.gui.State("disabled", [])
                    ];
                }
                var d = __define,c=DlgRewardSkin;p=c.prototype;
                p.__10_i = function () {
                    var t = new egret.gui.UIAsset();
                    this.__s(t, ["source", "x", "y"], ["resource/assets/bg_new/bg_number_2.png", 0, 0]);
                    return t;
                };
                p.__11_i = function () {
                    var t = new egret.gui.UIAsset();
                    this.__s(t, ["source", "x", "y"], ["resource/assets/icon_new/icon_horse_orange.png", -1, 1]);
                    return t;
                };
                p.__12_i = function () {
                    var t = new egret.gui.Label();
                    this.__s(t, ["text", "x", "y"], ["2", 57, 5]);
                    return t;
                };
                p.__13_i = function () {
                    var t = new egret.gui.Group();
                    this.__s(t, ["height", "width", "x", "y"], [44, 94, 334, 114]);
                    t.elementsContent = [this.__10_i(), this.__11_i(), this.__12_i()];
                    return t;
                };
                p.__14_i = function () {
                    var t = new egret.gui.Label();
                    this.__s(t, ["text", "x", "y"], ["X20", 280, 179]);
                    return t;
                };
                p.__15_i = function () {
                    var t = new egret.gui.Group();
                    this.__s(t, ["height", "width", "x", "y"], [200, 200, 199, 230]);
                    return t;
                };
                p.__16_i = function () {
                    var t = new egret.gui.Label();
                    this.__s(t, ["text", "x", "y"], ["您押注：", 59, 0]);
                    return t;
                };
                p.__17_i = function () {
                    var t = new egret.gui.Label();
                    this.__s(t, ["text", "x", "y"], ["400", 200, 0]);
                    return t;
                };
                p.__18_i = function () {
                    var t = new egret.gui.Label();
                    this.__s(t, ["text", "x", "y"], ["押中：", 378, 0]);
                    return t;
                };
                p.__19_i = function () {
                    var t = new egret.gui.Label();
                    this.__s(t, ["text", "x", "y"], ["1", 483, 0]);
                    return t;
                };
                p.__20_i = function () {
                    var t = new egret.gui.Label();
                    this.__s(t, ["text", "x", "y"], ["赢得：", 68, 60]);
                    return t;
                };
                p.__21_i = function () {
                    var t = new egret.gui.Label();
                    this.__s(t, ["text", "x", "y"], ["8000", 175, 60]);
                    return t;
                };
                p.__22_i = function () {
                    var t = new egret.gui.Group();
                    this.__s(t, ["height", "width", "x", "y"], [100, 610, 0, 221]);
                    t.elementsContent = [this.__16_i(), this.__17_i(), this.__18_i(), this.__19_i(), this.__20_i(), this.__21_i()];
                    return t;
                };
                p.__23_i = function () {
                    var t = new egret.gui.Group();
                    this.__s(t, ["height", "horizontalCenter", "verticalCenter", "width"], [348, 0, 0, 610]);
                    t.elementsContent = [this.__3_i(), this.__4_i(), this.__5_i(), this.__9_i(), this.__13_i(), this.__14_i(), this.__15_i(), this.__22_i()];
                    return t;
                };
                p.__3_i = function () {
                    var t = new egret.gui.UIAsset();
                    this.__s(t, ["source", "x", "y"], ["resource/assets/bg_new/bg_black.png", 0, 0]);
                    return t;
                };
                p.__4_i = function () {
                    var t = new egret.gui.Button();
                    this.__s(t, ["height", "skinName", "width", "x", "y"], [44, new egret.gui.ButtonSkin("resource/assets/btn_new/btn_close_normal.png", "resource/assets/btn_new/btn_close_clicked.png"), 44, 567, 1]);
                    return t;
                };
                p.__5_i = function () {
                    var t = new egret.gui.Label();
                    this.__s(t, ["text", "x", "y"], ["恭喜你！中奖了！", 183, 40]);
                    return t;
                };
                p.__6_i = function () {
                    var t = new egret.gui.UIAsset();
                    this.__s(t, ["source", "x", "y"], ["resource/assets/bg_new/bg_number_1.png", 0, 0]);
                    return t;
                };
                p.__7_i = function () {
                    var t = new egret.gui.UIAsset();
                    this.__s(t, ["source", "x", "y"], ["resource/assets/icon_new/icon_horse_blue.png", -1, 1]);
                    return t;
                };
                p.__8_i = function () {
                    var t = new egret.gui.Label();
                    this.__s(t, ["text", "x", "y"], ["1", 57, 5]);
                    return t;
                };
                p.__9_i = function () {
                    var t = new egret.gui.Group();
                    this.__s(t, ["height", "width", "x", "y"], [44, 94, 191, 114]);
                    t.elementsContent = [this.__6_i(), this.__7_i(), this.__8_i()];
                    return t;
                };
                return DlgRewardSkin;
            })(egret.gui.Skin);
            skins.DlgRewardSkin = DlgRewardSkin;
            egret.registerClass(DlgRewardSkin,"game.ui.skins.DlgRewardSkin");
        })(skins = ui.skins || (ui.skins = {}));
    })(ui = game.ui || (game.ui = {}));
})(game || (game = {}));
