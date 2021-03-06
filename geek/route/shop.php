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
    Route::rule('GetPack', 'shop/Base/GetPack'); /*获取售后和配置*/


    Route::rule('GetHomeByData', 'shop/Home/GetHomeByData'); /*文件上传*/


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
    Route::rule('order/GetIdByDetails', 'shop/order/GetIdByDetails'); /* 商品详情*/
    Route::rule('order/postCourier', 'shop/order/postCourier'); /* 提交订单快递信息*/
    Route::rule('order/postOrderClose', 'shop/order/postOrderClose'); /* 订单结算*/
    Route::rule('order/GetBuyoutByList', 'shop/order/GetBuyoutByList'); /* 买断订单*/
    Route::rule('order/GetOrderByDownload', 'shop/order/GetOrderByDownload'); /*  条件 导出数据*/


    /**
     * 快递板块
     */
    Route::get('/courier/getDataByDetail', 'shop/courier/getDataByDetail');//获取快递
    Route::post('/courier/postDataByAdd', 'shop/courier/postDataByAdd');//添加快递
    Route::get('/courier/getIdByDel', 'shop/courier/getIdByDel');//删除快递
    Route::get('/courier/all', 'shop/courier/getall');//获取所有的快递


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


    Route::rule('shop/PostDataByAdd', 'shop/Shop/PostDataByAdd'); /* 添加数据*/
    Route::get('shop/GetDataByList', 'shop/Shop/GetDataByList'); /* 获取数据列表*/
    Route::get('shop/GetIdBydetailed', 'shop/Shop/GetIdBydetailed'); /* 获取数据列表*/
    Route::rule('shop/UpdateCode', 'admin/Shop/UpdateCode'); /* 更新小程序码*/

    Route::get('city/getProvinces', 'admin/shop/getProvinces'); /* 获取省份*/
    Route::get('city/getCity', 'admin/shop/getCity'); /* 获取城市*/
    Route::get('city/getArea', 'admin/shop/getArea'); /* 获取区域*/


    /**
     * 商品管理
     */
    Route::rule('IntGoods/GetDataByList', 'shop/IntGoods/GetDataByList'); /* 获取列表*/
    Route::rule('IntGoods/PostDataBySave', 'shop/IntGoods/PostDataBySave'); /* 更新或保存数据*/
    Route::rule('IntGoods/GetIdByDel', 'shop/IntGoods/GetIdByDel'); /* 删除数据*/
    Route::rule('IntGoods/GetIdByDetails', 'shop/IntGoods/GetIdByDetails'); /* 商品详情*/
    Route::rule('IntGoods/PostDataByUp', 'shop/IntGoods/PostDataByUp'); /* 更新商品状态*/
    Route::rule('IntGoods/GetGoodsByUp', 'shop/IntGoods/GetGoodsByUp'); /* 获取上架商品*/


    /**
     * 积分管理
     */


    Route::rule('IntOrder/GetDataByList', 'shop/IntOrder/GetDataByList'); /* 获取列表*/
    Route::rule('IntOrder/PostDataBySave', 'shop/IntOrder/PostDataBySave'); /* 更新或保存数据*/
    Route::rule('IntOrder/GetIdByDel', 'shop/IntOrder/GetIdByDel'); /* 删除数据*/
    Route::rule('IntOrder/GetIdByDetails', 'shop/IntOrder/GetIdByDetails'); /* 商品详情*/
    Route::rule('IntOrder/PostDataByUp', 'shop/IntOrder/PostDataByUp'); /* 更新商品状态*/
    Route::rule('IntOrder/GetGoodsByUp', 'shop/IntOrder/GetGoodsByUp'); /* 获取上架商品*/


    /**
     * 商品规则
     */

    Route::get('pack/GetDataByList', 'shop/pack/GetDataByList');//获取商品分类
    Route::post('pack/PostDataBySave', 'shop/pack/PostDataBySave');//获取商品分类
    Route::get('pack/GetIdByDetails', 'shop/pack/getDataByDetail');//获取商品分类


    /**
     * 用户模块
     */
    Route::get('user/GetDataByList', 'shop/user/GetDataByList');//获取用户


    /**
     * 数据统计
     */
    Route::rule('data/ShopInfo', 'admin/data/Shop'); /* 获取店铺信息*/

    Route::rule('data/GetShopByOrder', 'admin/data/GetShopByOrder'); /*获取店铺订单*/

    Route::rule('data/GetShopByGoods', 'admin/data/GetShopByGoods'); /*获取店铺商品*/


});
