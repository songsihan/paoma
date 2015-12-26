module game {
    export class GameEvent extends egret.Event {
        static FIGHT_START: string = "FIGHT_START";
        static LEFT_MOVE_BEGIN: string = "LEFT_MOVE_BEGIN";
        static LEFT_MOVE_END: string = "LEFT_MOVE_END";
        static UP_MOVE_BEGIN: string = "UP_MOVE_BEGIN";
        static UP_MOVE_END: string = "UP_MOVE_END";
        static RIGHT_MOVE_BEGIN: string = "RIGHT_MOVE_BEGIN";
        static RIGHT_MOVE_END: string = "RIGHT_MOVE_END";
        static DOWN_MOVE_BEGIN: string = "DOWN_MOVE_BEGIN";
        static DOWN_MOVE_END: string = "DOWN_MOVE_END";
        static NORMAL_ATTACK: string = "NORMAL_ATTACK";
        static BTN_A: string = "BTN_A";
        static BTN_B: string = "BTN_B";
        static BTN_C: string = "BTN_C";
        static BTN_D: string = "BTN_D";
        static BTN_D_END: string = "BTN_D_END";
        
        static SELECT_HORSE: string = "SELECT_HORSE"; // 选马
        
        static SELECT_ONE_HORSE: string = "SELECT_ONE_HORSE"; //选马界面的押注
        
        static PUSH_MONEY: string = "PUSH_MONEY"; //选中某匹马押注
        static CLOSE_PUSH_MONEY_DLG = "CLOSE_PUSH_MONEY_DLG";//关闭选中某匹界面
        
        static ClOSE_HORSE_INFO: string = "ClOSE_HORSE_INFO";
        
        static TIEM_END: string = "TIEM_END";// 倒计时结束
    }
}