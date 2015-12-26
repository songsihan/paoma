module game {
	//角色状态
	export enum ROLE_STATUS
	{
	    STAY = 0,
	    RUN = 1,
	    MOVE_RIGHT = 2,
	    MOVE_LEFT = 3,
	    MOVE_UP = 4,
	    MOVE_DOWN = 5,
	    USE_SKILL1 = 6,
	    USE_SKILL2 = 7,
	    UNDER_ATTACK = 8,
	}

	//玩家移动速度
	export var MOVE_SPEED : number = 4;
	//普通攻击的连招最长时间
	export var CONTINUE_SKILL_TIME = 1000;
	//最大连招书
	export var MAX_CONTINUES = 3;

	//击飞距离
	export var KNOCK_DIST = 40;
}