<?php
/**
 * Created by PhpStorm.
 * User: lzx
 * Date: 2019-09-14
 * Time: 23:14
 */

namespace app\api\controller;


use app\common\model\DistModel;
use app\common\model\PositionModel;
use app\common\model\UserModel;
use EasyWeChat\Factory;
use think\Controller;
use think\Db;


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

    /**
     * @param int $user_id 购买人id
     * @param int $dis 分销层次
     * @param int $to 商品积分
     * @param int $oder_id 订单id
     * @param int $goods_id 购买商品id
     *
     * @return array
     * 计算分销公式
     */
    public function distribution($user_id = 1, $oder_id = 1, $goods_id = 1, $dis = 3, $to = 100, $price = 0)
    {


        /**
         * 自定义上级查询
         */
        //先获取下单用户
        $user = UserModel::where('id', $user_id)->find();
        $arr = [];
        $p_id = $user['p_id'];
        $create_time = time();
        for ($i = 0; $i < $dis; $i++) {// 循环查询下级用户
            $res = UserModel::where('id', $p_id)->find();
            if (empty($res)) {//当查询为空的时候结束。
                break;
            }
            $p_id = $res['p_id'];
            $level = $i + 1;
            $dist = DistModel::where('level', $level)->find();
            $arr[$i] = [
                'integral' => $to * $dist['dist'],
                'd_id' => $user_id,
                'user_id' => $res['id'],
                'goods_id' => $goods_id,
                'order_id' => $oder_id,
                'create_time' => $create_time,
                'price' => $price
            ];
        }
        Db::name('dist_order')->insertAll($arr);
    }


    public function buildBg($url)
    {
        $imageDefault = array(
            'left' => 130,
            'top' => 320,
            'right' => 0,
            'bottom' => 0,
            'width' => 180,
            'height' => 200,
            'opacity' => 100
        );
        $textDefault = array(
            'text' => '',
            'left' => 0,
            'top' => 0,
            'fontSize' => 32,       //字号
            'fontColor' => '255,255,255', //字体颜色
            'angle' => 0,
        );

        $background = './static/bg.jpg';//海报最底层得背景
        $config['image'][]['url'] = $url;
        $time = time();
        $filename = './code/' . $time . '.jpg';
        getbgqrcode($imageDefault, $textDefault, $background, $filename, $config);
        return '/code/' . $time . '.jpg';;
    }

    public function BuildCode($user_id)
    {

        $app = Factory::miniProgram($this->config);
        $response = $app->app_code->getUnlimit('scene-value', [
            'scene' => $user_id,
            'page' => 'pages/index/index',
        ]);
        $comm = config('common');
        if ($response instanceof \EasyWeChat\Kernel\Http\StreamResponse) {
            $filename = $response->saveAs('./code/', time() . '.png');
            return $comm['url'] . '/code/' . $filename;
        }

    }
}