<?php
/**
 * Created by PhpStorm.
 * User: willis
 * Date: 15/12/22
 * Time: 上午9:09
 */
use Workerman\Worker;

require_once __DIR__ . '/../../Workerman/Autoloader.php';

// 创建一个Worker监听8888端口，使用http协议通讯
$http_worker = new Worker("http://0.0.0.0:8888");

// redis所在ip和启动端口
define('GLOBAL_REDIS_CONF', '127.0.0.1:6379');

// 启动4个进程对外提供服务
$http_worker->count = 4;

// 接收到浏览器发送的数据时回复hello world给浏览器
$http_worker->onMessage = function($connection, $data)
{
    $msg = MsgManage::doApi($data['post']);
    // 向浏览器发送消息
    $connection->send(json_encode($msg));
};

if(!defined('GLOBAL_START'))
{
    Worker::runAll();
}