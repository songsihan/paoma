var game;
(function (game) {
    var ui;
    (function (ui) {
        var skins;
        (function (skins) {
            var DlgPlayRuleSkin = (function (_super) {
                __extends(DlgPlayRuleSkin, _super);
                function DlgPlayRuleSkin() {
                    _super.call(this);
                    this.__s = egret.gui.setProperties;
                    this.__s(this, ["height", "width"], [640, 1136]);
                    this.elementsContent = [this.__11_i()];
                    this.states = [
                        new egret.gui.State("normal", []),
                        new egret.gui.State("disabled", [])
                    ];
                }
                var d = __define,c=DlgPlayRuleSkin;p=c.prototype;
                d(p, "skinParts"
                    ,function () {
                        return DlgPlayRuleSkin._skinParts;
                    }
                );
                p.__11_i = function () {
                    var t = new egret.gui.Group();
                    this.__s(t, ["height", "width", "x", "y"], [348, 610, 241, 178]);
                    t.elementsContent = [this.__3_i(), this.closeBtn_i(), this.__4_i(), this.__5_i(), this.__6_i(), this.__7_i(), this.__8_i(), this.__9_i(), this.__10_i()];
                    return t;
                };
                p.__3_i = function () {
                    var t = new egret.gui.UIAsset();
                    this.__s(t, ["source", "x", "y"], ["resource/assets/bg_new/bg_black.png", 0, 0]);
                    return t;
                };
                p.__4_i = function () {
                    var t = new egret.gui.Label();
                    this.__s(t, ["text", "x", "y"], ["玩法", 258, 19]);
                    return t;
                };
                p.__5_i = function () {
                    var t = new egret.gui.UIAsset();
                    this.__s(t, ["source", "x", "y"], ["resource/assets/img_new/introduce_1.png", 65, 95]);
                    return t;
                };
                p.__6_i = function () {
                    var t = new egret.gui.UIAsset();
                    this.__s(t, ["source", "x", "y"], ["resource/assets/img_new/introduce_3.png", 428, 95]);
                    return t;
                };
                p.__7_i = function () {
                    var t = new egret.gui.UIAsset();
                    this.__s(t, ["source", "x", "y"], ["resource/assets/img_new/introduce_2.png", 248, 95]);
                    return t;
                };
                p.__8_i = function () {
                    var t = new egret.gui.Label();
                    this.__s(t, ["size", "text", "x", "y"], [19, "1.选择押注额度", 56, 260]);
                    return t;
                };
                p.__9_i = function () {
                    var t = new egret.gui.Label();
                    this.__s(t, ["size", "text", "x", "y"], [19, "2.下注喜欢的组合", 234, 260]);
                    return t;
                };
                p.closeBtn_i = function () {
                    var t = new egret.gui.Button();
                    this.closeBtn = t;
                    this.__s(t, ["height", "skinName", "width", "x", "y"], [44, new egret.gui.ButtonSkin("resource/assets/btn_new/btn_close_normal.png", "resource/assets/btn_new/btn_close_normal.png"), 44, 566, 0]);
                    return t;
                };
                p.__10_i = function () {
                    var t = new egret.gui.Label();
                    this.__s(t, ["size", "text", "x", "y"], [19, "3.观看比赛获得结果", 414, 260]);
                    return t;
                };
                DlgPlayRuleSkin._skinParts = ["closeBtn"];
                return DlgPlayRuleSkin;
            })(egret.gui.Skin);
            skins.DlgPlayRuleSkin = DlgPlayRuleSkin;
            egret.registerClass(DlgPlayRuleSkin,"game.ui.skins.DlgPlayRuleSkin");
        })(skins = ui.skins || (ui.skins = {}));
    })(ui = game.ui || (game.ui = {}));
})(game || (game = {}));
