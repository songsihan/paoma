class DlgSelPlayMethod extends egret.gui.SkinnableContainer  { 
    private selOneStarBtn: egret.gui.Button;
    private selTwoStarBtn: egret.gui.Button;
    private selThreeStarBtn: egret.gui.Button;
    private seledOneStarBtn: egret.gui.Button;
    private seledTwoStarBtn: egret.gui.Button;
    private seledThreeStarBtn: egret.gui.Button;
    private resetBtn: egret.gui.Button;
    public countDownLabel: egret.gui.Label;
    private time: number;
    private selPlayIndex: number;
    private horseMgr: game.SelHorseMgr;
        
    public constructor() 
    {
        super();    
        console.log("DlgSelPlayMethod init");
        this.skinName = "game.ui.skins.DlgSelPlayMethodSkin";
        this.horseMgr = game.SelHorseMgr.GetInstance();
    }

    public partAdded(partName:string, instance:any):void{
        console.log("DlgSelPlayMethod");
        super.partAdded(partName, instance);
        if (instance == this.countDownLabel)
        {
           //this.countDownLabel.text = this.time + "";

            var timer: egret.Timer = new egret.Timer(1000,0);
            timer.addEventListener(egret.TimerEvent.TIMER,this.onTimeUpdate,this);
            this.addEventListener(egret.TimerEvent.TIMER_COMPLETE,this.onTimeComplete,this);
            timer.start(); 
            this.onTimeUpdate();
        }
        else if(instance == this.selOneStarBtn)
        {
            this.selOneStarBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.OnselOneStarBtn,this);
        }
        else if(instance == this.selTwoStarBtn)
        {
            this.selTwoStarBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.OnselTwoStarBtn,this);            
        }
        else if(instance == this.selThreeStarBtn)
        {
            this.selThreeStarBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.OnselThreeStarBtn,this);              
        }
        else if (instance == this.resetBtn)
        {
            this.resetBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.OnresetBtn,this);             
        }

    }


public setCountTime(time: number){    
    console.log("setCountTime");
    this.time = time ;
    //this.onTimeUpdate();
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
    
    if (this.time === 0 && this.selPlayIndex != null)
    {
         game.GameEvent.dispatchEvent(this,game.GameEvent.TIEM_END,false,"TIEM_END");
    }
}


private onTimeComplete():void{
    this.countDownLabel.text = "";
}


public reshSelPlayInfo(index)
{
   
    if (index == game.SELECT_INDEX.ONE_STAR) 
    {
        this.selOneStarBtn.visible = false;
        this.seledOneStarBtn.visible = true;
    }
    else if(index == game.SELECT_INDEX.TWO_STAR)
    {
        this.selTwoStarBtn.visible = false;
        this.seledTwoStarBtn.visible = true;
    }
    else if (index == game.SELECT_INDEX.THREE_STAR)
    {
        this.selThreeStarBtn.visible = false;
        this.seledThreeStarBtn.visible = true;
    }
    
    this.selPlayIndex = index;
    this.horseMgr.setSelStar(index);
}


public OnselOneStarBtn():void{
    console.log("OnselOneStarBtn")
    if(this.selPlayIndex == null) {
        game.Game.GetInstance().setPlayIndex(game.SELECT_INDEX.ONE_STAR);
        game.GameEvent.dispatchEvent(this,game.GameEvent.SELECT_HORSE,false,"SELECT_HORSE");
    }
}
public OnselTwoStarBtn():void{
    if(this.selPlayIndex == null) {
        game.Game.GetInstance().setPlayIndex(game.SELECT_INDEX.TWO_STAR);
        game.GameEvent.dispatchEvent(this,game.GameEvent.SELECT_HORSE,false,"SELECT_HORSE");
    }
}
        
public OnselThreeStarBtn():void{
    if(this.selPlayIndex == null) {
        game.Game.GetInstance().setPlayIndex(game.SELECT_INDEX.THREE_STAR);
        game.GameEvent.dispatchEvent(this,game.GameEvent.SELECT_HORSE,false,"SELECT_HORSE");
    }
}

private OnresetBtn()
{
    console.log("OnresetBtn");
    this.selPlayIndex = null;
    this.selOneStarBtn.visible = true;
    this.seledOneStarBtn.visible = false;
    this.selTwoStarBtn.visible = true;
    this.seledTwoStarBtn.visible = false;
    this.selThreeStarBtn.visible = true;
    this.seledThreeStarBtn.visible = false;
    this.horseMgr.setSelStar(null);
}
        
}
