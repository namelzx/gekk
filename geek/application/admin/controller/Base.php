<?php
/**
 * Created by PhpStorm.
 * User: lzx
 * Date: 2019-09-09
 * Time: 21:26
 */

namespace app\admin\controller;

use app\common\model\PositionModel;
use app\common\model\ShopModel;
use app\common\model\WxModel;
use think\Controller;


header('Access-Control-Allow-Origin:*');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, authKey, sessionId, Access-Token, X-Token,x-token");


//电商ID
defined('EBusinessID') or define('EBusinessID', '1341728');
//电商加密私钥，快递鸟提供，注意保管，不要泄漏
defined('AppKey') or define('AppKey', '0005ad7d-bd63-415c-822c-3aa2462c1493');
//请求url
defined('ReqURL') or define('ReqURL', 'http://api.kdniao.com/Ebusiness/EbusinessOrderHandle.aspx');

class Base extends Controller
{


    public $config;

    public function __construct()
    {
        parent::__construct();

        $wx = WxModel::find();
        $this->config = [
            'app_id' => $wx['app_id'],
            'secret' => $wx['secret'],
            // 指定 API 调用返回结果的类型：array(default)/collection/object/raw/自定义类名
            'response_type' => 'array',

            'log' => [
                'level' => 'debug',
                'file' => __DIR__ . '/wechat.log',
            ],
        ];

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
        if ($res['message'] !== 'query ok') {
            return $res['message'];
        }
        return $res['result']['location'];
    }


    public function getDistance($distance)
    {
        $url = 'https://apis.map.qq.com/ws/distance/v1/?mode=driving&from=24.25465,109.32672&to=' . $distance . '&key=XB2BZ-J7PW3-DIZ3P-YC34A-BWFW7-ELBOI';
        $res = curlSend($url);
        return $res;
    }

    public function getProvinces()
    {
        $res = PositionModel::where('level', 1)->select();
        return json(['data' => $res, 'code' => 20000]);
    }

    public function getCity()
    {
        $data = input('param.');
        $res = PositionModel::where('level', 2)
            ->where('area_index', 'like', $data['index'])->select();
        return json(['data' => $res, 'code' => 20000]);
    }

    public function getArea()
    {
        $data = input('param.');
        $res = PositionModel::where('level', 3)
            ->where('area_index', 'like', '%' . $data['index'] . '%')->select();

        return json(['data' => $res, 'code' => 20000]);
    }


    /**
     * Json方式 查询订单物流轨迹
     */
    public function getOrderTracesByJson($requestData)
    {
//    $requestData= "{'OrderCode':'','ShipperCode':'YTO','LogisticCode':'12345678'}";

        $datas = array(
            'EBusinessID' => EBusinessID,
            'RequestType' => '1002',
            'RequestData' => urlencode($requestData),
            'DataType' => '2',
        );
        $datas['DataSign'] = $this->encrypt($requestData, AppKey);
        $result = $this->sendPost(ReqURL, $datas);

        //根据公司业务处理返回的信息......
        return $result;
    }


    /**
     *  post提交数据
     * @param  string $url 请求Url
     * @param  array $datas 提交的数据
     * @return url响应返回的html
     */
    public function sendPost($url, $datas)
    {
        $temps = array();
        foreach ($datas as $key => $value) {
            $temps[] = sprintf('%s=%s', $key, $value);
        }
        $post_data = implode('&', $temps);
        $url_info = parse_url($url);
        if (empty($url_info['port'])) {
            $url_info['port'] = 80;
        }
        $httpheader = "POST " . $url_info['path'] . " HTTP/1.0\r\n";
        $httpheader .= "Host:" . $url_info['host'] . "\r\n";
        $httpheader .= "Content-Type:application/x-www-form-urlencoded\r\n";
        $httpheader .= "Content-Length:" . strlen($post_data) . "\r\n";
        $httpheader .= "Connection:close\r\n\r\n";
        $httpheader .= $post_data;
        $fd = fsockopen($url_info['host'], $url_info['port']);
        fwrite($fd, $httpheader);
        $gets = "";
        $headerFlag = true;
        while (!feof($fd)) {
            if (($header = @fgets($fd)) && ($header == "\r\n" || $header == "\n")) {
                break;
            }
        }
        while (!feof($fd)) {
            $gets .= fread($fd, 128);
        }
        fclose($fd);

        return $gets;
    }

    /**
     * 电商Sign签名生成
     * @param data 内容
     * @param appkey Appkey
     * @return DataSign签名
     */
    public function encrypt($data, $appkey)
    {
        return urlencode(base64_encode(md5($data . $appkey)));
    }


    public function GetShopByList()
    {
        $res = ShopModel::all();
        return json(['msg' => '获取店铺成功', 'data' => $res, 'code' => 20000]);
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

    public function BuildCode($shop_id)
    {

        $app = \EasyWeChat\Factory::miniProgram($this->config);
        $response = $app->app_code->getUnlimit('scene-value', [
            'scene' => $shop_id,
            'page' => 'pages/shop/index',
        ]);
        $comm = config('common');
        if ($response instanceof \EasyWeChat\Kernel\Http\StreamResponse) {
            $filename = $response->saveAs('./code/', time() . '.png');
            return $comm['url'] . '/code/' . $filename;
        }

    }


}
