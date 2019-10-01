<?php
/**
 * Created by PhpStorm.
 * User: lzx
 * Date: 2019-09-14
 * Time: 23:14
 */

namespace app\api\controller;


use app\common\model\CategoryModel;
use app\common\model\CouponModel;
use app\common\model\EvaluateModel;
use app\common\model\GoodsModel;
use app\common\model\ShopModel;

class Shop extends Base
{
    /**
     * 获取所有店铺
     */
    public function GetShopByList()
    {
        $data = input('param.');
        $res = ShopModel::all();
        $model = new ShopModel();
        $dd = $model->range($data['latitude'], $data['longitude'], $res);
        return json($dd);
    }

    /**
     * 获取店铺商品列表
     */
    public function GetShopGoodsByList()
    {
        $data = input('param.');
        $res = CategoryModel::with(['foods' => ['suk' => function ($query) {
            $query->where('status', 1);
        }]])->where('shop_id', $data['shop_id'])->all();
        return json($res);
    }


    /**
     * 获取店铺商品列表
     */
    public function GetShopListGoodsByList()
    {
        $data = input('param.');
        $res = GoodsModel::with(['suk' => function ($query) {
            $query->where('status', 1);
        }])->withCount('eva')->where('category_id', $data['category_id'])->paginate();
        return json($res);
    }

    /**
     * 获取店铺的商品分类
     */
    public function GetShopListGoodsByCategory()
    {
        $data = input('param.');
        $res = CategoryModel::where('shop_id', $data['shop_id'])->all();
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
        }, 'banner'])->where('id', $data['id'])->find();
        $coupon = CouponModel::where('scope', 1)->whereOr('goods_id', $data['id'])->select();
        $eav = EvaluateModel::with(['img', 'user'])->where('goods_id', $data['id'])->limit(2)->paginate(2, false);
        //获取总评论星星
        $stcount = EvaluateModel::where('goods_id', $data['id'])->sum('score');
        $res['coupon'] = $coupon;
        $res['eva'] = $eav->items();
        $res['eavcout'] = $eav->total();
        if($res['eavcout']===0){
            $res['eavnumber'] =100;
        }else{
            $res['eavnumber'] = round($stcount / ($res['eavcout'] * 5) * 100, 2);

        }
        return json($res);
    }


}