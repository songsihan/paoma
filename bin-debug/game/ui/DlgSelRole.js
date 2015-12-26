var DlgSelRole = (function (_super) {
    __extends(DlgSelRole, _super);
    function DlgSelRole() {
        _super.call(this);
        this.skinName = "game.ui.skins.DlgSelRoleSkin";
        game.Game.GetInstance().SetSelRoleIdx(2);
    }
    var d = __define,c=DlgSelRole;p=c.prototype;
    p.partAdded = function (partName, instance) {
        console.log("partAdded" + partName);
        //super.partAdded(partName, instance);
        if (instance == this.btnFight) {
            console.log("partAdded is btnFight");
            this.btnFight.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnBtnFight, this);
        }
        else if (instance == this.imgSelRole) {
            this.imgSelRole.source = RES.getRes("void_wizard_png");
        }
        else if (instance == this.imgRoleName) {
            this.imgRoleName.source = RES.getRes("role_name_2_png");
        }
        this.SetRoleInfo();
    };
    p.SetRoleInfo = function () {
        var selectRoleIdx = game.Game.GetInstance().GetSelRoleIdx();
        this.imgRoleInfo.source = RES.getRes('role_info_' + selectRoleIdx + '_png');
        this.imgRoleName.source = RES.getRes('role_name_' + selectRoleIdx + '_png');
        if (selectRoleIdx == 0) {
            this.imgSelRole.source = RES.getRes("fulong_png");
        }
        else if (selectRoleIdx == 1) {
            this.imgSelRole.source = RES.getRes("liuzaiqing_png");
        }
        else if (selectRoleIdx == 2) {
            this.imgSelRole.source = RES.getRes("void_wizard_png");
        }
        else if (selectRoleIdx == 3) {
            this.imgSelRole.source = RES.getRes("tiezhang_png");
        }
        else {
            this.imgSelRole.source = RES.getRes("");
        }
    };
    p.OnBtnFight = function () {
        //game.Game.GetInstance().SetSelRoleIdx(this.selectRoleId);
        game.GameEvent.dispatchEvent(this, game.GameEvent.FIGHT_START, false, "FIGHT_START");
    };
    return DlgSelRole;
})(egret.gui.SkinnableContainer);
egret.registerClass(DlgSelRole,"DlgSelRole");
