<?php
/**
 * Created by PhpStorm.
 * User: lzx
 * Date: 2019-09-28
 * Time: 22:52
 */

namespace app\admin\controller;


use app\common\model\UserDistModel;
use app\common\model\UserModel;

class Dist extends Base
{

    /**
     * 获取商铺数据列表
     */
    public function GetDataByList()
    {
        $data = input('param.');
        $res = UserDistModel::GetByList($data);
        return json(msg(20000, $res, ''));
    }

    public function PostDataBySave()
    {
        $data = input('param.');
        $res = UserDistModel::where('id', $data['id'])->data($data)->update();
        UserModel::where('id', $data['user_id'])->data(['isdist' => $data['status']])->update();
        return json(msg(20000, $res, '更新成功'));

    }

}