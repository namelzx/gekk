<?php
/**
 * Created by PhpStorm.
 * User: lzx
 * Date: 2019-10-13
 * Time: 23:19
 */

namespace app\admin\controller;


use app\common\model\PlatModel;

class Plat extends Base
{

    public function GetPlatByInfo()
    {
        $res = PlatModel::find();
        return json(msg(20000, $res, ''));
    }

    public function PostDataBySave()
    {

        $data = input('param.');
        $res = PlatModel::where('id', $data['id'])->data($data)->update();
        return json(msg(20000, $res, ''));

    }

}