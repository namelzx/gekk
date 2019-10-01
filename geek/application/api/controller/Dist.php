<?php
/**
 * Created by PhpStorm.
 * User: lzx
 * Date: 2019-09-29
 * Time: 12:37
 */

namespace app\api\controller;


use app\common\model\IntegralLogModel;
use app\common\model\UserModel;

class Dist extends Base
{
    /**
     * 获取用户签到记录
     */
    public function GetUserDistLog()
    {
        $data = input('param.');
        $res = IntegralLogModel::where('user_id', $data['user_id'])->order('id desc')->select();
        $cheLog = IntegralLogModel::where('user_id', $data['user_id'])
            ->whereTime('create_time', 'd')
            ->count();
        $user=UserModel::get($data['user_id']);

        return json(['data' => $res, 'count' => $cheLog,'integral'=>$user['integral']]);
    }

    public function PostUserByIntegral()
    {
        $data = input('param.');
        $res = IntegralLogModel::create($data);
        return json(['data' => $res]);
    }

}