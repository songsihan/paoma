//  角色类型的定义

module game {
	export enum GAME_STATE
	{
		LOGIN = 0,
		NORMAL = 1,
		OVER = 2,
	}

	export enum TYPE_ROLE
	{
		PLAYER = 0,
		ENEMEY = 1,
	}
	
	export enum SELECT_INDEX
	{
	    ONE_STAR = 1,
	    TWO_STAR = 2,
	    THREE_STAR = 3,
	}

	//舞台上边补充不能移动的区域
	export var STAGE_UP_DIFF = 110;
	export var STAGE_DOWN_DIFF = 110;
}