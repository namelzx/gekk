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

        $data = input('param.');
        $load = $this->getCoord($data['location']);//获取坐标
        $data['lat'] = $load['lat'];
        $data['lng'] = $load['lng'];

        if ($data['status'] === "1") {
            $count = GoodsModel::where('shop_id', $data['id'])->where('status', 1)->count();
            if ($count < 1) {
                return json(msg(20000, $count, '请先上架商品', 20004));

            }
        }
        if (!empty($data['id'])) {
            $res = ShopModel::where('id', $data['id'])->data($data)->update();
            return json(msg(20000, $res, '更新成功'));
        }
        $res = ShopModel::create($data);
        return json(msg(20000, $res, '添加商铺完成'));
    }

    /**
     * 获取商铺数据列表
     */
    public function GetDataByList()
    {
        $data = input('param.');
        $res = ShopModel::GetByList($data);
//        $arr=[];
//        foreach ($res->items() as $i => $item) {
//            $arr[$i]=$this->getDistance( $item['lat'] . ',' . $item['lng']);
//        }

        $mode = new  ShopModel();
        $u_lat = '24.25465';
        $u_lon = '109.32672';
        $dd = $mode->range($u_lat, $u_lon, $res->items());
//      ;$list=M('test')->select();
//
//        $result=D('Distance')->range($u_lat,$u_lon,$list);dump($result);
        return json(msg(20000, $res, $dd));
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


}