<?php
/**
 * Created by PhpStorm.
 * User: lzx
 * Date: 2019-09-22
 * Time: 18:41
 */

namespace app\api\controller;


use app\common\model\EvaluateImgModel;
use app\common\model\EvaluateModel;
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
        $data['order']['order_no'] = 'BSBN' . time() . mt_rand(100, 1000000);
        $res = OrderModel::create($data['order']);
        if (!empty($data['order']['isInvoice'])) {
            if ($data['order']['isInvoice'] == 1) {//开发票
                $data['invoice']['order_id'] = $res['id'];
                OrderInvoiceModel::create($data['invoice']);
            }
        }
        foreach ($data['goods'] as $i => $item) {
            $data['goods'][$i]['order_id'] = $res['id'];
        }
        OrderGoodsModel::PostByData($data['goods']);
        return json(msg(200, $res, '3'));
    }

    public function GetUserByOrder()
    {
        $data = input('param.');
        $where = [];
        if (!empty($data['status'])) {
            $where[] = ['status', '=', $data['status']];
        }
        $res = OrderModel::with('goods')->where('user_id', $data['user_id'])->where($where)->order('id desc')
            ->paginate($data['limit'], false, ['query' => $data['page']]);
        return json($res);
    }

    public function GetOrderIdByFind()
    {
        $data = input('param.');
        $where = [];
        if (!empty($data['id'])) {
            $where[] = ['id', '=', $data['id']];
        }

        $res = OrderModel::with(['getGoods', 'shop', 'address', 'invoice'])->where($where)
            ->find();
        return json($res);
    }

    public function GetIdByCancel()
    {
        $data = input('param.');
        $res = OrderModel::where('id', $data['id'])->data(['status' => $data['status']])->update();
        $goodsall = OrderGoodsModel::with(['goods'])->where('order_id', $data['id'])->select();
        $order = OrderModel::where('id', $data['id'])->find();
        foreach ($goodsall as $i => $item) {
            UserModel::where('id', $order['user_id'])->setInc('integral', $item['goods']['integral']);
            $instdata = [
                'title' => '购买商品',
                'type' => 2,
                'integral' => $item['goods']['integral']//积分数量
            ];
            if ($item['goods']['integral'] > 0) {
                IntegralLogModel::create($instdata);
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

}