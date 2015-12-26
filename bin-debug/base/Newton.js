/*
 * 包装牛顿三大定律,实现一个运动的物体
 * 1. 作用力由外部施加.
 * 2. 时间点由外部控制.
 * 3. 没有设置移动的目标点和指定的移动距离,是因为根据定律,没有受到外力时,物体要么静止,要么匀速运动.
 * 4. 使用离散的计算,而不是传统的整体的曲线公式计算.
 * 5. 为避免频繁的对象创建和释放,函数参数都采用number,而不是Point对象.
 */
/*
 *
 */
var Newton = (function (_super) {
    __extends(Newton, _super);
    function Newton() {
        _super.call(this);
        this.mass = 0;
        this.vAccSpeed = new egret.Point();
        this.ptPos = new egret.Point();
        this.vSpeed = new egret.Point();
        this.vAccSpeed = new egret.Point();
    }
    var d = __define,c=Newton;p=c.prototype;
    // 设置质量
    p.setMass = function (m) {
        this.mass = m;
    };
    // 设置当前位置
    p.setPos = function (x, y) {
        this.ptPos.x = x;
        this.ptPos.y = y;
    };
    // 获得当前位置
    p.getPos = function () {
        return this.ptPos;
    };
    // 设置当前速度
    p.setSpeed = function (x, y) {
        this.vSpeed.x = x;
        this.vSpeed.y = y;
    };
    // 获得当前速度
    p.getSpeed = function () {
        return this.vSpeed;
    };
    // 设置当前加速度
    p.setAccSpeed = function (x, y) {
        this.vAccSpeed.x = x;
        this.vAccSpeed.y = y;
    };
    /*
     * 设置施加的作用力(产生了加速度,覆盖已有的加速度)
     * 根据牛顿第二定律的公式(F=ma)计算出作用力产生的加速度
     */
    p.setForce = function (x, y) {
        this.vAccSpeed.x = x / this.mass;
        this.vAccSpeed.y = y / this.mass;
    };
    // 设置多个作用力
    p.setMultiForce = function (arr) {
        var x = 0, y = 0;
        for (var i = 0; i < arr.length; ++i) {
            x += arr[i].x;
            y += arr[i].y;
        }
        this.vAccSpeed.x = x / (arr.length * this.mass);
        this.vAccSpeed.y = y / (arr.length * this.mass);
        //if (g_bDebug) console.log('vAccSpeed=' + this.vAccSpeed.x + ', ' + this.vAccSpeed.y + ')');
    };
    /*
     * 计算位移.物体的移动计算由Process()驱动
     * 每次process都会产生一次回调
     * 利用分速度和分作用的原理计算
     * @param timeDist 表示时间间隔
     */
    p.process = function (timeDist) {
        // 匀速运动
        var x1 = this.vSpeed.x * timeDist;
        var y1 = this.vSpeed.y * timeDist;
        // 加速运动
        var timePow = timeDist * timeDist;
        var x2 = 0.5 * this.vAccSpeed.x * timePow;
        var y2 = 0.5 * this.vAccSpeed.y * timePow;
        // 运动后的位移
        this.ptPos.x += (x1 + x2);
        this.ptPos.y += (y1 + y2);
        // 当前速度的变化
        this.vSpeed.x += this.vAccSpeed.x * timeDist;
        this.vSpeed.y += this.vAccSpeed.y * timeDist;
        egret.Event.dispatchEvent(this, egret.Event.CHANGE, false, this.ptPos);
    };
    return Newton;
})(egret.EventDispatcher);
egret.registerClass(Newton,"Newton");
