var game;
(function (game) {
    //角色状态
    (function (ROLE_STATUS) {
        ROLE_STATUS[ROLE_STATUS["STAY"] = 0] = "STAY";
        ROLE_STATUS[ROLE_STATUS["RUN"] = 1] = "RUN";
        ROLE_STATUS[ROLE_STATUS["MOVE_RIGHT"] = 2] = "MOVE_RIGHT";
        ROLE_STATUS[ROLE_STATUS["MOVE_LEFT"] = 3] = "MOVE_LEFT";
        ROLE_STATUS[ROLE_STATUS["MOVE_UP"] = 4] = "MOVE_UP";
        ROLE_STATUS[ROLE_STATUS["MOVE_DOWN"] = 5] = "MOVE_DOWN";
        ROLE_STATUS[ROLE_STATUS["USE_SKILL1"] = 6] = "USE_SKILL1";
        ROLE_STATUS[ROLE_STATUS["USE_SKILL2"] = 7] = "USE_SKILL2";
        ROLE_STATUS[ROLE_STATUS["UNDER_ATTACK"] = 8] = "UNDER_ATTACK";
    })(game.ROLE_STATUS || (game.ROLE_STATUS = {}));
    var ROLE_STATUS = game.ROLE_STATUS;
    //玩家移动速度
    game.MOVE_SPEED = 4;
    //普通攻击的连招最长时间
    game.CONTINUE_SKILL_TIME = 1000;
    //最大连招书
    game.MAX_CONTINUES = 3;
    //击飞距离
    game.KNOCK_DIST = 40;
})(game || (game = {}));
