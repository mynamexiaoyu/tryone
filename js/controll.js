var introduceCtrl= angular.module('introduceCtrl', []);
introduceCtrl.controller('jbxxCtrl',function($scope,$http,jbxxServices,$location) {
    $scope.jbxx = {
        text: '我的基本信息:'
    };
    $scope.pageClass="jbxx";
    /*$scope.data=data;*/
    /*$http({
     url:'introduce.txt',
     method:'GET'
     }).success(function(response){
     $scope.int=response.msg
     }).error(function(){
     alert('未找到！')
     })*/
    /*$scope.loading=function(){
     $http({
     url:'introduce.txt',
     method:'GET'
     }).success(function(response){
     $scope.int=response.msg;
     }).error(function(){alert('未找到！')});
     }*/
	var url=$location.url();
    $scope.loading=function(){
        $http({
            url:'introduce.txt',
            method:'GET',
			cache: true,//缓存
        }).success(function(response){
            $scope.message=response.message;
        }).error(function(){alert('未找到！')});
		//$location.path('/gzjl').replace();
		//$location.search({name: 'Ari', username: 'auser'});
		//$location.url('/gzjl')
		//alert(url);
    }
});
introduceCtrl.controller('qzyxCtrl',function($scope,yxMsg,currentDetails) {
    $scope.qzyx = {
        text: '我的求职意向:'
    };
    $scope.areas=['北京','天津','上海','杭州','苏州','重庆'];
    $scope.input='张家口';
    $scope.add=function(){
        if($scope.input !=''){
            $scope.areas.push($scope.input);
            $scope.input='';
        }else{
            alert('请输入城市名称，谢谢！')
        }
    };
	$scope.removeArea=function(index){
		$scope.areas.splice(index,1);
	}
    /*$scope.delete=function($index){
        $scope.areas.splice($index,1);
    };*/
    $scope.job=yxMsg.job;
    $scope.addres=yxMsg.addres;
    $scope.workNature=yxMsg.workNature;
    $scope.salary=yxMsg.salary;
    $scope.profession=yxMsg.profession;
    $scope.pageClass="qzyx";
    $scope.webMsg=currentDetails.data.webMsg;
});
introduceCtrl.controller('grjnCtrl',function($scope) {
    $scope.grjn = {
        text: '我的基本技能:'
    };
    $scope.pageClass="grjn";
});
introduceCtrl.controller('jybjCtrl',function($scope,eduDetali,$interval,$timeout) {
    $scope.jybj = {
        text: '我的教育背景:'
    };
    $scope.eduExp=eduDetali.data.eduExp;
    $scope.show01 = true;
    var index = 1;
    var timer;
    $scope.next = function () {
        switch(index){
            case 1:
                $scope.show01 = false;
                $scope.fade01 = 'fadeLeft';
                $scope.show02 = true;
                $scope.fade02 = 'fadeRight';
                index = 2;
                break;
            case 2:
                $scope.show02 = false;
                $scope.fade02 = 'fadeLeft';
                $scope.show03 = true;
                $scope.fade03 = 'fadeRight';
                index = 3;
                break;
            case 3:
                $scope.show03 = false;
                $scope.fade03 = 'fadeLeft';
                $scope.show04 = true;
                $scope.fade04 = 'fadeRight';
                index = 4;
                break;
            case 4:
                $scope.show04 = false;
                $scope.fade04 = 'fadeLeft';
                $scope.show05 = true;
                $scope.fade05 = 'fadeRight';
                index = 5;
                break;
            case 5:
                $scope.show05 = false;
                $scope.fade05 = 'fadeLeft';
                $scope.show01 = true;
                $scope.fade01 = 'fadeRight';
                index = 1;
                break;
        };
        timer = $timeout(function () {
            $scope.next();
        }, 3000);
    };
    $scope.prev = function () {
        switch(index){
            case 1:
                $scope.show01 = false;
                $scope.fade01 = 'fadeRight';
                $scope.show05 = true;
                $scope.fade05 = 'fadeLeft';
                index = 5;
                break;
            case 2:
                $scope.show02 = false;
                $scope.fade02 = 'fadeRight';
                $scope.show01 = true;
                $scope.fade01 = 'fadeLeft';
                index = 1;
                break;
            case 3:
                $scope.show03 = false;
                $scope.fade03 = 'fadeRight';
                $scope.show02 = true;
                $scope.fade02 = 'fadeLeft';
                index = 2;
                break;
            case 4:
                $scope.show04 = false;
                $scope.fade04 = 'fadeRight';
                $scope.show03 = true;
                $scope.fade03 = 'fadeLeft';
                index = 3;
                break;
            case 5:
                $scope.show05 = false;
                $scope.fade05 = 'fadeRight';
                $scope.show04 = true;
                $scope.fade04 = 'fadeLeft';
                index = 4;
                break;
        };
        timer = $timeout(function () {
            $scope.next();
        }, 3000);
    };
    $scope.nextImg = function () {
        if (angular.isDefined(timer)) {
            $timeout.cancel(timer);
            timer = undefined;
        }
        $scope.next();
    };
    $scope.prevImg = function () {
        if (angular.isDefined(timer)) {
            $timeout.cancel(timer);
            timer = undefined;
        }
        $scope.prev();
    };
    $scope.pageClass="jybj";
});
introduceCtrl.controller('gzjlCtrl',function($scope) {
    $scope.gzjl = {
        text: '我的工作经历:'
    };
    $scope.pageClass="gzjl";
});
introduceCtrl.controller('xmjyCtrl',function($scope) {
    $scope.xmjy = {
        text: '我的项目经验:'
    };
    $scope.pageClass="xmjy";
});
introduceCtrl.controller('zwpjCtrl',function($scope) {
    $scope.zwpj = {
        text: '自我评价:'
    };
    $scope.pageClass="zwpj";
});