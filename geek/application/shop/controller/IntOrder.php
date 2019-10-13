<?php
/**
 * Created by PhpStorm.
 * User: lzx
 * Date: 2019-10-10
 * Time: 23:19
 */

namespace app\shop\controller;


use app\common\model\IntegralOrderCourierModel;
use app\common\model\IntegralOrderModel;

class IntOrder extends Base
{

    public function GetDataByList()
    {
        $data = input('param.');
        $res = IntegralOrderModel::GetDataByList($data);
        return json(['msg' => '获取成功', 'data' => $res, 'code' => 20000], 200);
    }


    /**
     * 获取订单详细
     */
    public function GetIdByDetails()
    {
        $data = input('param.');
        $res = IntegralOrderModel::with(['goods','intshop', 'getGoods', 'address', 'getCourier' => ['Courier'], 'getUser'
        ])->where('id', $data['id'])->find();
        if (!empty($res['get_courier'])) {
            $requestData = "{'OrderCode':'" . $res['get_courier']['out_courier_no'] . "','ShipperCode':'" . $res['get_courier']['courier']['value'] . "','LogisticCode':'" . $res['get_courier']['out_courier_no'] . "'}";
            $logistics = json_decode($this->getOrderTracesByJson($requestData));

            if (!empty($logistics)) {

                $res['logis'] = $logistics->Traces[count($logistics->Traces) - 1];

            }
        }

        return json(['msg' => '获取订单信息', 'data' => $res, 'code' => 20000]);
    }

    public function postCourier()
    {
        $data = input('param.');
        $res = IntegralOrderCourierModel::create($data);
        IntegralOrderModel::where('id', $data['order_id'])->data(['status' => 3])->update();//更新订单状态为已发货
        return json(['msg' => '提交成功', 'data' => $res, 'code' => 20000]);
    }


}