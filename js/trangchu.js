var apiSeller = "http://localhost:3000/bestSeller";
var apiKMT2 = "http://localhost:3000/KMT2";
var apiSpSeller = "http://localhost:3000/SpSeller";
var apiSale = "http://localhost:3000/khuyenmai";
var apiChicken = "http://localhost:3000/chicken";

function trangchu($scope, $http, $routeParams) {

    $scope.idDetal = $routeParams.id;

    // 
    $scope.listSeller = [];
    $http.get(apiSeller).then(function (response) {
        $scope.listSeller = response.data
    })

    // 
    $scope.listTintuc = [];
    $http.get("http://localhost:3000/tintuc").then(function (response) {
        $scope.listTintuc = response.data
    })

    // 
    $scope.listKMT2 = [];
    $http.get(apiKMT2).then(function (response) {
        $scope.listKMT2 = response.data
    })

    // 
    $scope.listBest = [];
    $http.get(apiSpSeller).then(function (response) {
        $scope.listBest = response.data
    })

    // 
    $scope.listSale = [];
    $http.get(apiSale).then(function (response) {
        $scope.listSale = response.data
    })

    // 
    $scope.listChicken = [];
    $http.get(apiChicken).then(function (response) {
        $scope.listChicken = response.data
    })


    // Click row trong bảng
    $scope.viTriHienTai = -1;
    $scope.selectPro = function (index) {
        var id = $scope.listBest[index].id;
        $scope.viTriHienTai = index;
        $http.get(apiSpSeller + "/" + id)
            .then(function (data) {
                $scope.SpSeller = data.data;
            })
            .catch(function (e) {
                console.log(e);
            })

        //khuyenmai
        var id = $scope.listSale[index].id;
        $scope.viTriHienTai = index;
        $http.get(apiSale + "/" + id)
            .then(function (data) {
                $scope.khuyenmai = data.data;
            })
            .catch(function (e) {
                console.log(e);
            })
    }
    //Thêm
    $scope.SpSeller = {
        id: "",
        image: "",
        ten: "",
        mota: "",
        giaban: "",
        giagoc: "",
    }
    $scope.khuyenmai = {
        id: "",
        image: "",
        ten: "",
        mota: "",
        giaban: "",
        giagoc: "",
    }
    $scope.add = function (event) {

        $http
            .post(apiSpSeller, $scope.SpSeller)
            .then(function () {
                $scope.listBest.push($scope.SpSeller)
                alert("Thêm thành công")
            })
            .catch(function (e) {
                console.log(e)
            })
        $http
            .post(apiSale, $scope.khuyenmai)
            .then(function () {
                $scope.listSale.push($scope.khuyenmai)
                alert("Thêm thành công")
            })
            .catch(function (e) {
                console.log(e)
            })
    }

    //Update
    $scope.update = function (event) {
        console.log($scope.SpSeller);
        var id = $scope.listBest[$scope.viTriHienTai].id;
        $http.put(apiSpSeller + "/" + id, $scope.SpSeller)
            .then(function () {
                $scope.viTriHienTai = -1;
            })
            .catch(function (e) {
                console.log(e);
            })
        
            //
        console.log($scope.khuyenmai);
        var id = $scope.listSale[$scope.viTriHienTai].id;
        $http.put(apiSale + "/" + id, $scope.khuyenmai)
            .then(function () {
                $scope.viTriHienTai = -1;
            })
            .catch(function (e) {
                console.log(e);
            })
    }

    // Delete 
    $scope.delete = function (event) {
        var idDelete = $scope.listBest[$scope.viTriHienTai].id;

        $http.delete(apiSpSeller + "/" + idDelete)
            .then(function () {
                $scope.listBest.splice(event, 1);
                alert("Xóa Thành Công")
            })
            .catch(function (e) {
                console.log(e)
            })
    }


}
