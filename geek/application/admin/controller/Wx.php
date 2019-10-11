<?php
/**
 * Created by PhpStorm.
 * User: lzx
 * Date: 2019-10-11
 * Time: 12:12
 */

namespace app\admin\controller;


use app\common\model\WxModel;

class Wx extends Base
{

    public function GetWxByInfo()
    {
        $res = WxModel::find();
        return json(msg(20000, $res, ''));
    }

    public function PostDataBySave()
    {

        $data = input('param.');
        $res = WxModel::where('id', $data['id'])->data($data)->update();
        return json(msg(20000, $res, ''));

    }
}