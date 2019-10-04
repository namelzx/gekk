<?php
/**
 * Created by PhpStorm.
 * User: lzx
 * Date: 2019-10-03
 * Time: 13:51
 */

namespace app\common\model;


class DistOrderModel extends BaseModel
{
    protected $table = 'ee_dist_order';
    protected $createTime = 'create_time';

    /**
     * 获取关联上级
     */
    public function user()
    {
        return $this->hasOne('UserModel', 'id', 'user_id');

    }

    public function order()
    {
        return $this->hasOne('OrderModel', 'id', 'order_id');
    }


}