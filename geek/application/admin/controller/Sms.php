<?php
/**
 * Created by PhpStorm.
 * User: lzx
 * Date: 2019-10-11
 * Time: 11:54
 */

namespace app\admin\controller;


use app\common\model\SmsModel;

class Sms extends Base
{
    public function GetSmsByInfo()
    {
        $res = SmsModel::find();
        return json(msg(20000, $res, ''));
    }

    public function PostDataBySave()
    {

        $data = input('param.');
        $res = SmsModel::where('id', $data['id'])->data($data)->update();
        return json(msg(20000, $res, ''));

    }

}