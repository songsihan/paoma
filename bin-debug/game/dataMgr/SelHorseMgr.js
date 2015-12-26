/**
 * 跑马数据管理
 */
var game;
(function (game) {
    var SelHorseMgr = (function () {
        function SelHorseMgr() {
            this.list = new Array(2); // 马跑的轨迹数据
            this.pushMoenyList = [];
            for (var i = 1; i <= 10; i++) {
                this.pushMoenyList[i] = 0;
            }
            this.setHorseMapInfo();
            this.selStart = null;
        }
        var d = __define,c=SelHorseMgr;p=c.prototype;
        SelHorseMgr.GetInstance = function () {
            if (!this.instance) {
                this.instance = new SelHorseMgr();
            }
            return this.instance;
        };
        p.setPushMoeny = function (index, money) {
            this.pushMoenyList[index] = this.pushMoenyList[index] + money;
        };
        p.getPushMoney = function (index) {
            return this.pushMoenyList[index];
        };
        p.setSelStar = function (index) {
            this.selStart = index;
        };
        // 设置马的配置数据
        p.setHorseMapInfo = function () {
            var map1 = {
                r: 460,
                speed: 50,
                circelStarPosx: 2490,
                startPoint: { x: 300, y: 920 },
                circlePosx: [2447, 2508, 2566, 2624, 2681, 2735, 2793, 2848, 2904, 2959, 3016, 3071, 3128, 3182, 3224, 3257, 3281, 3288, 3283, 3268, 3232, 3187, 3131, 3076, 3018],
                circlePosy: [1643, 1665, 1679, 1690, 1697, 1698, 1699, 1688, 1674, 1658, 1639, 1610, 1569, 1527, 1472, 1408, 1341, 1272, 1199, 1133, 1066, 1012, 969, 932, 903]
            };
            var map2 = {
                r: 380,
                speed: 50,
                circelStarPosx: 2560,
                startPoint: { x: 362, y: 858 },
                circlePosx: [2490, 2541, 2593, 2642, 2687, 2734, 2780, 2826, 2871, 2921, 2969, 3016, 3064, 3109, 3144, 3182, 3198, 3208, 3205, 3183, 3156, 3111, 3069, 3022, 2947],
                circlePosy: [1588, 1602, 1612, 1620, 1626, 1628, 1626, 1617, 1609, 1596, 1578, 1553, 1524, 1488, 1442, 1390, 1331, 1271, 1209, 1152, 1100, 1050, 1015, 983, 957]
            };
            var map3 = {
                r: 300,
                speed: 50,
                circelStarPosx: 2630,
                startPoint: { x: 424, y: 810 },
                circlePosx: [2532, 2576, 2616, 2656, 2695, 2732, 2773, 2810, 2850, 2890, 2929, 2968, 3008, 3044, 3076, 3103, 3121, 3130, 3123, 3108, 3084, 3050, 3011, 2973, 2934],
                circlePosy: [1534, 1545, 1555, 1562, 1567, 1570, 1569, 1563, 1552, 1542, 1527, 1507, 1482, 1452, 1413, 1372, 1323, 1272, 1221, 1172, 1126, 1086, 1056, 1030, 1009]
            };
            var map4 = {
                r: 220,
                speed: 50,
                circelStarPosx: 2700,
                startPoint: { x: 486, y: 740 },
                circlePosx: [2578, 2609, 2639, 2673, 2702, 2733, 2765, 2796, 2828, 2861, 2894, 2925, 2956, 2987, 3013, 3036, 3051, 3058, 3053, 3044, 3024, 2996, 2964, 2928, 2894],
                circlePosy: [1474, 1489, 1497, 1507, 1510, 1511, 1513, 1509, 1503, 1492, 1480, 1462, 1444, 1418, 1388, 1353, 1312, 1272, 1227, 1188, 1151, 1119, 1095, 1075, 1060]
            };
            var map5 = {
                r: 140,
                speed: 50,
                circelStarPosx: 2770,
                startPoint: { x: 550, y: 690 },
                circlePosx: [2624, 2649, 2671, 2690, 2712, 2733, 2755, 2788, 2801, 2828, 2854, 2880, 2904, 2926, 2946, 2963, 2977, 2979, 2975, 2965, 2949, 2929, 2899, 2873, 2846],
                circlePosy: [1411, 1418, 1425, 1432, 1435, 1439, 1442, 1443, 1441, 1436, 1431, 1419, 1404, 1383, 1361, 1335, 1304, 1272, 1240, 1209, 1184, 1159, 1143, 1131, 1121]
            };
            this.list[1] = map1;
            this.list[2] = map2;
            this.list[3] = map3;
            this.list[4] = map4;
            this.list[5] = map5;
        };
        p.getHorseMapInfo = function () {
            return this.list;
        };
        SelHorseMgr.horseNum = 5; // 马的数量
        SelHorseMgr.viewHorseIndex = 3; // 场景跟随的索引
        return SelHorseMgr;
    })();
    game.SelHorseMgr = SelHorseMgr;
    egret.registerClass(SelHorseMgr,"game.SelHorseMgr");
})(game || (game = {}));
