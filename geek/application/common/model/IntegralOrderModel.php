<?php
/**
 * Created by PhpStorm.
 * User: lzx
 * Date: 2019-09-29
 * Time: 17:16
 */

namespace app\common\model;


class IntegralOrderModel extends BaseModel
{

    protected $table = 'ee_integral_order';
    protected $createTime = 'create_time';


    public function goods()
    {
        return $this->hasOne('IntegralOrderGoodsModel', 'order_id', 'id');
    }

    /**
     * @return \think\model\relation\HasMany
     * 获取订单商品列表
     */
    public function getGoods()
    {
        return $this->hasMany('IntegralOrderGoodsModel', 'order_id', 'id');

    }

    public function shop()
    {
        return $this->hasOne('ShopModel', 'id', 'shop_id');

    }

    public function intshop()
    {
        return $this->hasOne('ShopModel', 'id', 'shop_goods_id');

    }

    //获取订单用户的地址
    public function address()
    {
        return $this->hasOne('AddressModel', 'id', 'address_id');
    }


    //获取用户的信息
    public function getUser()
    {
        return $this->hasOne('UserModel', 'id', 'user_id');
    }

    //快递订单
    public function getCourier()
    {
        return $this->hasOne('IntegralOrderCourierModel', 'order_id', 'id');
    }

    public function invoice()
    {
        return $this->hasOne('OrderInvoiceModel', 'order_id', 'id');
    }


    public static function GetDataByList($data)
    {
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
        /**
         * 判断商铺是否属于当前商铺
         */
        if (!empty($data['shop_goods_id'])) {
            $where[] = ['shop_goods_id', '=', $data['shop_goods_id']];
        }
        $res = self::with(['shop', 'goods', 'address', 'getUser'])->where($where)->where('status', 'neq', 3)->paginate($data['limit'], false, ['query' => $data['page']]);
        return $res;
    }
}
