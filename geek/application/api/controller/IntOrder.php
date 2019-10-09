<?php
/**
 * Created by PhpStorm.
 * User: lzx
 * Date: 2019-09-29
 * Time: 17:19
 */

namespace app\api\controller;


use app\common\model\IntegralLogModel;
use app\common\model\IntegralOrderGoodsModel;
use app\common\model\IntegralOrderModel;

class IntOrder extends Base
{
    /**
     * 提交订单
     */
    public function PostOrderByData()
    {
        $data = input('param.');
        $data['order']['order_no'] = 'BSBN' . time() . mt_rand(100, 1000000);
        $res = IntegralOrderModel::create($data['order']);

        $temp = [
            'goods_id' => $data['goods_id'],
            'order_id' => $res['id'],
            'images_url' => $data['goods']['images_url'],
            'integral' => $data['goods']['integral'],
            'name' => $data['goods']['name']
        ];
        $instdata = [
            'title' => '兑换商品',
            'type' => 3,//对话商品
            'integral' => $data['goods']['integral'],//积分数量
            'type_' => 2,//减少
            ''
        ];
        IntegralLogModel::create($instdata);
        IntegralOrderGoodsModel::create($temp);
        return json(msg(200, $res, '3'));
    }

    public function GetUserByOrder()
    {
        $data = input('param.');
        $where = [];
        if (!empty($data['status'])) {
            $where[] = ['status', '=', $data['status']];
        }
        $res = IntegralOrderModel::with('goods')->where('user_id', $data['user_id'])->where($where)->order('id desc')
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

        $res = IntegralOrderModel::with(['getGoods', 'shop', 'address', 'invoice'])->where($where)
            ->find();
        return json($res);
    }

    /**
     * @return \think\response\Jsong
     * 更新订单状态
     */
    public function GetIdByCancel()
    {
        $data = input('param.');
        $res = IntegralOrderModel::where('id', $data['order_id'])->data(['status' => $data['status']])->update();
        $goods = IntegralOrderGoodsModel::where('order_id', $data['order_id'])->find();
        $goodsall = IntegralOrderModel::with(['goods'])->where('user_id', $data['user_id'])->select();

        if ($data['status'] == '5') {
            $instdata = [
                'title' => '取消兑换',
                'type' => 3,//兑换商品
                'integral' => $goods['integral'],//积分数量
                'type_' => 1,//增加
            ];
            IntegralLogModel::create($instdata);
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