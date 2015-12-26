
/**
 * 游戏中的地图层 
 * 现在地图只有一张背景图
 */
module game {
    export class Scene extends egret.Bitmap {

        public constructor() {
            super();

            this.texture = RES.getRes("bg_jpg");
            if ( !this.texture )
            {
                //show error  
            }
        }

        public onAddToStage()
        {

        }
    }
}