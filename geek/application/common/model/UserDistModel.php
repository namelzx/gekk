<?php
/**
 * Created by PhpStorm.
 * User: lzx
 * Date: 2019-09-28
 * Time: 22:04
 */

namespace app\common\model;


class UserDistModel extends BaseModel
{
    protected $table = 'ee_user_dist';
    protected $createTime = 'create_time';

    public function user()
    {
        return $this->hasOne('UserModel', 'id', 'user_id');
    }

    public static function GetByList($data)
    {

        $res = self::with('user')->paginate($data['limit'], false, ['query' => $data['page']]);
        return $res;
    }

}