<?php
/**
 * Created by PhpStorm.
 * User: lzx
 * Date: 2019-09-26
 * Time: 00:42
 */

namespace app\api\controller;


use app\common\model\ArticleEvaluationModel;
use app\common\model\ArticleModel;

class Article extends Base
{
    public function GetDataByArticle()
    {
        $data = input('param.');
        $where = [];
        if (!empty($data['status'])) {
            $where[] = ['status', '=', $data['status']];
        }
        $res = ArticleModel::with('shop')->where($where)
            ->paginate($data['limit'], false, ['query' => $data['page']]);
        return json($res);
    }

    public function GetDataByDetailed()
    {
        $data = input('param.');
        $res = ArticleModel::where('id', $data['id'])->find();

        ArticleModel::where('id', $data['id'])->setInc('view');

        return json($res);
    }

    /**
     * @return \think\response\Json
     * 文章评价
     */
    public function PostDataByEav()
    {
        $data = input('param.');
        $res = ArticleEvaluationModel::create($data);
        return json($res);
    }

    /**
     * 获取评价列表
     */
    public function GetIdByEav()
    {
        $data = input('param.');
        $res = ArticleEvaluationModel::with(['user'])
            ->where('article_id', $data['id'])
            ->order('id desc')->select();
        return json($res);
    }


    /**
     * 用户评价点赞
     */
    public function GetEavIdByLike()
    {
        $data = input('param.');
        ArticleEvaluationModel::where('id', $data['id'])->setInc('like');

    }

    public function GetArticleIdByLike()
    {
        $data = input('param.');
        ArticleModel::where('id', $data['id'])->setInc('like');
    }

}