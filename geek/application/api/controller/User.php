<?php
/**
 * Created by PhpStorm.
 * User: lzx
 * Date: 2019-09-19
 * Time: 17:35
 */

namespace app\api\controller;


use app\common\model\UserDistModel;
use app\common\model\UserModel;
use EasyWeChat\Factory;

class User extends Base
{


    public function postUserByRegistered()
    {
        $data = input('param.');
        $comm = config('common');
        $app = Factory::miniProgram($this->config);
        $res = $app->auth->session($data['code']);
        $data['temp']['openid'] = $res['openid'];
        $pid = 0;
        if (!empty($data['p_id'])) {
            $pid = $data['p_id'];
        }
        $res = UserModel::postUserByRegistered($data['temp'], $pid);
        if (empty($res['bg'])) {//判断是否生成海报
            $qrcode = $this->BuildCode($res['id']);//获取二维码
            $bg = $this->buildBg($qrcode);//传入二维码 得到海报
            UserModel::where('id', $res['id'])->data(['bg' => $comm['url'] . $bg])->update();//更新海报内容
            $res = UserModel::where('id', $res['id'])->find();//重新获取数据
        }
        $res = UserModel::where('id', $res['id'])->find();//重新获取数据
        return json($res);
    }

    //添加用户联系人
    public function postUserByContact()
    {
        $data = input('param.');
        $res = UserContactModel::create($data);
        return json($res);
    }

    //获取联系人数据
    public function getUserByContact()
    {
        $data = input('param.');
        $res = UserContactModel::where('user_id', $data['user_id'])->select();
        return json($res);
    }

    public function getUserByContactfind()
    {
        $data = input('param.');
        $res = UserContactModel::where('id', $data['id'])->find();
        return json($res);
    }

    public function getUserByContactByDelete()
    {
        $data = input('param.');
        $res = UserContactModel::where('id', $data['id'])->delete();
        return json($res);
    }

    /**
     * 绑定用户信息
     */
    public function PostUserByData()
    {
        $data = input('param.');
        $res = UserModel::where('id', $data['id'])->update($data);
        return json($res);
    }


    public function GetUserByInfo()
    {
        $data = input('param.');
        $res = UserModel::where($data)->find();
        return json($res);
    }

    /**
     * 提交分销商入驻申请
     */
    public function PostDataByDist()
    {
        $data = input('param.');
        $cheuser = UserDistModel::where('phone', $data['phone'])->count();
        if ($cheuser > 0) {
            return json(msg(204, $cheuser, '正在审核中'));
        }
        $res = UserDistModel::create($data);
        return json(msg(200, $res, '提交成功'));

    }

}