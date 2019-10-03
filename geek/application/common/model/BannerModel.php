<?php
/**
 * Created by PhpStorm.
 * User: lzx
 * Date: 2019-10-02
 * Time: 13:51
 */

namespace app\common\model;


class BannerModel extends BaseModel
{
    protected $table = 'ee_banner';

    public static function GetDataByList($data)
    {

        $where = [];
        if (!empty($data['title'])) {
            $where[] = ['name', '=', $data['title']];
        }

        $res = self::where($where)->where('shop_id', $data['shop_id'])->paginate($data['limit'], false, ['query' => $data['page']]);
        return $res;

    }


}