<?php
/**
 * Created by PhpStorm.
 * User: lzx
 * Date: 2019-09-29
 * Time: 13:21
 */

namespace app\shop\controller;


use app\common\model\IntegralGoodsImagesModel;
use app\common\model\IntegralGoodsModel;
use app\common\model\IntegralGoodsSukModel;

/**
 * Class IntGoods
 * @package app\shop\controller
 * 积分商品控制器
 */
class IntGoods extends Base
{

    /**
     * 获取数据列表
     */
    public function GetDataByList()
    {
        $data = input('param.');
        $res = IntegralGoodsModel::GetDataByList($data);
        return json(['msg' => '获取成功', 'data' => $res, 'code' => 20000], 200);
    }

    /**
     * 更新||保存
     */
    public function PostDataBySave()
    {
        $data = input('param.');
        if (!empty($data['temp']['id'])) {
            $this->PostDataUpdate($data);
            return json(['msg' => '更新成功', 'data' => '', 'code' => 20000], 200);
        }
        $Goods = IntegralGoodsModel::create($data['temp']);
        $goodssuk = $data['temp']['goods_suk'];
        foreach ($goodssuk as $i => $item) {
            $temp = $item;
            $temp['goods_id'] = $Goods['id'];
            IntegralGoodsSukModel::create($temp);
        }
        return json(['msg' => '添加成功', 'code' => 20000], 200);

    }

    public function PostDataUpdate($data)
    {
        $model = new IntegralGoodsModel();
        $model->allowField(true)->save($data['temp'], ['id' => $data['temp']['id']]);
        $id = $data['temp']['id'];
        IntegralGoodsSukModel::where('goods_id', $id)->data(['status' => 2])->update();
        $goodssuk = $data['temp']['goods_suk'];
        foreach ($goodssuk as $i => $item) {
            $temp['name'] = $item['name'];
            $temp['line_price'] = $item['line_price'];
            $temp['images_url'] = $item['images_url'];
            $temp['price'] = $item['price'];
            $temp['status'] = 1;
            $temp['goods_id'] = $id;
            IntegralGoodsSukModel::create($temp);
        }

        $banner = $data['banner'];
        IntegralGoodsImagesModel::where('goods_id', $id)->delete();
        foreach ($banner as $i => $item) {
            $banner['url'] = $item['url'];
            $banner['name'] = $item['name'];
            $banner['status'] = $item['status'];
//            $banner['shop_id'] = $item['shop_id']?'1';
            $banner['goods_id'] = $id;
            IntegralGoodsImagesModel::create($banner);
        }
    }

    /**
     * 删除
     */
    public function GetIdByDel()
    {
        $data = input('param.');
        $res = IntegralGoodsModel::where('id', $data['id'])->data(['status' => 3])->update();
        return json(['msg' => '删除成功', 'data' => $res, 'code' => 20000], 200);
    }


    /**
     * 获取
     */
    public function GetIdByDetails()
    {
        $data = input('param.');

        $res = IntegralGoodsModel::where('id', $data['id'])->find();
        $goods_suk = IntegralGoodsSukModel::where('status', 1)->where('goods_id', $data['id'])->select();
        $banner = IntegralGoodsImagesModel::where('goods_id', $data['id'])->select();
        $res['goods_suk'] = $goods_suk;
        return json(['msg' => '获取详情', 'data' => $res, 'banner' => $banner, 'code' => 20000], 200);
    }

    /**
     * 更新上架状态
     */
    public function PostDataByUp()
    {
        $data = input('param.');
        $res = IntegralGoodsModel::where('id', $data['id'])->data($data)->update();
        return json(['msg' => '更新成功', 'data' => $res, 'code' => 20000], 200);
    }

    /**
     * 获取店铺上架商品
     */
    public function GetGoodsByUp()
    {
        $data = input('param.');
        $res = IntegralGoodsModel::where('status', 1)->where('shop_id', $data['shop_id'])->select();
        return json(['msg' => '获取上架商品', 'data' => $res, 'code' => 20000], 200);

    }

}