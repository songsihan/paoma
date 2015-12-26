
/**
 * 游戏中的角色的构造工厂
 */
module game {
    export class RoleFactory {

        private static instance: RoleFactory;

        private dbFactory:dragonBones.EgretFactory;

        private arrSkl: any[];

        public constructor() {
            this.dbFactory = new dragonBones.EgretFactory();

            this.PreSkeletoData();

            this.arrSkl = new Array();
            this.arrSkl[0] = "fulong";
            this.arrSkl[1] = "baiqishi";
            this.arrSkl[2] = "fukong";
            this.arrSkl[3] = "tiezhang";
        }

        public static GetInstance(): RoleFactory
        {
            if (!this.instance)
            {
                this.instance = new RoleFactory();
            }

            return this.instance;
        }

        //准备骨骼数据
        public PreSkeletoData()
        {
            var arrSkilData = new Array 
            (
                {sklName : "fulong_skl", textureData : "fulong_img_json", texture : "fulong_img"},
                {sklName : "baiqishi_skl", textureData : "baiqishi_img_json", texture : "baiqishi_img"},
                {sklName : "fukong_skl", textureData : "fukong_img_json", texture : "fukong_img"},
                {sklName : "tiezhang_skl", textureData : "tiezhang_img_json", texture : "tiezhang_img"}
            );

            for (var i = 0; i < arrSkilData.length; i++)
            {
                var roleDragonData  = RES.getRes( arrSkilData[i].sklName );  
                var roleTextureData = RES.getRes( arrSkilData[i].textureData );  
                var roleTexture     = RES.getRes( arrSkilData[i].texture);

                this.dbFactory.addDragonBonesData(dragonBones.DataParser.parseDragonBonesData(roleDragonData));  
                this.dbFactory.addTextureAtlas(new dragonBones.EgretTextureAtlas(roleTexture,roleTextureData));
            }
        }

        public CreateRole(type : TYPE_ROLE, sklIdx: number) : any
        {
            switch(type)
            {
                //@只有一个角色

                case TYPE_ROLE.PLAYER:
                    var armature: dragonBones.FastArmature = this.dbFactory.buildFastArmature(this.arrSkl[sklIdx]);
                    armature.enableAnimationCache(30);
                    return new Player(armature);
                    break;
                case TYPE_ROLE.ENEMEY:
                    var armature: dragonBones.FastArmature = this.dbFactory.buildFastArmature(this.arrSkl[sklIdx]);
                    armature.enableAnimationCache(30);
                    return new Enemey(armature);
                    break;
                default:
                    return null;
                    break;
            }
        }
    }
}