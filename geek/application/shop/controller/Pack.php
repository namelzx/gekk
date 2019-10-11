<?php
/**
 * Created by PhpStorm.
 * User: lzx
 * Date: 2019-10-11
 * Time: 00:00
 */

namespace app\shop\controller;


use app\common\model\PackModel;

class Pack extends Base
{

    /**
     * 获取数据列表
     */
    public function GetDataByList()
    {
        $data = input('param.');
        $res = PackModel::GetDataByList($data);
        return json(['msg' => '获取成功', 'data' => $res, 'code' => 20000], 200);
    }

    /**
     * 更新||保存
     */
    public function PostDataBySave()
    {
        $data = input('param.');
        $data['create_time']=time();
        if (!empty($data['id'])) {
            PackModel::where('id',$data['id'])->data($data)->update();
            return json(['msg' => '修改成功', 'code' => 20000], 200);

        }
        PackModel::create($data);

        return json(['msg' => '添加成功', 'code' => 20000], 200);

    }

    /**
     * 获取
     */
    public function getDataByDetail()
    {
        $data = input('param.');

        $res = PackModel::where('id', $data['id'])->find();

        return json(['msg' => '获取详情', 'data' => $res, 'code' => 20000], 200);
    }

}