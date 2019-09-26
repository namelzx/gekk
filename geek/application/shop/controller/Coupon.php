<?php
/**
 * Created by PhpStorm.
 * User: lzx
 * Date: 2019-09-17
 * Time: 10:27
 */

namespace app\shop\controller;


use app\common\model\CouponModel;
use app\common\model\GoodsModel;

class Coupon extends Base
{
    /**
     * 获取数据列表
     */
    public function GetDataByList()
    {
        $data = input('param.');
        $res = CouponModel::GetDataByList($data);
        return json(['msg' => '获取成功', 'data' => $res, 'code' => 20000], 200);
    }

    /**
     * 更新||保存
     */
    public function PostDataBySave()
    {
        $data = input('param.');
        $data['create_time'] = time();
        $data['end_time'] = strtotime($data['start_time'][1]);
        $data['start_time'] = strtotime($data['start_time'][0]);

        if (empty($data['id'])) {
            $res = CouponModel::create($data);
            return json(['msg' => '添加成功', 'data' => $res, 'code' => 20000], 200);

        } else {
            $res = CouponModel::where('id', $data['id'])->data($data)->update();
            return json(['msg' => '更新成功', 'data' => $res, 'code' => 20000], 200);
        }
    }

    /**
     * 删除
     */
    public function GetIdByDel()
    {
        $data = input('param.');
        $res = CouponModel::where('id', $data['id'])->delete();

        return json(['msg' => '删除成功', 'data' => $res, 'code' => 20000], 200);
    }

    /**
     * 获取所有的一级分类
     */
    public function GetCategory()
    {
        $res = CouponModel::where('pid', 0)->select();
        return json(['msg' => '获取成功', 'data' => $res, 'code' => 20000], 200);

    }


    /**
     * 获取
     */
    public function GetIdByDetails()
    {
        $data = input('param.');

        $res = CouponModel::where('id', $data['id'])->find();

        $goods = [];
        if ($res['scope'] === 2) {
            $goods = GoodsModel::where('id', $res['goods_id'])->select();
        }
        $res['start_time']=[date('Y-m-d H:i',$res['start_time']), date('Y-m-d H:i',$res['end_time'])];
        return json(['msg' => '获取详情', 'data' => $res, 'goods' => $goods, 'code' => 20000], 200);
    }

}