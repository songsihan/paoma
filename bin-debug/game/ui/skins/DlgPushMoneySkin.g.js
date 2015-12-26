var game;
(function (game) {
    var ui;
    (function (ui) {
        var skins;
        (function (skins) {
            var DlgPushMoneySkin = (function (_super) {
                __extends(DlgPushMoneySkin, _super);
                function DlgPushMoneySkin() {
                    _super.call(this);
                    this.__s = egret.gui.setProperties;
                    this.__s(this, ["height", "width"], [640, 1136]);
                    this.elementsContent = [this.__3_i(), this.__69_i(), this.btnHistory_i(), this.btnPlayRule_i(), this.__72_i()];
                    this.__4_i();
                    this.__22_i();
                    this.states = [
                        new egret.gui.State("normal", [
                            new egret.gui.AddItems("__4", "", "before", "__69"),
                            new egret.gui.AddItems("__22", "__69", "before", "__68")
                        ]),
                        new egret.gui.State("disabled", [])
                    ];
                }
                var d = __define,c=DlgPushMoneySkin;p=c.prototype;
                d(p, "skinParts"
                    ,function () {
                        return DlgPushMoneySkin._skinParts;
                    }
                );
                p.__11_i = function () {
                    var t = new egret.gui.Group();
                    this.__s(t, ["height", "width", "x", "y"], [166, 95, 10, 17]);
                    t.elementsContent = [this.__9_i(), this.__10_i()];
                    return t;
                };
                p.__12_i = function () {
                    var t = new egret.gui.UIAsset();
                    this.__s(t, ["source", "x", "y"], ["resource/assets/img_new/horse_blue.png", 1, 10]);
                    return t;
                };
                p.__13_i = function () {
                    var t = new egret.gui.Label();
                    this.__s(t, ["size", "text", "x", "y"], [25, "汗血马", 6, 130]);
                    return t;
                };
                p.__14_i = function () {
                    var t = new egret.gui.Group();
                    this.__s(t, ["height", "width", "x", "y"], [166, 95, 20, 27]);
                    t.elementsContent = [this.__12_i(), this.__13_i()];
                    return t;
                };
                p.__15_i = function () {
                    var t = new egret.gui.UIAsset();
                    this.__s(t, ["source", "x", "y"], ["resource/assets/img_new/horse_blue.png", 1, 10]);
                    return t;
                };
                p.__16_i = function () {
                    var t = new egret.gui.Label();
                    this.__s(t, ["size", "text", "x", "y"], [25, "汗血马", 6, 130]);
                    return t;
                };
                p.__17_i = function () {
                    var t = new egret.gui.Group();
                    this.__s(t, ["height", "width", "x", "y"], [166, 95, 30, 37]);
                    t.elementsContent = [this.__15_i(), this.__16_i()];
                    return t;
                };
                p.__18_i = function () {
                    var t = new egret.gui.UIAsset();
                    this.__s(t, ["source", "x", "y"], ["resource/assets/img_new/horse_blue.png", 1, 10]);
                    return t;
                };
                p.__19_i = function () {
                    var t = new egret.gui.Label();
                    this.__s(t, ["size", "text", "x", "y"], [25, "汗血马", 6, 130]);
                    return t;
                };
                p.__20_i = function () {
                    var t = new egret.gui.Group();
                    this.__s(t, ["height", "width", "x", "y"], [166, 95, 40, 47]);
                    t.elementsContent = [this.__18_i(), this.__19_i()];
                    return t;
                };
                p.__21_i = function () {
                    var t = new egret.gui.HorizontalLayout();
                    this.__s(t, ["gap", "paddingLeft"], [20, 20]);
                    return t;
                };
                p.__22_i = function () {
                    var t = new egret.gui.Group();
                    this.__22 = t;
                    this.__s(t, ["height", "width", "x", "y"], [170, 595, 0, 0]);
                    t.layout = this.__21_i();
                    t.elementsContent = [this.__8_i(), this.__11_i(), this.__14_i(), this.__17_i(), this.__20_i()];
                    return t;
                };
                p.__23_i = function () {
                    var t = new egret.gui.Label();
                    this.__s(t, ["enabled", "focusEnabled", "text", "touchEnabled", "x", "y"], [false, false, "1-5", false, 2, 12]);
                    return t;
                };
                p.__24_i = function () {
                    var t = new egret.gui.Label();
                    this.__s(t, ["enabled", "focusEnabled", "text", "textColor", "touchEnabled", "x", "y"], [false, false, "x10", 0x1C1503, false, 69, 12]);
                    return t;
                };
                p.__25_i = function () {
                    var t = new egret.gui.Group();
                    this.__s(t, ["height", "width", "x", "y"], [59, 137, 0, 0]);
                    t.elementsContent = [this.btn1_i(), this.selImage1_i(), this.__23_i(), this.__24_i()];
                    return t;
                };
                p.__26_i = function () {
                    var t = new egret.gui.Label();
                    this.__s(t, ["text", "touchEnabled", "x", "y"], ["1-5", false, 2, 12]);
                    return t;
                };
                p.__27_i = function () {
                    var t = new egret.gui.Label();
                    this.__s(t, ["text", "textColor", "touchEnabled", "x", "y"], ["x10", 0x1C1503, false, 69, 12]);
                    return t;
                };
                p.__28_i = function () {
                    var t = new egret.gui.Group();
                    this.__s(t, ["height", "width", "x", "y"], [59, 137, 10, 10]);
                    t.elementsContent = [this.btn2_i(), this.selImage2_i(), this.__26_i(), this.__27_i()];
                    return t;
                };
                p.__29_i = function () {
                    var t = new egret.gui.Label();
                    this.__s(t, ["text", "touchEnabled", "x", "y"], ["1-5", false, 2, 12]);
                    return t;
                };
                p.__30_i = function () {
                    var t = new egret.gui.Label();
                    this.__s(t, ["text", "textColor", "touchEnabled", "x", "y"], ["x10", 0x1C1503, false, 69, 12]);
                    return t;
                };
                p.__31_i = function () {
                    var t = new egret.gui.Group();
                    this.__s(t, ["height", "width", "x", "y"], [59, 137, 20, 20]);
                    t.elementsContent = [this.btn3_i(), this.selImage3_i(), this.__29_i(), this.__30_i()];
                    return t;
                };
                p.__32_i = function () {
                    var t = new egret.gui.Label();
                    this.__s(t, ["text", "touchEnabled", "x", "y"], ["1-5", false, 2, 12]);
                    return t;
                };
                p.__33_i = function () {
                    var t = new egret.gui.Label();
                    this.__s(t, ["text", "textColor", "touchEnabled", "x", "y"], ["x10", 0x1C1503, false, 69, 12]);
                    return t;
                };
                p.__34_i = function () {
                    var t = new egret.gui.Group();
                    this.__s(t, ["height", "width", "x", "y"], [59, 137, 30, 30]);
                    t.elementsContent = [this.btn4_i(), this.selImage4_i(), this.__32_i(), this.__33_i()];
                    return t;
                };
                p.__35_i = function () {
                    var t = new egret.gui.HorizontalLayout();
                    t.gap = 15;
                    return t;
                };
                p.__36_i = function () {
                    var t = new egret.gui.Group();
                    this.__s(t, ["height", "width", "x", "y"], [59, 595, 0, 0]);
                    t.layout = this.__35_i();
                    t.elementsContent = [this.__25_i(), this.__28_i(), this.__31_i(), this.__34_i()];
                    return t;
                };
                p.__37_i = function () {
                    var t = new egret.gui.Label();
                    this.__s(t, ["text", "touchEnabled", "x", "y"], ["1-5", false, 2, 12]);
                    return t;
                };
                p.__38_i = function () {
                    var t = new egret.gui.Label();
                    this.__s(t, ["text", "textColor", "touchEnabled", "x", "y"], ["x10", 0x1C1503, false, 69, 12]);
                    return t;
                };
                p.__39_i = function () {
                    var t = new egret.gui.Group();
                    this.__s(t, ["height", "width", "x", "y"], [59, 137, 0, 0]);
                    t.elementsContent = [this.btn5_i(), this.selImage5_i(), this.__37_i(), this.__38_i()];
                    return t;
                };
                p.__3_i = function () {
                    var t = new egret.gui.UIAsset();
                    this.__s(t, ["height", "source", "width", "x", "y"], [640, "resource/assets/bg_new/bg_big_color.png", 1136, 0, 0]);
                    return t;
                };
                p.__40_i = function () {
                    var t = new egret.gui.Label();
                    this.__s(t, ["text", "touchEnabled", "x", "y"], ["1-5", false, 2, 12]);
                    return t;
                };
                p.__41_i = function () {
                    var t = new egret.gui.Label();
                    this.__s(t, ["text", "textColor", "touchEnabled", "x", "y"], ["x10", 0x1C1503, false, 69, 12]);
                    return t;
                };
                p.__42_i = function () {
                    var t = new egret.gui.Group();
                    this.__s(t, ["height", "width", "x", "y"], [59, 137, 10, 10]);
                    t.elementsContent = [this.btn6_i(), this.selImage6_i(), this.__40_i(), this.__41_i()];
                    return t;
                };
                p.__43_i = function () {
                    var t = new egret.gui.Label();
                    this.__s(t, ["text", "touchEnabled", "x", "y"], ["1-5", false, 2, 12]);
                    return t;
                };
                p.__44_i = function () {
                    var t = new egret.gui.Label();
                    this.__s(t, ["text", "textColor", "touchEnabled", "x", "y"], ["x10", 0x1C1503, false, 69, 12]);
                    return t;
                };
                p.__45_i = function () {
                    var t = new egret.gui.Group();
                    this.__s(t, ["height", "width", "x", "y"], [59, 137, 20, 20]);
                    t.elementsContent = [this.btn7_i(), this.selImage7_i(), this.__43_i(), this.__44_i()];
                    return t;
                };
                p.__46_i = function () {
                    var t = new egret.gui.HorizontalLayout();
                    t.gap = 15;
                    return t;
                };
                p.__47_i = function () {
                    var t = new egret.gui.Group();
                    this.__s(t, ["height", "width", "x", "y"], [59, 595, 10, 10]);
                    t.layout = this.__46_i();
                    t.elementsContent = [this.__39_i(), this.__42_i(), this.__45_i()];
                    return t;
                };
                p.__48_i = function () {
                    var t = new egret.gui.Label();
                    this.__s(t, ["text", "touchEnabled", "x", "y"], ["1-5", false, 2, 12]);
                    return t;
                };
                p.__49_i = function () {
                    var t = new egret.gui.Label();
                    this.__s(t, ["text", "textColor", "touchEnabled", "x", "y"], ["x10", 0x1C1503, false, 69, 12]);
                    return t;
                };
                p.__4_i = function () {
                    var t = new egret.gui.Button();
                    this.__4 = t;
                    this.__s(t, ["enabled", "skinName", "x", "y"], [true, new egret.gui.ButtonSkin("resource/assets/btn_new/btn_closeplay_normal.png", "resource/assets/btn_new/btn_closeplay_normal.png"), 36, 24]);
                    return t;
                };
                p.__50_i = function () {
                    var t = new egret.gui.Group();
                    this.__s(t, ["height", "width", "x", "y"], [59, 137, 0, 0]);
                    t.elementsContent = [this.btn8_i(), this.selImage8_i(), this.__48_i(), this.__49_i()];
                    return t;
                };
                p.__51_i = function () {
                    var t = new egret.gui.Label();
                    this.__s(t, ["text", "touchEnabled", "x", "y"], ["1-5", false, 2, 12]);
                    return t;
                };
                p.__52_i = function () {
                    var t = new egret.gui.Label();
                    this.__s(t, ["text", "textColor", "touchEnabled", "x", "y"], ["x10", 0x1C1503, false, 69, 12]);
                    return t;
                };
                p.__53_i = function () {
                    var t = new egret.gui.Group();
                    this.__s(t, ["height", "width", "x", "y"], [59, 137, 10, 10]);
                    t.elementsContent = [this.btn9_i(), this.selImage9_i(), this.__51_i(), this.__52_i()];
                    return t;
                };
                p.__54_i = function () {
                    var t = new egret.gui.UIAsset();
                    this.__s(t, ["height", "source", "width", "x", "y"], [59, "resource/assets/bg_new/bg_choose_orange.png", 289, 0, 0]);
                    return t;
                };
                p.__55_i = function () {
                    var t = new egret.gui.Label();
                    this.__s(t, ["size", "text", "x", "y"], [25, "玩家总注：", 5, 15]);
                    return t;
                };
                p.__56_i = function () {
                    var t = new egret.gui.Group();
                    this.__s(t, ["height", "width", "x", "y"], [59, 289, 20, 20]);
                    t.elementsContent = [this.__54_i(), this.__55_i(), this.labelTatolMoney_i()];
                    return t;
                };
                p.__57_i = function () {
                    var t = new egret.gui.HorizontalLayout();
                    t.gap = 15;
                    return t;
                };
                p.__58_i = function () {
                    var t = new egret.gui.Group();
                    this.__s(t, ["height", "width", "x", "y"], [59, 595, 20, 20]);
                    t.layout = this.__57_i();
                    t.elementsContent = [this.__50_i(), this.__53_i(), this.__56_i()];
                    return t;
                };
                p.__59_i = function () {
                    var t = new egret.gui.Label();
                    this.__s(t, ["text", "touchEnabled", "x", "y"], ["1-5", false, 2, 12]);
                    return t;
                };
                p.__5_i = function () {
                    var t = new egret.gui.UIAsset();
                    this.__s(t, ["height", "source", "width", "x", "y"], [170, "resource/assets/bg_new/bg_black_horse.png", 595, 0, 0]);
                    return t;
                };
                p.__60_i = function () {
                    var t = new egret.gui.Label();
                    this.__s(t, ["text", "textColor", "touchEnabled", "x", "y"], ["x10", 0x1C1503, false, 69, 12]);
                    return t;
                };
                p.__61_i = function () {
                    var t = new egret.gui.Group();
                    this.__s(t, ["height", "width", "x", "y"], [59, 137, 0, 0]);
                    t.elementsContent = [this.btn10_i(), this.selImage10_i(), this.__59_i(), this.__60_i()];
                    return t;
                };
                p.__62_i = function () {
                    var t = new egret.gui.UIAsset();
                    this.__s(t, ["height", "source", "width", "x", "y"], [59, "resource/assets/bg_new/bg_choose_orange.png", 441, 0, 0]);
                    return t;
                };
                p.__63_i = function () {
                    var t = new egret.gui.Label();
                    this.__s(t, ["text", "x", "y"], ["下注金额：", 2, 14]);
                    return t;
                };
                p.__64_i = function () {
                    var t = new egret.gui.Group();
                    this.__s(t, ["height", "width", "x", "y"], [59, 441, 10, 10]);
                    t.elementsContent = [this.__62_i(), this.__63_i(), this.btn100_i(), this.btn1000_i(), this.btn5000_i(), this.btn10000_i()];
                    return t;
                };
                p.__65_i = function () {
                    var t = new egret.gui.HorizontalLayout();
                    t.gap = 15;
                    return t;
                };
                p.__66_i = function () {
                    var t = new egret.gui.Group();
                    t.setStyle("size", 25);
                    this.__s(t, ["height", "width", "x", "y"], [59, 595, 30, 30]);
                    t.layout = this.__65_i();
                    t.elementsContent = [this.__61_i(), this.__64_i()];
                    return t;
                };
                p.__67_i = function () {
                    var t = new egret.gui.VerticalLayout();
                    return t;
                };
                p.__68_i = function () {
                    var t = new egret.gui.Group();
                    this.__68 = t;
                    this.__s(t, ["height", "width", "x", "y"], [255, 595, 0, 180]);
                    t.layout = this.__67_i();
                    t.elementsContent = [this.__36_i(), this.__47_i(), this.__58_i(), this.__66_i()];
                    return t;
                };
                p.__69_i = function () {
                    var t = new egret.gui.Group();
                    this.__69 = t;
                    this.__s(t, ["height", "width", "x", "y"], [435, 595, 279, 24]);
                    t.elementsContent = [this.__5_i(), this.__68_i()];
                    return t;
                };
                p.__6_i = function () {
                    var t = new egret.gui.UIAsset();
                    this.__s(t, ["source", "x", "y"], ["resource/assets/img_new/horse_blue.png", 1, 10]);
                    return t;
                };
                p.__70_i = function () {
                    var t = new egret.gui.UIAsset();
                    this.__s(t, ["source", "x", "y"], ["resource/assets/bg_paoma/bg_black_countdown.png", 0, 1]);
                    return t;
                };
                p.__71_i = function () {
                    var t = new egret.gui.Label();
                    this.__s(t, ["size", "text", "x", "y"], [21, "倒计时", 2, 14]);
                    return t;
                };
                p.__72_i = function () {
                    var t = new egret.gui.Group();
                    this.__s(t, ["height", "width", "x", "y"], [52, 171, 18, 193]);
                    t.elementsContent = [this.__70_i(), this.__71_i(), this.countDownLabel_i()];
                    return t;
                };
                p.__7_i = function () {
                    var t = new egret.gui.Label();
                    this.__s(t, ["size", "text", "x", "y"], [25, "汗血马", 6, 130]);
                    return t;
                };
                p.__8_i = function () {
                    var t = new egret.gui.Group();
                    this.__s(t, ["height", "width", "x", "y"], [166, 95, 0, 7]);
                    t.elementsContent = [this.__6_i(), this.__7_i()];
                    return t;
                };
                p.__9_i = function () {
                    var t = new egret.gui.UIAsset();
                    this.__s(t, ["source", "x", "y"], ["resource/assets/img_new/horse_blue.png", 1, 10]);
                    return t;
                };
                p.btn10000_i = function () {
                    var t = new egret.gui.Button();
                    this.btn10000 = t;
                    t.setStyle("size", 21);
                    t.setStyle("textColor", 0x12A6DD);
                    this.__s(t, ["height", "label", "skinName", "verticalCenter", "width", "x", "y"], [55, "1万", new egret.gui.ButtonSkin("resource/assets/icon_new/icon_chip_blue.png", "resource/assets/icon_new/icon_chip_blue.png"), 0, 55, 386, 20]);
                    return t;
                };
                p.btn1000_i = function () {
                    var t = new egret.gui.Button();
                    this.btn1000 = t;
                    t.setStyle("size", 21);
                    t.setStyle("textColor", 0x12A6DD);
                    this.__s(t, ["height", "label", "skinName", "verticalCenter", "width", "x"], [55, "1千", new egret.gui.ButtonSkin("resource/assets/icon_new/icon_chip_blue.png", "resource/assets/icon_new/icon_chip_blue.png"), 0, 55, 228]);
                    return t;
                };
                p.btn100_i = function () {
                    var t = new egret.gui.Button();
                    this.btn100 = t;
                    t.setStyle("size", 21);
                    t.setStyle("textColor", 0xF37713);
                    t.setStyle("verticalAlign", "middle");
                    this.__s(t, ["label", "skinName", "verticalCenter", "width", "x"], ["100", new egret.gui.ButtonSkin("resource/assets/icon_new/icon_chip_yellow.png"), 0, 55, 152]);
                    return t;
                };
                p.btn10_i = function () {
                    var t = new egret.gui.Button();
                    this.btn10 = t;
                    t.setStyle("size", 25);
                    t.setStyle("verticalAlign", "top");
                    this.__s(t, ["skinName", "x", "y"], [new egret.gui.ButtonSkin("resource/assets/btn_new/btn_green.png"), 0, 0]);
                    return t;
                };
                p.btn1_i = function () {
                    var t = new egret.gui.Button();
                    this.btn1 = t;
                    t.setStyle("size", 25);
                    t.setStyle("verticalAlign", "top");
                    this.__s(t, ["skinName", "x", "y"], [new egret.gui.ButtonSkin("resource/assets/btn_new/btn_green.png"), 0, 0]);
                    return t;
                };
                p.btn2_i = function () {
                    var t = new egret.gui.Button();
                    this.btn2 = t;
                    t.setStyle("size", 25);
                    t.setStyle("verticalAlign", "top");
                    this.__s(t, ["skinName", "x", "y"], [new egret.gui.ButtonSkin("resource/assets/btn_new/btn_green.png"), 0, 0]);
                    return t;
                };
                p.btn3_i = function () {
                    var t = new egret.gui.Button();
                    this.btn3 = t;
                    t.setStyle("size", 25);
                    t.setStyle("verticalAlign", "top");
                    this.__s(t, ["skinName", "x", "y"], [new egret.gui.ButtonSkin("resource/assets/btn_new/btn_green.png"), 0, 0]);
                    return t;
                };
                p.btn4_i = function () {
                    var t = new egret.gui.Button();
                    this.btn4 = t;
                    t.setStyle("size", 25);
                    t.setStyle("verticalAlign", "top");
                    this.__s(t, ["skinName", "x", "y"], [new egret.gui.ButtonSkin("resource/assets/btn_new/btn_green.png"), 0, 0]);
                    return t;
                };
                p.btn5000_i = function () {
                    var t = new egret.gui.Button();
                    this.btn5000 = t;
                    t.setStyle("size", 21);
                    t.setStyle("textColor", 0x12A6DD);
                    this.__s(t, ["height", "label", "skinName", "verticalCenter", "width", "x", "y"], [55, "5千", new egret.gui.ButtonSkin("resource/assets/icon_new/icon_chip_blue.png", "resource/assets/icon_new/icon_chip_blue.png"), 0, 55, 306, 10]);
                    return t;
                };
                p.btn5_i = function () {
                    var t = new egret.gui.Button();
                    this.btn5 = t;
                    t.setStyle("size", 25);
                    t.setStyle("verticalAlign", "top");
                    this.__s(t, ["skinName", "x", "y"], [new egret.gui.ButtonSkin("resource/assets/btn_new/btn_green.png"), 0, 0]);
                    return t;
                };
                p.btn6_i = function () {
                    var t = new egret.gui.Button();
                    this.btn6 = t;
                    t.setStyle("size", 25);
                    t.setStyle("verticalAlign", "top");
                    this.__s(t, ["skinName", "x", "y"], [new egret.gui.ButtonSkin("resource/assets/btn_new/btn_green.png"), 0, 0]);
                    return t;
                };
                p.btn7_i = function () {
                    var t = new egret.gui.Button();
                    this.btn7 = t;
                    t.setStyle("size", 25);
                    t.setStyle("verticalAlign", "top");
                    this.__s(t, ["skinName", "x", "y"], [new egret.gui.ButtonSkin("resource/assets/btn_new/btn_green.png"), 0, 0]);
                    return t;
                };
                p.btn8_i = function () {
                    var t = new egret.gui.Button();
                    this.btn8 = t;
                    t.setStyle("size", 25);
                    t.setStyle("verticalAlign", "top");
                    this.__s(t, ["skinName", "x", "y"], [new egret.gui.ButtonSkin("resource/assets/btn_new/btn_green.png"), 0, 0]);
                    return t;
                };
                p.btn9_i = function () {
                    var t = new egret.gui.Button();
                    this.btn9 = t;
                    t.setStyle("size", 25);
                    t.setStyle("verticalAlign", "top");
                    this.__s(t, ["skinName", "x", "y"], [new egret.gui.ButtonSkin("resource/assets/btn_new/btn_green.png"), 0, 0]);
                    return t;
                };
                p.btnHistory_i = function () {
                    var t = new egret.gui.Button();
                    this.btnHistory = t;
                    this.__s(t, ["skinName", "x", "y"], [new egret.gui.ButtonSkin("resource/assets/btn_new/btn_history_normal.png", "resource/assets/btn_new/btn_history_clicked.png"), 981, 24]);
                    return t;
                };
                p.btnPlayRule_i = function () {
                    var t = new egret.gui.Button();
                    this.btnPlayRule = t;
                    this.__s(t, ["skinName", "x", "y"], [new egret.gui.ButtonSkin("resource/assets/btn_new/btn_game_rule_normal.png", "resource/assets/btn_new/btn_game_rule_normal.png"), 982, 96]);
                    return t;
                };
                p.countDownLabel_i = function () {
                    var t = new egret.gui.Label();
                    this.countDownLabel = t;
                    this.__s(t, ["height", "size", "text", "width", "x", "y"], [40, 21, "10:00", 74, 85, 15]);
                    return t;
                };
                p.labelTatolMoney_i = function () {
                    var t = new egret.gui.Label();
                    this.labelTatolMoney = t;
                    this.__s(t, ["size", "text", "textColor", "x", "y"], [25, "x1000", 0x1C1503, 173, 16]);
                    return t;
                };
                p.selImage10_i = function () {
                    var t = new egret.gui.UIAsset();
                    this.selImage10 = t;
                    this.__s(t, ["source", "visible", "x", "y"], ["resource/assets/btn_new/btn_blue.png", false, 0, 0]);
                    return t;
                };
                p.selImage1_i = function () {
                    var t = new egret.gui.UIAsset();
                    this.selImage1 = t;
                    this.__s(t, ["source", "visible", "x", "y"], ["resource/assets/btn_new/btn_blue.png", false, 0, 0]);
                    return t;
                };
                p.selImage2_i = function () {
                    var t = new egret.gui.UIAsset();
                    this.selImage2 = t;
                    this.__s(t, ["source", "visible", "x", "y"], ["resource/assets/btn_new/btn_blue.png", false, 0, 0]);
                    return t;
                };
                p.selImage3_i = function () {
                    var t = new egret.gui.UIAsset();
                    this.selImage3 = t;
                    this.__s(t, ["source", "visible", "x", "y"], ["resource/assets/btn_new/btn_blue.png", false, 0, 0]);
                    return t;
                };
                p.selImage4_i = function () {
                    var t = new egret.gui.UIAsset();
                    this.selImage4 = t;
                    this.__s(t, ["source", "visible", "x", "y"], ["resource/assets/btn_new/btn_blue.png", false, 0, 0]);
                    return t;
                };
                p.selImage5_i = function () {
                    var t = new egret.gui.UIAsset();
                    this.selImage5 = t;
                    this.__s(t, ["source", "visible", "x", "y"], ["resource/assets/btn_new/btn_blue.png", false, 0, 0]);
                    return t;
                };
                p.selImage6_i = function () {
                    var t = new egret.gui.UIAsset();
                    this.selImage6 = t;
                    this.__s(t, ["source", "visible", "x", "y"], ["resource/assets/btn_new/btn_blue.png", false, 0, 0]);
                    return t;
                };
                p.selImage7_i = function () {
                    var t = new egret.gui.UIAsset();
                    this.selImage7 = t;
                    this.__s(t, ["source", "visible", "x", "y"], ["resource/assets/btn_new/btn_blue.png", false, 0, 0]);
                    return t;
                };
                p.selImage8_i = function () {
                    var t = new egret.gui.UIAsset();
                    this.selImage8 = t;
                    this.__s(t, ["source", "visible", "x", "y"], ["resource/assets/btn_new/btn_blue.png", false, 0, 0]);
                    return t;
                };
                p.selImage9_i = function () {
                    var t = new egret.gui.UIAsset();
                    this.selImage9 = t;
                    this.__s(t, ["source", "visible", "x", "y"], ["resource/assets/btn_new/btn_blue.png", false, 0, 0]);
                    return t;
                };
                p.__10_i = function () {
                    var t = new egret.gui.Label();
                    this.__s(t, ["size", "text", "x", "y"], [25, "汗血马", 6, 130]);
                    return t;
                };
                DlgPushMoneySkin._skinParts = ["btn1", "selImage1", "btn2", "selImage2", "btn3", "selImage3", "btn4", "selImage4", "btn5", "selImage5", "btn6", "selImage6", "btn7", "selImage7", "btn8", "selImage8", "btn9", "selImage9", "labelTatolMoney", "btn10", "selImage10", "btn100", "btn1000", "btn5000", "btn10000", "btnHistory", "btnPlayRule", "countDownLabel"];
                return DlgPushMoneySkin;
            })(egret.gui.Skin);
            skins.DlgPushMoneySkin = DlgPushMoneySkin;
            egret.registerClass(DlgPushMoneySkin,"game.ui.skins.DlgPushMoneySkin");
        })(skins = ui.skins || (ui.skins = {}));
    })(ui = game.ui || (game.ui = {}));
})(game || (game = {}));
