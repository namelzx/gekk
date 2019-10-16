<?php
/**
 * Created by PhpStorm.
 * User: lzx
 * Date: 2019-09-19
 * Time: 17:32
 */

namespace app\common\model;


class UserModel extends BaseModel
{
    protected $table = 'ee_user';
    protected $createTime = 'create_time';


    public function distUser()
    {
        return $this->hasMany('UserModel', 'p_id', 'id');
    }

    public function order()
    {
        return $this->hasMany('OrderModel', 'user_id', 'id');
    }

    public static function postUserByRegistered($data, $p_id = 0)
    {
        $res = self::where('openid', $data['openid'])->find();
        if (empty($res)) {
            $data['p_id'] = $p_id;
            $user = self::create($data);
            return $user;
        } else {
            self::where('openid', $data['openid'])->data($data)->update();
        }
        return $res;
    }


}