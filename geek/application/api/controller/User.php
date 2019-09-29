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

        $app = Factory::miniProgram($this->config);
        $res = $app->auth->session($data['code']);
        $data['temp']['openid'] = $res['openid'];
        $res = UserModel::postUserByRegistered($data['temp']);
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
    public function postBind()
    {
        $data = input('param.');
        $res = UserModel::where('openid', $data['openid'])->update($data);
        $user = UserModel::with(['getReal'])->where(['openid' => $data['openid']])->find();
        return json($user);
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
        $cheuser=UserDistModel::where('phone',$data['phone'])->count();
        if($cheuser>0){
            return json(msg(204, $cheuser, '该用户信息已存在'));

        }
        $res = UserDistModel::create($data);
        return json(msg(200, $res, '提交成功'));

    }

}