<?php
/**
 * Created by PhpStorm.
 * User: lzx
 * Date: 2019-10-14
 * Time: 00:57
 */

namespace app\admin\controller;


use app\common\model\GoodsModel;
use app\common\model\OrderModel;
use app\common\model\ShopModel;

class Data extends Base
{

    public function Shop()
    {
        $data = input('param.');
        $where = [];
        if (!empty($data['povinces_code'])) {
            $where[] = ['povinces_code', 'eq', $data['povinces_code']];
        }

        if (!empty($data['city_code'])) {
            $where[] = ['city_code', 'eq', $data['city_code']];
        }

        if (!empty($data['area_code'])) {
            $where[] = ['area_code', 'eq', $data['area_code']];
        }
        $res = ShopModel::withSum(['order' => function ($query) use ($data) {
//            $query->where('id', 1);//条件
            if (!empty($data['dateTime'])) {
                $query->where('create_time', 'between time', $data['dateTime']);
            }
        }], 'actualPrice')
            ->withSum(['comm' => function ($query) use ($data) {
//            $query->where('id', 1);//条件
                if (!empty($data['dateTime'])) {
                    $query->where('create_time', 'between time', $data['dateTime']);
                }
            }], 'price')
            ->withCount(['user' => function ($query) use ($data) {
                if (!empty($data['dateTime'])) {
                    $query->where('create_time', 'between time', $data['dateTime']);
                }
//            $query->where('id', 1);
            }])->withCount(['goods' => function ($query) use ($data) {
                if (!empty($data['dateTime'])) {
                    $query->where('create_time', 'between time', $data['dateTime']);
                }
//            $query->where('id', 1);
            }])->withCount(['order'=> function ($query) use ($data) {
                if (!empty($data['dateTime'])) {
                    $query->where('create_time', 'between time', $data['dateTime']);
                }
//            $query->where('id', 1);
            }])
            ->where($where);

        if (!empty($data['shop_id'])) {
            $res = $res->where('id', $data['shop_id']);
        }
        $res = $res->paginate();

        return json(['data' => $res, 'code' => 20000]);
    }

    public function GetShopByOrder()
    {
        $data = input('param.');

        $where = [];
        if (!empty($data['time'])) {
            $where[] = ['create_time', 'between time', $data['time']];
        }

        if (!empty($data['order_no'])) {
            $where[] = ['out_trade_no', 'eq', $data['order_no']];
        }
        if (!empty($data['status'])) {
            $where[] = ['status', 'eq', $data['status']];
        }
        $res = OrderModel::with(['goods', 'address', 'shop', 'getUser'])
            ->where('shop_id', $data['shop_id'])
            ->where($where)
            ->paginate($data['limit'], false, ['query' => $data['page']]);
        $totalprice = OrderModel::where($where)->where('shop_id', $data['shop_id'])->sum('actualPrice');
        return json(['data' => $res, 'code' => 20000, 'totalprice' => $totalprice]);
    }


    public function GetShopByGoods()
    {
        $data = input('param.');
        $where = [];
        if (!empty($data['title'])) {
            $where[] = ['name', '=', $data['title']];
        }
        if (!empty($data['status'])) {
            $where[] = ['status', '=', $data['status']];
        }
        if (!empty($data['category_id'])) {
            $where[] = ['category_id', '=', $data['category_id']];
        }
        if (!empty($data['shop_id'])) {
            $where[] = ['shop_id', '=', $data['shop_id']];
        }
        $res = GoodsModel::with('category')->where($where)->where('status', 'neq', 3)->paginate($data['limit'], false, ['query' => $data['page']]);
        return json(['data' => $res, 'code' => 20000]);
    }
}