/**
 * 游戏中角色的AI的状态定义
 */
module game {

    export enum AI_STATUS
    {
        IDLE   = 0,
        DEFEND = 1, //防御
        ATTACK = 2, //攻击状态(随机使用1、2技能)
    }
}