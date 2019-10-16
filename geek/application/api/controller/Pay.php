<?php
/**
 * Created by PhpStorm.
 * User: lzx
 * Date: 2019-10-11
 * Time: 12:27
 */

namespace app\api\controller;


use app\common\model\WxModel;
use EasyWeChat\Factory;

class Pay extends Base
{

    //单篇订单支付
    public function toPay()
    {

        $wx = WxModel::find();
        if (request()->isPost()) {
            $config = [
                'app_id' => $wx['app_id'],
                'mch_id' => $wx['mch_id'],
                'key' => $wx['key'],   // API!操作
                'cert_path' => getcwd() . '/cert/apiclient_cert.pem', // XXX: 绝对路径！！！！
                'key_path' => getcwd() . '/cert/apiclient_key.pem',
                'notify_url' => '',     // 你也可以在下单时单独设置来想覆盖它
            ];
            $post = input('param.');
//            $total_money = $post['money'];
            $total_money = 0.01;

            /**
             * 一键缴费
             */

            $app = Factory::payment($config);
            $out_trade_no = time() . rand(1000, 9999);
            $attributes = [
                'trade_type' => 'JSAPI', // JSAPI，NATIVE，APP...
                'body' => '11',
                'detail' => '22',
                'out_trade_no' => $out_trade_no,
                'total_fee' => $total_money * 100, // 单位：分
                'notify_url' => '/', // 支付结果通知网址，如果不设置则会使用配置里的默认地址
                'openid' => $post['openid'], // trade_type=JSAPI，此参数必传，用户在商户appid下的唯一标识，
            ];
            $result = $app->order->unify($attributes);
            $config = array();


            if ($result['return_code'] == 'SUCCESS' && $result['result_code'] == 'SUCCESS') {
                $prepayId = $result['prepay_id'];
                $jssdk = $app->jssdk;
                $config = $jssdk->bridgeConfig($prepayId, false);
            }
            $arr = array(
                'timeStamp' => $config['timeStamp'],
                'nonceStr' => $config['nonceStr'],
                'package' => $config['package'],
                'signType' => 'MD5',
                'paySign' => $config['paySign'],
                'out_trade_no' => $out_trade_no
            );
            return json($arr);
        }
    }


}