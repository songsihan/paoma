/**
 * 游戏中的地图层
 * 现在地图只有一张背景图
 */
var game;
(function (game) {
    var Scene = (function (_super) {
        __extends(Scene, _super);
        function Scene() {
            _super.call(this);
            this.texture = RES.getRes("bg_jpg");
            if (!this.texture) {
            }
        }
        var d = __define,c=Scene;p=c.prototype;
        p.onAddToStage = function () {
        };
        return Scene;
    })(egret.Bitmap);
    game.Scene = Scene;
    egret.registerClass(Scene,"game.Scene");
})(game || (game = {}));
