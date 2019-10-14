<?php
/**
 * Created by PhpStorm.
 * User: lzx
 * Date: 2019-10-14
 * Time: 00:57
 */

namespace app\admin\controller;


use app\common\model\ShopModel;

class Data extends Base
{

    public function Shop()
    {
        $data = input('param.');
        $res = ShopModel::withSum(['order' => function ($query) use ($data) {
//            $query->where('id', 1);//条件
        }], 'actualPrice')
            ->withCount(['user' => function ($query) use ($data) {
//            $query->where('id', 1);
            }])->withCount(['goods' => function ($query) use ($data) {
//            $query->where('id', 1);
            }])->withCount('order');

        if (!empty($data['shop_id'])) {
            $res = $res->where('id', $data['shop_id']);
        }
        $res = $res->paginate();

        return json(['data' => $res, 'code' => 20000]);

    }

}