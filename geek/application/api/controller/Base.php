<?php
/**
 * Created by PhpStorm.
 * User: lzx
 * Date: 2019-09-14
 * Time: 23:14
 */

namespace app\api\controller;


use app\common\model\PositionModel;
use think\Controller;


header('Access-Control-Allow-Origin:*');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, authKey, sessionId, Access-Token, X-Token,x-token");

class Base extends Controller
{


    public $config;

    public function __construct()
    {
        parent::__construct();

        $this->config = [
            'app_id' => 'wx5b41a56038e8ec76',
            'secret' => 'e8dedad2705f30a4e9ff9e16dabe915f',
            // 指定 API 调用返回结果的类型：array(default)/collection/object/raw/自定义类名
            'response_type' => 'array',

            'log' => [
                'level' => 'debug',
                'file' => __DIR__ . '/wechat.log',
            ],
        ];

    }


    public function getProvinces()
    {
        $res = PositionModel::where('level', 1)->select();
        return json($res);
    }

    public function getCity()
    {
        $data = input('param.');
        $res = PositionModel::where('level', 2)
            ->where('area_index', 'like', $data['index'])->select();
        return json($res);
    }

    public function getArea()
    {
        $data = input('param.');
        $res = PositionModel::where('level', 3)
            ->where('area_index', 'like', '%' . $data['index'] . '%')->select();
        return json($res);
    }

    public function upload()
    {

        $common = config('common');
        $file = request()->file('file');
        // 移动到框架应用根目录/uploads/ 目录下
        $info = $file->move('./uploads');
        if ($info) {
            // 成功上传后 获取上传信息
            // 输出 jpg
            return $common['url'] . '/uploads/' . $info->getSaveName();
        } else {
            // 上传失败获取错误信息
            echo $file->getError();
        }
    }



}