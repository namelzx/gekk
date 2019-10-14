<?php
/**
 * Created by PhpStorm.
 * User: lzx
 * Date: 2019-10-14
 * Time: 09:07
 */

namespace app\shop\controller;


use app\common\model\UserModel;

class User extends Base
{
    public function GetDataByList()
    {
        $data = input('param.');
        $where = [];
        if (!empty($data['shop_id'])) {
            $where[] = ['shop_id', 'eq', $data['shop_id']];
        }
        if (!empty($data['name'])) {
            $where[] = ['name', 'eq', $data['name']];
        }
        $res = UserModel::where($where)->paginate();
        return json(['msg' => '获取成功', 'data' => $res, 'code' => 20000], 200);

    }

}