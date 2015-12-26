 /*
  * 实现一些几何算法
  * 设计原则:
  * 1. 不会对传入的参数对象进行修改
  */

var PI = 3.14159265358984626;
var RPI = 1 / PI;

/*
 * 
 */
class Geometry
{
    /*
     * 将弧度单位转为角度单位
     */
    public static Rad2Angle(r: number): number
    {
        return 180 * r * RPI;
    }

    /*
     * 将传入的向量转换成单位向量
     */
    public static Normal(v: egret.Point)
    {
        if(v.x == 0 && v.y == 0) return;

        var d = 1 / Math.sqrt(v.x * v.x + v.y * v.y);
        v.x *= d;
        v.y *= d;
    }

    /*
     * 求向量的长度
     */
    public static Length(v: egret.Point)
    {
        return Math.sqrt(v.x * v.x + v.y * v.y);
    }

    /* 
     * 求一个向量的单位法向量
     * 解方程组:ax + by = 0, x*x + y*y = 1, 而得的结果
     * 注意:平方根运算是很容易出错的,不一小心就把符号弄错了.
     * @param v 向量
     * @returns 有二个结果(二个方向的向量),所以返回一个数组
     */
    public static NormalOfLine(v: egret.Point): egret.Point[]
    {
        if(v.y == 0)
        {
            return [new egret.Point(0, 1), new egret.Point(0, -1)];
        }

        var pa = v.x * v.x;
        var pb = v.y * v.y;

        var d = Math.sqrt(pb / (pa + pb));

        return [new egret.Point(d, (-v.x / v.y) * d), new egret.Point(-d, (-v.x / v.y) * (-d))];
    }
    /* 
     * 求条直线的单位法向量,需要另外指定一点来确定法向量的方向
     * @param ptLine1,ptLine2 表示直线的二个点
     * @param ptAside 法向量所指向的那一边 
     */
    public static NormalOfLineByPt(ptLine1: egret.Point, ptLine2: egret.Point, ptAside: egret.Point): egret.Point
    {
        var vLine = new egret.Point(ptLine1.x - ptLine2.x, ptLine1.y - ptLine2.y);

        var two = Geometry.NormalOfLine(vLine);

        var dir = new egret.Point(ptAside.x - ptLine1.x, ptAside.y - ptLine1.y);

        if(dir.x * two[0].x + dir.y * two[0].y > 0)
        {
            return two[0];
        }
        else
        {
            return two[1];
        }
    }

    /* 
     * 求一个向量在一个单位法向量上的投影长度
     * 注意: 传入的e一定要是一个单位向量!!
     * @param v 向量
     * @param e 单位法向量
     */
    public static ProjectLength(v: egret.Point, e: egret.Point): number
    {
        return v.x * e.x + v.y * e.y;
    }

    /* 
     * 求一个点与直线之间的距离.直线由一个点和它的法向量表示
     * 由于向量方向的确定性,所以不需要对结果加上Math.abs().如果计算结果为负,则说明哪里有问题.
     * @param pt 点
     * @param ptLine, e 表示一条直线的点和单位法向量
     */
    public static PtLineDist(pt: egret.Point, ptLine: egret.Point, e: egret.Point): number
    {
        var v = new egret.Point(pt.x - ptLine.x, pt.y - ptLine.y);

        return Geometry.ProjectLength(v, e);
    }

    /* 
     * 求一个点与直线之间的距离.直线由二个点表示
     * @param pt 点
     * @param ptLine1,ptLine2 表示直线的二个点
     */
    public static PtLineDistByPt(pt: egret.Point, ptLine1: egret.Point, ptLine2: egret.Point): number
    {
        var e = Geometry.NormalOfLineByPt(ptLine1, ptLine2, pt);

        //Debug.logCount('Geometry:ProjectPtOfLineByPt', 3, 'e=' + Debug.ptStr(e) + ' ptLine1=' + Debug.ptStr(ptLine1) + ' ptLine2=' + Debug.ptStr(ptLine2));


        return Geometry.PtLineDist(pt, ptLine1, e);
    }
    
    /* 
     * 求一个点在一个直线上的投影点.直线由一个点和它的法向量表示
     * @param pt 要求投影的点
     * @param ptLine, e 表示一条直线的点和单位法向量
     * @returns 投影点的坐标
     */
    public static ProjectPtOfLine(pt: egret.Point, ptLine: egret.Point, e: egret.Point): egret.Point
    {
        // 斜边向量(注意方向)
        var vh = new egret.Point(pt.x - ptLine.x, pt.y - ptLine.y);

        var length = Geometry.ProjectLength(e, vh);

        return new egret.Point(pt.x - e.x * length, pt.y - e.y * length);
    }

