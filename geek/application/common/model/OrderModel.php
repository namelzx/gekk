<?php
/**
 * Created by PhpStorm.
 * User: lzx
 * Date: 2019-09-22
 * Time: 18:42
 */

namespace app\common\model;


class OrderModel extends BaseModel
{
    protected $table = 'ee_order';
    protected $createTime = 'create_time';

    public function goods()
    {
        return $this->hasOne('OrderGoodsModel', 'order_id', 'id');
    }

    /**
     * @return \think\model\relation\HasMany
     * 获取订单商品列表
     */
    public function getGoods()
    {
        return $this->hasMany('OrderGoodsModel', 'order_id', 'id');

    }

    public function shop()
    {
        return $this->hasOne('ShopModel', 'id', 'shop_id');

    }

    //获取订单用户的地址
    public function address()
    {
        return $this->hasOne('AddressModel', 'id', 'address_id');
    }

    //获取用户使用的优惠卷
    public function getUserCoupon()
    {
        return $this->hasOne('CouponReceiveModel', 'id', 'coupons_id');
    }

    //获取用户的信息
    public function getUser()
    {
        return $this->hasOne('UserModel', 'id', 'user_id');
    }

    //快递订单
    public function getCourier()
    {
        return $this->hasOne('OrderCourierModel', 'order_id', 'id');
    }
    public function invoice(){
        return $this->hasOne('OrderInvoiceModel', 'order_id', 'id');

    }
    public static function GetDataByList($data)
    {

        $res = self::with(['goods', 'address', 'shop','getUser']);

        if (!empty($data['time'])) {
            $res = $res->where('create_time', 'between time', $data['time']);
        }

        if (!empty($data['order_no'])) {
            $res = $res->where('out_trade_no', $data['order_no']);
        }

        if (!empty($data['status'])) {
            $res = $res->where('status', $data['status']);
        }
        if (!empty($data['shop_id'])) {
            $res = $res->where('shop_id', $data['shop_id']);
        }
        $res = $res->paginate($data['limit'], false, ['query' => $data['page']]);
        return $res;

    }

}