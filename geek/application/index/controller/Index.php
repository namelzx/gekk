<?php

namespace app\index\controller;

class Index
{
    public function index()
    {
        $address = '广西北海市银海区银滩镇桂林电子科技大学北海小区';
        $url = 'https://apis.map.qq.com/ws/geocoder/v1/?address=' . $address . '&key=XB2BZ-J7PW3-DIZ3P-YC34A-BWFW7-ELBOI';
        $res = curlSend($url);
        return json($res);
    }

    public function getJl()
    {
        $url = 'https://apis.map.qq.com/ws/distance/v1/?mode=driving&from=39.983171,116.308479&to=39.996060,116.353455;39.949227,116.394310&key=XB2BZ-J7PW3-DIZ3P-YC34A-BWFW7-ELBOI';
        $url = 'https://apis.map.qq.com/ws/distance/v1/?mode=driving&from=24.25465,109.32672&to=21.473345,109.119255;21.44866,109.174217;21.44866,109.174217&key=XB2BZ-J7PW3-DIZ3P-YC34A-BWFW7-ELBOI';
        $res = curlSend($url);

        return json($res);
    }

    public function hello($name = 'ThinkPHP5')
    {
        return 'hello,' . $name;
    }

    public function actionMenu()
    {
        $data = [
            [
                'path' => '/example',
                'component' => 'Layout',
                'redirect' => '',
                'name' => 'ExampleRoot',
                'meta' => [
                    'title' => '示例',
                    'icon' => 'table'
                ],
                'children' => [
                    [
                        'path' => 'sample',
                        'component' => '/example/sample',
                        'name' => 'ExampleSample',
                        'meta' => [
                            'title' => 'example',
                            'icon' => 'table'
                        ],
                    ]
                ]
            ]
        ];
        return json_encode($data);
    }
}
