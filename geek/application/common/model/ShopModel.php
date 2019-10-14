<?php
/**
 * Created by PhpStorm.
 * User: lzx
 * Date: 2019-09-09
 * Time: 22:38
 */

namespace app\common\model;


class ShopModel extends BaseModel
{
    protected $table = 'ee_shop';
    protected $createTime = 'create_time';

    public function order()
    {
        return $this->hasOne('OrderModel', 'shop_id', 'id');

    }

    public function user()
    {
        return $this->hasOne('UserModel', 'shop_id', 'id');
    }


    public function goods()
    {
        return $this->hasOne('GoodsModel', 'shop_id', 'id');
    }

    public static function GetByList($data)
    {

        $res = self::paginate($data['limit'], false, ['query' => $data['page']]);
        return $res;
    }


    /*
     *u_lat 用户纬度
     *u_lon 用户经度
     *list sql语句
     */
    public function range($u_lat, $u_lon, $list)
    {
        if (!empty($u_lat) && !empty($u_lon)) {
            foreach ($list as $row) {
                $row['km'] = $this->nearby_distance($u_lat, $u_lon, $row['lat'], $row['lng']);
                $row['km'] = round($row['km'], 1);
                $res[] = $row;
            }
            if (!empty($res)) {
                foreach ($res as $user) {
                    $ages[] = $user['km'];
                }
                array_multisort($ages, SORT_ASC, $res);
                return $this->getAttrLength($res);//获取固定长度的数组
            } else {
                return false;
            }
        } else {
            return false;
        }
    }

    public function getAttrLength($list, $length = 10)
    {

        $arr = [];
        $Radiusarr = [
            [
                'xRadius' => 60,
                'yRadius' => 360
            ],
            [
                'xRadius' => 200,
                'yRadius' => 160
            ],
            [
                'xRadius' => 460,
                'yRadius' => 320
            ],
            [
                'xRadius' => 325,
                'yRadius' => 42
            ],
            [
                'xRadius' => 460,
                'yRadius' => 480
            ],
            [
                'xRadius' => 40,
                'yRadius' => 80
            ],
            [
                'xRadius' => 480,
                'yRadius' => 140
            ],


        ];
        for ($i = 0; $i < $length; $i++) {

            if ($i === count($list)) {
                return $arr;

            }

            $arr[$i] = $list[$i];

            $arr[$i]['xRadius'] = $Radiusarr[$i]['xRadius'];
            $arr[$i]['yRadius'] = $Radiusarr[$i]['yRadius'];


        }
        return $arr;


    }

    //计算经纬度两点之间的距离
    public function nearby_distance($lat1, $lon1, $lat2, $lon2)
    {
        $EARTH_RADIUS = 6378.137;
        $radLat1 = $this->rad($lat1);
        $radLat2 = $this->rad($lat2);
        $a = $radLat1 - $radLat2;
        $b = $this->rad($lon1) - $this->rad($lon2);
        $s = 2 * asin(sqrt(pow(sin($a / 2), 2) + cos($radLat1) * cos($radLat2) * pow(sin($b / 2), 2)));
        $s1 = $s * $EARTH_RADIUS;
        $s2 = round($s1 * 10000) / 10000;
        return $s2;
        //print_r($s2);
    }

    private function rad($d)
    {
        return $d * 3.1415926535898 / 180.0;
    }

}