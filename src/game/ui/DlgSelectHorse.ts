class DlgSelectHorse extends egret.gui.SkinnableContainer  { 
    private push1: egret.gui.Button;
    private push2: egret.gui.Button;
    private push3: egret.gui.Button;
    private push4: egret.gui.Button;
    private push5: egret.gui.Button;

        
    public constructor() 
    {
        super();    
        console.log("init dlgselecthorse");
        this.skinName = "game.ui.skins.DlgSelectHorseSkin";
    }

    public partAdded(partName:string, instance:any):void{
        console.log("partAdded");
        super.partAdded(partName, instance);
        if (instance == this.push1)
        {
           this.push1.addEventListener(egret.TouchEvent.TOUCH_TAP,this.OnBtnPush1,this);
        }
        else if(instance == this.push2)
        {
            this.push2.addEventListener(egret.TouchEvent.TOUCH_TAP,this.OnBtnPush2,this);
        }
        else if(instance == this.push3)
        {
            this.push3.addEventListener(egret.TouchEvent.TOUCH_TAP,this.OnBtnPush3,this);
        }
        else if(instance == this.push4)
        {
            this.push4.addEventListener(egret.TouchEvent.TOUCH_TAP,this.OnBtnPush4,this);
        }
        else if(instance == this.push5)
        {
            this.push5.addEventListener(egret.TouchEvent.TOUCH_TAP,this.OnBtnPush5,this);
        }
      
    }


    public OnBtnPush1()
    {
        console.log("call  OnBtnPush1");
        game.GameEvent.dispatchEvent(this, game.GameEvent.SELECT_ONE_HORSE, false, "SELECT_ONE_HORSE");
        game.Game.GetInstance().setSelHorseIndex(1);
    }
    
    public OnBtnPush2()
    {
        console.log("call  OnBtnPush2");
        game.GameEvent.dispatchEvent(this, game.GameEvent.SELECT_ONE_HORSE, false, "SELECT_ONE_HORSE");
        game.Game.GetInstance().setSelHorseIndex(2);
    }
    public OnBtnPush3()
    {
        console.log("call  OnBtnPush3");
        game.GameEvent.dispatchEvent(this, game.GameEvent.SELECT_ONE_HORSE, false, "SELECT_ONE_HORSE");
        game.Game.GetInstance().setSelHorseIndex(3);
    }
    public OnBtnPush4()
    {
        console.log("call  OnBtnPush4");
        game.GameEvent.dispatchEvent(this, game.GameEvent.SELECT_ONE_HORSE, false, "SELECT_ONE_HORSE");
        game.Game.GetInstance().setSelHorseIndex(4);
    }
    public OnBtnPush5()
    {
        console.log("call  OnBtnPush5");
        game.GameEvent.dispatchEvent(this, game.GameEvent.SELECT_ONE_HORSE, false, "SELECT_ONE_HORSE");
        game.Game.GetInstance().setSelHorseIndex(5);
    }
        
    public refreshBtn(index)
    {
        if (index == 1)
        {
            this.push1.enabled = false;
        }
        else if (index == 2)
        {
            this.push2.enabled = false;
        }
        else if (index == 3)
        {
            this.push3.enabled = false;
        }
        else if (index == 4)
        {
            this.push4.enabled = false;
            
        }
        else if(index == 5)
        {
            this.push5.enabled = false;
        }
    }
}
