<?php
/**
 * Created by PhpStorm.
 * User: lzx
 * Date: 2019-09-25
 * Time: 17:42
 */

namespace app\common\model;


class EvaluateImgModel extends BaseModel
{
    protected $table = 'ee_evaluate_img';

    public static function PostDataByInsta($data)
    {
        return self::insertAll($data);

    }

}