<?php
/**
 * Created by PhpStorm.
 * User: lzx
 * Date: 2019-09-29
 * Time: 13:17
 */

namespace app\common\model;


/**
 * Class IntegralGoodsModel
 * @package app\common\model
 * 积分商品表
 */
class IntegralGoodsModel extends BaseModel
{
    protected $table = 'ee_integral_goods';


    protected $createTime = 'create_time';

    public function category()
    {
        return $this->hasOne('CategoryModel', 'id', 'category_id');
    }

    public function suk()
    {
        return $this->hasMany('GoodsSukModel', 'goods_id', 'id');
    }

    public function banner()
    {
        return $this->hasMany('GoodsImagesModel', 'goods_id', 'id');
    }

    public function eva()
    {
        return $this->hasMany('EvaluateModel', 'goods_id', 'id');
    }

    public static function GetDataByList($data)
    {
        $where = [];
        if (!empty($data['title'])) {
            $where[] = ['name', 'eq', $data['title']];
        }
        if (!empty($data['status'])) {
            $where[] = ['status', 'eq', $data['status']];
        }
        if (!empty($data['category_id'])) {
            $where[] = ['category_id', 'eq', $data['category_id']];
        }
        if (!empty($data['shop_id'])) {
            $where[] = ['shop_id', 'eq', $data['shop_id']];
        }
        $res = self::with('category')->where($where)->where('status', 'neq', 3)->paginate($data['limit'], false, ['query' => $data['page']]);
        return $res;
    }

}