<?php
/**
 * Created by PhpStorm.
 * User: lzx
 * Date: 2019-10-05
 * Time: 16:08
 */

namespace app\shop\controller;


use app\common\model\GoodsModel;
use app\common\model\OrderModel;

/**
 * Class Home
 * @package app\shop\controller
 * 首页统计
 */
class Home extends Base
{

    public function GetHomeByData()
    {
        $data = input('param.');
        $where = [];
        $where[] = ['shop_id', 'eq', $data['shop_id']];
        $temp = [];
        $temp['goods'] = GoodsModel::where($where)->count();//商品总数
        $temp['order'] = OrderModel::where($where)->count();//订单总数

        $temp['dayorder'] = OrderModel::where($where)
            ->whereTime('create_time', 'd')
            ->count();//今日订单总量
        $temp['yesterorder'] = OrderModel::where($where)
            ->whereTime('create_time', 'yesterday')
            ->count();//昨日订单总量

        $temp['daypricer'] = OrderModel::where($where)
            ->whereTime('create_time', 'd')
            ->sum('actualPrice');//获取今日销售额
        $temp['yesterprice'] = OrderModel::where($where)
            ->whereTime('create_time', 'yesterday')
            ->sum('actualPrice');//获取昨日销售额

        return json(['msg' => '获取成功', 'data' => $temp, 'code' => 20000], 200);

    }
}