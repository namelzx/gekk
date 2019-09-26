<?php
/**
 * Created by PhpStorm.
 * User: lzx
 * Date: 2019-09-26
 * Time: 14:10
 */

namespace app\common\model;


/**
 * Class ArticleEvaluationModel
 * @package app\common\model
 * 文章评论
 */
class ArticleEvaluationModel extends BaseModel
{
    protected $table = 'ee_article_evaluation';
    protected $createTime = 'create_time';

    public function user()
    {
        return $this->hasOne('UserModel', 'id', 'user_id');
    }

}