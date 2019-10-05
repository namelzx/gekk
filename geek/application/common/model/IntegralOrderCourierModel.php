<?php
/**
 * Created by PhpStorm.
 * User: lzx
 * Date: 2019-09-29
 * Time: 17:17
 */

namespace app\common\model;


class IntegralOrderCourierModel extends BaseModel
{
    protected $table = 'ee_integral_order_courier';

    public function Courier()
    {
        return $this->hasOne('CourierModel', 'id', 'courier_id');
    }

}