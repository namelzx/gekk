<?php

Route::group('api/admin/', function () {

    Route::post('user/login', 'admin/Login/login'); /* 登陆*/
    Route::get('user/info', 'admin/Login/info'); /* 获取当前登陆信息*/
    Route::get('user/logout', 'admin/Login/logout'); /* 退出登录*/
    Route::rule('upload', 'admin/Base/upload'); /*文件上传*/


    /*
     * 商铺管理
     */

    Route::post('shop/PostDataByAdd', 'admin/Shop/PostDataByAdd'); /* 添加数据*/
    Route::get('shop/GetDataByList', 'admin/Shop/GetDataByList'); /* 获取数据列表*/

    Route::get('shop/GetIdBydetailed', 'admin/Shop/GetIdBydetailed'); /* 获取数据列表*/




});