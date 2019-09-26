<?php
/**
 * Created by PhpStorm.
 * User: lzx
 * Date: 2019-09-24
 * Time: 00:28
 */

namespace app\common\model;


class OrderCourierModel extends BaseModel
{
    protected $table = 'ee_order_courier';


    public function Courier()
    {
        return $this->hasOne('CourierModel', 'id', 'courier_id');
    }
}