<?php
/**
 * Created by PhpStorm.
 * User: lzx
 * Date: 2019-10-02
 * Time: 15:12
 */

namespace app\api\controller;


use app\common\model\BannerModel;
use app\common\model\ShopModel;

class Banner extends Base
{
    public function GetBannerByList()
    {
        $data = input('param.');
        $where = [];
        $shwhere = [];
        if (!empty($data['shop_id'])) {//如果传入店铺的id那么就是查询店铺的轮播图
            $where[] = ['shop_id', 'eq', $data['shop_id']];
            $shwhere[] = ['id', 'eq', $data['shop_id']];
        } else {
            //如果没有那么就是查询平台轮播图
            $where[] = ['type', 'eq', 2];

        }

        $shop = ShopModel::where($shwhere)->find();
        $res = BannerModel::where($where)->limit(3)->select();
        return json(['banner' => $res, 'shop' => $shop]);
    }

}