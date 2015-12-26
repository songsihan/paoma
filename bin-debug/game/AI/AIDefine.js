/**
 * 游戏中角色的AI的状态定义
 */
var game;
(function (game) {
    (function (AI_STATUS) {
        AI_STATUS[AI_STATUS["IDLE"] = 0] = "IDLE";
        AI_STATUS[AI_STATUS["DEFEND"] = 1] = "DEFEND";
        AI_STATUS[AI_STATUS["ATTACK"] = 2] = "ATTACK";
    })(game.AI_STATUS || (game.AI_STATUS = {}));
    var AI_STATUS = game.AI_STATUS;
})(game || (game = {}));
