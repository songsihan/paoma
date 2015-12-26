var game;
(function (game) {
    var ui;
    (function (ui) {
        var skins;
        (function (skins) {
            var DlgSelPlayMethodSkin = (function (_super) {
                __extends(DlgSelPlayMethodSkin, _super);
                function DlgSelPlayMethodSkin() {
                    _super.call(this);
                    this.__s = egret.gui.setProperties;
                    this.__s(this, ["height", "width"], [640, 1136]);
                    this.elementsContent = [this.__7_i(), this.__21_i()];
                    this.states = [
                        new egret.gui.State("normal", []),
                        new egret.gui.State("disabled", [])
                    ];
                }
                var d = __define,c=DlgSelPlayMethodSkin;p=c.prototype;
                d(p, "skinParts"
                    ,function () {
                        return DlgSelPlayMethodSkin._skinParts;
                    }
                );
                p.__11_i = function () {
                    var t = new egret.gui.Group();
                    t.setStyle("size", 30);
                    this.__s(t, ["height", "width", "x", "y"], [313, 260, 369, 166]);
                    t.elementsContent = [this.__8_i(), this.__9_i(), this.__10_i(), this.selOneStarBtn_i(), this.seledOneStarBtn_i()];
                    return t;
                };
                p.__12_i = function () {
                    var t = new egret.gui.UIAsset();
                    this.__s(t, ["source", "x", "y"], ["resource/assets/bg_paoma/bg_black_game_selection.png", 0, 0]);
                    return t;
                };
                p.__13_i = function () {
                    var t = new egret.gui.Label();
                    this.__s(t, ["text", "textColor", "x", "y"], ["二星", 0xE8D50E, 98, 41]);
                    return t;
                };
                p.__14_i = function () {
                    var t = new egret.gui.Label();
                    this.__s(t, ["height", "size", "text", "width", "x", "y"], [120, 25, "有且只能押注两匹马，比赛完后前三名中有这两匹马既中奖", 200, 33, 86]);
                    return t;
                };
                p.__15_i = function () {
                    var t = new egret.gui.Group();
                    t.setStyle("size", 30);
                    this.__s(t, ["height", "width", "x", "y"], [313, 260, 379, 176]);
                    t.elementsContent = [this.__12_i(), this.__13_i(), this.__14_i(), this.selTwoStarBtn_i(), this.seledTwoStarBtn_i()];
                    return t;
                };
                p.__16_i = function () {
                    var t = new egret.gui.UIAsset();
                    this.__s(t, ["source", "x", "y"], ["resource/assets/bg_paoma/bg_black_game_selection.png", 0, 0]);
                    return t;
                };
                p.__17_i = function () {
                    var t = new egret.gui.Label();
                    this.__s(t, ["text", "textColor", "x", "y"], ["三星", 0xE8D50E, 98, 41]);
                    return t;
                };
                p.__18_i = function () {
                    var t = new egret.gui.Label();
                    this.__s(t, ["height", "size", "text", "width", "x", "y"], [120, 25, "有且只能押注三匹马，比赛完后前三名必须有这三匹马既中奖", 200, 33, 86]);
                    return t;
                };
                p.__19_i = function () {
                    var t = new egret.gui.Group();
                    t.setStyle("size", 30);
                    this.__s(t, ["height", "width", "x", "y"], [313, 260, 389, 186]);
                    t.elementsContent = [this.__16_i(), this.__17_i(), this.__18_i(), this.seledThreeStarBtn_i(), this.selThreeStarBtn_i()];
                    return t;
                };
                p.__20_i = function () {
                    var t = new egret.gui.HorizontalLayout();
                    this.__s(t, ["gap", "paddingLeft"], [100, 85]);
                    return t;
                };
                p.__21_i = function () {
                    var t = new egret.gui.Group();
                    this.__s(t, ["height", "width", "x", "y"], [313, 1136, 0, 100]);
                    t.layout = this.__20_i();
                    t.elementsContent = [this.__11_i(), this.__15_i(), this.__19_i()];
                    return t;
                };
                p.__3_i = function () {
                    var t = new egret.gui.UIAsset();
                    this.__s(t, ["source", "x", "y"], ["resource/assets/bg_paoma/bg_black_countdown.png", 0, 1]);
                    return t;
                };
                p.__4_i = function () {
                    var t = new egret.gui.Label();
                    this.__s(t, ["size", "text", "x", "y"], [21, "倒计时", 2, 14]);
                    return t;
                };
                p.__5_i = function () {
                    var t = new egret.gui.Group();
                    this.__s(t, ["height", "width", "x", "y"], [52, 171, 140, 127]);
                    t.elementsContent = [this.__3_i(), this.__4_i(), this.countDownLabel_i()];
                    return t;
                };
                p.__6_i = function () {
                    var t = new egret.gui.HorizontalLayout();
                    this.__s(t, ["gap", "paddingLeft", "paddingRight"], [250, 100, 100]);
                    return t;
                };
                p.__7_i = function () {
                    var t = new egret.gui.Group();
                    this.__s(t, ["height", "width", "x", "y"], [52, 1136, 1, 28]);
                    t.layout = this.__6_i();
                    t.elementsContent = [this.resetBtn_i(), this.__5_i(), this.hisstoryBtn_i()];
                    return t;
                };
                p.__8_i = function () {
                    var t = new egret.gui.UIAsset();
                    this.__s(t, ["source", "x", "y"], ["resource/assets/bg_paoma/bg_black_game_selection.png", 0, 0]);
                    return t;
                };
                p.__9_i = function () {
                    var t = new egret.gui.Label();
                    this.__s(t, ["text", "textColor", "x", "y"], ["一星", 0xE8D50E, 98, 41]);
                    return t;
                };
                p.countDownLabel_i = function () {
                    var t = new egret.gui.Label();
                    this.countDownLabel = t;
                    this.__s(t, ["height", "size", "text", "width", "x", "y"], [40, 21, "10:00", 74, 85, 15]);
                    return t;
                };
                p.hisstoryBtn_i = function () {
                    var t = new egret.gui.Button();
                    this.hisstoryBtn = t;
                    this.__s(t, ["skinName", "width", "x", "y"], [new egret.gui.ButtonSkin("resource/assets/btn_paoma/btn_history_normal.png", "resource/assets/btn_paoma/btn_history_clicked.png"), 97, 0, 0]);
                    return t;
                };
                p.resetBtn_i = function () {
                    var t = new egret.gui.Button();
                    this.resetBtn = t;
                    this.__s(t, ["skinName", "x", "y"], [new egret.gui.ButtonSkin("resource/assets/btn_paoma/btn_reselect_normal.png", "resource/assets/btn_paoma/btn_reselect_clicked.png"), 338, 12]);
                    return t;
                };
                p.selOneStarBtn_i = function () {
                    var t = new egret.gui.Button();
                    this.selOneStarBtn = t;
                    this.__s(t, ["height", "skinName", "width", "x", "y"], [50, new egret.gui.ButtonSkin("resource/assets/btn_paoma/btn_choose_normal.png", "resource/assets/btn_paoma/btn_choose_clicked.png", "resource/assets/btn_paoma/btn_choose_disable.png"), 110, 74, 232]);
                    return t;
                };
                p.selThreeStarBtn_i = function () {
                    var t = new egret.gui.Button();
                    this.selThreeStarBtn = t;
                    this.__s(t, ["height", "skinName", "width", "x", "y"], [50, new egret.gui.ButtonSkin("resource/assets/btn_paoma/btn_choose_normal.png", "resource/assets/btn_paoma/btn_choose_clicked.png", "resource/assets/btn_paoma/btn_choose_disable.png"), 110, 77, 232]);
                    return t;
                };
                p.selTwoStarBtn_i = function () {
                    var t = new egret.gui.Button();
                    this.selTwoStarBtn = t;
                    this.__s(t, ["height", "skinName", "width", "x", "y"], [50, new egret.gui.ButtonSkin("resource/assets/btn_paoma/btn_choose_normal.png", "resource/assets/btn_paoma/btn_choose_clicked.png", "resource/assets/btn_paoma/btn_choose_disable.png"), 110, 74, 232]);
                    return t;
                };
                p.seledOneStarBtn_i = function () {
                    var t = new egret.gui.Button();
                    this.seledOneStarBtn = t;
                    this.__s(t, ["skinName", "visible", "x", "y"], [new egret.gui.ButtonSkin("resource/assets/btn_paoma/btn_chosen_normal.png", "resource/assets/btn_paoma/btn_chosen_normal.png"), false, 66, 231]);
                    return t;
                };
                p.seledThreeStarBtn_i = function () {
                    var t = new egret.gui.Button();
                    this.seledThreeStarBtn = t;
                    this.__s(t, ["skinName", "visible", "x", "y"], [new egret.gui.ButtonSkin("resource/assets/btn_paoma/btn_chosen_normal.png", "resource/assets/btn_paoma/btn_chosen_normal.png"), false, 69, 231]);
                    return t;
                };
                p.seledTwoStarBtn_i = function () {
                    var t = new egret.gui.Button();
                    this.seledTwoStarBtn = t;
                    this.__s(t, ["skinName", "visible", "x", "y"], [new egret.gui.ButtonSkin("resource/assets/btn_paoma/btn_chosen_normal.png", "resource/assets/btn_paoma/btn_chosen_normal.png"), false, 72, 231]);
                    return t;
                };
                p.__10_i = function () {
                    var t = new egret.gui.Label();
                    this.__s(t, ["height", "size", "text", "width", "x", "y"], [100, 25, "有且只能押注一匹马，该马跑第一名既中奖", 200, 33, 86]);
                    return t;
                };
                DlgSelPlayMethodSkin._skinParts = ["resetBtn", "countDownLabel", "hisstoryBtn", "selOneStarBtn", "seledOneStarBtn", "selTwoStarBtn", "seledTwoStarBtn", "seledThreeStarBtn", "selThreeStarBtn"];
                return DlgSelPlayMethodSkin;
            })(egret.gui.Skin);
            skins.DlgSelPlayMethodSkin = DlgSelPlayMethodSkin;
            egret.registerClass(DlgSelPlayMethodSkin,"game.ui.skins.DlgSelPlayMethodSkin");
        })(skins = ui.skins || (ui.skins = {}));
    })(ui = game.ui || (game.ui = {}));
})(game || (game = {}));
