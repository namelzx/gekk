<?php
/**
 * Created by PhpStorm.
 * User: lzx
 * Date: 2019-09-19
 * Time: 00:46
 */

namespace app\api\controller;


use app\common\model\CouponReceiveModel;

class Coupon extends Base
{
    public function GetUserByCoupons()
    {
        $data = input('param.');
        $coupon = CouponReceiveModel::with(['getCounpon' => function ($query) use ($data) {
            if(!empty($data['id'])){
                $query->where('scope', 1)->whereOr('goods_id', $data['id']);
            }
        }]);
        if (!empty($data['user_id'])) {
            $coupon = $coupon->where('user_id', $data['user_id'])->where('status', 2);
        }
        $coupon = $coupon->select();
        return json(msg(200, $coupon, '获取成功'));
    }
    //提交用户领取的优惠卷
    public function PostUserCoupon()
    {

        $data = input('param.');
        $checoupon = CouponReceiveModel::where($data)->count();
        if ($checoupon > 0) {
            return json(msg(200, $checoupon, '已领取'));

        }
        $res = CouponReceiveModel::create($data);
        return json(msg(200, $res, '领取成功'));
    }


    /**
     * 获取所有的优惠卷
     */
    public function GetCounpn(){

    }
}