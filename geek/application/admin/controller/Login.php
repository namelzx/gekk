<?php
/**
 * Created by PhpStorm.
 * User: lzx
 * Date: 2019-09-09
 * Time: 21:26
 */

namespace app\admin\controller;

use app\common\model\AdminModel;
use Firebase\JWT\JWT;
use think\Request;

define('KEY', '1gHuiop975cdashyex9Ud23ldsvm2Xq'); //密钥

class Login extends Base
{

    public function login(Request $request)
    {
        $data = $request->param();
        $userModel = new AdminModel();

        $hasUser = $userModel->where('username', $data['username'])->find();
        if (empty($hasUser)) {
            return json(['message'=>'管理员不存在', 'code' => 50000]);

        }
        if ($data['password'] != $hasUser['password']) {
            return json(['message'=>'密码错误', 'code' => 50000]);

        }

        if ( $hasUser['status']!==1) {
            return json(['message'=>'审核中请耐心等待', 'code' => 50000]);

        }
        $token = [
            'iss' => '梁泽祥', //签发者
            'aud' => '梁泽祥', //jwt所面向的用户
            'iat' => time(), //签发时间
            'nbf' => time(), //在什么时间之后该jwt才可用
            'exp' => time() + 1000000000000, //过期时间-10min
            'data' => $hasUser,
            'roles' => [$hasUser['roles']]
        ];
        $jwt = JWT::encode($token, KEY);//加密
        return json(['data' => ['token' => $jwt], 'code' => 20000]);
    }


    public function info(Request $request)
    {
        $jwt = $request->header('X-Token');
        if (empty($jwt)) {
            $res['message'] = 'You do not have permission to access.';
            echo json_encode($res);
            exit;
        }
        try {
//            JWT::$leeway = 600;
            $decoded = JWT::decode($jwt, KEY, ['HS256']);
            $arr = (array)$decoded;
            if ($arr['exp'] < time()) {
                $res['message'] = '请重新登录';
            } else {
                $res['result'] = 'success';
                $res['info'] = $arr;
            }
            return json(['data' => $arr, 'code' => 20000]);

        } catch (Exception $e) {
            $res['message'] = 'Token验证失败,请重新登录';
            return json($jwt);

        }

        return json(['data' => ['token' => $jwt], 'code' => 20000]);

    }

    public function logout()
    {
        return json(['code' => 20000, 'data' => 'success']);

    }

}