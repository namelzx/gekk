<?php
/**
 * Created by PhpStorm.
 * User: lzx
 * Date: 2019-09-19
 * Time: 00:45
 */

namespace app\common\model;


use think\Model;

class CouponReceiveModel extends Model
{
    protected $table = 'ee_coupon_receive';
    protected $createTime = 'create_time';

    public function getCounpon()
    {
        return $this->hasOne('CouponModel', 'id', 'coupon_id');
    }

}