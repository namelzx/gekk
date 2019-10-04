<?php
/**
 * Created by PhpStorm.
 * User: lzx
 * Date: 2019-09-29
 * Time: 12:37
 */

namespace app\api\controller;


use app\common\model\DistOrderModel;
use app\common\model\IntegralLogModel;
use app\common\model\OrderModel;
use app\common\model\UserModel;

class Dist extends Base
{
    /**
     * 获取用户签到记录
     */
    public function GetUserDistLog()
    {
        $data = input('param.');
        $res = IntegralLogModel::where('user_id', $data['user_id'])->order('id desc')->select();
        $cheLog = IntegralLogModel::where('user_id', $data['user_id'])
            ->whereTime('create_time', 'd')
            ->count();
        $user = UserModel::get($data['user_id']);

        return json(['data' => $res, 'count' => $cheLog, 'integral' => $user['integral']]);
    }

    public function PostUserByIntegral()
    {
        $data = input('param.');
        $res = IntegralLogModel::create($data);
        return json(['data' => $res]);
    }

    public function GetUserByDist()
    {
        $data = input('param.');
        $where = [];
        if (!empty($data['status'])) {
            $where[] = ['status', 'eq', $data['status']];
        }
        $res = DistOrderModel::with(['user', 'order'])->where('user_id', $data['user_id'])
            ->where($where)
            ->order('create_time desc')
            ->select();
        return json($res);
    }

    public function GetUserByTeam()
    {
        $data = input('param.');
        $res = UserModel::where('p_id', $data['user_id'])
            ->withCount(['order', 'distUser'])
            ->select();
        return json($this->GrugTeam($res));
    }

    public function GrugTeam($data)
    {

        $arr = [];
        foreach ($data as $i => $item) {
            $arr[$i] = $item;
            $arr[$i]['totalPrice'] = OrderModel::where('user_id', $item['id'])->sum('totalPrice');
        }
        return $arr;

    }

}