<?php
/**
 * This file is part of workerman.
 *
 * Licensed under The MIT License
 * For full copyright and license information, please see the MIT-LICENSE.txt
 * Redistributions of files must retain the above copyright notice.
 *
 * @author walkor<walkor@workerman.net>
 * @copyright walkor<walkor@workerman.net>
 * @link http://www.workerman.net/
 * @license http://www.opensource.org/licenses/mit-license.php MIT License
 */
namespace Common;


use Common\Constants;

/**
 * 存储类
 * 这里用memcache实现
 */
class Store
{
    /**
     * 实例数组
     * @var array
     */
    protected static $instance = array();
    
    /**
     * 获取实例
     * @throws \Exception
     */
    public static function instance()
    {
        $config_conf = GLOBAL_REDIS_CONF;
        // redis 驱动
        if(!isset($config_conf))
        {
            echo "redis_name not set\n";
            throw new \Exception("redis_name not set\n");
        }
        if(!isset(self::$instance[$config_conf]))
        {
            ini_set('default_socket_timeout',-1);
            self::$instance[$config_conf] = new Redis();
            $address = $config_conf;
            list($ip, $port) = explode(':', $address);
            $timeout = 1;
            self::$instance[$config_conf]->connect($ip, $port, $timeout);
            self::$instance[$config_conf]->setOption(\Redis::OPT_SERIALIZER, \Redis::SERIALIZER_PHP);
        }else{
            try{
                self::$instance[$config_conf]->ping();
            }catch (\RedisException $e){
                self::$instance[$config_conf] = new Redis();
                $config = $config_conf;
                // 只选择第一个ip作为服务端
                $address = current($config);
                list($ip, $port) = explode(':', $address);
                $timeout = 1;
                self::$instance[$config_conf]->connect($ip, $port, $timeout);
                self::$instance[$config_conf]->setOption(\Redis::OPT_SERIALIZER, \Redis::SERIALIZER_PHP);
            }
        }
        return self::$instance[$config_conf];
    }
}

class Redis extends \Redis{

    public function increment($key)
    {
        return parent::incr($key);
    }
}
