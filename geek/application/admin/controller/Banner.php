<?php
/**
 * Created by PhpStorm.
 * User: lzx
 * Date: 2019-10-13
 * Time: 17:56
 */

namespace app\admin\controller;


use app\common\model\BannerModel;

class Banner extends Base
{

    /**
     * 获取数据列表
     */
    public function GetDataByList()
    {
        $data = input('param.');
        $res = BannerModel::GetDataByList($data);
        return json(['msg' => '获取成功', 'data' => $res, 'code' => 20000], 200);
    }

    /**
     * 更新||保存
     */
    public function PostDataBySave()
    {
        $data = input('param.');
        $data['create_time'] = time();
        if (empty($data['id'])) {
            $res = BannerModel::create($data);
            return json(['msg' => '添加成功', 'data' => $res, 'code' => 20000], 200);

        } else {
            $res = BannerModel::where('id', $data['id'])->data($data)->update();
            return json(['msg' => '更新成功', 'data' => $res, 'code' => 20000], 200);
        }
    }

    /**
     * 删除
     */
    public function GetIdByDel()
    {
        $data = input('param.');
        $res = BannerModel::where('id', $data['id'])->delete();
        return json(['msg' => '删除成功', 'data' => $res, 'code' => 20000], 200);

    }

}