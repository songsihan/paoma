class DlgController extends egret.gui.SkinnableComponent  { 
    private btnLeft: egret.gui.Button;
    private btnUp: egret.gui.Button;
    private btnDown: egret.gui.Button;
    private btnRight: egret.gui.Button;
    private btnA: egret.gui.Button;
    private btnB: egret.gui.Button;
    private btnC: egret.gui.Button;
    private btnD: egret.gui.Button;
    private btnAttack: egret.gui.Button;
    private btnStroke: any;
    private img_skill_1: egret.gui.UIAsset;
    private img_skill_2: egret.gui.UIAsset;
    private img_skill_3: egret.gui.UIAsset;
    private img_skill_4: egret.gui.UIAsset;
    private img_stroke: egret.gui.UIAsset;

    private imgRoleHead: egret.gui.UIAsset;
    private roleInfo:any;
    private roleIdx:number


    public constructor() 
    {
        super();    
        this.skinName = "game.ui.skins.DlgControllerSkin";
        this.roleIdx = game.Game.GetInstance().GetSelRoleIdx()
        this.roleInfo = game.RoleConfig.GetInstance().GetRoleByKey(this.roleIdx);
    }
    
    public partAdded(partName:string, instance:any):void{
        super.partAdded(partName, instance);

        if(instance == this.btnLeft) {
            this.btnLeft.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.OnBtnLeft, this);
            this.btnLeft.addEventListener(egret.TouchEvent.TOUCH_END, this.OnBtnLeftEnd, this);
            this.btnLeft.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.OnBtnLeftEnd, this);

        }
        else if(instance == this.btnUp){
            this.btnUp.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.OnBtnUp, this);
            this.btnUp.addEventListener(egret.TouchEvent.TOUCH_END, this.OnBtnUpEnd, this);
            this.btnUp.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.OnBtnUpEnd, this);   
        }
        else if(instance == this.btnDown)
        {
            this.btnDown.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.OnBtnDown, this);
            this.btnDown.addEventListener(egret.TouchEvent.TOUCH_END, this.OnBtnDownEnd, this);
            this.btnDown.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.OnBtnDownEnd, this);  
        }
        else if(instance == this.btnRight)
        {
            this.btnRight.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.OnBtnRight, this);
            this.btnRight.addEventListener(egret.TouchEvent.TOUCH_END, this.OnBtnRightEnd, this);
            this.btnRight.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.OnBtnRightEnd, this);  
        }
        else if(instance == this.btnA)
        {
            this.img_skill_1.source = RES.getRes('icon_skill_' + (this.roleIdx + 1) + 1 + '_png');
            this.btnA.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.OnBtnA, this);
        }
        else if(instance == this.btnB)
        {
            this.img_skill_2.source = RES.getRes('icon_skill_' + (this.roleIdx + 1) + 2 + '_png');
            this.btnB.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.OnBtnB, this);
        }
        else if(instance == this.btnC)
        {
            this.img_skill_3.source = RES.getRes('icon_skill_' + (this.roleIdx + 1) + 3 + '_png');
            this.btnC.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.OnBtnC, this);
        }
        else if(instance == this.btnD)
        {
            this.img_skill_4.source = RES.getRes('icon_skill_' + (this.roleIdx + 1) + 4 + '_png');
            this.btnD.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.OnBtnD, this);
            this.btnD.addEventListener(egret.TouchEvent.TOUCH_END, this.OnBtnDEnd, this);
            this.btnD.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.OnBtnDEnd, this); 
        }
        else if(instance == this.btnAttack)
        {
            this.btnAttack.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.OnBtnAattack, this);
        }
        else if(instance == this.imgRoleHead)
        {
            this.imgRoleHead.source = RES.getRes(this.roleInfo.head);   
        }
        else if(instance == this.btnStroke)
        {
            this.img_stroke.source = RES.getRes('icon_skill_' + (this.roleIdx + 1)  + 5 + '_png');
        }
    }

    public OnBtnA(event: egret.TouchEvent)
    {
        game.GameEvent.dispatchEvent(this, game.GameEvent.BTN_A, false, "BTN_A");
    }

    public OnBtnB(event: egret.TouchEvent)
    {
        game.GameEvent.dispatchEvent(this, game.GameEvent.BTN_B, false, "BTN_B");
    }

    public OnBtnC(event: egret.TouchEvent)
    {
        game.GameEvent.dispatchEvent(this, game.GameEvent.BTN_C, false, "BTN_C");
    }

    public OnBtnD(event: egret.TouchEvent)
    {

        game.GameEvent.dispatchEvent(this, game.GameEvent.BTN_D, false, "BTN_D");
    }
    public OnBtnAattack(event: egret.TouchEvent)
    {
        //@临时加的，待定
        game.GameEvent.dispatchEvent(this, game.GameEvent.BTN_A, false, "BTN_B");
    }

    public OnBtnDEnd(event: egret.TouchEvent)
    {
        game.GameEvent.dispatchEvent(this, game.GameEvent.BTN_D_END, false, "BTN_D_END");
    }

    public OnBtnLeft(event: egret.TouchEvent)
    {
        game.GameEvent.dispatchEvent(this, game.GameEvent.LEFT_MOVE_BEGIN, false, "LEFT_MOVE_BEGIN");
    }

    public OnBtnLeftEnd(event: egret.TouchEvent)
    {
        game.GameEvent.dispatchEvent(this, game.GameEvent.LEFT_MOVE_END, false, "LEFT_MOVE_END");
    }

    public OnBtnUp(event: egret.TouchEvent)
    {
        game.GameEvent.dispatchEvent(this, game.GameEvent.UP_MOVE_BEGIN, false, "UP_MOVE_BEGIN");
    }

    public OnBtnUpEnd(event: egret.TouchEvent)
    {
        game.GameEvent.dispatchEvent(this, game.GameEvent.UP_MOVE_END, false, "UP_MOVE_END");
    }

    public OnBtnRight(event: egret.TouchEvent)
    {
        game.GameEvent.dispatchEvent(this, game.GameEvent.RIGHT_MOVE_BEGIN, false, "RIGHT_MOVE_BEGIN");
    }

    public OnBtnRightEnd(event: egret.TouchEvent)
    {
        game.GameEvent.dispatchEvent(this, game.GameEvent.RIGHT_MOVE_END, false, "RIGHT_MOVE_END");
    }

    public OnBtnDown(event: egret.TouchEvent)
    {
        game.GameEvent.dispatchEvent(this, game.GameEvent.DOWN_MOVE_BEGIN, false, "DOWN_MOVE_BEGIN");
    }

    public OnBtnDownEnd(event: egret.TouchEvent)
    {
        game.GameEvent.dispatchEvent(this, game.GameEvent.DOWN_MOVE_END, false, "DOWN_MOVE_END");
    }
}
