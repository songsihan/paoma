var DlgPlayRule = (function (_super) {
    __extends(DlgPlayRule, _super);
    function DlgPlayRule() {
        _super.call(this);
        this.skinName = "game.ui.skins.DlgPlayRuleSkin";
        //game.Game.GetInstance().SetSelRoleIdx(2);
    }
    var d = __define,c=DlgPlayRule;p=c.prototype;
    p.partAdded = function (partName, instance) {
        console.log("DlgHorseInfo  partAdded");
        _super.prototype.partAdded.call(this, partName, instance);
        if (instance == this.closeBtn) {
            this.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OncloseBtn, this);
        }
    };
    p.OncloseBtn = function () {
        game.Game.GetInstance().closeDlgPlayRule();
    };
    return DlgPlayRule;
})(egret.gui.SkinnableContainer);
egret.registerClass(DlgPlayRule,"DlgPlayRule");
