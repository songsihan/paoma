var DlgSelectHorse = (function (_super) {
    __extends(DlgSelectHorse, _super);
    function DlgSelectHorse() {
        _super.call(this);
        console.log("init dlgselecthorse");
        this.skinName = "game.ui.skins.DlgSelectHorseSkin";
    }
    var d = __define,c=DlgSelectHorse;p=c.prototype;
    p.partAdded = function (partName, instance) {
        console.log("partAdded");
        _super.prototype.partAdded.call(this, partName, instance);
        if (instance == this.push1) {
            this.push1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnBtnPush1, this);
        }
        else if (instance == this.push2) {
            this.push2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnBtnPush2, this);
        }
        else if (instance == this.push3) {
            this.push3.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnBtnPush3, this);
        }
        else if (instance == this.push4) {
            this.push4.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnBtnPush4, this);
        }
        else if (instance == this.push5) {
            this.push5.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnBtnPush5, this);
        }
    };
    p.OnBtnPush1 = function () {
        console.log("call  OnBtnPush1");
        game.GameEvent.dispatchEvent(this, game.GameEvent.SELECT_ONE_HORSE, false, "SELECT_ONE_HORSE");
        game.Game.GetInstance().setSelHorseIndex(1);
    };
    p.OnBtnPush2 = function () {
        console.log("call  OnBtnPush2");
        game.GameEvent.dispatchEvent(this, game.GameEvent.SELECT_ONE_HORSE, false, "SELECT_ONE_HORSE");
        game.Game.GetInstance().setSelHorseIndex(2);
    };
    p.OnBtnPush3 = function () {
        console.log("call  OnBtnPush3");
        game.GameEvent.dispatchEvent(this, game.GameEvent.SELECT_ONE_HORSE, false, "SELECT_ONE_HORSE");
        game.Game.GetInstance().setSelHorseIndex(3);
    };
    p.OnBtnPush4 = function () {
        console.log("call  OnBtnPush4");
        game.GameEvent.dispatchEvent(this, game.GameEvent.SELECT_ONE_HORSE, false, "SELECT_ONE_HORSE");
        game.Game.GetInstance().setSelHorseIndex(4);
    };
    p.OnBtnPush5 = function () {
        console.log("call  OnBtnPush5");
        game.GameEvent.dispatchEvent(this, game.GameEvent.SELECT_ONE_HORSE, false, "SELECT_ONE_HORSE");
        game.Game.GetInstance().setSelHorseIndex(5);
    };
    p.refreshBtn = function (index) {
        if (index == 1) {
            this.push1.enabled = false;
        }
        else if (index == 2) {
            this.push2.enabled = false;
        }
        else if (index == 3) {
            this.push3.enabled = false;
        }
        else if (index == 4) {
            this.push4.enabled = false;
        }
        else if (index == 5) {
            this.push5.enabled = false;
        }
    };
    return DlgSelectHorse;
})(egret.gui.SkinnableContainer);
egret.registerClass(DlgSelectHorse,"DlgSelectHorse");
