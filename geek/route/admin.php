<?php

Route::group('api/admin/', function () {

    Route::post('user/login', 'admin/Login/login'); /* 登陆*/
    Route::get('user/info', 'admin/Login/info'); /* 获取当前登陆信息*/
    Route::post('user/logout', 'admin/Login/logout'); /* 退出登录*/
    Route::rule('upload', 'admin/Base/upload'); /*文件上传*/
    Route::rule('GetShopByList', 'admin/Base/GetShopByList'); /*获取店铺列表*/
    Route::rule('GetHomeByData', 'admin/Home/GetHomeByData'); /*获取后台主页数据*/
    Route::post('dist/PostDataBySave', 'admin/Dist/PostDataBySave'); /* 分销管理*/

    Route::get('Sms/GetSmsByInfo', 'admin/Sms/GetSmsByInfo'); /*  短信 */
    Route::post('Sms/PostDataBySave', 'admin/Sms/PostDataBySave'); /*  保存短信设置 */


    Route::get('wx/GetWxByInfo', 'admin/Wx/GetWxByInfo'); /*  获取微信配置 */
    Route::post('wx/PostDataBySave', 'admin/Wx/PostDataBySave'); /*  保存微信配置 */


    Route::rule('category/GetCategory', 'shop/Category/GetCategory'); /* 获取所有的一级分类*/


    /**
     * i平台配置
     */

    Route::get('plat/GetPlatByInfo', 'admin/plat/GetPlatByInfo'); /*  获取平台配置 */
    Route::post('plat/PostDataBySave', 'admin/plat/PostDataBySave'); /*  保存配置配置 */


    Route::get('city/getProvinces', 'admin/shop/getProvinces'); /* 获取省份*/
    Route::get('city/getCity', 'admin/shop/getCity'); /* 获取城市*/
    Route::get('city/getArea', 'admin/shop/getArea'); /* 获取区域*/
    /*
     * 商铺管理
     */
    Route::rule('shop/PostDataByAdd', 'admin/Shop/PostDataByAdd'); /* 添加数据*/
    Route::get('shop/GetDataByList', 'admin/Shop/GetDataByList'); /* 获取数据列表*/
    Route::get('shop/GetIdBydetailed', 'admin/Shop/GetIdBydetailed'); /* 获取数据列表*/
    Route::get('shop/GetIdByDelShop', 'admin/Shop/GetIdByDelShop'); /* 删除店铺*/
    Route::rule('shop/UpdateCode', 'admin/Shop/UpdateCode'); /* 更新小程序码*/


    /**
     * 分销管理
     */
    Route::get('dist/GetDataByList', 'admin/Dist/GetDataByList'); /* 获取数据列表*/

    /**
     * 用户管理
     */

    Route::get('user/GetDataByList', 'admin/user/GetDataByList'); /* 获取数据列表*/


    /**
     * 商品管理
     */
    Route::rule('IntGoods/GetDataByList', 'admin/IntGoods/GetDataByList'); /* 获取列表*/
    Route::rule('IntGoods/PostDataBySave', 'admin/IntGoods/PostDataBySave'); /* 更新或保存数据*/
    Route::rule('IntGoods/GetIdByDel', 'admin/IntGoods/GetIdByDel'); /* 删除数据*/
    Route::rule('IntGoods/GetIdByDetails', 'admin/IntGoods/GetIdByDetails'); /* 商品详情*/
    Route::rule('IntGoods/PostDataByUp', 'admin/IntGoods/PostDataByUp'); /* 更新商品状态*/
    Route::rule('IntGoods/GetGoodsByUp', 'admin/IntGoods/GetGoodsByUp'); /* 获取上架商品*/


    /**
     * 积分订单
     */

    Route::rule('IntOrder/GetDataByList', 'admin/IntOrder/GetDataByList'); /* 获取列表*/
    Route::rule('IntOrder/PostDataBySave', 'admin/IntOrder/PostDataBySave'); /* 更新或保存数据*/
    Route::rule('IntOrder/GetIdByDel', 'admin/IntOrder/GetIdByDel'); /* 删除数据*/
    Route::rule('IntOrder/GetIdByDetails', 'admin/IntOrder/GetIdByDetails'); /* 商品详情*/
    Route::rule('IntOrder/PostDataByUp', 'admin/IntOrder/PostDataByUp'); /* 更新商品状态*/
    Route::rule('IntOrder/GetGoodsByUp', 'admin/IntOrder/GetGoodsByUp'); /* 获取上架商品*/


    /**
     * 管理快递
     */
    Route::get('/courier/all', 'shop/courier/getall');//获取所有的快递
    Route::rule('order/postCourier', 'admin/IntOrder/postCourier'); /* 提交订单快递信息*/


    /**
     * 订单板块
     */

    Route::rule('order/GetDataByList', 'admin/order/GetDataByList'); /* 获取列表*/
    Route::rule('order/PostDataByCancel', 'admin/order/PostDataByCancel'); /* 更新或保存数据*/
    Route::rule('order/GetIdByDetails', 'admin/order/GetIdByDetails'); /* 商品详情*/
    Route::rule('order/postCourier', 'admin/order/postCourier'); /* 提交订单快递信息*/
    Route::rule('order/postOrderClose', 'admin/order/postOrderClose'); /* 订单结算*/
    Route::rule('order/GetBuyoutByList', 'admin/order/GetBuyoutByList'); /* 买断订单*/
    Route::rule('order/GetOrderByDownload', 'admin/order/GetOrderByDownload'); /*  条件 导出数据*/


    /**
     * 轮播图分类
     */
    Route::rule('banner/GetDataByList', 'admin/banner/GetDataByList'); /* 获取分类列表*/
    Route::rule('banner/PostDataBySave', 'admin/banner/PostDataBySave'); /* 更新或保存数据*/
    Route::rule('banner/GetIdByDel', 'admin/banner/GetIdByDel'); /* 删除数据*/
    Route::rule('banner/GetCategory', 'admin/banner/GetCategory'); /* 获取所有的一级分类*/

    /**
     * 数据统计
     */
    Route::rule('data/ShopInfo', 'admin/data/Shop'); /* 获取店铺信息*/

    Route::rule('data/GetShopByOrder', 'admin/data/GetShopByOrder'); /*获取店铺订单*/

    Route::rule('data/GetShopByGoods', 'admin/data/GetShopByGoods'); /*获取店铺商品*/


    /**
     * 分类模块管理
     */
    Route::rule('category/GetDataByList', 'shop/Category/GetDataByList'); /* 获取分类列表*/
    Route::rule('category/PostDataBySave', 'shop/Category/PostDataBySave'); /* 更新或保存数据*/
    Route::rule('category/GetIdByDel', 'shop/Category/GetIdByDel'); /* 删除数据*/
    Route::rule('category/GetCategory', 'shop/Category/GetCategory'); /* 获取所有的一级分类*/


});