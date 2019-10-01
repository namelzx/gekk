<?php
/**
 * Created by PhpStorm.
 * User: lzx
 * Date: 2019-09-29
 * Time: 14:27
 */

namespace app\api\controller;


use app\common\model\IntegralGoodsModel;

class IntGoods extends Base
{
    /**
     * 获取积分商品
     */
    public function GetIntegralByGoods()
    {
        $res = IntegralGoodsModel::all();
        return json($res);

    }

}