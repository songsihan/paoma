<?php
use Common\Constants;
use Dao\PlayerDao;

/**
 * Created by PhpStorm.
 * User: willis
 * Date: 15/12/22
 * Time: 上午9:09
 */


class MsgManage{

    public static function doApi($data)
    {
        // 获取客户端请求
        if(!$data || !isset($re['type']))
        {
            \Utils\RedisUtil::set('msg','error');
            $v = \Utils\RedisUtil::get('msg');
            return array('s'=>Constants::RESPONSE_ERROR,'v'=>$v);
        }

        $re = array();
        $re['type'] = $data['type'];
        if($data['type'] == 'login')
        {

//            Login::doApi($data,$re);
        }
        else
        {
            $uid = $data['uid'];
            $player = PlayerDao::getPlayer($uid);
//            RedisUtil::lock($uid);
            if(!$data['uid'] || !$player)
            {
                $re['s'] = Constants::RESPONSE_NO_PLAYER;
//                RedisUtil::unlock($uid);
                return $re;
            }
            $re['s'] = Constants::RESPONSE_SUCCESS;
            switch($data['type'])
            {
                case 'test':
//                    Progress::doApi($player,$data,$re);
                    break;
                default:
                    $re['s'] = Constants::RESPONSE_FAIL;
                    break;
            }
        }
        return $re;
//        RedisUtil::unlock($uid);
    }
}