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
        return $this->hasOne('OrderCourierModel', 'order_id', 'id');
    }
    public function invoice(){
        return $this->hasOne('OrderInvoiceModel', 'order_id', 'id');

    }
}
