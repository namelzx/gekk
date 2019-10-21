<?php
/**
 * Created by PhpStorm.
 * User: lzx
 * Date: 2019-09-09
 * Time: 22:39
 */

namespace app\admin\controller;


use app\common\model\GoodsModel;
use app\common\model\ShopModel;

class Shop extends Base
{

    /**
     * 添加数据
     */
    public function PostDataByAdd()
    {

//        $qrcode = $this->BuildCode(1);//获取二维码
//        $bg = $this->buildBg($qrcode);//传入二维码 得到海报
//        $data['shop_code'] = $bg;


        $data = input('param.');
        $load = $this->getCoord($data['location']);//获取坐标

        if ($load === '查询无结果') {
            return json(msg(20000, $load, '查询无结果', 204));
        }

        $data['lat'] = $load['lat'];
        $data['lng'] = $load['lng'];

        $data['create_time'] = time();


        if (!empty($data['id'])) {

            if (strlen($data['shop_code']) < 2) {
                $qrcode = $this->BuildCode($data['id']);//获取二维码
                $bg = $this->buildBg($qrcode);//传入二维码 得到海报
                $data['shop_code'] = $bg;
            }
            if ($data['status'] === "1") {
                $count = GoodsModel::where('shop_id', $data['id'])->where('status', 1)->count();
                if ($count < 1) {
                    $res = ShopModel::where('id', $data['id'])->data($data)->update();
                    return json(msg(20000, $res, '更新成功'));
                }
            }


            $res = ShopModel::where('id', $data['id'])->data($data)->update();
            return json(msg(20000, $res, '更新成功'));
        }

        $res = ShopModel::create($data);

        $qrcode = $this->BuildCode($res['id']);//获取二维码
        $bg = $this->buildBg($qrcode);//传入二维码 得到海报
        $data['shop_code'] = $bg;
        ShopModel::where('id', $res['id'])->data(['shop_code' => $bg])->update();
        return json(msg(20000, $res, '添加商铺完成'));
    }

    /**
     * 获取商铺数据列表
     */
    public function GetDataByList()
    {
        $data = input('param.');
        $res = ShopModel::GetByList($data);

        $mode = new  ShopModel();
        $u_lat = '24.25465';
        $u_lon = '109.32672';
//        $dd = $mode->range($u_lat, $u_lon, $res->items());
        return json(msg(20000, $res, ''));
    }

    /**
     * 获取店铺详细信息
     */
    public function GetIdBydetailed()
    {
        $data = input('param.');
        $res = ShopModel::get($data['id']);
        return json(msg(20000, $res, '请求成功'));

    }

    public function GetShopByAll()
    {
        $res = ShopModel::all();
        return json(msg(20000, $res, '请求成功'));
    }

    public function GetIdByDelShop()
    {

        $data = input('param.');
        $res = ShopModel::where('id', $data['id'])->data(['status' => 404])->update();
        return json(msg(20000, $res, '请求成功'));
    }


}