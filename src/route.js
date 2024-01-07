var myApp = angular.module("myApp", ["ngRoute"]);
//Cấu hình chuyển nội dung trang
myApp.config(function ($routeProvider, $locationProvider){
    //Xóa khoảng trắng
    $locationProvider.hashPrefix("");
    //Chuyển trang
    $routeProvider
    .when("/home", {
        templateUrl: "./pages/trangchu.html",
        controller: "trangchu"
    })
    .when("/gioithieu", {
        templateUrl: "./pages/gioithieu.html",    
    })
    .when("/lienhe", {
        templateUrl: "./pages/ykienkh.html"   
    })
    .when("/danhmuc/quanlyBestSeller", {
        templateUrl: "./pages/qlySeller.html",
        controller: "trangchu"
    })
    .when("/danhmuc/quanlyKhuyenMai", {
        templateUrl: "./pages/qlyKM.html",
        controller: "trangchu"
    })
    .when("/sanpham/bestSeller", {
        templateUrl: "./pages/sanpham.html",
        controller: "trangchu"
    })
    .when("/sanpham/khuyenMai", {
        templateUrl: "./pages/khuyenmai.html",
        controller: "trangchu"
    })
    .when("/sanpham/chicken", {
        templateUrl: "./pages/chicken.html",
        controller: "trangchu"
    })
    .when("/detal/:id", {
        templateUrl: "./pages/detal.html",
        controller: "trangchu"
    })
    .when("/detal1/:id", {
        templateUrl: "./pages/detal1.html",
        controller: "trangchu"
    })
    .when("/detal2/:id", {
        templateUrl: "./pages/detal2.html",
        controller: "trangchu"
    })
    .when("/detal3/:id", {
        templateUrl: "./pages/detal3.html",
        controller: "trangchu"
    })
    .when("/giohang", {
        templateUrl: "./pages/giohang.html",
    })
    .when("/acount", {
        templateUrl: "./pages/acount.html"
    })
    .when("/address", {
        templateUrl: "./pages/address.html"
    })
    .when("/lichsudonhang", {
        templateUrl: "./pages/lichsudonhang.html"
    })
    .when("/ykien", {
        templateUrl: "./pages/ykienkh.html"
    })

    .otherwise({
        //Chạy trang nào đầu tiên thì đưa vào otherwise
        redirectTo: "/home"
    })
})
myApp.controller("trangchu",trangchu);
