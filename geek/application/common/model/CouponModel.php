<?php
/**
 * Created by PhpStorm.
 * User: lzx
 * Date: 2019-09-17
 * Time: 10:25
 */

namespace app\common\model;


class CouponModel extends BaseModel
{

    protected $table = 'ee_coupon';
    protected $createTime = 'create_time';
    protected $updateTime = 'create_time';

    public function getUserCoupon(){
        return $this->hasOne('CouponReceiveModel','coupon_id','id');
    }

    //获取数据列表
    public static function GetDataByList($data)
    {
        $where = [];
        if (!empty($data['title'])) {
            $where[] = ['name', '=', $data['title']];
        }
        $res = self::where($where)->paginate($data['limit'], false, ['query' => $data['page']]);
        return $res;

    }

}