<?php
/**
 * Created by PhpStorm.
 * User: lzx
 * Date: 2019-09-26
 * Time: 00:21
 */

namespace app\shop\controller;


use app\common\model\ArticleModel;

class Article extends Base
{


    /**
     * 获取数据列表
     */
    public function GetDataByList()
    {
        $data = input('param.');
        $res = ArticleModel::GetDataByList($data);
        return json(['msg' => '获取成功', 'data' => $res, 'code' => 20000], 200);
    }

    /**
     * 更新||保存
     */
    public function PostDataBySave()
    {
        $data = input('param.');
        $data['create_time'] = time();
        if (!empty($data['id'])) {
            $this->PostDataUpdate($data);
            return json(['msg' => '更新成功', 'data' => '', 'code' => 20000], 200);
        }
        ArticleModel::create($data);

        return json(['msg' => '添加成功', 'code' => 20000], 200);

    }

    public function PostDataUpdate($data)
    {
        $model = new ArticleModel();
        $model->allowField(true)->save($data, ['id' => $data['id']]);

    }

    /**
     * 删除
     */
    public function GetIdByDel()
    {
        $data = input('param.');
        $res = ArticleModel::where('id', $data['id'])->delete();
        return json(['msg' => '删除成功', 'data' => $res, 'code' => 20000], 200);
    }


    /**
     * 获取
     */
    public function GetIdByDetails()
    {
        $data = input('param.');

        $res = ArticleModel::where('id', $data['id'])->find();

        return json(['msg' => '获取详情', 'data' => $res, 'code' => 20000], 200);
    }

    /**
     * 更新上架状态
     */
    public function PostDataByUp()
    {
        $data = input('param.');
        $res = ArticleModel::where('id', $data['id'])->data($data)->update();
        return json(['msg' => '更新成功', 'data' => $res, 'code' => 20000], 200);
    }

    /**
     * 获取店铺上架商品
     */
    public function GetArticleByUp()
    {
        $data = input('param.');
        $res = ArticleModel::where('status', 1)->where('shop_id', $data['shop_id'])->select();
        return json(['msg' => '获取上架商品', 'data' => $res, 'code' => 20000], 200);

    }

}