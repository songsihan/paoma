var game;
(function (game) {
    var ui;
    (function (ui) {
        var skins;
        (function (skins) {
            var DlgSelectHorseSkin = (function (_super) {
                __extends(DlgSelectHorseSkin, _super);
                function DlgSelectHorseSkin() {
                    _super.call(this);
                    this.__s = egret.gui.setProperties;
                    this.__s(this, ["height", "width"], [640, 1136]);
                    this.elementsContent = [this.__9_i(), this.__36_i()];
                    this.states = [
                        new egret.gui.State("normal", []),
                        new egret.gui.State("disabled", [])
                    ];
                }
                var d = __define,c=DlgSelectHorseSkin;p=c.prototype;
                d(p, "skinParts"
                    ,function () {
                        return DlgSelectHorseSkin._skinParts;
                    }
                );
                p.__11_i = function () {
                    var t = new egret.gui.Label();
                    this.__s(t, ["text", "x", "y"], ["汗血马", 52, 33]);
                    return t;
                };
                p.__12_i = function () {
                    var t = new egret.gui.UIAsset();
                    this.__s(t, ["source", "x", "y"], ["resource/assets/img_paoma/horse_white.png", 43, 70]);
                    return t;
                };
                p.__13_i = function () {
                    var t = new egret.gui.UIAsset();
                    this.__s(t, ["source", "x", "y"], ["resource/assets/img_paoma/label_speed.png", 127, 185]);
                    return t;
                };
                p.__14_i = function () {
                    var t = new egret.gui.Group();
                    t.setStyle("size", 30);
                    this.__s(t, ["height", "width", "x", "y"], [308, 208, 369, 166]);
                    t.elementsContent = [this.__10_i(), this.__11_i(), this.push1_i(), this.__12_i(), this.__13_i()];
                    return t;
                };
                p.__15_i = function () {
                    var t = new egret.gui.UIAsset();
                    this.__s(t, ["source", "x", "y"], ["resource/assets/bg_paoma/bg_black_horse_selection.png", 0, 0]);
                    return t;
                };
                p.__16_i = function () {
                    var t = new egret.gui.Label();
                    this.__s(t, ["text", "x", "y"], ["汗血马", 52, 33]);
                    return t;
                };
                p.__17_i = function () {
                    var t = new egret.gui.UIAsset();
                    this.__s(t, ["source", "x", "y"], ["resource/assets/img_paoma/horse_white.png", 43, 70]);
                    return t;
                };
                p.__18_i = function () {
                    var t = new egret.gui.UIAsset();
                    this.__s(t, ["source", "x", "y"], ["resource/assets/img_paoma/label_explosive.png", 127, 185]);
                    return t;
                };
                p.__19_i = function () {
                    var t = new egret.gui.Group();
                    t.setStyle("size", 30);
                    this.__s(t, ["height", "width", "x", "y"], [308, 208, 379, 176]);
                    t.elementsContent = [this.__15_i(), this.__16_i(), this.push2_i(), this.__17_i(), this.__18_i()];
                    return t;
                };
                p.__20_i = function () {
                    var t = new egret.gui.UIAsset();
                    this.__s(t, ["source", "x", "y"], ["resource/assets/bg_paoma/bg_black_horse_selection.png", 0, 0]);
                    return t;
                };
                p.__21_i = function () {
                    var t = new egret.gui.Label();
                    this.__s(t, ["text", "x", "y"], ["汗血马", 52, 33]);
                    return t;
                };
                p.__22_i = function () {
                    var t = new egret.gui.UIAsset();
                    this.__s(t, ["source", "x", "y"], ["resource/assets/img_paoma/horse_white.png", 43, 70]);
                    return t;
                };
                p.__23_i = function () {
                    var t = new egret.gui.UIAsset();
                    this.__s(t, ["source", "x", "y"], ["resource/assets/img_paoma/label_power.png", 127, 185]);
                    return t;
                };
                p.__24_i = function () {
                    var t = new egret.gui.Group();
                    t.setStyle("size", 30);
                    this.__s(t, ["height", "width", "x", "y"], [308, 208, 389, 186]);
                    t.elementsContent = [this.__20_i(), this.__21_i(), this.push3_i(), this.__22_i(), this.__23_i()];
                    return t;
                };
                p.__25_i = function () {
                    var t = new egret.gui.UIAsset();
                    this.__s(t, ["source", "x", "y"], ["resource/assets/bg_paoma/bg_black_horse_selection.png", 0, 0]);
                    return t;
                };
                p.__26_i = function () {
                    var t = new egret.gui.Label();
                    this.__s(t, ["text", "x", "y"], ["汗血马", 52, 33]);
                    return t;
                };
                p.__27_i = function () {
                    var t = new egret.gui.UIAsset();
                    this.__s(t, ["source", "x", "y"], ["resource/assets/img_paoma/horse_white.png", 43, 70]);
                    return t;
                };
                p.__28_i = function () {
                    var t = new egret.gui.UIAsset();
                    this.__s(t, ["source", "x", "y"], ["resource/assets/img_paoma/label_endurance.png", 127, 185]);
                    return t;
                };
                p.__29_i = function () {
                    var t = new egret.gui.Group();
                    t.setStyle("size", 30);
                    this.__s(t, ["height", "width", "x", "y"], [308, 208, 399, 196]);
                    t.elementsContent = [this.__25_i(), this.__26_i(), this.push4_i(), this.__27_i(), this.__28_i()];
                    return t;
                };
                p.__30_i = function () {
                    var t = new egret.gui.UIAsset();
                    this.__s(t, ["source", "x", "y"], ["resource/assets/bg_paoma/bg_black_horse_selection.png", 0, 0]);
                    return t;
                };
                p.__31_i = function () {
                    var t = new egret.gui.Label();
                    this.__s(t, ["text", "x", "y"], ["汗血马", 52, 33]);
                    return t;
                };
                p.__32_i = function () {
                    var t = new egret.gui.UIAsset();
                    this.__s(t, ["source", "x", "y"], ["resource/assets/img_paoma/horse_white.png", 43, 70]);
                    return t;
                };
                p.__33_i = function () {
                    var t = new egret.gui.UIAsset();
                    this.__s(t, ["source", "x", "y"], ["resource/assets/img_paoma/label_endurance.png", 127, 185]);
                    return t;
                };
                p.__34_i = function () {
                    var t = new egret.gui.Group();
                    t.setStyle("size", 30);
                    this.__s(t, ["height", "width", "x", "y"], [308, 208, 409, 206]);
                    t.elementsContent = [this.__30_i(), this.__31_i(), this.push5_i(), this.__32_i(), this.__33_i()];
                    return t;
                };
                p.__35_i = function () {
                    var t = new egret.gui.HorizontalLayout();
                    this.__s(t, ["gap", "paddingLeft"], [15, 20]);
                    return t;
                };
                p.__36_i = function () {
                    var t = new egret.gui.Group();
                    this.__s(t, ["height", "width", "x", "y"], [313, 1136, 0, 100]);
                    t.layout = this.__35_i();
                    t.elementsContent = [this.__14_i(), this.__19_i(), this.__24_i(), this.__29_i(), this.__34_i()];
                    return t;
                };
                p.__3_i = function () {
                    var t = new egret.gui.Button();
                    this.__s(t, ["skinName", "x", "y"], [new egret.gui.ButtonSkin("resource/assets/btn_paoma/btn_game_rule_normal.png", "resource/assets/btn_paoma/btn_game_rule_clicked.png"), 338, 12]);
                    return t;
                };
                p.__4_i = function () {
                    var t = new egret.gui.UIAsset();
                    this.__s(t, ["source", "x", "y"], ["resource/assets/bg_paoma/bg_black_countdown.png", 0, 1]);
                    return t;
                };
                p.__5_i = function () {
                    var t = new egret.gui.Label();
                    this.__s(t, ["size", "text", "x", "y"], [21, "倒计时", 2, 14]);
                    return t;
                };
                p.__6_i = function () {
                    var t = new egret.gui.Group();
                    this.__s(t, ["height", "width", "x", "y"], [52, 171, 140, 127]);
                    t.elementsContent = [this.__4_i(), this.__5_i(), this.countDownLabel_i()];
                    return t;
                };
                p.__7_i = function () {
                    var t = new egret.gui.Button();
                    this.__s(t, ["skinName", "width", "x", "y"], [new egret.gui.ButtonSkin("resource/assets/btn_paoma/btn_history_normal.png", "resource/assets/btn_paoma/btn_reselect_clicked.png"), 97, 0, 0]);
                    return t;
                };
                p.__8_i = function () {
                    var t = new egret.gui.HorizontalLayout();
                    this.__s(t, ["gap", "paddingLeft", "paddingRight"], [250, 100, 100]);
                    return t;
                };
                p.__9_i = function () {
                    var t = new egret.gui.Group();
                    this.__s(t, ["height", "width", "x", "y"], [52, 1136, 1, 28]);
                    t.layout = this.__8_i();
                    t.elementsContent = [this.__3_i(), this.__6_i(), this.__7_i()];
                    return t;
                };
                p.countDownLabel_i = function () {
                    var t = new egret.gui.Label();
                    this.countDownLabel = t;
                    this.__s(t, ["height", "size", "text", "width", "x", "y"], [40, 21, "10:00", 74, 85, 15]);
                    return t;
                };
                p.push1_i = function () {
                    var t = new egret.gui.Button();
                    this.push1 = t;
                    this.__s(t, ["height", "skinName", "width", "x", "y"], [50, new egret.gui.ButtonSkin("resource/assets/btn_paoma/btn_bet_normal.png", "resource/assets/btn_paoma/btn_bet_clicked.png", "resource/assets/btn_paoma/btn_bet_clicked.png"), 110, 48, 234]);
                    return t;
                };
                p.push2_i = function () {
                    var t = new egret.gui.Button();
                    this.push2 = t;
                    this.__s(t, ["height", "skinName", "width", "x", "y"], [50, new egret.gui.ButtonSkin("resource/assets/btn_paoma/btn_bet_normal.png", "resource/assets/btn_paoma/btn_bet_clicked.png", "resource/assets/btn_paoma/btn_bet_disable.png"), 110, 48, 234]);
                    return t;
                };
                p.push3_i = function () {
                    var t = new egret.gui.Button();
                    this.push3 = t;
                    this.__s(t, ["height", "skinName", "width", "x", "y"], [50, new egret.gui.ButtonSkin("resource/assets/btn_paoma/btn_bet_normal.png", "resource/assets/btn_paoma/btn_bet_clicked.png", "resource/assets/btn_paoma/btn_bet_disable.png"), 110, 48, 234]);
                    return t;
                };
                p.push4_i = function () {
                    var t = new egret.gui.Button();
                    this.push4 = t;
                    this.__s(t, ["height", "skinName", "width", "x", "y"], [50, new egret.gui.ButtonSkin("resource/assets/btn_paoma/btn_bet_normal.png", "resource/assets/btn_paoma/btn_bet_clicked.png", "resource/assets/btn_paoma/btn_bet_disable.png"), 110, 47, 233]);
                    return t;
                };
                p.push5_i = function () {
                    var t = new egret.gui.Button();
                    this.push5 = t;
                    this.__s(t, ["height", "skinName", "width", "x", "y"], [50, new egret.gui.ButtonSkin("resource/assets/btn_paoma/btn_bet_normal.png", "resource/assets/btn_paoma/btn_bet_clicked.png", "resource/assets/btn_paoma/btn_bet_disable.png"), 110, 48, 234]);
                    return t;
                };
                p.__10_i = function () {
                    var t = new egret.gui.UIAsset();
                    this.__s(t, ["source", "x", "y"], ["resource/assets/bg_paoma/bg_black_horse_selection.png", 0, 0]);
                    return t;
                };
                DlgSelectHorseSkin._skinParts = ["countDownLabel", "push1", "push2", "push3", "push4", "push5"];
                return DlgSelectHorseSkin;
            })(egret.gui.Skin);
            skins.DlgSelectHorseSkin = DlgSelectHorseSkin;
            egret.registerClass(DlgSelectHorseSkin,"game.ui.skins.DlgSelectHorseSkin");
        })(skins = ui.skins || (ui.skins = {}));
    })(ui = game.ui || (game.ui = {}));
})(game || (game = {}));
