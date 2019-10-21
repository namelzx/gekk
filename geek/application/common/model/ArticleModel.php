<?php
/**
 * Created by PhpStorm.
 * User: lzx
 * Date: 2019-09-26
 * Time: 00:21
 */

namespace app\common\model;


class ArticleModel extends BaseModel
{

    protected $table = 'ee_article';
    protected $createTime = 'create_time';


    public function shop()
    {
        return $this->hasOne('ShopModel', 'id', 'shop_id');
    }

    public static function GetDataByList($data)
    {
        $where = [];
        if (!empty($data['title'])) {
            $where[] = ['name', '=', $data['title']];
        }
        if (!empty($data['status'])) {
            $where[] = ['status', '=', $data['status']];
        }
        if (!empty($data['category_id'])) {
            $where[] = ['category_id', '=', $data['category_id']];
        }
        if (!empty($data['shop_id'])) {
            $where[] = ['shop_id', 'eq', $data['shop_id']];
        }
        $res = self::with('shop')->where($where)->where('status', 'neq', 3)->paginate($data['limit'], false, ['query' => $data['page']]);
        return $res;
    }

}