var DlgHorseInfo = (function (_super) {
    __extends(DlgHorseInfo, _super);
    //private push2: egret.gui.Button;
    function DlgHorseInfo() {
        _super.call(this);
        console.log("init DlgHorseInfo");
        this.skinName = "game.ui.skins.DlgHorseInfoSkin";
        //game.Game.GetInstance().SetSelRoleIdx(2);
    }
    var d = __define,c=DlgHorseInfo;p=c.prototype;
    p.partAdded = function (partName, instance) {
        console.log("DlgHorseInfo  partAdded");
        _super.prototype.partAdded.call(this, partName, instance);
        if (instance == this.closeBtn) {
            this.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OncloseBtn, this);
        }
    };
    p.OncloseBtn = function () {
        console.log("OncloseBtn");
        game.GameEvent.dispatchEvent(this, game.GameEvent.ClOSE_HORSE_INFO, false, "SELECT_ONE_HORSE");
    };
    return DlgHorseInfo;
})(egret.gui.SkinnableContainer);
egret.registerClass(DlgHorseInfo,"DlgHorseInfo");
