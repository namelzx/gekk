<?php
/**
 * Created by PhpStorm.
 * User: lzx
 * Date: 2019-09-10
 * Time: 16:02
 */


Route::group('api/shop/', function () {

    Route::post('user/login', 'shop/Login/login'); /* 登陆*/
    Route::get('user/info', 'shop/Login/info'); /* 获取当前登陆信息*/
    Route::get('user/logout', 'shop/Login/logout'); /* 退出登录*/
    Route::rule('upload', 'admin/Base/upload'); /*文件上传*/


    /**
     * 分类模块管理
     */
    Route::rule('category/GetDataByList', 'shop/Category/GetDataByList'); /* 获取分类列表*/
    Route::rule('category/PostDataBySave', 'shop/Category/PostDataBySave'); /* 更新或保存数据*/
    Route::rule('category/GetIdByDel', 'shop/Category/GetIdByDel'); /* 删除数据*/
    Route::rule('category/GetCategory', 'shop/Category/GetCategory'); /* 获取所有的一级分类*/


    /**
     * 商品模块
     */
    Route::rule('goods/GetDataByList', 'shop/goods/GetDataByList'); /* 获取列表*/
    Route::rule('goods/PostDataBySave', 'shop/goods/PostDataBySave'); /* 更新或保存数据*/
    Route::rule('goods/GetIdByDel', 'shop/goods/GetIdByDel'); /* 删除数据*/
    Route::rule('goods/GetIdByDetails', 'shop/goods/GetIdByDetails'); /* 商品详情*/
    Route::rule('goods/PostDataByUp', 'shop/goods/PostDataByUp'); /* 更新商品状态*/
    Route::rule('goods/GetGoodsByUp', 'shop/goods/GetGoodsByUp'); /* 获取上架商品*/

    /**
     * 优惠卷表
     */
    Route::rule('coupon/GetDataByList', 'shop/coupon/GetDataByList'); /* 获取分类列表*/
    Route::rule('coupon/PostDataBySave', 'shop/coupon/PostDataBySave'); /* 更新或保存数据*/
    Route::rule('coupon/GetIdByDel', 'shop/coupon/GetIdByDel'); /* 删除数据*/
    Route::rule('coupon/GetIdByDetails', 'shop/coupon/GetIdByDetails'); /* 获取卷详细*/


    /**
     * 订单板块
     */

    Route::rule('order/GetDataByList', 'shop/order/GetDataByList'); /* 获取列表*/
    Route::rule('order/PostDataByCancel', 'shop/order/PostDataByCancel'); /* 更新或保存数据*/
//    Route::rule('goods/getOrderIdByData', 'order/order/getOrderIdByData'); /* 删除数据*/
    Route::rule('order/GetIdByDetails', 'shop/order/GetIdByDetails'); /* 商品详情*/

    Route::rule('order/postCourier', 'shop/order/postCourier'); /* 提交订单快递信息*/

    Route::rule('order/postOrderClose', 'shop/order/postOrderClose'); /* 订单结算*/

    Route::rule('order/GetBuyoutByList', 'shop/order/GetBuyoutByList'); /* 买断订单*/


    /**
     * 快递板块
     */
    Route::get('/courier/getDataByDetail', 'shop/courier/getDataByDetail');//获取商品分类
    Route::post('/courier/postDataByAdd', 'shop/courier/postDataByAdd');//获取商品分类
    Route::get('/courier/getIdByDel', 'shop/courier/getIdByDel');//获取商品分类
    Route::get('/courier/all', 'shop/courier/getall');//获取商品分类


    /**
     * 文章模块
     */

    Route::rule('Article/GetDataByList', 'shop/Article/GetDataByList'); /* 获取列表*/
    Route::rule('Article/PostDataBySave', 'shop/Article/PostDataBySave'); /* 更新或保存数据*/
    Route::rule('Article/GetIdByDel', 'shop/Article/GetIdByDel'); /* 删除数据*/
    Route::rule('Article/GetIdByDetails', 'shop/Article/GetIdByDetails'); /* 商品详情*/
    Route::rule('Article/PostDataByUp', 'shop/Article/PostDataByUp'); /* 更新商品状态*/
    Route::rule('goods/GetGoodsByUp', 'shop/Article/GetGoodsByUp'); /* 获取上架商品*/


    /**
     * 轮播图分类
     */
    Route::rule('banner/GetDataByList', 'shop/banner/GetDataByList'); /* 获取分类列表*/
    Route::rule('banner/PostDataBySave', 'shop/banner/PostDataBySave'); /* 更新或保存数据*/
    Route::rule('banner/GetIdByDel', 'shop/banner/GetIdByDel'); /* 删除数据*/
    Route::rule('banner/GetCategory', 'shop/banner/GetCategory'); /* 获取所有的一级分类*/


    /**
     * 梁巨权
     */
    Route::get('/courier/getDataByDetail', 'shop/home/GetShopByHome');//获取商家首页数据

});