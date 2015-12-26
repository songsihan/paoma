var DlgHistory = (function (_super) {
    __extends(DlgHistory, _super);
    function DlgHistory() {
        _super.call(this);
        this.skinName = "game.ui.skins.DlgHistorySkin";
    }
    var d = __define,c=DlgHistory;p=c.prototype;
    p.partAdded = function (partName, instance) {
        console.log("DlgHorseInfo  partAdded");
        _super.prototype.partAdded.call(this, partName, instance);
        if (instance == this.closeBtn) {
            this.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OncloseBtn, this);
        }
    };
    p.OncloseBtn = function () {
        game.Game.GetInstance().closeDlgHistory();
    };
    return DlgHistory;
})(egret.gui.SkinnableContainer);
egret.registerClass(DlgHistory,"DlgHistory");
