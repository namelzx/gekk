<?php
/**
 * Created by PhpStorm.
 * User: lzx
 * Date: 2019-10-17
 * Time: 00:27
 */

namespace app\api\controller;


use app\common\model\ArticleModel;
use app\common\model\CollectionModel;
use app\common\model\ShopModel;

class Collection extends Base
{
    public function PostCollection()
    {
        $data = input('param.');
        $cheCollec = CollectionModel::where($data)->count();
        if ($cheCollec > 0) {
            CollectionModel::where($data)->delete();
            return json(msg(204, '', '取消收藏'));
        }
        $res = CollectionModel::create($data);
        return json(msg(200, '', '收藏'));
    }

    public function GetCollGoods()
    {
        $data = input('param.');
        $shop = CollectionModel::where('user_id', $data['user_id'])->where('type', 1)->field('shop_id')->select();
        $article = CollectionModel::where('user_id', $data['user_id'])->where('type', 3)->field('article_id')->select();
        $shop_in = [];
        foreach ($shop as $i => $item) {
            $shop_in[$i] = $item['shop_id'];
        }
        $article_in = [];
        foreach ($article as $i => $item) {
            $article_in[$i] = $item['article_id'];
        }
        $shopall = ShopModel::with('area')->where('id', 'in', $shop_in)->select();
        $model = new ShopModel();
        $dd = $model->range($data['latitude'], $data['longitude'], $shopall);
        $articleall = ArticleModel::with('shop')-> where('id', 'in', $article_in)->select();
        return json(['shop' => $dd, 'article' => $articleall]);
    }

}