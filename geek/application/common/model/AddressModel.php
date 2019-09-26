<?php
/**
 * Created by PhpStorm.
 * User: lzx
 * Date: 2019-09-20
 * Time: 17:59
 */

namespace app\common\model;


class AddressModel extends BaseModel
{

    protected $table = 'ee_address';

    public static function PostDataByadd($data)
    {
        $res = self::insert($data);
        return $res;
    }

}