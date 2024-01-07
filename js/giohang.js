function gioHang($scope, $routeParams) {
    // $routeParams dung de lay tham so tu url 

    $scope.hienLen=function(){
        const products = [
            {
                id: 1,
                name: "Combo Siêu Hời",
                price: 109000,
            },
            {
                id: 2,
                name: "Combo Deli 1",
                price: 51000,
            }
        ];
        
        const product1 = products[0];
        const product2 = products[1];
        document.getElementById("productId1").innerHTML = product1.id;
        document.getElementById("productName1").innerHTML = product1.name;
        document.getElementById("productPrice1").innerHTML = product1.price;
        
        document.getElementById("productId2").innerHTML = product2.id;
        document.getElementById("productName2").innerHTML = product2.name;
        document.getElementById("productPrice2").innerHTML = product2.price;
        
        const input1 = document.getElementById("countIphone");
        const input2 = document.getElementById("countSamsung");
        const display = document.getElementById("inputValueDisplay");
        
        input1.addEventListener("input", updateTotal);
        input2.addEventListener("input", updateTotal);
        
        function updateTotal() {
            const countIphone = parseInt(input1.value) || 0;
            const countSamsung = parseInt(input2.value) || 0;
            const total = (countIphone * product1.price) + (countSamsung * product2.price);
            display.innerHTML = total;
        }
    }
    
}