class DlgRank extends egret.gui.SkinnableContainer  { 
   private closeBtn: egret.gui.Button;
   private labelFirst: egret.gui.Label;
   private labelSecond: egret.gui.Label;
    
        
    public constructor() 
    {
        super();    
        this.skinName = "game.ui.skins.DlgRankSkin";
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
        
    }
    
    public refreshRankInfo(ranklist)
    {
        var firstHorse: game.Horse = ranklist[1];
        var secondtHorse: game.Horse = ranklist[2];
        this.labelFirst.text = firstHorse.getIndex() + "";
        this.labelSecond.text = secondtHorse.getIndex()+"";
    }
        
}
