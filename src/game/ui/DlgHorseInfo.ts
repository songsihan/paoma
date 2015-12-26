class DlgHorseInfo extends egret.gui.SkinnableContainer  { 
   private closeBtn: egret.gui.Button;
    //private push2: egret.gui.Button;

    
        
    public constructor() 
    {
        super();    
        console.log("init DlgHorseInfo");
        this.skinName = "game.ui.skins.DlgHorseInfoSkin";

        //game.Game.GetInstance().SetSelRoleIdx(2);
    }

    public partAdded(partName:string, instance:any):void{
        console.log("DlgHorseInfo  partAdded");
        super.partAdded(partName, instance);
        if (instance == this.closeBtn)
        {
            this.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.OncloseBtn,this);
        }
    }

    public OncloseBtn()
    {
        console.log("OncloseBtn");
        game.GameEvent.dispatchEvent(this, game.GameEvent.ClOSE_HORSE_INFO, false, "SELECT_ONE_HORSE");
    }
        
}
