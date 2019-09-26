<?php
/**
 * Created by PhpStorm.
 * User: lzx
 * Date: 2019-09-24
 * Time: 00:26
 */

namespace app\common\model;


class CourierModel extends BaseModel
{
    protected $table = 'ee_courier';
    public static function getDataByList($data)
    {
        $res = self::paginate($data['limit'], false, ['query' => $data['page']]);
        return $res;
    }


}