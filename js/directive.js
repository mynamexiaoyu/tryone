var introduceDirective=angular.module('introduceDirective',[]);
introduceDirective.directive('jbxxdirective',function($animate){
    return{
        restrict:'E',
        replace:true,
        transclude:true,
        template:'<div>点击我哈！</div>',
        link:function(scope,element,attrs){
            element.bind('click',function(){
				//element.addClass('jbxxhello');
				//$animate.leave(element);
                $animate.addClass(element,'jbxxhello');
				//alert('我是张晓雨')
            })
        }
    }
});
introduceDirective.directive('xmjyNava',function(){
    return{
        restrict:'AE',
        link:function(scope,element,attrs){
            /*$('.nav a').click(function(){
                $('.nav a').toggleClass('active');
            });*/
            console.log(element.scope());
			/*console.log(element.find("a"));
			element.find("a").css({'background':'lightblue'});
			element.find("a").bind('click',function(){
				console.log(this);
			});*/
        }
    }
});
introduceDirective.directive('imageController', ['$swipe', function ($swipe) {
    return {
        restrict: 'EA',
        link: function (scope, ele, attrs, ctrl) {
            /*ele.bind('click',function(){alert('nihao')})*/
            console.log($swipe);
            ele.css({
				position: 'absolute',
				border: '3px solid red',
				backgroundColor: 'lightgrey',
				cursor: 'pointer',
				fontSize:'0.1rem',
				display:'inline-block',
				width:'1rem',
				height:'1rem',
				borderRadius:'50%',
				textAlign:'center',
			});
            var startX, startY, locked = false;
            $swipe.bind(ele, {
                'start': function (coords) {
                	//coords.preventDefault();
                    startX = coords.x;
                    startY = coords.y;
                },
                'move': function (coords) {
                    //coords.preventDefault();
                    var delta = coords.x - startX;
                    if (delta < -300 && !locked) {
                        console.log('trun right');
                    } else if (delta > 300 && !locked) {
                        console.log('trun left');
                    }
                },
                'end': function (coords) {
                	//coords.preventDefault();
                	alert('over')
                },
                'cancel': function (coords) {
                	//coords.preventDefault();
                }
            });
        }
    }
}
]);
/*introduceDirective.directive('draggable',function($document){
	var startX=0, startY=0, x = 0, y = 0;
	return function(scope, element, attr) {
		element.css({
			position: 'absolute',
			border: '1px solid red',
			backgroundColor: 'lightgrey',
			cursor: 'pointer',
			fontSize:'0.1rem',
			display:'inline-block',
			width:'1rem',
			height:'1rem',
			borderRadius:'50%',
			textAlign:'center',
		});
		element.bind('mousedown', function(event) {
			startX = event.screenX - x;
			startY = event.screenY - y;
			$document.bind('mousemove', mousemove);
			$document.bind('mouseup', mouseup);
		});
		function mousemove(event) {
			y = event.screenY - startY;
			x = event.screenX - startX;
			element.css({
				top: y + 'px',
				left: x + 'px'
			});
		}
		function mouseup() {
			$document.unbind('mousemove', mousemove);
			$document.unbind('mouseup', mouseup);
		}
	}
});*/
/*introduceDirective.directive('draggable',function($document){
	var startX=0, startY=0, x = 0, y = 0;
	return function(scope, element, attr) {
		element.css({
			position: 'absolute',
			border: '1px solid red',
			backgroundColor: 'lightgrey',
			cursor: 'pointer',
			fontSize:'0.1rem',
			display:'inline-block',
			width:'1rem',
			height:'1rem',
			borderRadius:'50%',
			textAlign:'center',
		});
		element.bind('mousedown', function(event) {
			startX = event.screenX - x;
			startY = event.screenY - y;
			$document.bind('mousemove', mousemove);
			$document.bind('mouseup', mouseup);
		});
		function mousemove(event) {
			y = event.screenY - startY;
			x = event.screenX - startX;
			element.css({
				top: y + 'px',
				left: x + 'px'
			});
		}
		function mouseup() {
			$document.unbind('mousemove', mousemove);
			$document.unbind('mouseup', mouseup);
		}
	}
});*/

