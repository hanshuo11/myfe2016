var myApp=angular.module('myApp',[]);//�������ĺô��Ƿ�ֹȫ����Ⱦ
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
            //��������������������string���޷��Ӽ�������ʹ��parseInt������α���
            total +=parseInt(value.pnum);
            //console.log(key);
            //key�����������ڵ�Ψһ��ʾ
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


