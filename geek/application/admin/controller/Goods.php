<?php
/**
 * Created by PhpStorm.
 * User: lzx
 * Date: 2019-09-12
 * Time: 12:34
 */

namespace app\admin\controller;


use app\common\model\GoodsImagesModel;
use app\common\model\GoodsModel;
use app\common\model\GoodsSukModel;

class Goods extends Base
{
    /**
     * 获取数据列表
     */
    public function GetDataByList()
    {
        $data = input('param.');
        $res = GoodsModel::GetDataByList($data);
        return json(['msg' => '获取成功', 'data' => $res, 'code' => 20000], 200);
    }

    /**
     * 更新||保存
     */
    public function PostDataBySave()
    {
        $data = input('param.');
        if (!empty($data['temp']['id'])) {
         $res=   $this->PostDataUpdate($data);
            return json(['msg' => '更新成功', 'data' => $res, 'code' => 20000], 200);
        }
        $Goods = GoodsModel::create($data['temp']);
        $goodssuk = $data['temp']['goods_suk'];
        foreach ($goodssuk as $i => $item) {
            $temp = $item;
            $temp['goods_id'] = $Goods['id'];
            GoodsSukModel::create($temp);
        }
        return json(['msg' => '添加成功', 'code' => 20000], 200);

    }

    public function PostDataUpdate($data)
    {
        $model = new GoodsModel();
        $model->allowField(true)->save($data['temp'], ['id' => $data['temp']['id']]);
        $id = $data['temp']['id'];
        GoodsSukModel::where('goods_id', $id)->data(['status' => 2])->update();
        $goodssuk = $data['temp']['goods_suk'];
        foreach ($goodssuk as $i => $item) {
            $temp['assay'] = $item['assay'];
            $temp['colour'] = $item['colour'];
            $temp['images_url'] = $item['images_url'];
            $temp['inventory'] = $item['inventory'];
            $temp['market_price'] = $item['market_price'];
            $temp['tag'] = $item['tag'];
            $temp['goods_id'] = $id;
             GoodsSukModel::create($temp);
        }

        $banner = $data['banner'];
        foreach ($banner as $i => $item) {
            $banner = $item;
            $banner['goods_id'] = $id;
            GoodsImagesModel::create($banner);
        }
        return 1;


    }

    /**
     * 删除
     */
    public function GetIdByDel()
    {
        $data = input('param.');
        $res = GoodsModel::where('id', $data['id'])->data(['status' => 3])->update();
        return json(['msg' => '删除成功', 'data' => $res, 'code' => 20000], 200);
    }


    /**
     * 获取
     */
    public function GetIdByDetails()
    {
        $data = input('param.');

        $res = GoodsModel::where('id', $data['id'])->find();
        $goods_suk = GoodsSukModel::with(['ebo', 'lease'])->where('status', 1)->where('goods_id', $data['id'])->select();
        $res['goods_suk'] = $goods_suk;
        $specifications = ParameterModel::with(['infotype'])->where('goods_id', $data['id'])->select();
        $banner = GoodsImagesModel::where('goods_id', $data['id'])->select();
        return json(['msg' => '获取详情', 'specifications' => $specifications, 'banner' => $banner, 'data' => $res, 'code' => 20000], 200);
    }

    /**
     * 更新上架状态
     */
    public function PostDataByUp()
    {
        $data = input('param.');
        $res = GoodsModel::where('id', $data['id'])->data($data)->update();
        return json(['msg' => '更新成功', 'data' => $res, 'code' => 20000], 200);

    }

}