<?php
/**
 * Created by PhpStorm.
 * User: willis
 * Date: 15/10/8
 * Time: 下午4:06
 */
namespace Common;
class Constants{

    const RESPONSE_SUCCESS = 1;//操作成功
    const RESPONSE_FAIL = -1;//操作失败
    const RESPONSE_RECONN_FAIL = -3;//重连失败
    const RESPONSE_NO_PLAYER = -2;//用户不存在
    const RESPONSE_ERROR = -4;//协议异常

    const RESPONSE_MATCHING = 3;//匹配中
    const RESPONSE_RE_JOIN = 4;//牌局不存在重新匹配 玩家下线，重新匹配
    const RESPONSE_RE_TABLE = 5;//重置牌局
    const RESPONSE_RECONN_SUCCESS = 6;//重连成功
}