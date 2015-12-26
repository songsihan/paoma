/**
 * 游戏中的地图层
 * 现在地图只有一张背景图
 */
var MapSite = (function (_super) {
    __extends(MapSite, _super);
    function MapSite() {
        _super.call(this);
        this.texture = RES.getRes("bg");
        if (!this.texture) {
        }
    }
    var d = __define,c=MapSite;p=c.prototype;
    p.onAddToStage = function () {
    };
    return MapSite;
})(egret.Bitmap);
egret.registerClass(MapSite,"MapSite");
