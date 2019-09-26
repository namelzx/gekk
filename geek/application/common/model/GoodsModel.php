<?php
/**
 * Created by PhpStorm.
 * User: lzx
 * Date: 2019-09-12
 * Time: 12:38
 */

namespace app\common\model;


class GoodsModel extends BaseModel
{
    protected $table = 'ee_goods';
    protected $createTime = 'create_time';

    public function category(){
        return $this->hasOne('CategoryModel','id','category_id');
    }
    public function suk(){
        return $this->hasMany('GoodsSukModel','goods_id','id');
    }
    public function banner(){
        return $this->hasMany('GoodsImagesModel','goods_id','id');
    }

    public function eva(){
        return $this->hasMany('EvaluateModel','goods_id','id');
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
        $res = self::with('category')-> where($where)->where('status','neq',3)->paginate($data['limit'], false, ['query' => $data['page']]);
        return $res;
    }
}