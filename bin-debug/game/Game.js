/**
 * 游戏的主要显示容器
 * 游戏的内容,都从shell开始
 */
var game;
(function (game) {
    var Game = (function () {
        function Game() {
            this.horseList = [];
            this.pushMoneyImage = null;
            this.isSetup = false;
            this.isSetcircel = false;
            this.angle = (2 * Math.PI / 360) * 225;
            this.selRoleIdx = 0;
            this.playIndex = 1;
            this.selHorseNum = 0;
            this.isTurn = false;
            this.posX = 2490;
            this.horseMgr = game.SelHorseMgr.GetInstance();
        }
        var d = __define,c=Game;p=c.prototype;
        p.SetSelRoleIdx = function (selRoleIdx) {
            this.selRoleIdx = selRoleIdx;
        };
        p.GetSelRoleIdx = function () {
            return this.selRoleIdx;
        };
        p.GetRoleHeadImgByIdx = function (idx) {
            if (this.selRoleIdx == 0) {
                return "fulong_head_png";
            }
            else if (this.selRoleIdx == 1) {
                return "head_void_wizard_png";
            }
            else if (this.selRoleIdx == 2) {
                return "head_void_wizard_png";
            }
        };
        p.Init = function (rootDisplay) {
            this.rootDisplay = rootDisplay;
            this.baseLoader = new BaseLoader();
            this.loadingView = new LoadingUI();
            this.loadingView.x = (this.GetStageWidth() - this.loadingView.width) >> 1;
            this.gameLayer = new egret.DisplayObjectContainer();
            this.rootDisplay.addChild(this.gameLayer);
            this.gameLayer.width = 3439;
            this.gameLayer.height = 1821;
            this.uiStage = new egret.gui.UIStage();
            this.rootDisplay.addChild(this.uiStage);
        };
        Game.GetInstance = function () {
            if (!this.instance) {
                this.instance = new Game();
            }
            return this.instance;
        };
        p.Run = function () {
            this.ChgState(game.GAME_STATE.LOGIN);
        };
        p.ChgState = function (state) {
            if (this.state == state)
                return;
            if (state == game.GAME_STATE.LOGIN) {
                this.OnChgLogin();
            }
            else if (state == game.GAME_STATE.NORMAL) {
            }
            else if (state == game.GAME_STATE.OVER) {
            }
        };
        p.OnChgLogin = function () {
            this.baseLoader.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
            this.baseLoader.LoadConfig();
            this.state = game.GAME_STATE.LOGIN;
        };
        p.onConfigComplete = function (event) {
            RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
            this.baseLoader.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.OnLoadResProgress, this);
            this.baseLoader.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.OnLoadResComplete, this);
            this.gameLayer.addChild(this.loadingView);
            this.baseLoader.LoadGroupRes("ui");
        };
        p.OnLoadResProgress = function (event) {
            this.loadingView.setProgress(event.itemsLoaded, event.itemsTotal);
        };
        p.OnLoadResComplete = function (event) {
            this.gameLayer.removeChild(this.loadingView);
            switch (this.state) {
                case game.GAME_STATE.LOGIN:
                    {
                        this.EnterLogin();
                    }
                    break;
                case game.GAME_STATE.NORMAL:
                    {
                        this.EnterNormal();
                    }
                    break;
            }
        };
        p.setSelHorseIndex = function (selHorsedx) {
            this.selectIndex = selHorsedx;
        };
        p.setPlayIndex = function (playIndex) {
            this.playIndex = playIndex;
        };
        p.onSelectHorse = function () {
            console.log("call  onSelectorse");
            /* this.dlgHorseInfo = new DlgHorseInfo()
             this.uiStage.addElement(this.dlgHorseInfo);
             this.dlgHorseInfo.addEventListener(game.GameEvent.ClOSE_HORSE_INFO, this.closeHorseInfo,this);*/
            if (!this.dlgPushMoeny) {
                this.openDlgPushMoney();
            }
        };
        p.setPushmoneyImage = function (image) {
            if (!this.pushMoneyImage) {
                this.pushMoneyImage = new egret.gui.UIAsset();
                this.pushMoneyImage.source = RES.getRes(image);
                this.uiStage.addElement(this.pushMoneyImage);
                this.pushMoneyImage.x = 568;
                this.pushMoneyImage.y = 320;
            }
            else
                this.pushMoneyImage.source = RES.getRes(image);
        };
        p.openDlgPushMoney = function () {
            this.dlgPushMoeny = new DlgPushMoeny();
            this.uiStage.addElement(this.dlgPushMoeny);
            this.dlgPushMoeny.addEventListener(game.GameEvent.PUSH_MONEY, this.pushMoeny, this);
            this.dlgPushMoeny.addEventListener(game.GameEvent.CLOSE_PUSH_MONEY_DLG, this.closeDlgPushMoeny, this);
            this.dlgPushMoeny.addEventListener(game.GameEvent.TIEM_END, this.startGmae, this);
            this.selHorseNum = this.selHorseNum + 1;
            this.dlgPushMoeny.setSelHorseIndex(this.selectIndex);
        };
        p.EnterLogin = function () {
            this.openDlgPushMoney();
            //this.openDlgSelPlayMethod();             
            this.bgSenceMap = new egret.Bitmap();
            this.bgSenceMap.texture = RES.getRes("bg_big_color_jpg");
            this.gameLayer.addChild(this.bgSenceMap);
        };
        p.openDlgSelPlayMethod = function () {
            this.dlgSelPlayMethod = new DlgSelPlayMethod();
            this.dlgSelPlayMethod.setCountTime(10);
            this.uiStage.addElement(this.dlgSelPlayMethod);
            this.dlgSelPlayMethod.addEventListener(game.GameEvent.SELECT_HORSE, this.openSelHorse, this);
            this.dlgSelPlayMethod.addEventListener(game.GameEvent.TIEM_END, this.startGmae, this);
        };
        p.openSelHorse = function () {
            console.log("openSelHorse");
            this.uiStage.removeElement(this.dlgSelPlayMethod);
            this.dlgSelectHorse = new DlgSelectHorse();
            this.uiStage.addElement(this.dlgSelectHorse);
            this.dlgSelectHorse.addEventListener(game.GameEvent.SELECT_ONE_HORSE, this.onSelectHorse, this);
        };
        p.openDlgPlayRule = function () {
            this.dlgPlayRule = new DlgPlayRule();
            this.uiStage.addElement(this.dlgPlayRule);
        };
        p.closeDlgPlayRule = function () {
            console.log("closeDlgPlayRule");
            this.uiStage.removeElement(this.dlgPlayRule);
        };
        p.openDlgHistory = function () {
            this.dlgHistory = new DlgHistory();
            this.uiStage.addElement(this.dlgHistory);
        };
        p.closeDlgHistory = function () {
            console.log("closeDlgPlayRule");
            this.uiStage.removeElement(this.dlgHistory);
        };
        p.openDlgRank = function () {
            this.dlgRank = new DlgRank();
            this.uiStage.addElement(this.dlgRank);
        };
        p.startGmae = function () {
            console.log("startGmae");
            this.gameLayer.removeChildren();
            this.uiStage.removeAllElements();
            this.bgSenceMap = new egret.Bitmap();
            this.bgSenceMap.texture = RES.getRes("bg_map_image_jpg");
            this.gameLayer.addChild(this.bgSenceMap);
            this.gameLayer.x = 5;
            this.gameLayer.y = -500;
            var list = this.horseMgr.getHorseMapInfo();
            for (var i = 1; i <= game.SelHorseMgr.horseNum; i++) {
                var oneHorse = new game.Horse(list[i], i);
                this.gameLayer.addChild(oneHorse);
                this.horseList[i] = oneHorse;
                oneHorse.setPosition(list[i].startPoint.x, list[i].startPoint.y);
            }
            this.initTimer();
            this.openDlgRank();
        };
        p.initTimer = function () {
            var timer = new egret.Timer(70);
            timer.addEventListener(egret.TimerEvent.TIMER, this.onTimeUpdate, this);
            timer.start();
            var timerRank = new egret.Timer(1000);
            timerRank.addEventListener(egret.TimerEvent.TIMER, this.onTimeUpdateRank, this);
            timerRank.start();
        };
        p.onTimeUpdate = function () {
            var x = 0;
            var y = 0;
            for (var i = 1; i <= game.SelHorseMgr.horseNum; i++) {
                var oneHorse = this.horseList[i];
                oneHorse.updatePos();
                if (oneHorse.getIndex() == game.SelHorseMgr.viewHorseIndex) {
                    x = oneHorse.getPositionX();
                    y = oneHorse.getPositionY();
                }
            }
            this.gameLayer.x = 5 - (x - 370);
            this.gameLayer.y = -500 - (y - 910);
            if (this.gameLayer.x < -2303) {
                this.gameLayer.x = -2303;
            }
            if (this.gameLayer.y < -1181) {
                this.gameLayer.y = -1181;
            }
        };
        p.onTimeUpdateRank = function () {
            // 刷新排名
            this.sortHorse();
            this.dlgRank.refreshRankInfo(this.horseList);
        };
        p.sortHorse = function () {
            for (var i = 1; i <= game.SelHorseMgr.horseNum; i++) {
                for (var j = i + 1; j <= game.SelHorseMgr.horseNum; j++) {
                    var oneHorse = this.horseList[i];
                    var otherHorse = this.horseList[j];
                    var totalLength = oneHorse.getTotalLength();
                    if (oneHorse.getTotalLength() < otherHorse.getTotalLength()) {
                        var horse = oneHorse;
                        this.horseList[i] = otherHorse;
                        this.horseList[j] = oneHorse;
                    }
                }
            }
        };
        p.colseSelHorse = function () {
            this.uiStage.removeElement(this.dlgSelectHorse);
            this.dlgSelectHorse.removeEventListener(game.GameEvent.SELECT_ONE_HORSE, this.onSelectHorse, this);
        };
        // 刷新选马界面
        p.refreshSelHorse = function () {
            if (this.dlgSelectHorse) {
                this.dlgSelectHorse.refreshBtn(this.selectIndex);
            }
        };
        p.closeHorseInfo = function () {
            console.log("closeHorseInfo");
            this.uiStage.removeElement(this.dlgHorseInfo);
            this.dlgHorseInfo.removeEventListener(game.GameEvent.ClOSE_HORSE_INFO, this.closeHorseInfo, this);
        };
        p.pushMoeny = function () {
            if (this.playIndex <= this.selHorseNum) {
                this.removeDlgPushMoeny();
                this.openDlgSelPlayMethod();
                //刷新主界面已选中按钮
                this.dlgSelPlayMethod.reshSelPlayInfo(this.playIndex);
                this.colseSelHorse();
                this.selHorseNum = 0;
            }
            else {
                this.removeDlgPushMoeny();
                this.refreshSelHorse();
            }
        };
        p.closeDlgPushMoeny = function () {
            console.log("closeDlgPushMoeny");
            this.removeDlgPushMoeny();
            this.selHorseNum = this.selHorseNum - 1;
        };
        p.removeDlgPushMoeny = function () {
            this.uiStage.removeElement(this.dlgPushMoeny);
            this.dlgPushMoeny.removeEventListener(game.GameEvent.PUSH_MONEY, this.pushMoeny, this);
            this.dlgPushMoeny = null;
        };
        p.EnterNormal = function () {
            this.baseLoader.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.OnLoadResProgress, this);
            this.baseLoader.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.OnLoadResComplete, this);
            //场景
            this.scene = new game.Scene();
            // this.gameLayer.addChild(this.scene);
            this.dlgController = new DlgController();
            this.uiStage.addElement(this.dlgController);
            this.player = game.RoleFactory.GetInstance().CreateRole(game.TYPE_ROLE.PLAYER, this.selRoleIdx);
            this.player.SetPos(200, 400);
            this.enemey = game.RoleFactory.GetInstance().CreateRole(game.TYPE_ROLE.ENEMEY, 0);
            this.enemey.SetPos(900, 400);
            this.enemey.SetDirection(-1);
            this.gameLayer.addChild(this.player);
            this.gameLayer.addChild(this.enemey);
            game.GameSound.GetInstance().PlayBGSound("resource/sound/BGM_jl1.mp3", true);
        };
        p.OnLeftMoveBegin = function () {
            this.player.MoveLeft();
        };
        p.OnRightMoveBegin = function () {
            this.player.MoveRight();
        };
        p.OnDownMoveBegin = function () {
            this.player.MoveDown();
        };
        p.OnUpMoveBegin = function () {
            this.player.MoveUp();
        };
        p.GetEnemey = function () {
            return this.enemey;
        };
        p.GetPlayer = function () {
            return this.player;
        };
        p.ResortDisplayList = function () {
            var playerYPos = this.player.GetPosY();
            var enemeyYPos = this.enemey.GetPosY();
            var childIdx1 = this.gameLayer.getChildIndex(this.player);
            var childIdx2 = this.gameLayer.getChildIndex(this.enemey);
            var bComYPos = playerYPos > enemeyYPos;
            var bComChild = childIdx1 > childIdx2;
            if (bComYPos == bComChild)
                return;
            this.gameLayer.swapChildren(this.player, this.enemey);
        };
        p.GetStageWidth = function () {
            return this.rootDisplay.stage.stageWidth;
        };
        p.GetStageHeight = function () {
            return this.rootDisplay.stage.stageHeight;
        };
        p.GetTime = function () {
            var dateObj = new Date();
            return dateObj.getTime();
        };
        p.GetSelRoleDlg = function () {
            return this.dlgSelRole;
        };
        return Game;
    })();
    game.Game = Game;
    egret.registerClass(Game,"game.Game");
})(game || (game = {}));
