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

    public static function postUserByRegistered($data)
    {
        $res = self::where('openid', $data['openid'])->find();
        if (empty($res)) {
            $user = self::create($data);
            return $user;
        }
        return $res;
    }


}