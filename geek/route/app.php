<?php
/**
 * Created by PhpStorm.
 * User: lzx
 * Date: 2019-09-14
 * Time: 23:15
 */

Route::group('api/app/', function () {

    Route::rule('upload', 'api/Base/upload'); /*文件上传*/


    Route::post('shop/GetShopByList', 'api/shop/GetShopByList'); /* 登陆*/
    Route::get('shop/GetShopGoodsByList', 'api/shop/GetShopGoodsByList'); /* 根据店铺id获取店铺所有的数据*/

    Route::get('shop/GetIdGoodsByInfo', 'api/shop/GetIdGoodsByInfo'); /* 根据店铺id获取店铺所有的数据*/


    Route::get('city/getProvinces', 'api/shop/getProvinces'); /* 根据店铺id获取店铺所有的数据*/

    Route::get('city/getCity', 'api/shop/getCity'); /* 根据店铺id获取店铺所有的数据*/
    Route::get('city/getArea', 'api/shop/getArea'); /* 根据店铺id获取店铺所有的数据*/


    /**
     * 获取优惠卷
     */
    Route::rule('coupons/GetUserByCoupons', 'api/Coupon/GetUserByCoupons'); /* 查询可用优惠卷列表*/
    Route::rule('coupons/PostUserCoupon', 'api/Coupon/PostUserCoupon'); /* 领取优惠卷*/


    /**
     * 用户模块
     */
    Route::post('user/postUserByRegistered', 'api/user/postUserByRegistered');//用户注册
//    Route::post('user/postBind', 'api/user/postBind');//绑定用户信息
//    Route::post('postCollection', 'api/Housing/postCollection');//收藏房间
//    Route::post('postMake', 'api/Housing/postMake');//提交预约


    /**
     * 地址管理
     */
    Route::rule('address/postAddress', 'api/Address/postAddress'); /* 添加地址*/
    Route::rule('address/getAddressBydetailed', 'api/Address/getAddressBydetailed'); /* 获取地址详情*/
    Route::rule('address/GetDataByDelete', 'api/Address/GetDataByDelete'); /*  删除数据*/
    Route::rule('address/gettAddress', 'api/Address/gettAddress'); /* 获取选中地址*/
    Route::rule('address/getAddressByItems', 'api/Address/getAddressByItems'); /* 获取地址列表*/
    Route::rule('address/getDefaultAddress', 'api/Address/getDefaultAddress'); /* 获取地址列表*/
    Route::rule('address/getUserAddressCount', 'api/Address/getUserAddressCount'); /* 查看地址数量*/

    /**
     * 提交订单
     */
    Route::rule('order/PostOrderByData', 'api/order/PostOrderByData'); /* 提交用户订单*/
    Route::rule('order/GetUserByOrder', 'api/order/GetUserByOrder'); /* 获取用户订单*/
    Route::rule('order/GetIdByCancel', 'api/order/GetIdByCancel'); /* 取消订单*/

    Route::rule('order/PostDataByEva', 'api/order/PostDataByEva'); /* 取消订单*/


    /**
     * 文章管理
     */
    Route::rule('Article/GetDataByArticle', 'api/Article/GetDataByArticle'); /* 获取用户订单*/
    Route::rule('Article/GetDataByDetailed', 'api/Article/GetDataByDetailed'); /* 获取用户订单*/
    Route::rule('Article/PostDataByEav', 'api/Article/PostDataByEav'); /* 文章评价*/
    Route::rule('Article/GetIdByEav', 'api/Article/GetIdByEav'); /* 获取文章评论*/

    Route::rule('Article/GetEavIdByLike', 'api/Article/GetEavIdByLike'); /* 用户评论点赞*/
    Route::rule('Article/GetArticleIdByLike', 'api/Article/GetArticleIdByLike'); /* 用户评论点赞*/



});