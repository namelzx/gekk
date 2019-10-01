<?php
/**
 * Created by PhpStorm.
 * User: lzx
 * Date: 2019-09-22
 * Time: 19:05
 */

namespace app\common\model;


/**
 * Class OrderGoodsModel
 * @package app\common\model
 * 订单商品表
 */
class OrderGoodsModel extends BaseModel
{
    protected $table = 'ee_order_goods';

    public function goods(){
        return $this->hasOne('GoodsModel','id','goods_id');
    }
    public static function PostByData($data)
    {


        return self:: insertAll($data);
    }

}