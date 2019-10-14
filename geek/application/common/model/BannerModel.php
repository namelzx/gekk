<?php
/**
 * Created by PhpStorm.
 * User: lzx
 * Date: 2019-10-02
 * Time: 13:51
 */

namespace app\common\model;


class BannerModel extends BaseModel
{
    protected $table = 'ee_banner';

    public static function GetDataByList($data)
    {

        $where = [];
        if (!empty($data['title'])) {
            $where[] = ['name', 'eq', $data['title']];
        }

        if (!empty($data['shop_id'])) {
            $where[] = ['shop_id', 'eq', $data['shop_id']];
        }

        if (!empty($data['type_'])) {
            $where[] = ['type_', 'eq', $data['type_']];
        }

        if (empty($data['shop_id'])) {
            $where[] = ['shop_id', 'eq', 0];
        }


        $res = self::where($where)->paginate($data['limit'], false, ['query' => $data['page']]);
        return $res;

    }


}