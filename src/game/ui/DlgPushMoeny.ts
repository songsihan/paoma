class DlgPushMoeny extends egret.gui.SkinnableContainer  { 
   private pushMoneyBtn: egret.gui.Button;
   private closeBtn: egret.gui.Button;
   private selHorseIndex: number;
   private pushMoney: number;
   
    private btn1: egret.gui.Button;
    private btn2: egret.gui.Button;
    private btn3: egret.gui.Button;
    private btn4: egret.gui.Button;
    private btn5: egret.gui.Button;
    private btn6: egret.gui.Button;
    private btn7: egret.gui.Button;
    private btn8: egret.gui.Button;
    private btn9: egret.gui.Button;
    private btn10: egret.gui.Button;
    private btn100: egret.gui.Button;
    private btn1000: egret.gui.Button;
    private btn5000: egret.gui.Button;
    private btn10000: egret.gui.Button;
    private btnPlayRule: egret.gui.Button;
    private btnHistory: egret.gui.Button;
    
    private selImage1: egret.gui.UIAsset;
    private selImage2: egret.gui.UIAsset;
    private selImage3: egret.gui.UIAsset;
    private selImage4: egret.gui.UIAsset;
    private selImage5: egret.gui.UIAsset;
    private selImage6: egret.gui.UIAsset;
    private selImage7: egret.gui.UIAsset;
    private selImage8: egret.gui.UIAsset;
    private selImage9: egret.gui.UIAsset;
    private selImage10: egret.gui.UIAsset;
    private labelTatolMoney: egret.gui.Label;
    private countDownLabel: egret.gui.Label;
    private groupIndex: number = null;
    private horseMgr: game.SelHorseMgr;

    public imageList: Array<egret.gui.UIAsset> = [];
    private time: number = 0;
        
    public constructor() 
    {
        super();    
        console.log("init DlgPushMoeny");
        this.skinName = "game.ui.skins.DlgPushMoneySkin";
        this.horseMgr = game.SelHorseMgr.GetInstance();
    }

    public partAdded(partName:string, instance:any):void{
        console.log("DlgPushMoeny  partAdded");
        super.partAdded(partName, instance);
        if (instance == this.btn1)
        {
            this.btn1.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onBtn1,this);
        }
        else if (instance == this.btn2)
        {
            this.btn2.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onBtn2,this);
        }
        else if (instance == this.btn3)
        {
            this.btn3.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onBtn3,this);
        }
        else if (instance == this.btn4)
        {
            this.btn4.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onBtn4,this);
        }
        else if (instance == this.btn5)
        {
            this.btn5.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onBtn5,this);
        }
        else if (instance == this.btn6)
        {
            this.btn6.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onBtn6,this);
        }
        else if (instance == this.btn7)
        {
            this.btn7.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onBtn7,this);
        }
        else if (instance == this.btn8)
        {
            this.btn8.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onBtn8,this);
        }
        else if (instance == this.btn9)
        {
            this.btn9.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onBtn9,this);
        }
        else if (instance == this.btn10)
        {
            this.btn10.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onBtn10,this);
        }
        else if (instance == this.btn100)
        {
            this.btn100.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onBtn100,this);
        }
        else if (instance == this.btn1000)
        {
            this.btn1000.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onBtn1000,this);
        }
        else if (instance == this.btn5000)
        {
            this.btn5000.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onBtn5000,this);
        }
        else if (instance == this.btn10000)
        {
            this.btn10000.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onBtn10000,this);
        }
        else if (instance == this.btnHistory)
        {
            this.btnHistory.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onBtnHistory,this);
        }
        else if (instance == this.btnPlayRule)
        {
            this.btnPlayRule.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onBtnPlayRule,this);
        }
    }
    
    public setSelHorseIndex(index)
    {
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
        
    }
    
    private initCountdownLabel()
    {
        this.time = 10;            
        var timer: egret.Timer = new egret.Timer(1000,0);
        timer.addEventListener(egret.TimerEvent.TIMER,this.onTimeUpdate,this);
        timer.start(); 
        this.onTimeUpdate();
    }
    
    public onTimeUpdate():void{
        if  (this.time == 0 )
        {
            return;
        }
        console.log("onTimeUpdate:%d", this.time)
            this.time = this.time - 1;
            var minute:number = Math.floor(this.time / 60);     
            var sec:number = this.time % 60;
            var secStr = sec + "";
            if (sec < 10  )  
            {
                secStr = "0" + secStr;
            }
            
            this.countDownLabel.text = minute + ":" + secStr;
                
            if (this.time === 0 )
            {
                console.log("onTimeUpdate:startgame")
                game.GameEvent.dispatchEvent(this,game.GameEvent.TIEM_END,false,"TIEM_END");
            }
        }
    
    public onBtn1()
    {
        this.groupIndex = 1;
        this.selgroup(1);         
    }
    public onBtn2()
    {
        this.groupIndex = 2;
        this.selgroup(2);                  
    }
    public onBtn3()
    {
        this.groupIndex = 3;
        this.selgroup(3);                  
    }
    public onBtn4()
    {   
        this.groupIndex = 4;
        this.selgroup(4);                          
    }
    public onBtn5()
    {
        this.groupIndex = 5;
        this.selgroup(5);                        
    }
    public onBtn6()
    {
        this.groupIndex = 6;
        this.selgroup(6);                         
    }
    public onBtn7()
    {
        this.groupIndex = 7;
        this.selgroup(7);                         
    }
    public onBtn8()
    {
        this.groupIndex = 8;
        this.selgroup(8);                        
    }
    public onBtn9()
    {
        this.groupIndex = 9; 
        this.selgroup(9);
    }
    public onBtn10()
    {
        this.groupIndex = 10;
        this.selgroup(10);                       
    }
    
    // 选择组合
    public selgroup(index)
    {
        for(var i = 1;i <= 10; i ++)
        {
            if(index == i)
            {
                this.imageList[i].visible = true;
                console.log("onBtn1" + i);
            }
            else
                this.imageList[i].visible = false;
            
        }
        
        this.reshTotalMoney();
    }
    
    
    public onBtn100()
    {
        this.pushMoeny(100);    
    }
    public onBtn5000()
    {
        this.pushMoeny(5000);                        
    } 
    public onBtn1000()
    {
        this.pushMoeny(1000);                         
    }
    public onBtn10000()
    {
        this.pushMoeny(10000);                       
    }
    
    public pushMoeny(moeny)
    {
        if(!this.groupIndex)
            return;
            
        var image = "";
        switch(moeny) {
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
        this.reshTotalMoney()
    }
    
    private reshTotalMoney()
    {
        this.labelTatolMoney.text = "X" + this.horseMgr.getPushMoney(this.groupIndex);
    }
    
    private onBtnHistory()
    {
        
        game.Game.GetInstance().openDlgHistory();
    }
    
    private onBtnPlayRule()
    {
        game.Game.GetInstance().openDlgPlayRule();
    }
}
