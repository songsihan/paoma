var DlgPushMoeny = (function (_super) {
    __extends(DlgPushMoeny, _super);
    function DlgPushMoeny() {
        _super.call(this);
        this.groupIndex = null;
        this.imageList = [];
        this.time = 0;
        console.log("init DlgPushMoeny");
        this.skinName = "game.ui.skins.DlgPushMoneySkin";
        this.horseMgr = game.SelHorseMgr.GetInstance();
    }
    var d = __define,c=DlgPushMoeny;p=c.prototype;
    p.partAdded = function (partName, instance) {
        console.log("DlgPushMoeny  partAdded");
        _super.prototype.partAdded.call(this, partName, instance);
        if (instance == this.btn1) {
            this.btn1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBtn1, this);
        }
        else if (instance == this.btn2) {
            this.btn2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBtn2, this);
        }
        else if (instance == this.btn3) {
            this.btn3.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBtn3, this);
        }
        else if (instance == this.btn4) {
            this.btn4.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBtn4, this);
        }
        else if (instance == this.btn5) {
            this.btn5.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBtn5, this);
        }
        else if (instance == this.btn6) {
            this.btn6.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBtn6, this);
        }
        else if (instance == this.btn7) {
            this.btn7.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBtn7, this);
        }
        else if (instance == this.btn8) {
            this.btn8.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBtn8, this);
        }
        else if (instance == this.btn9) {
            this.btn9.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBtn9, this);
        }
        else if (instance == this.btn10) {
            this.btn10.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBtn10, this);
        }
        else if (instance == this.btn100) {
            this.btn100.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBtn100, this);
        }
        else if (instance == this.btn1000) {
            this.btn1000.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBtn1000, this);
        }
        else if (instance == this.btn5000) {
            this.btn5000.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBtn5000, this);
        }
        else if (instance == this.btn10000) {
            this.btn10000.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBtn10000, this);
        }
        else if (instance == this.btnHistory) {
            this.btnHistory.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBtnHistory, this);
        }
        else if (instance == this.btnPlayRule) {
            this.btnPlayRule.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBtnPlayRule, this);
        }
    };
    p.setSelHorseIndex = function (index) {
        this.selHorseIndex = index;
        this.imageList[1] = this.selImage1;
        this.imageList[2] = this.selImage2;
        this.imageList[3] = this.selImage3;
        this.imageList[4] = this.selImage4;
        this.imageList[5] = this.selImage5;
        this.imageList[6] = this.selImage6;
        this.imageList[7] = this.selImage7;
        this.imageList[8] = this.selImage8;
        this.imageList[9] = this.selImage9;
        this.imageList[10] = this.selImage10;
        // 初值化倒计时
        this.initCountdownLabel();
    };
    p.initCountdownLabel = function () {
        this.time = 10;
        var timer = new egret.Timer(1000, 0);
        timer.addEventListener(egret.TimerEvent.TIMER, this.onTimeUpdate, this);
        timer.start();
        this.onTimeUpdate();
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
        if (this.time === 0) {
            console.log("onTimeUpdate:startgame");
            game.GameEvent.dispatchEvent(this, game.GameEvent.TIEM_END, false, "TIEM_END");
        }
    };
    p.onBtn1 = function () {
        this.groupIndex = 1;
        this.selgroup(1);
    };
    p.onBtn2 = function () {
        this.groupIndex = 2;
        this.selgroup(2);
    };
    p.onBtn3 = function () {
        this.groupIndex = 3;
        this.selgroup(3);
    };
    p.onBtn4 = function () {
        this.groupIndex = 4;
        this.selgroup(4);
    };
    p.onBtn5 = function () {
        this.groupIndex = 5;
        this.selgroup(5);
    };
    p.onBtn6 = function () {
        this.groupIndex = 6;
        this.selgroup(6);
    };
    p.onBtn7 = function () {
        this.groupIndex = 7;
        this.selgroup(7);
    };
    p.onBtn8 = function () {
        this.groupIndex = 8;
        this.selgroup(8);
    };
    p.onBtn9 = function () {
        this.groupIndex = 9;
        this.selgroup(9);
    };
    p.onBtn10 = function () {
        this.groupIndex = 10;
        this.selgroup(10);
    };
    // 选择组合
    p.selgroup = function (index) {
        for (var i = 1; i <= 10; i++) {
            if (index == i) {
                this.imageList[i].visible = true;
                console.log("onBtn1" + i);
            }
            else
                this.imageList[i].visible = false;
        }
        this.reshTotalMoney();
    };
    p.onBtn100 = function () {
        this.pushMoeny(100);
    };
    p.onBtn5000 = function () {
        this.pushMoeny(5000);
    };
    p.onBtn1000 = function () {
        this.pushMoeny(1000);
    };
    p.onBtn10000 = function () {
        this.pushMoeny(10000);
    };
    p.pushMoeny = function (moeny) {
        if (!this.groupIndex)
            return;
        var image = "";
        switch (moeny) {
            case 100:
                image = "word_100_png";
                break;
            case 1000:
                image = "word_1000_png";
                break;
            case 5000:
                image = "word_100_png";
                break;
            case 10000:
                image = "word_10000_png";
                break;
        }
        this.horseMgr.setPushMoeny(this.groupIndex, moeny);
        game.Game.GetInstance().setPushmoneyImage(image);
        this.reshTotalMoney();
    };
    p.reshTotalMoney = function () {
        this.labelTatolMoney.text = "X" + this.horseMgr.getPushMoney(this.groupIndex);
    };
    p.onBtnHistory = function () {
        game.Game.GetInstance().openDlgHistory();
    };
    p.onBtnPlayRule = function () {
        game.Game.GetInstance().openDlgPlayRule();
    };
    return DlgPushMoeny;
})(egret.gui.SkinnableContainer);
egret.registerClass(DlgPushMoeny,"DlgPushMoeny");
