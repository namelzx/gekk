<?php
/**
 * Created by PhpStorm.
 * User: lzx
 * Date: 2019-09-14
 * Time: 23:14
 */

namespace app\api\controller;


use app\common\model\BannerModel;
use app\common\model\CategoryModel;
use app\common\model\CollectionModel;
use app\common\model\CouponModel;
use app\common\model\EvaluateModel;
use app\common\model\GoodsModel;
use app\common\model\GoodsSukModel;
use app\common\model\PositionModel;
use app\common\model\ShopModel;

class Shop extends Base
{
    /**
     * 获取所有店铺
     */
    public function GetShopByList()
    {

        $data = input('param.');
        $url = 'https://apis.map.qq.com/ws/geocoder/v1/?location='
            . $data['latitude'] . ','
            . $data['longitude'] .
            '&get_poi=1&key=XB2BZ-J7PW3-DIZ3P-YC34A-BWFW7-ELBOI';
        $jx = curlSend($url);
        $district = $jx['result']['address_component']['district'];//获取当前所在区
        $get_code = PositionModel::where('area_name', 'like', '%' . $district . '%')->find();

        if (!empty($data['area_code'])) {
            $get_code['area_code'] = $data['area_code'];
            $jx = $data['area'];
        } else {
            $jx = $jx['result']['ad_info']['city'] . $jx['result']['ad_info']['district'];
        }
        $loca = [];
        if (!empty($data['area'])) {
            $loca = $this->getCoord($data['area']);
        }


        $res = ShopModel::where('status', 1)
            ->where('area_code', $get_code['area_code'])
            ->where('status', 'neq', 404)
            ->limit(9)
            ->all();
        $model = new ShopModel();
        $dd = $model->range($data['latitude'], $data['longitude'], $res);
        $banner = BannerModel::where('shop_id', 0)->where('type_', 1)->select();
        $arbaner = BannerModel::where('shop_id', 0)->where('type_', 2)->select();

        return json(['data' => $dd, 'banner' => $banner, 'arbaner' => $arbaner, 'loca' => $loca, 'dist' => $jx]);
    }

    /**
     * 获取店铺商品列表
     */
    public function GetShopGoodsByList()
    {
        $data = input('param.');
        $res = CategoryModel::with(['foods' => function ($query) use ($data) {
            $query->where('shop_id', $data['shop_id'])->where('status', 1);
        }])->all();
        return json($this->suk($res));
    }

    public function suk($data)
    {
        $arr = [];
        foreach ($data as $i => $item) {
            $arr[$i] = $item;
            foreach ($item['foods'] as $fo => $foitem) {
                $arr[$i]['foods'][$fo] = $foitem;
                $arr[$i]['foods'][$fo] ['suk'] = GoodsSukModel::where('goods_id', $foitem['id'])->select();
            }
        }
        return $arr;

    }


    /**
     * 获取店铺商品列表
     */
    public function GetShopListGoodsByList()
    {
        $data = input('param.');
        $shopwhere = [];
        $shopwhere[] = ['status', 'neq', 1];
        $shopwhere[] = ['status', 'eq', 404];

        $shop = ShopModel::where($shopwhere)->select();

        $shop_in = [];
        foreach ($shop as $i => $item) {
            $shop_in[$i] = $item['id'];
        }
        $where=[];
        if (!empty($data['shop_id'])) {
            $where[] = ['shop_id', 'eq', $data['shop_id']];
        }
        $res = GoodsModel::with(['suk' => function ($query) {
            $query->where('status', 1);
        }])->withCount('eva')->where('status', 1)->where($where)->whereNotIn('shop_id', $shop_in)->paginate();
        return json($res);
    }
    /**
     * 获取店铺的商品分类
     */
    public function GetShopListGoodsByCategory()
    {
        $data = input('param.');
        $res = ShopModel::where('status', 1)->all();
        return json($res);
    }

    /**
     * 获取商品详细
     */
    public function GetIdGoodsByInfo()
    {
        $data = input('param.');
        $res = GoodsModel::with(['suk' => function ($query) {
            $query->where('status', 1);
        }, 'banner', 'pack', 'spec'])->where('id', $data['id'])->find();
        $coupon = CouponModel::where('scope', 1)->whereOr('goods_id', $data['id'])->select();
        $eav = EvaluateModel::with(['img', 'user'])->where('goods_id', $data['id'])->limit(2)->paginate(2, false);
        //获取总评论星星
        $stcount = EvaluateModel::where('goods_id', $data['id'])->sum('score');
        $res['coupon'] = $coupon;
        $res['eva'] = $eav->items();
        $res['eavcout'] = $eav->total();
        if ($res['eavcout'] === 0) {
            $res['eavnumber'] = 100;
        } else {
            $res['eavnumber'] = round($stcount / ($res['eavcout'] * 5) * 100, 2);
        }
        $text = '收藏商品';
        $checol = CollectionModel::where(['goods_id' => $data['id'], 'user_id' => $data['user_id']])->count();
        if ($checol > 0) {
            $text = '取消收藏';
        }
        return json(msg(200, $res, $text));
    }


}