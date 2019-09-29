<?php
/**
 * Created by PhpStorm.
 * User: lzx
 * Date: 2019-09-09
 * Time: 21:26
 */

namespace app\admin\controller;

use app\common\model\PositionModel;
use think\Controller;


header('Access-Control-Allow-Origin:*');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, authKey, sessionId, Access-Token, X-Token,x-token");

class Base extends Controller
{

    public function upload()
    {

        $common = config('common');
        $file = request()->file('file');
        // 移动到框架应用根目录/uploads/ 目录下
        $info = $file->move('./uploads');
        if ($info) {
            // 成功上传后 获取上传信息
            // 输出 jpg
            return json(['path' => $common['url'] . '/uploads/' . $info->getSaveName()]);
        } else {
            // 上传失败获取错误信息
            echo $file->getError();
        }
    }

    public function getCoord($address)
    {
//        $address = '广西北海市银海区银滩镇桂林电子科技大学北海小区';
        $url = 'https://apis.map.qq.com/ws/geocoder/v1/?address=' . $address . '&key=XB2BZ-J7PW3-DIZ3P-YC34A-BWFW7-ELBOI';
        $res = curlSend($url);
//        dump($res);
        return $res['result']['location'];
    }


    public function getDistance($distance)
    {
        $url = 'https://apis.map.qq.com/ws/distance/v1/?mode=driving&from=24.25465,109.32672&to='.$distance.'&key=XB2BZ-J7PW3-DIZ3P-YC34A-BWFW7-ELBOI';
        $res = curlSend($url);
        return $res;
    }

    public function getProvinces()
    {
        $res = PositionModel::where('level', 1)->select();
        return json(['data' =>$res, 'code' => 20000]);
    }

    public function getCity()
    {
        $data = input('param.');
        $res = PositionModel::where('level', 2)
            ->where('area_index', 'like', $data['index'])->select();
        return json(['data' =>$res, 'code' => 20000]);
    }

    public function getArea()
    {
        $data = input('param.');
        $res = PositionModel::where('level', 3)
            ->where('area_index', 'like', '%' . $data['index'] . '%')->select();

        return json(['data' =>$res, 'code' => 20000]);
    }

}
