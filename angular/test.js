var myApp=angular.module('myApp',[]);//这样做的好处是防止全局污染
myApp.controller('cartsController',function($scope){
    $scope.carts = [
        {
            productId: 1000,
            pName: 'iphone7',
            pnum: 3,
            pirce: 5400
        }, {
            productId: 1001,
            pName: 'iphone6',
            pnum: 10,
            pirce: 3400
        }, {
            productId: 1002,
            pName: 'iphone6s',
            pnum: 5,
            pirce: 4400
        }, {
            productId: 1003,
            pName: 'ipad',
            pnum: 8,
            pirce: 3400
        }
    ];
    $scope.sum = function () {
        var sum = 0;
        angular.forEach($scope.carts, function (value, key) {
            sum += value.pirce * value.pnum;
        });
        return sum;
    }

    $scope.total = function () {
        var total = 0;
        angular.forEach($scope.carts, function (value, key) {
            //在输入框内填入的数字是string型无法加减，必须使用parseInt变成整形变量
            total +=parseInt(value.pnum);
            //console.log(key);
            //key是数组或对象内的唯一标示
        });
        return total;
    }

    $scope.del = function (id) {
        //console.log(id);
        var index = -1;
        angular.forEach($scope.carts, function (value, key) {
            if (value.productId == id) {
                index = key;
            }
        })
        if (index != -1) {
            $scope.carts.splice(index, 1);
        }
    }

    $scope.delAll = function () {
        $scope.carts = [];
    }

    $scope.minus = function (id) {
        //console.log(typeof nub)
        var nub1=0;
        angular.forEach($scope.carts,function(value, key){
            if(value.productId==id){
                nub1=value.pnum--;
                if(nub1==1){
                    $scope.del(id);
                }
            }
        })
        return nub1;
    }
});


