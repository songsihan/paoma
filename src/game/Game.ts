
/**
 * 游戏的主要显示容器
 * 游戏的内容,都从shell开始
 */
module game {
    export class Game 
    {
        private static instance: Game;
        private baseLoader: BaseLoader;

        public rootDisplay: egret.DisplayObjectContainer;
        private state: game.GAME_STATE;
        private selectIndex: game.SELECT_INDEX;

        //游戏层,包含场景
        private gameLayer: egret.DisplayObjectContainer;
        private scene: Scene;
        private player: game.Player;
        private enemey: game.Enemey;
        private loadingView: LoadingUI;
        private bgSenceMap: egret.Bitmap;
        private oneHorse: game.Horse;
        private oneHorse1: game.Horse;
        private horseList: Array<game.Horse> = [];
        private horseMgr: game.SelHorseMgr;
        

        //游戏UI层
        private dlgSelRole: DlgSelRole;
        private dlgSelectHorse: DlgSelectHorse;
        private dlgSelPlayMethod: DlgSelPlayMethod;
        private dlgHorseInfo: DlgHorseInfo;
        private dlgPushMoeny: DlgPushMoeny;
        private dlgPlayRule: DlgPlayRule;
        private dlgHistory: DlgHistory;
        private dlgRank: DlgRank;
        
        private SelectScroll:SelectScroll;
        private dlgController: DlgController;
        private uiStage: egret.gui.UIStage;
        private pushMoneyImage: egret.gui.UIAsset = null;

        private selRoleIdx: number;
        private playIndex: number;
        private selHorseNum: number;
        private k: number;
        private isTurn: Boolean;
        private posX: number;
        private isSetup: Boolean = false;
        private isSetcircel: Boolean = false;
        private angle: number = (2*Math.PI/360) * 225;
        

        public constructor()
        {
            this.selRoleIdx = 0;
            this.playIndex = 1;
            this.selHorseNum = 0;
            this.isTurn = false;
            this.posX = 2490;
            this.horseMgr = SelHorseMgr.GetInstance();
        }

        public SetSelRoleIdx(selRoleIdx: number)
        {
            this.selRoleIdx = selRoleIdx;
        }
        public GetSelRoleIdx() :number
        {
            return this.selRoleIdx;
        }

        public GetRoleHeadImgByIdx(idx:number) :string
        {
            if(this.selRoleIdx == 0)
            {
                return "fulong_head_png";
            }
            else if (this.selRoleIdx == 1)
            {
                return "head_void_wizard_png";
            }
            else if (this.selRoleIdx == 2)
            {
                return "head_void_wizard_png";
            }
        }

        public Init(rootDisplay: egret.DisplayObjectContainer)
        {
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
        }

        public static GetInstance(): Game
        {
            if (!this.instance)
            {
                this.instance = new Game();
            }

            return this.instance;
        }

        public Run()
        {
            this.ChgState(game.GAME_STATE.LOGIN)
        }

        public ChgState(state: game.GAME_STATE)
        {
            if (this.state == state) return;

            if (state == game.GAME_STATE.LOGIN)
            {
                this.OnChgLogin();
            }
            else if(state == game.GAME_STATE.NORMAL)
            {
                //this.OnChgNormal();
            }
            else if(state == game.GAME_STATE.OVER)
            {
                //退出游戏
            }
        }

        public OnChgLogin()
        {
            this.baseLoader.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);

            this.baseLoader.LoadConfig();
            this.state = game.GAME_STATE.LOGIN;
        }


        private onConfigComplete(event: RES.ResourceEvent)
        {
            RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);

