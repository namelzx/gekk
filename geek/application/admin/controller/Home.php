<?php
/**
 * Created by PhpStorm.
 * User: lzx
 * Date: 2019-10-06
 * Time: 00:14
 */

namespace app\admin\controller;


use app\common\model\GoodsModel;
use app\common\model\OrderModel;
use app\common\model\UserModel;

class Home extends Base
{

    public function GetHomeByData()
    {
        $data = input('param.');
        $where = [];
//        $where[] = ['shop_id', 'eq', $data['shop_id']];
        $temp = [];
        $temp['goods'] = GoodsModel::where($where)->count();//商品总数
        $temp['order'] = OrderModel::where($where)->count();//订单总数

        $temp['user'] = UserModel::where($where)->count();//总用户


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


        /**
         * 获取用户
         */

        $temp['dayuser'] = UserModel::where($where)
            ->whereTime('create_time', 'd')
            ->count();//获取今日用户
        $temp['yesteruser'] = UserModel::where($where)
            ->whereTime('create_time', 'yesterday')
            ->count();//获取昨日新增用户


        return json(['msg' => '获取成功', 'data' => $temp, 'code' => 20000], 200);

    }

}