<?php
/**
 * Created by PhpStorm.
 * User: lzx
 * Date: 2019-09-20
 * Time: 18:00
 */

namespace app\api\controller;


use app\common\model\AddressModel;

class Address extends Base
{

    public function postAddress()
    {
        $data = input('param.');
        if (empty($data['id'])) {
            $res = AddressModel::PostDataByadd($data);
        } else {
            $res = AddressModel::where('id', $data['id'])->data($data)->update();
            return json(msg(200, $res, '修改成功'));
        }
        return json(msg(200, $res, '添加成功'));
    }

    public function gettAddress()
    {
        $data = input('param.');
        $data['status'] = 1;
        $res = AddressModel::where($data)->find();
        return json(msg(200, $res, '获取成功'));
    }

    public function getAddressByItems()
    {
        $data = input('param.');
        $res = AddressModel::where($data)->select();
        return json(msg(200, $res, '获取成功'));

    }


    public function getAddressBydetailed()
    {
        $data = input('param.');

        $res = AddressModel::get($data);

        return json(msg(200, $res, '获取成功'));
    }

    /**
     *删除数据
     *
     */
    public function GetDataByDelete()
    {
        $data = input('param.');
        $AddMoldel = new AddressModel();
        $res = $AddMoldel->where($data)->delete();
        return json(msg(200, $res, '获取成功'));
    }

    /**
     * 修改默认地址信息
     */
    public function getDefaultAddress()
    {
        $data = input('param.');
        AddressModel::where('user_id', $data['user_id'])->data('is_default', 0)->update();
        $res = AddressModel::where('id', $data['id'])->data('is_default', 1)->update();
        return json(msg(200, $res, '获取成功'));
    }


    public function getUserAddressCount()
    {
        $data = input('param.');
        $res = AddressModel::where('user_id', $data['user_id'])->count();
        return json(msg(200, $res, '获取成功'));

    }

}