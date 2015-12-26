/**
 * 游戏中的角色的构造工厂
 */
var game;
(function (game) {
    var RoleFactory = (function () {
        function RoleFactory() {
            this.dbFactory = new dragonBones.EgretFactory();
            this.PreSkeletoData();
            this.arrSkl = new Array();
            this.arrSkl[0] = "fulong";
            this.arrSkl[1] = "baiqishi";
            this.arrSkl[2] = "fukong";
            this.arrSkl[3] = "tiezhang";
        }
        var d = __define,c=RoleFactory;p=c.prototype;
        RoleFactory.GetInstance = function () {
            if (!this.instance) {
                this.instance = new RoleFactory();
            }
            return this.instance;
        };
        //准备骨骼数据
        p.PreSkeletoData = function () {
            var arrSkilData = new Array({ sklName: "fulong_skl", textureData: "fulong_img_json", texture: "fulong_img" }, { sklName: "baiqishi_skl", textureData: "baiqishi_img_json", texture: "baiqishi_img" }, { sklName: "fukong_skl", textureData: "fukong_img_json", texture: "fukong_img" }, { sklName: "tiezhang_skl", textureData: "tiezhang_img_json", texture: "tiezhang_img" });
            for (var i = 0; i < arrSkilData.length; i++) {
                var roleDragonData = RES.getRes(arrSkilData[i].sklName);
                var roleTextureData = RES.getRes(arrSkilData[i].textureData);
                var roleTexture = RES.getRes(arrSkilData[i].texture);
                this.dbFactory.addDragonBonesData(dragonBones.DataParser.parseDragonBonesData(roleDragonData));
                this.dbFactory.addTextureAtlas(new dragonBones.EgretTextureAtlas(roleTexture, roleTextureData));
            }
        };
        p.CreateRole = function (type, sklIdx) {
            switch (type) {
                //@只有一个角色
                case game.TYPE_ROLE.PLAYER:
                    var armature = this.dbFactory.buildFastArmature(this.arrSkl[sklIdx]);
                    armature.enableAnimationCache(30);
                    return new game.Player(armature);
                    break;
                case game.TYPE_ROLE.ENEMEY:
                    var armature = this.dbFactory.buildFastArmature(this.arrSkl[sklIdx]);
                    armature.enableAnimationCache(30);
                    return new game.Enemey(armature);
                    break;
                default:
                    return null;
                    break;
            }
        };
        return RoleFactory;
    })();
    game.RoleFactory = RoleFactory;
    egret.registerClass(RoleFactory,"game.RoleFactory");
})(game || (game = {}));
