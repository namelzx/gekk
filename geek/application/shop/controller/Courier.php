<?php
/**
 * Created by PhpStorm.
 * User: lzx
 * Date: 2019-09-24
 * Time: 11:20
 */

namespace app\shop\controller;


use app\common\model\CourierModel;

class Courier extends Base
{

    public function getDataByDetail()
    {
        $data = input('param.');
        $res = CourierModel::getDataByList($data);
        return json(['data' => $res, 'code' => 20000]);
    }

    public function postDataByAdd()
    {
        $data = input('param.');
        if (empty($data['id'])) {
            $res = CourierModel::create($data);
        } else {
            $res = CourierModel::where('id', $data['id'])->data($data)->update($data);
        }
        return json(['data' => $res, 'code' => 20000]);
    }

    public function getIdByDel()
    {
        $data = input('param.');
        $res = CourierModel::where($data)->delete();
        return json(['data' => $res, 'code' => 20000]);
    }

    public function getall()
    {
        $res = CourierModel::select();
        return json(['data' => $res, 'code' => 20000]);
    }
}