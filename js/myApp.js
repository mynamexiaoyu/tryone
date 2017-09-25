var app=angular.module('myApp',['ui.router','ngTouch','ngAnimate','introduceCtrl',
    'introduceServices','introduceDirective','introduceFilters']);
app.config(function($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise("/jbxx");
    $stateProvider
        .state('jbxx', {
            url:'/jbxx',
            templateUrl: 'tlps/jbxx.html',
            controller: 'jbxxCtrl',
        })
        .state('qzyx', {
            url:'/qzyx',
            templateUrl: 'tlps/qzyx.html',
            controller: 'qzyxCtrl',
            resolve:{
                yxMsg:function(){
                    return{
                        job:'网站前端',
                        addres:'北京市',
                        workNature:'全职',
                        salary:'(面议)',  
                        profession:'IT'
                    }
                },
                currentDetails:function($http){
                    return $http({
                        url:'introduce.txt',
                        method:'GET'
                    })
                }
            }
        })
        .state('grjn', {
            url:'/grjn',
            templateUrl: 'tlps/grjn.html',
            controller: 'grjnCtrl'
        })
        .state('jybj', {
            url:'/jybj',
            templateUrl: 'tlps/jybj.html',
            controller: 'jybjCtrl',
            resolve:{
                eduDetali:function($http){
                    return $http({
                        url:'introduce.txt',
                        method:'GET'
                    })
                }
            }
        })
        .state('gzjl', {
            url:'/gzjl',
            templateUrl: 'tlps/gzjl.html',
            controller: 'gzjlCtrl',
        })
        .state('xmjy', {
            url:'/xmjy',
            templateUrl: 'tlps/xmjy.html',
            controller: 'xmjyCtrl',
        })
        .state('xmjy.xm1', {
            url: '/xm1',
            templateUrl: 'tlps/xmjyTlps/xm1.html',
            /*views: {
                'xmjy-xm1': {
                    template: '<p>我是项目一</p>',
                }
            }*/
			/*onExit:function(){
				alert('确定吗？');
			}*/
        })
        .state('xmjy.xm2', {
            url: '/xm2',
            templateUrl: 'tlps/xmjyTlps/xm2.html',
            /*views: {
                'xmjy-xm2': {
                    template: '<p>我是项目二</p>',
                }
            }*/
        })
        .state('xmjy.xm3', {
            url: '/xm3',
            templateUrl: 'tlps/xmjyTlps/xm3.html',
            /*views: {
                'xmjy-xm3': {
                    template: '<p>我是项目三</p>',
                }
            }*/
        })
        .state('zwpj', {
            url:'/zwpj',
            templateUrl: 'tlps/zwpj.html',
            controller: 'zwpjCtrl'
        })
});



