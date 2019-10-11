<?php
/**
 * Created by PhpStorm.
 * User: lzx
 * Date: 2019-10-11
 * Time: 10:42
 */

namespace app\api\controller;


use AlibabaCloud\Client\AlibabaCloud;
use app\common\model\SmsModel;
use GuzzleHttp\Exception\ClientException;
use GuzzleHttp\Exception\ServerException;

class SendSms extends Base
{

    public function index()
    {
        echo 11;
    }

    public function Send()
    {

        $find = SmsModel::find();

        AlibabaCloud::accessKeyClient($find['AccessKey'], $find['accessKeySecret'])->regionId('cn-hangzhou')
            ->asDefaultClient();


        try {
            $result = AlibabaCloud::rpc()
                ->product('Dysmsapi')
                // ->scheme('https') // https | http
                ->version('2017-05-25')
                ->action('SendSms')
                ->method('POST')
                ->host('dysmsapi.aliyuncs.com')
                ->options([
                    'query' => [
                        'RegionId' => "cn-hangzhou",
                        'PhoneNumbers' => "18677947067",
                        'SignName' => $find['SignName'],
                        'TemplateCode' => $find['TemplateCode'],
                        'TemplateParam' => $find['TemplateParam'],
                    ],
                ])
                ->request();
            print_r($result->toArray());
        } catch (ClientException $e) {
            echo $e->getErrorMessage() . PHP_EOL;
        } catch (ServerException $e) {
            echo $e->getErrorMessage() . PHP_EOL;
        }


    }

}