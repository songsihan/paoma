var game;
(function (game) {
    var ui;
    (function (ui) {
        var skins;
        (function (skins) {
            var DlgControllerSkin = (function (_super) {
                __extends(DlgControllerSkin, _super);
                function DlgControllerSkin() {
                    _super.call(this);
                    this.__s = egret.gui.setProperties;
                    this.__s(this, ["height", "width"], [640, 1136]);
                    this.elementsContent = [this.__3_i(), this.btnUp_i(), this.btnDown_i(), this.btnRight_i(), this.btnLeft_i(), this.imgRoleHead_i(), this.__4_i(), this.__5_i(), this.__6_i(), this.img_attack_i(), this.btnAttack_i(), this.img_skill_4_i(), this.btnD_i(), this.img_skill_3_i(), this.btnC_i(), this.img_skill_2_i(), this.btnB_i(), this.img_skill_1_i(), this.btnA_i(), this.img_stroke_i(), this.btnStroke_i()];
                    this.states = [
                        new egret.gui.State("normal", []),
                        new egret.gui.State("disabled", [])
                    ];
                }
                var d = __define,c=DlgControllerSkin;p=c.prototype;
                d(p, "skinParts"
                    ,function () {
                        return DlgControllerSkin._skinParts;
                    }
                );
                p.__4_i = function () {
                    var t = new egret.gui.UIAsset();
                    this.__s(t, ["source", "x", "y"], ["resource/assets/UI/bg/bg_hero_left_borader.png", 17, 21]);
                    return t;
                };
                p.__5_i = function () {
                    var t = new egret.gui.UIAsset();
                    this.__s(t, ["source", "x", "y"], ["resource/assets/UI/pic/progress_blood.png", 178, 62]);
                    return t;
                };
                p.__6_i = function () {
                    var t = new egret.gui.UIAsset();
                    this.__s(t, ["source", "x", "y"], ["resource/assets/UI/pic/progress_energy.png", 203, 88]);
                    return t;
                };
                p.btnA_i = function () {
                    var t = new egret.gui.Button();
                    this.btnA = t;
                    this.__s(t, ["height", "skinName", "width", "x", "y"], [110, new egret.gui.ButtonSkin("resource/assets/UI/icon/icon_round.png", "resource/assets/UI/icon/icon_round_clicked.png"), 110, 736, 515]);
                    return t;
                };
                p.btnAttack_i = function () {
                    var t = new egret.gui.Button();
                    this.btnAttack = t;
                    this.__s(t, ["height", "skinName", "width", "x", "y"], [126, new egret.gui.ButtonSkin("resource/assets/UI/icon/icon_round.png", "resource/assets/UI/icon/icon_round_clicked.png"), 126, 980, 493]);
                    return t;
                };
                p.btnB_i = function () {
                    var t = new egret.gui.Button();
                    this.btnB = t;
                    this.__s(t, ["height", "skinName", "width", "x", "y"], [110, new egret.gui.ButtonSkin("resource/assets/UI/icon/icon_round.png", "resource/assets/UI/icon/icon_round_clicked.png"), 110, 857, 507]);
                    return t;
                };
                p.btnC_i = function () {
                    var t = new egret.gui.Button();
                    this.btnC = t;
                    this.__s(t, ["height", "skinName", "width", "x", "y"], [110, new egret.gui.ButtonSkin("resource/assets/UI/icon/icon_round.png", "resource/assets/UI/icon/icon_round_clicked.png"), 110, 881, 387]);
                    return t;
                };
                p.btnD_i = function () {
                    var t = new egret.gui.Button();
                    this.btnD = t;
                    this.__s(t, ["height", "skinName", "width", "x", "y"], [110, new egret.gui.ButtonSkin("resource/assets/UI/icon/icon_round.png", "resource/assets/UI/icon/icon_round_clicked.png"), 110, 1008, 380]);
                    return t;
                };
                p.btnDown_i = function () {
                    var t = new egret.gui.Button();
                    this.btnDown = t;
                    this.__s(t, ["height", "skinName", "width", "x", "y"], [52, new egret.gui.ButtonSkin("resource/assets/UI/btn/btn_move_down.png", "resource/assets/UI/btn/btn_move_down_clicked.png"), 80, 122, 543]);
                    return t;
                };
                p.btnLeft_i = function () {
                    var t = new egret.gui.Button();
                    this.btnLeft = t;
                    this.__s(t, ["height", "skinName", "width", "x", "y"], [80, new egret.gui.ButtonSkin("resource/assets/UI/btn/btn_move_left.png", "resource/assets/UI/btn/btn_move_left_clicked.png"), 52, 66, 464]);
                    return t;
                };
                p.btnRight_i = function () {
                    var t = new egret.gui.Button();
                    this.btnRight = t;
                    this.__s(t, ["height", "skinName", "width", "x", "y"], [80, new egret.gui.ButtonSkin("resource/assets/UI/btn/btn_move_right.png", "resource/assets/UI/btn/btn_move_right_clicked.png"), 52, 201, 463]);
                    return t;
                };
                p.btnStroke_i = function () {
                    var t = new egret.gui.Button();
                    this.btnStroke = t;
                    this.__s(t, ["skinName", "x", "y"], [new egret.gui.ButtonSkin("resource/assets/UI/icon/icon_round.png", "resource/assets/UI/icon/icon_round_clicked.png"), 990, 223]);
                    return t;
                };
                p.btnUp_i = function () {
                    var t = new egret.gui.Button();
                    this.btnUp = t;
                    this.__s(t, ["height", "skinName", "width", "x", "y"], [52, new egret.gui.ButtonSkin("resource/assets/UI/btn/btn_move_up.png", "resource/assets/UI/btn/btn_move_up_clicked.png"), 80, 117, 408]);
                    return t;
                };
                p.imgRoleHead_i = function () {
                    var t = new egret.gui.UIAsset();
                    this.imgRoleHead = t;
                    this.__s(t, ["height", "source", "width", "x", "y"], [84, "resource/assets/role/head_fulong_single.png", 213, 8, 23]);
                    return t;
                };
                p.img_attack_i = function () {
                    var t = new egret.gui.UIAsset();
                    this.img_attack = t;
                    this.__s(t, ["height", "source", "width", "x", "y"], [101, "resource/assets/UI/btn/btn_battle.png", 101, 992, 505]);
                    return t;
                };
                p.img_skill_1_i = function () {
                    var t = new egret.gui.UIAsset();
                    this.img_skill_1 = t;
                    this.__s(t, ["height", "source", "width", "x", "y"], [84, "resource/assets/skill/fulong/icon_skill_11.png", 84, 749, 527]);
                    return t;
                };
                p.img_skill_2_i = function () {
                    var t = new egret.gui.UIAsset();
                    this.img_skill_2 = t;
                    this.__s(t, ["height", "source", "width", "x", "y"], [84, "resource/assets/skill/fulong/icon_skill_12.png", 84, 871, 520]);
                    return t;
                };
                p.img_skill_3_i = function () {
                    var t = new egret.gui.UIAsset();
                    this.img_skill_3 = t;
                    this.__s(t, ["height", "source", "width", "x", "y"], [84, "resource/assets/skill/fulong/icon_skill_13.png", 84, 894, 401]);
                    return t;
                };
                p.img_skill_4_i = function () {
                    var t = new egret.gui.UIAsset();
                    this.img_skill_4 = t;
                    this.__s(t, ["height", "source", "width", "x", "y"], [84, "resource/assets/skill/fulong/icon_skill_14.png", 84, 1020, 394]);
                    return t;
                };
                p.img_stroke_i = function () {
                    var t = new egret.gui.UIAsset();
                    this.img_stroke = t;
                    this.__s(t, ["source", "x", "y"], ["resource/assets/skill/fulong/icon_skill_15.png", 1003, 237]);
                    return t;
                };
                p.__3_i = function () {
                    var t = new egret.gui.UIAsset();
                    this.__s(t, ["height", "source", "width", "x", "y"], [196, "resource/assets/UI/bg/bg_direct.png", 193, 63, 408]);
                    return t;
                };
                DlgControllerSkin._skinParts = ["btnUp", "btnDown", "btnRight", "btnLeft", "imgRoleHead", "img_attack", "btnAttack", "img_skill_4", "btnD", "img_skill_3", "btnC", "img_skill_2", "btnB", "img_skill_1", "btnA", "img_stroke", "btnStroke"];
                return DlgControllerSkin;
            })(egret.gui.Skin);
            skins.DlgControllerSkin = DlgControllerSkin;
            egret.registerClass(DlgControllerSkin,"game.ui.skins.DlgControllerSkin");
        })(skins = ui.skins || (ui.skins = {}));
    })(ui = game.ui || (game.ui = {}));
})(game || (game = {}));
