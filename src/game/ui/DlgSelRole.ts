class DlgSelRole extends egret.gui.SkinnableContainer  { 
    
    private btnFight: egret.gui.Button;

    private imgSelRole: egret.gui.UIAsset;
    private imgRoleName: egret.gui.UIAsset;
    private imgRoleInfo: egret.gui.UIAsset;
    
        
    public constructor() 
    {
        super();    
        this.skinName = "game.ui.skins.DlgSelRoleSkin";

        game.Game.GetInstance().SetSelRoleIdx(2);
    }

    public partAdded(partName:string, instance:any):void{
        console.log("partAdded"+partName);
        //super.partAdded(partName, instance);
        if (instance == this.btnFight)
        {
            console.log("partAdded is btnFight");
        	this.btnFight.addEventListener(egret.TouchEvent.TOUCH_TAP,this.OnBtnFight,this);
        }
        else if(instance == this.imgSelRole)
        {
            this.imgSelRole.source = RES.getRes("void_wizard_png");
        }
        else if(instance == this.imgRoleName)
        {
            this.imgRoleName.source = RES.getRes("role_name_2_png");
        }

        this.SetRoleInfo();
    }

    public SetRoleInfo()
    {
        var selectRoleIdx = game.Game.GetInstance().GetSelRoleIdx()
        this.imgRoleInfo.source = RES.getRes('role_info_' + selectRoleIdx + '_png');
        this.imgRoleName.source = RES.getRes('role_name_' + selectRoleIdx + '_png');


        if (selectRoleIdx == 0)
        {
            this.imgSelRole.source = RES.getRes("fulong_png");
        }
        else if (selectRoleIdx == 1)
        {
            this.imgSelRole.source = RES.getRes("liuzaiqing_png");
        }
        else if (selectRoleIdx == 2)
        {
            this.imgSelRole.source = RES.getRes("void_wizard_png");
        }
        else if (selectRoleIdx == 3)
        {
            this.imgSelRole.source = RES.getRes("tiezhang_png");
        }
        else
        {
            this.imgSelRole.source = RES.getRes("");
        }
    }

    


    public OnBtnFight()
    {
        //game.Game.GetInstance().SetSelRoleIdx(this.selectRoleId);
        game.GameEvent.dispatchEvent(this, game.GameEvent.FIGHT_START, false, "FIGHT_START");
    }
}
