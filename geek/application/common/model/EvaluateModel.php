<?php
/**
 * Created by PhpStorm.
 * User: lzx
 * Date: 2019-09-25
 * Time: 17:41
 */

namespace app\common\model;


class EvaluateModel extends BaseModel
{
    protected $table = 'ee_evaluate';
    protected $createTime = 'create_time';

    public function img()
    {
        return $this->hasMany('EvaluateImgModel', 'ev_id', 'id');
    }
    public function user(){
        return $this->hasOne('UserModel', 'id', 'user_id');

    }

}