var DlgSelPlayMethod = (function (_super) {
    __extends(DlgSelPlayMethod, _super);
    function DlgSelPlayMethod() {
        _super.call(this);
        console.log("DlgSelPlayMethod init");
        this.skinName = "game.ui.skins.DlgSelPlayMethodSkin";
        this.horseMgr = game.SelHorseMgr.GetInstance();
    }
    var d = __define,c=DlgSelPlayMethod;p=c.prototype;
    p.partAdded = function (partName, instance) {
        console.log("DlgSelPlayMethod");
        _super.prototype.partAdded.call(this, partName, instance);
        if (instance == this.countDownLabel) {
            //this.countDownLabel.text = this.time + "";
            var timer = new egret.Timer(1000, 0);
            timer.addEventListener(egret.TimerEvent.TIMER, this.onTimeUpdate, this);
            this.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.onTimeComplete, this);
            timer.start();
            this.onTimeUpdate();
        }
        else if (instance == this.selOneStarBtn) {
            this.selOneStarBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnselOneStarBtn, this);
        }
        else if (instance == this.selTwoStarBtn) {
            this.selTwoStarBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnselTwoStarBtn, this);
        }
        else if (instance == this.selThreeStarBtn) {
            this.selThreeStarBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnselThreeStarBtn, this);
        }
        else if (instance == this.resetBtn) {
            this.resetBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnresetBtn, this);
        }
    };
    p.setCountTime = function (time) {
        console.log("setCountTime");
        this.time = time;
        //this.onTimeUpdate();
    };
    p.onTimeUpdate = function () {
        if (this.time == 0) {
            return;
        }
        console.log("onTimeUpdate:%d", this.time);
        this.time = this.time - 1;
        var minute = Math.floor(this.time / 60);
        var sec = this.time % 60;
        var secStr = sec + "";
        if (sec < 10) {
            secStr = "0" + secStr;
        }
        this.countDownLabel.text = minute + ":" + secStr;
        if (this.time === 0 && this.selPlayIndex != null) {
            game.GameEvent.dispatchEvent(this, game.GameEvent.TIEM_END, false, "TIEM_END");
        }
    };
    p.onTimeComplete = function () {
        this.countDownLabel.text = "";
    };
    p.reshSelPlayInfo = function (index) {
        if (index == game.SELECT_INDEX.ONE_STAR) {
            this.selOneStarBtn.visible = false;
            this.seledOneStarBtn.visible = true;
        }
        else if (index == game.SELECT_INDEX.TWO_STAR) {
            this.selTwoStarBtn.visible = false;
            this.seledTwoStarBtn.visible = true;
        }
        else if (index == game.SELECT_INDEX.THREE_STAR) {
            this.selThreeStarBtn.visible = false;
            this.seledThreeStarBtn.visible = true;
        }
        this.selPlayIndex = index;
        this.horseMgr.setSelStar(index);
    };
    p.OnselOneStarBtn = function () {
        console.log("OnselOneStarBtn");
        if (this.selPlayIndex == null) {
            game.Game.GetInstance().setPlayIndex(game.SELECT_INDEX.ONE_STAR);
            game.GameEvent.dispatchEvent(this, game.GameEvent.SELECT_HORSE, false, "SELECT_HORSE");
        }
    };
    p.OnselTwoStarBtn = function () {
        if (this.selPlayIndex == null) {
            game.Game.GetInstance().setPlayIndex(game.SELECT_INDEX.TWO_STAR);
            game.GameEvent.dispatchEvent(this, game.GameEvent.SELECT_HORSE, false, "SELECT_HORSE");
        }
    };
    p.OnselThreeStarBtn = function () {
        if (this.selPlayIndex == null) {
            game.Game.GetInstance().setPlayIndex(game.SELECT_INDEX.THREE_STAR);
            game.GameEvent.dispatchEvent(this, game.GameEvent.SELECT_HORSE, false, "SELECT_HORSE");
        }
    };
    p.OnresetBtn = function () {
        console.log("OnresetBtn");
        this.selPlayIndex = null;
        this.selOneStarBtn.visible = true;
        this.seledOneStarBtn.visible = false;
        this.selTwoStarBtn.visible = true;
        this.seledTwoStarBtn.visible = false;
        this.selThreeStarBtn.visible = true;
        this.seledThreeStarBtn.visible = false;
        this.horseMgr.setSelStar(null);
    };
    return DlgSelPlayMethod;
})(egret.gui.SkinnableContainer);
egret.registerClass(DlgSelPlayMethod,"DlgSelPlayMethod");
