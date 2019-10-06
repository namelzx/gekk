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
function msg($code, $data = '', $message = '',$status=20000)
{
    return compact('code', 'data', 'message','status');
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
/**
 * 生成宣传海报
 * @param array  参数,包括图片和文字
 * @param string  $filename 生成海报文件名,不传此参数则不生成文件,直接输出图片
 * @return [type] [description]
 */
function getbgqrcode($imageDefault,$textDefault,$background,$filename="",$config=array()){
    //如果要看报什么错，可以先注释调这个header
    if(empty($filename)) header("content-type: image/png");
    //背景方法
    $backgroundInfo = getimagesize($background);
    $ext = image_type_to_extension($backgroundInfo[2], false);
    $backgroundFun = 'imagecreatefrom'.$ext;
    $background = $backgroundFun($background);
    $backgroundWidth = imagesx($background);  //背景宽度
    $backgroundHeight = imagesy($background);  //背景高度
    $imageRes = imageCreatetruecolor($backgroundWidth,$backgroundHeight);
    $color = imagecolorallocate($imageRes, 0, 0, 0);
    imagefill($imageRes, 0, 0, $color);
    imagecopyresampled($imageRes,$background,0,0,0,0,imagesx($background),imagesy($background),imagesx($background),imagesy($background));
    //处理了图片
    if(!empty($config['image'])){
        foreach ($config['image'] as $key => $val) {
            $val = array_merge($imageDefault,$val);
            $info = getimagesize($val['url']);
            $function = 'imagecreatefrom'.image_type_to_extension($info[2], false);

//            if($val['stream']){
//                //如果传的是字符串图像流
//                $info = getimagesizefromstring($val['url']);
//                $function = 'imagecreatefromstring';
//            }
            $res = $function($val['url']);
            $resWidth = $info[0];
            $resHeight = $info[1];
            //建立画板 ，缩放图片至指定尺寸
            $canvas=imagecreatetruecolor($val['width'], $val['height']);
            imagefill($canvas, 0, 0, $color);
            //关键函数，参数（目标资源，源，目标资源的开始坐标x,y, 源资源的开始坐标x,y,目标资源的宽高w,h,源资源的宽高w,h）
            imagecopyresampled($canvas, $res, 0, 0, 0, 0, $val['width'], $val['height'],$resWidth,$resHeight);
            $val['left'] = $val['left']<0?$backgroundWidth- abs($val['left']) - $val['width']:$val['left'];
            $val['top'] = $val['top']<0?$backgroundHeight- abs($val['top']) - $val['height']:$val['top'];
            //放置图像
            imagecopymerge($imageRes,$canvas, $val['left'],$val['top'],$val['right'],$val['bottom'],$val['width'],$val['height'],$val['opacity']);//左，上，右，下，宽度，高度，透明度
        }
    }
    //处理文字
    if(!empty($config['text'])){
        foreach ($config['text'] as $key => $val) {
            $val = array_merge($textDefault,$val);
            list($R,$G,$B) = explode(',', $val['fontColor']);
            $fontColor = imagecolorallocate($imageRes, $R, $G, $B);
            $val['left'] = $val['left']<0?$backgroundWidth- abs($val['left']):$val['left'];
            $val['top'] = $val['top']<0?$backgroundHeight- abs($val['top']):$val['top'];
            imagettftext($imageRes,$val['fontSize'],$val['angle'],$val['left'],$val['top'],$fontColor,$val['fontPath'],$val['text']);
        }
    }
    //生成图片
    if(!empty($filename)){
        $res = imagejpeg ($imageRes,$filename,90);
        //保存到本地
        imagedestroy($imageRes);
    }else{
        imagejpeg ($imageRes);
        //在浏览器上显示
        imagedestroy($imageRes);
    }
}



