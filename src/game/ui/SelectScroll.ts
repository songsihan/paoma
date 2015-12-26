

class SelectScroll extends egret.DisplayObjectContainer {

     //选人组件
        private imgRoleItem0: egret.Bitmap;
        private imgRoleItem1: egret.Bitmap;
        private imgRoleItem2: egret.Bitmap;
        private imgRoleItem3: egret.Bitmap;
        private imgRoleItem4: egret.Bitmap;
        private imgRoleItem5: egret.Bitmap;

        private imgSelectedBorder: egret.Bitmap;
        private imgBgSelected: egret.Bitmap;

        private downcomplete:any;
        private selectRoleId:any;
        private beginScrollY:number

    public constructor(){
        super();
       

        this.imgRoleItem0 = new egret.Bitmap;
        this.imgRoleItem0.texture = RES.getRes("head_fulong_png");
        this.addChildAt(this.imgRoleItem0, 1);
        this.imgRoleItem0.x = 877;
        this.imgRoleItem0.y = 98;
        //this.imgRoleItem0.anchorOffsetX = ;
        this.imgRoleItem1= new egret.Bitmap;
        this.imgRoleItem1.texture = RES.getRes("head_liuzaiqing_png");
        this.addChildAt(this.imgRoleItem1, 2);
        this.imgRoleItem1.x = 865;
        this.imgRoleItem1.y = 167;

        this.imgRoleItem2 = new egret.Bitmap;
        this.imgRoleItem2.texture = RES.getRes("head_void_wizard_png");
        this.addChildAt(this.imgRoleItem2, 5);
        this.imgRoleItem2.x = 831;
        this.imgRoleItem2.y = 237;

        this.imgRoleItem3 = new egret.Bitmap;
        this.imgRoleItem3.texture = RES.getRes("head_tiezhang_png");
        this.addChildAt(this.imgRoleItem3, 2);
        this.imgRoleItem3.x = 866; 
        this.imgRoleItem3.y = 310;

        this.imgRoleItem4 = new egret.Bitmap;
        this.imgRoleItem4.texture = RES.getRes("head_garson_png");
        this.addChildAt(this.imgRoleItem4, 1);
        this.imgRoleItem4.x = 910;
        this.imgRoleItem4.y = 376;


        this.imgRoleItem5 = new egret.Bitmap;
        this.imgRoleItem5.texture = RES.getRes("head_lorica_png");
        this.addChildAt(this.imgRoleItem5, 0);
        this.imgRoleItem5.x = 1555; 
        this.imgRoleItem5.y = 237;


        this.imgSelectedBorder = new egret.Bitmap;
        this.imgSelectedBorder.texture = RES.getRes("bg_select_role_png");
        this.addChild(this.imgSelectedBorder);
        this.imgSelectedBorder.x = 806; 
        this.imgSelectedBorder.y = 93;
        this.imgSelectedBorder.touchEnabled = true;

        this.imgBgSelected = new egret.Bitmap;
        this.imgBgSelected.texture = RES.getRes("bg_selected_png");
        this.addChild(this.imgBgSelected);
        this.imgBgSelected.x = 818; 
        this.imgBgSelected.y = 224;

        this.downcomplete = true;
        this.selectRoleId = 2;

        this.imgSelectedBorder.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.OnScrollSelectBegin, this);
        this.imgSelectedBorder.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.OnScrollSelectMove, this);
        this.imgSelectedBorder.addEventListener(egret.TouchEvent.TOUCH_END, this.OnScrollSelectEnd, this);
        


    }

    public OnScrollSelectBegin(event: egret.TouchEvent)
    {
        this.imgBgSelected.visible = false;
        this.beginScrollY =  event.localY;
    }

    public OnScrollSelectMove(event: egret.TouchEvent)
    {
        if (!this.downcomplete)
        {
            return;
        }

        this.imgBgSelected.visible = false;
        console.log(this.imgBgSelected);
        //滚动效果
        var diff = this.beginScrollY - event.localY
        if (diff < 0)
        {
            this.SetSelectRoleId(this.selectRoleId - 1);
            this.OnDown();
        }
        else
        {
            this.SetSelectRoleId(this.selectRoleId + 1);
            this.OnUp();
        }
    }

    public OnScrollSelectEnd(event: egret.TouchEvent)
    {
        //this.imgSelectedBorder.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.OnScrollSelectBegin, this);
        //this.imgSelectedBorder.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.OnScrollSelectMove, this);
        //this.imgSelectedBorder.removeEventListener(egret.TouchEvent.TOUCH_END, this.OnScrollSelectEnd, this);
    }

    public OnUp()
    {
        this.downcomplete = false;
        for (var i = 0; i < 6; i++)
        {
            var curItem = this['imgRoleItem' + i];
            var tagItem; 
            if (i == 0){ 
                tagItem = this.imgRoleItem5; 
            }
            else
            { 
                tagItem = this['imgRoleItem' + (i - 1)]; 
            }
            
            var tw = egret.Tween.get(curItem, {loop:false});
            tw.to({x:tagItem.x, y:tagItem.y}, 500, egret.Ease.sineIn).call(this.OnScrollComplete, this);
            
            var tagIdx = this.getChildIndex(tagItem);
            //this.setChildIndex(curItem, tagIdx);
            this.ResetItemIndex();
        }
    }

    public OnDown()
    {
        this.downcomplete = false;
        for (var i = 0; i < 6; i++)
        {
            var curItem = this['imgRoleItem' + i];
            var tagItem; 
            if (i == 5){ 
                tagItem = this.imgRoleItem0; 
            }
            else
            { 
                tagItem = this['imgRoleItem' + (i + 1)]; 
            }

            var tw = egret.Tween.get(curItem, {loop:false});
            tw.to({x:tagItem.x, y:tagItem.y}, 500, egret.Ease.sineIn).call(this.OnScrollComplete, this);
            
            console.log(this.getChildIndex(this['imgRoleItem' + i]), 'curItem' + i);
            //console.log(this.numChilds, 'numElements');

            var tagIdx = this.getChildIndex(tagItem);
            //this.setChildIndex(curItem, tagIdx);
            this.ResetItemIndex();
        }
    }

    public ResetItemIndex()
    {

        this.setChildIndex(this['imgRoleItem' + this.selectRoleId], 3);
        var preNum = this.GetPreIdx(this.selectRoleId);
        this.setChildIndex(this['imgRoleItem' + preNum], 2);
        var pre2Num = this.GetPreIdx(preNum);
        this.setChildIndex(this['imgRoleItem' + pre2Num], 1);
        var nextNum = this.GetNextIdx(this.selectRoleId);
        this.setChildIndex(this['imgRoleItem' + nextNum], 2);
        var next2Num = this.GetNextIdx(nextNum);
        this.setChildIndex(this['imgRoleItem' + next2Num], 1);


        console.log(pre2Num, preNum, this.selectRoleId, nextNum, next2Num);
    }



    public OnScrollComplete()
    {
        this.downcomplete = true; 

        this.imgBgSelected.visible = true;
        //人物详情
        game.Game.GetInstance().GetSelRoleDlg().SetRoleInfo();
    }

    public SetSelectRoleId(roleId)
    {
        this.selectRoleId = roleId
        if (roleId == 6)
        {
            this.selectRoleId = 0;  
        }
        if (roleId == -1)
        {
            this.selectRoleId = 5;  
        }

        game.Game.GetInstance().SetSelRoleIdx(this.selectRoleId);

    }

    public GetPreIdx(roleIdx)
    {
        if (roleIdx == 0)
        {
            return 5;  
        }

        return roleIdx - 1
    }

    public GetNextIdx(roleIdx)
    {

        if (roleIdx == 5)
        {
            return 0;  
        }

        return roleIdx + 1
    }

}
