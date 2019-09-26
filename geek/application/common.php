<?php
// +----------------------------------------------------------------------
// | ThinkPHP [ WE CAN DO IT JUST THINK ]
// +----------------------------------------------------------------------
// | Copyright (c) 2006-2016 http://thinkphp.cn All rights reserved.
// +----------------------------------------------------------------------
// | Licensed ( http://www.apache.org/licenses/LICENSE-2.0 )
// +----------------------------------------------------------------------
// | Author: 流年 <liu21st@gmail.com>
// +----------------------------------------------------------------------

// 应用公共文件

/**
 * 统一返回信息
 * @param $status
 * @param $data
 * @param $msg
 * @return array
 */
function msg($code, $data = '', $message = '')
{
    return compact('code', 'data', 'message');
}

//调用获取路径
function curlSend($url, $data = '')
{
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false); //不进行证书验证
    curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false); //不进行主机头验证
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true); //结果不直接输出在屏幕上
    $data && curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
    $data ? curl_setopt($ch, CURLOPT_POST, true) : curl_setopt($ch, CURLOPT_POST, false);  //发送的方式
    curl_setopt($ch, CURLOPT_URL, $url);   //发送的地址
    $result = curl_exec($ch);
    curl_close($ch);
    $info = json_decode($result, true);
    return $info;
}