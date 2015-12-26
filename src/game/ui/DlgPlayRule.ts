class DlgPlayRule extends egret.gui.SkinnableContainer  { 
   private closeBtn: egret.gui.Button;
    
        
    public constructor() 
    {
        super();    
        this.skinName = "game.ui.skins.DlgPlayRuleSkin";

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
        game.Game.GetInstance().closeDlgPlayRule();
    }
        
}