    /* 
     * 求一个点在一个直线上的投影点.直线由二个点表示
     * @param pt 要求投影的点
     * @param ptLine1,ptLine2 表示直线的二个点
     * @returns 投影点的坐标
     */
    public static ProjectPtOfLineByPt(pt: egret.Point, ptLine1: egret.Point, ptLine2: egret.Point): egret.Point
    {
        var e = Geometry.NormalOfLineByPt(ptLine1, ptLine2, pt);

        return Geometry.ProjectPtOfLine(pt, ptLine1, e);
    }

    /* 
     * 求一个点在一个直线后面的倒影点(注意跟投影不一样),直线由二个点表示
     * @param pt 点
     * @param ptLine1,ptLine2 表示直线的二个点
     * @returns 倒影点的坐标
     */
    public static RejectPtOfLineByPt(pt: egret.Point, ptLine1: egret.Point, ptLine2: egret.Point): egret.Point
    {
        // 先求投影点
        var project = Geometry.ProjectPtOfLineByPt(pt, ptLine1, ptLine2);

        // 偏移的向量
        var x = project.x - pt.x;
        var y = project.y - pt.y;

        // 投影点加向量偏移
        return new egret.Point(project.x + x, project.y +y);
    }

    /*
     * 求一个向量在一条直线上的反射向量.直线用通过它的二个点表示
     * @param v 入射的向量
     * @param ptLine1, ptLine2 表示一条直线的二个点
     * @returns 反射出来的向量
     */
     public static ProjectVecOfLineByPt(v: egret.Point, ptLine1: egret.Point, ptLine2: egret.Point): egret.Point
     {
        // 入射向量的起点
        var ptIn = new egret.Point(ptLine1.x - v.x, ptLine1.y - v.y);

        // 直线的法向量
        var normal = Geometry.NormalOfLineByPt(ptLine1, ptLine2, ptIn);

        // 直线法向量所在直线上的另一个点
        var ptNor = new egret.Point(ptLine1.x + normal.x, ptLine1.y + normal.y);

        // 入射点在直线法向量所在直线上的倒影点
        var ptOut = Geometry.RejectPtOfLineByPt(ptIn, ptLine1, ptNor);

        return new egret.Point(ptOut.x - ptLine1.x, ptOut.y - ptLine1.y);
     }

     /*
      * 判断线段外的一个点在线段上的投影, 是否在线段上.
      * @param pt 线段外的点
      * @param ptLine1, ptLine2 表示线段的二个点
      * @returns 如果在线段范围内,则返回true
      */
    public static ProjectInSegment(pt: egret.Point, ptLine1: egret.Point, ptLine2: egret.Point): boolean
    {
        // 先求点在直线上的投影
        var ptProject = Geometry.ProjectPtOfLineByPt(pt, ptLine1, ptLine2);

        // 两端点到投影点的向量点乘是否为负数
        var mul = (ptProject.x - ptLine1.x) * (ptProject.x - ptLine2.x) + (ptProject.y - ptLine1.y) * (ptProject.y - ptLine2.y);

        return mul < 0;
    }

    /*
     * 求向量v在笛卡尔坐标系里的角度,单位:弧度,范围(0,2*PI)
     * 通过求向量v与x轴正方向单位向量(1,0)之间的夹角来计算
     * @returns 弧度值
     */
     public static GetVecRad(v: egret.Point): number
     {
        var e = new egret.Point(v.x, v.y);
        Geometry.Normal(e);

        var rad = Math.acos(e.x);

        if(v.y < 0)
        {
            rad = 2 * PI - rad;
        }

        return rad;
     }

    /*
     * 求向量v在笛卡尔坐标系里的角度,单位:度,范围(0,360)
     * 通过求向量v与x轴正方向单位向量(1,0)之间的夹角来计算
     * @returns 角度值
     */
     public static GetVecAngle(v: egret.Point): number
     {
        return Geometry.Rad2Angle( Geometry.GetVecRad(v) );
     }

    /*
     * 求二点的角度(单位:度). pt1放在原点,向量pt1pt2的方向
     *
     */
     public static GetPtAngle(pt1: egret.Point, pt2: egret.Point): number
     {
        return Geometry.GetVecAngle(new egret.Point(pt2.x - pt1.x, pt2.y - pt1.y));
     }

     /*
      * 求向量旋转某个角度后的坐标值
      * 利用公式:
      *     cos(a+b) = cos(a)*cos(b) - sin(a)*sin(b)
      *     sin(a+b) = sin(a)*cos(b) + cos(a)*sin(b)
      * @param angle,单位为弧度值
      */
    public static VecRotate(v: egret.Point, rad: number)
    {
        var len = Geometry.Length(v);
        var a = Geometry.GetVecRad(v);

        var cos_ab = Math.cos(a) * Math.cos(rad) - Math.sin(a) * Math.sin(rad);
        var sin_ab = Math.sin(a) * Math.cos(rad) + Math.cos(a) * Math.sin(rad);

        return new egret.Point(len * cos_ab, len * sin_ab);
    }
}
