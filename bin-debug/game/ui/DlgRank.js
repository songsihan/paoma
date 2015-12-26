var DlgRank = (function (_super) {
    __extends(DlgRank, _super);
    function DlgRank() {
        _super.call(this);
        this.skinName = "game.ui.skins.DlgRankSkin";
    }
    var d = __define,c=DlgRank;p=c.prototype;
    p.partAdded = function (partName, instance) {
        console.log("DlgHorseInfo  partAdded");
        _super.prototype.partAdded.call(this, partName, instance);
        if (instance == this.closeBtn) {
            this.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OncloseBtn, this);
        }
    };
    p.OncloseBtn = function () {
    };
    p.refreshRankInfo = function (ranklist) {
        var firstHorse = ranklist[1];
        var secondtHorse = ranklist[2];
        this.labelFirst.text = firstHorse.getIndex() + "";
        this.labelSecond.text = secondtHorse.getIndex() + "";
    };
    return DlgRank;
})(egret.gui.SkinnableContainer);
egret.registerClass(DlgRank,"DlgRank");