            this.baseLoader.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.OnLoadResProgress, this);
            this.baseLoader.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.OnLoadResComplete,this);

            this.gameLayer.addChild(this.loadingView);
            this.baseLoader.LoadGroupRes("ui");
        }

        private OnLoadResProgress(event: RES.ResourceEvent)
        {
            this.loadingView.setProgress(event.itemsLoaded, event.itemsTotal);
        }

        private OnLoadResComplete(event: RES.ResourceEvent)
        {
            this.gameLayer.removeChild(this.loadingView);

            switch(this.state)
            {
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
        }

        public setSelHorseIndex(selHorsedx: number)
        {
            this.selectIndex = selHorsedx;
        }
        
        public setPlayIndex(playIndex: number)
        {
            this.playIndex = playIndex;
        }
        
        public onSelectHorse ()
        {    console.log("call  onSelectorse");
           /* this.dlgHorseInfo = new DlgHorseInfo()
            this.uiStage.addElement(this.dlgHorseInfo);   
            this.dlgHorseInfo.addEventListener(game.GameEvent.ClOSE_HORSE_INFO, this.closeHorseInfo,this);*/
            if(!this.dlgPushMoeny) {

                this.openDlgPushMoney();
            }

        }
        
        
        public setPushmoneyImage(image)
        {
            if(!this.pushMoneyImage) {
                this.pushMoneyImage = new egret.gui.UIAsset();
                this.pushMoneyImage.source = RES.getRes(image)
                this.uiStage.addElement(this.pushMoneyImage);
                this.pushMoneyImage.x = 568;
                this.pushMoneyImage.y = 320;
            }
            else
                this.pushMoneyImage.source = RES.getRes(image);
                                
        }
        
        public openDlgPushMoney()
        {
            this.dlgPushMoeny = new DlgPushMoeny()
            this.uiStage.addElement(this.dlgPushMoeny);
            this.dlgPushMoeny.addEventListener(game.GameEvent.PUSH_MONEY,this.pushMoeny,this);
            this.dlgPushMoeny.addEventListener(game.GameEvent.CLOSE_PUSH_MONEY_DLG,this.closeDlgPushMoeny,this);
            this.dlgPushMoeny.addEventListener(game.GameEvent.TIEM_END, this.startGmae,this);
            this.selHorseNum = this.selHorseNum + 1;
            this.dlgPushMoeny.setSelHorseIndex(this.selectIndex);
        }
        
        public EnterLogin()
        {
            this.openDlgPushMoney();
            //this.openDlgSelPlayMethod();             
            this.bgSenceMap = new egret.Bitmap();
            this.bgSenceMap.texture = RES.getRes("bg_big_color_jpg");
            this.gameLayer.addChild(this.bgSenceMap)

        }
        
        public openDlgSelPlayMethod()
        {
            this.dlgSelPlayMethod = new DlgSelPlayMethod();
            this.dlgSelPlayMethod.setCountTime(10);
            this.uiStage.addElement(this.dlgSelPlayMethod);
            this.dlgSelPlayMethod.addEventListener(game.GameEvent.SELECT_HORSE, this.openSelHorse,this);
            this.dlgSelPlayMethod.addEventListener(game.GameEvent.TIEM_END, this.startGmae,this);
        }
        
        
        public openSelHorse()
        {
            console.log("openSelHorse");
            this.uiStage.removeElement(this.dlgSelPlayMethod);
            this.dlgSelectHorse = new DlgSelectHorse();
            this.uiStage.addElement(this.dlgSelectHorse);
            this.dlgSelectHorse.addEventListener(game.GameEvent.SELECT_ONE_HORSE, this.onSelectHorse,this);
            
        }
        
        public openDlgPlayRule()
        {
            this.dlgPlayRule = new DlgPlayRule();
            this.uiStage.addElement(this.dlgPlayRule);
        }
        
        public closeDlgPlayRule()
        {
            console.log("closeDlgPlayRule");
            this.uiStage.removeElement(this.dlgPlayRule);
        }
        
        public openDlgHistory()
        {
            this.dlgHistory = new DlgHistory();
            this.uiStage.addElement(this.dlgHistory);
        }
        
        public closeDlgHistory()
        {
            console.log("closeDlgPlayRule");
            this.uiStage.removeElement(this.dlgHistory);
        }
        
        public openDlgRank()
        {
            this.dlgRank = new DlgRank();
            this.uiStage.addElement(this.dlgRank);
        }
        
        public startGmae()
        {
            console.log("startGmae");
            this.gameLayer.removeChildren()
            this.uiStage.removeAllElements()
            this.bgSenceMap = new egret.Bitmap();
            this.bgSenceMap.texture = RES.getRes("bg_map_image_jpg");
            this.gameLayer.addChild(this.bgSenceMap) 

            this.gameLayer.x = 5
            this.gameLayer.y = -500
            
            var list:Array<any> = this.horseMgr.getHorseMapInfo();    
          
            for(var i = 1;i <= game.SelHorseMgr.horseNum; i++)
            {
                var oneHorse = new Horse(list[i], i)  
                this.gameLayer.addChild(oneHorse)   
                this.horseList[i] = oneHorse   
                oneHorse.setPosition(list[i].startPoint.x,list[i].startPoint.y);
            }
            
             this.initTimer();  
             
             this.openDlgRank();
         
        }
        
        private initTimer()
        {
            var timer: egret.Timer = new egret.Timer(70);
            timer.addEventListener(egret.TimerEvent.TIMER,this.onTimeUpdate,this);
            timer.start();
            
            var timerRank: egret.Timer = new egret.Timer(1000);
            timerRank.addEventListener(egret.TimerEvent.TIMER,this.onTimeUpdateRank,this);
            timerRank.start();
        }
        
        
        
    private onTimeUpdate()
    {

        var x = 0;
        var y = 0;
        for(var i = 1;i <= game.SelHorseMgr.horseNum; i++)
        {
            var oneHorse:Horse = this.horseList[i]  
            oneHorse.updatePos()
            
            if (oneHorse.getIndex() == game.SelHorseMgr.viewHorseIndex)
            {
                x = oneHorse.getPositionX();
                y = oneHorse.getPositionY();
            }
        }
        
         this.gameLayer.x = 5 - (x - 370)
         this.gameLayer.y = -500 - (y - 910);
                
        
        if  (this.gameLayer.x  <- 2303)            
        {
            this.gameLayer.x = -2303;
        }
                       
        if  (this.gameLayer.y  <- 1181)
                                               
        {
            this.gameLayer.y = -1181;
        }
        
    }
    
    public onTimeUpdateRank()
    {
        // 刷新排名
        this.sortHorse();
        this.dlgRank.refreshRankInfo(this.horseList);
    }
    
    
    public sortHorse()
    {
        for(var i = 1;i <= game.SelHorseMgr.horseNum;i++)
        {
            for(var j = i + 1;j <= game.SelHorseMgr.horseNum;j++) 
            {   
                var oneHorse: Horse = this.horseList[i];
                var otherHorse: Horse = this.horseList[j];
                var totalLength = oneHorse.getTotalLength();
                if (oneHorse.getTotalLength() < otherHorse.getTotalLength())
                {
                    var horse: Horse = oneHorse;
                    this.horseList[i] = otherHorse;
                   this.horseList[j] = oneHorse;
                }
            }
        }

    }
        
        
        public colseSelHorse()
        {
            this.uiStage.removeElement(this.dlgSelectHorse);
            this.dlgSelectHorse.removeEventListener(game.GameEvent.SELECT_ONE_HORSE, this.onSelectHorse,this);
        }
        
        // 刷新选马界面
        public refreshSelHorse()
        {
            if (this.dlgSelectHorse)
            {
                this.dlgSelectHorse.refreshBtn(this.selectIndex);
            }
        }
        
        public closeHorseInfo()
        {
            console.log("closeHorseInfo");
            this.uiStage.removeElement(this.dlgHorseInfo);
            this.dlgHorseInfo.removeEventListener(game.GameEvent.ClOSE_HORSE_INFO, this.closeHorseInfo,this);
        }
        
        public pushMoeny ()
        {
            if(this.playIndex <= this.selHorseNum) 
            {    //返回主界面
                this.removeDlgPushMoeny();
                this.openDlgSelPlayMethod();
                //刷新主界面已选中按钮
                this.dlgSelPlayMethod.reshSelPlayInfo(this.playIndex)                
                this.colseSelHorse();
                this.selHorseNum = 0;
            }
            else{
                
                this.removeDlgPushMoeny();
                this.refreshSelHorse();
            }
        }
        
      private closeDlgPushMoeny()
      {
         console.log("closeDlgPushMoeny")
          this.removeDlgPushMoeny()
          this.selHorseNum = this.selHorseNum - 1;
      }
       private removeDlgPushMoeny()
       {
            this.uiStage.removeElement(this.dlgPushMoeny);
            this.dlgPushMoeny.removeEventListener(game.GameEvent.PUSH_MONEY,this.pushMoeny,this);
            this.dlgPushMoeny = null;
      }
        
        public EnterNormal()
        {
            this.baseLoader.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.OnLoadResProgress, this);
            this.baseLoader.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.OnLoadResComplete,this);

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

        }

        public OnLeftMoveBegin()
        {
            this.player.MoveLeft();
        }

        public OnRightMoveBegin()
        {
            this.player.MoveRight();
        }

        public OnDownMoveBegin()
        {
            this.player.MoveDown();
        }

        public OnUpMoveBegin()
        {
            this.player.MoveUp();
        }

        public GetEnemey()
        {
            return this.enemey
        }

        public GetPlayer()
        {
            return this.player;
        }

        public ResortDisplayList()
        {
            var playerYPos = this.player.GetPosY();
            var enemeyYPos = this.enemey.GetPosY();

            var childIdx1 = this.gameLayer.getChildIndex(this.player);
            var childIdx2 = this.gameLayer.getChildIndex(this.enemey);

            var bComYPos = playerYPos > enemeyYPos;
            var bComChild = childIdx1 > childIdx2;

            if (bComYPos == bComChild) return;

            this.gameLayer.swapChildren(this.player, this.enemey);
        }

        public GetStageWidth():number
        {
            return this.rootDisplay.stage.stageWidth
        }

        public GetStageHeight():number
        {
            return this.rootDisplay.stage.stageHeight;
        }

        public GetTime(): number
        {
            var dateObj = new Date();
            return  dateObj.getTime();
        }

        public GetSelRoleDlg()
        {
            return this.dlgSelRole;
        }

    }
}