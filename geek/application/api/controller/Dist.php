<?php
/**
 * Created by PhpStorm.
 * User: lzx
 * Date: 2019-09-29
 * Time: 12:37
 */

namespace app\api\controller;


use app\common\model\IntegralLogModel;

class Dist extends Base
{
    /**
     * 获取用户签到记录
     */
    public function GetUserDistLog()
    {
        $data = input('param.');
        $res = IntegralLogModel::where('user_id', $data['user_id'])->select();
        return json($res);
    }

}