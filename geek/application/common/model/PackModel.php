<?php
/**
 * Created by PhpStorm.
 * User: lzx
 * Date: 2019-10-10
 * Time: 23:58
 */

namespace app\common\model;


class PackModel extends BaseModel
{
    protected $table = 'ee_pack';
    protected $createTime = 'create_time';

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
}