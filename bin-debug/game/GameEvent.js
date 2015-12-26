var game;
(function (game) {
    var GameEvent = (function (_super) {
        __extends(GameEvent, _super);
        function GameEvent() {
            _super.apply(this, arguments);
        }
        var d = __define,c=GameEvent;p=c.prototype;
        GameEvent.FIGHT_START = "FIGHT_START";
        GameEvent.LEFT_MOVE_BEGIN = "LEFT_MOVE_BEGIN";
        GameEvent.LEFT_MOVE_END = "LEFT_MOVE_END";
        GameEvent.UP_MOVE_BEGIN = "UP_MOVE_BEGIN";
        GameEvent.UP_MOVE_END = "UP_MOVE_END";
        GameEvent.RIGHT_MOVE_BEGIN = "RIGHT_MOVE_BEGIN";
        GameEvent.RIGHT_MOVE_END = "RIGHT_MOVE_END";
        GameEvent.DOWN_MOVE_BEGIN = "DOWN_MOVE_BEGIN";
        GameEvent.DOWN_MOVE_END = "DOWN_MOVE_END";
        GameEvent.NORMAL_ATTACK = "NORMAL_ATTACK";
        GameEvent.BTN_A = "BTN_A";
        GameEvent.BTN_B = "BTN_B";
        GameEvent.BTN_C = "BTN_C";
        GameEvent.BTN_D = "BTN_D";
        GameEvent.BTN_D_END = "BTN_D_END";
        GameEvent.SELECT_HORSE = "SELECT_HORSE"; // 选马
        GameEvent.SELECT_ONE_HORSE = "SELECT_ONE_HORSE"; //选马界面的押注
        GameEvent.PUSH_MONEY = "PUSH_MONEY"; //选中某匹马押注
        GameEvent.CLOSE_PUSH_MONEY_DLG = "CLOSE_PUSH_MONEY_DLG"; //关闭选中某匹界面
        GameEvent.ClOSE_HORSE_INFO = "ClOSE_HORSE_INFO";
        GameEvent.TIEM_END = "TIEM_END"; // 倒计时结束
        return GameEvent;
    })(egret.Event);
    game.GameEvent = GameEvent;
    egret.registerClass(GameEvent,"game.GameEvent");
})(game || (game = {}));
