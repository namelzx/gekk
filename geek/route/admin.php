<?php

Route::group('api/admin/', function () {

    Route::post('user/login', 'admin/Login/login'); /* 登陆*/
    Route::get('user/info', 'admin/Login/info'); /* 获取当前登陆信息*/
    Route::get('user/logout', 'admin/Login/logout'); /* 退出登录*/
    Route::rule('upload', 'admin/Base/upload'); /*文件上传*/


    Route::get('city/getProvinces', 'admin/shop/getProvinces'); /* 获取省份*/
    Route::get('city/getCity', 'admin/shop/getCity'); /* 获取城市*/
    Route::get('city/getArea', 'admin/shop/getArea'); /* 获取区域*/
    /*
     * 商铺管理
     */

    Route::post('shop/PostDataByAdd', 'admin/Shop/PostDataByAdd'); /* 添加数据*/
    Route::get('shop/GetDataByList', 'admin/Shop/GetDataByList'); /* 获取数据列表*/
    Route::get('shop/GetIdBydetailed', 'admin/Shop/GetIdBydetailed'); /* 获取数据列表*/

    /**
     * 分销管理
     */
    Route::get('dist/GetDataByList', 'admin/Dist/GetDataByList'); /* 获取数据列表*/

    Route::post('dist/PostDataBySave', 'admin/Dist/PostDataBySave'); /* 更新数据*/


});