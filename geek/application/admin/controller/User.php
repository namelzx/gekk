<?php
/**
 * Created by PhpStorm.
 * User: lzx
 * Date: 2019-10-14
 * Time: 02:10
 */

namespace app\admin\controller;


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
            $where[] = ['nickName', 'eq', $data['name']];
        }
        $res = UserModel::withSum('comm', 'price')->
        withSum('order','actualPrice')->
        where($where)->paginate();
        return json(msg(20000, $res, '33'));
    }

}