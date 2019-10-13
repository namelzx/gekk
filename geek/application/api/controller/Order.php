<?php
/**
 * Created by PhpStorm.
 * User: lzx
 * Date: 2019-09-22
 * Time: 18:41
 */

namespace app\api\controller;


use app\common\model\CouponReceiveModel;
use app\common\model\DistOrderModel;
use app\common\model\EvaluateImgModel;
use app\common\model\EvaluateModel;
use app\common\model\GoodsModel;
use app\common\model\IntegralLogModel;
use app\common\model\OrderGoodsModel;
use app\common\model\OrderInvoiceModel;
use app\common\model\OrderModel;
use app\common\model\UserModel;

class Order extends Base
{
    /**
     * 提交订单
     */
    public function PostOrderByData()
    {

        $data = input('param.');
        $arr = [];
        foreach ($data['dorder'] as $i => $item) {
            $arr[$i] = $data['order'];
            $arr[$i]['goods'] = $item;
            $arr[$i]['shop_id'] = $item[0]['shop_id'];
            $arr[$i]['order_no'] = time() . mt_rand(100, 1000000);
            if ($data['order']['isadd'] === 2) {
                $arr[$i]['claim_code'] = mt_rand(100, 1000000);
            }
            $res = OrderModel::create($arr[$i]);

            if (!empty($data['order']['isInvoice'])) {
                if ($data['order']['isInvoice'] == 1) {//开发票
                    $data['invoice']['order_id'] = $res['id'];
                    OrderInvoiceModel::create($data['invoice']);
                }
            }
            $garr = [];
            foreach ($arr[$i]['goods'] as $g => $gitem) {
                $garr[$i]['goods_id'] = $gitem['goods_id'];
                $garr[$i]['order_id'] = $res['id'];
                $garr[$i]['images_url'] = $gitem['images_url'];
                $garr[$i]['name'] = $gitem['name'];
                $garr[$i]['num'] = $gitem['num'];
                $garr[$i]['price'] = $gitem['price'];
                $garr[$i]['suk_id'] = $gitem['suk_id'];
                $garr[$i]['suk_name'] = $gitem['suk_name'];
                $garr[$i]['integral'] = $gitem['integral'];
                $goods = OrderGoodsModel::create($garr[$i]);
                $this->distribution($data['order']['user_id'], $res['id'], $goods['id'], 3, $gitem['integral'], $gitem['price']);
            }
        }
        return json(msg(200, $res, '3'));

        return json($arr);
        $data['order']['order_no'] = time() . mt_rand(100, 1000000);
//        $data['order']['status'] = 2;

        $res = OrderModel::create($data['order']);


        //优惠卷状态
        if (!empty($data['order']['coupons_id'])) {
            CouponReceiveModel::where('id', $data['order']['coupons_id'])->data(['status' => 1])->update();
        }
        if (!empty($data['order']['isInvoice'])) {
            if ($data['order']['isInvoice'] == 1) {//开发票
                $data['invoice']['order_id'] = $res['id'];
                OrderInvoiceModel::create($data['invoice']);
            }
        }
        $arr = [];
        foreach ($data['goods'] as $i => $item) {
            $arr[$i]['goods_id'] = $item['goods_id'];
            $arr[$i]['order_id'] = $res['id'];
            $arr[$i]['images_url'] = $item['images_url'];
            $arr[$i]['name'] = $item['name'];
            $arr[$i]['num'] = $item['num'];
            $arr[$i]['price'] = $item['price'];
            $arr[$i]['suk_id'] = $item['suk_id'];
            $arr[$i]['suk_name'] = $item['suk_name'];
            $arr[$i]['integral'] = $item['integral'];
            $goods = OrderGoodsModel::create($arr[$i]);
            $this->distribution($data['order']['user_id'], $res['id'], $goods['id'], 3, $item['integral'], $item['price']);
        }
        return json(msg(200, $res, '3'));
    }

    public function GetUserByOrder()
    {
        $data = input('param.');
        $where = [];
        if (!empty($data['status'])) {
            $where[] = ['status', 'eq', $data['status']];
        }
        $where[] = ['status', 'neq', 99];
        $res = OrderModel::with('goods')->where('user_id', $data['user_id'])->where($where)->order('id desc')
            ->paginate($data['limit'], false, ['query' => $data['page']]);
        return json($res);
    }

    public function GetOrderIdByFind()
    {
        $data = input('param.');
        $where = [];
        if (!empty($data['id'])) {
            $where[] = ['id', 'eq', $data['id']];
        }

        $res = OrderModel::with(['getGoods', 'shop', 'address', 'invoice'])->where($where)
            ->find();
        return json($res);
    }

    /**
     * 确认收货
     */
    public function GetIdByCancel()
    {
        $data = input('param.');
        $res = OrderModel::where('id', $data['id'])->data(['status' => $data['status']])->update();


        $goodsall = OrderGoodsModel::with(['goods'])->where('order_id', $data['id'])->select();
        if ($data['status'] == 5) {
            return json(msg(200, $res, $goodsall));
        }
        $order = OrderModel::where('id', $data['id'])->find();
        foreach ($goodsall as $i => $item) {
            UserModel::where('id', $order['user_id'])->setInc('integral', $item['goods']['integral']);
            $instdata = [
                'title' => '购买商品',
                'type' => 2,
                'integral' => $item['goods']['integral'] * $item['goods']['num'],//积分数量
                'user_id' => $order['user_id']
            ];
            if ($item['goods']['integral'] > 0) {
                IntegralLogModel::create($instdata);
            }
            GoodsModel::where('id', $item['goods']['id'])->setInc('sales', $item['num']);
            //进行分销操作
            /**
             * 更新分销订单 状态
             */
            DistOrderModel::where('order_id', $data['id'])->data(['status' => 1])->update();

            $dist = DistOrderModel::where('order_id', $data['id'])->select();
            foreach ($dist as $di => $ditem) {
                $dinstdata = [
                    'title' => '分销订单',
                    'type' => 2,
                    'integral' => $ditem['integral'],//积分数量
                    'user_id' => $ditem['user_id']
                ];
                IntegralLogModel::create($dinstdata);
            }
        }
        return json(msg(200, $res, $goodsall));
    }

    /**
     *提交评价
     */
    public function PostDataByEva()
    {
        $data = input('param.');
        $res = EvaluateModel::create($data['temp']);
        $img = $data['pics'];
        $arr = [];
        foreach ($img as $i => $item) {
            $arr[$i]['url'] = $item;
            $arr[$i]['ev_id'] = $res['id'];
        }
        EvaluateImgModel::PostDataByInsta($arr);
        return json($res);
    }

    /**
     * 删除订单
     * 删除订单状态改为99
     */
    public function GetIdByDelete()
    {
        $data = input('param.');
        $res = OrderModel::where('id', $data['id'])->data(['status' => 99])->update();
        DistOrderModel::where('order_id', $data['id'])->delete();
        return json($res);
    }

}