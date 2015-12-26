
/**
 * 游戏中的地图层
 * 现在地图只有一张背景图
 */

class MapSite extends egret.Bitmap {

    public constructor() {
        super();

        this.texture = RES.getRes("bg");
        if ( !this.texture )
        {
            // show error    
        }
    }

    public onAddToStage()
    {

    }
}