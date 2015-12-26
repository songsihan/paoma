//  角色类型的定义
var game;
(function (game) {
    (function (GAME_STATE) {
        GAME_STATE[GAME_STATE["LOGIN"] = 0] = "LOGIN";
        GAME_STATE[GAME_STATE["NORMAL"] = 1] = "NORMAL";
        GAME_STATE[GAME_STATE["OVER"] = 2] = "OVER";
    })(game.GAME_STATE || (game.GAME_STATE = {}));
    var GAME_STATE = game.GAME_STATE;
    (function (TYPE_ROLE) {
        TYPE_ROLE[TYPE_ROLE["PLAYER"] = 0] = "PLAYER";
        TYPE_ROLE[TYPE_ROLE["ENEMEY"] = 1] = "ENEMEY";
    })(game.TYPE_ROLE || (game.TYPE_ROLE = {}));
    var TYPE_ROLE = game.TYPE_ROLE;
    (function (SELECT_INDEX) {
        SELECT_INDEX[SELECT_INDEX["ONE_STAR"] = 1] = "ONE_STAR";
        SELECT_INDEX[SELECT_INDEX["TWO_STAR"] = 2] = "TWO_STAR";
        SELECT_INDEX[SELECT_INDEX["THREE_STAR"] = 3] = "THREE_STAR";
    })(game.SELECT_INDEX || (game.SELECT_INDEX = {}));
    var SELECT_INDEX = game.SELECT_INDEX;
    //舞台上边补充不能移动的区域
    game.STAGE_UP_DIFF = 110;
    game.STAGE_DOWN_DIFF = 110;
})(game || (game = {}));
