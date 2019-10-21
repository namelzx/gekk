<?php
/**
 * Created by PhpStorm.
 * User: lzx
 * Date: 2019-09-10
 * Time: 22:12
 */

namespace app\common\model;


class CategoryModel extends BaseModel
{

    protected $table = 'ee_category';
    protected $createTime = 'create_time';
    protected $updateTime = 'create_time';

    public function foods()
    {
        return $this->hasMany('GoodsModel', 'category_id', 'id');
    }

    public static function GetDataByList($data)
    {

        $where = [];
        if (!empty($data['title'])) {
            $where[] = ['name', 'eq', $data['title']];
        }
        if (!empty($data['shop_id'])) {
            $where[] = ['shop_id', 'eq', $data['shop_id']];
        }

        $res = self::where($where)->paginate($data['limit'], false, ['query' => $data['page']]);
        return $res;

    }

    //获取数据列表

    public function getGoods()
    {
        return $this->hasMany('GoodsModel', 'category_id', 'id');
    }
}