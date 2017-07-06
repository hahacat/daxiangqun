// JavaScript Document
//依赖 data模块 oWrapper W oUl
var data=require('./data.js');
var page=function(){
	var iNow=0;
	var a=-iNow*data.W;
	data.oWrapper.children[0].style.transform='translateX('+a+'px)'
	data.oWrapper.addEventListener('touchstart',function(ev){
		var disX=ev.targetTouches[0].pageX-a;
		var downX=ev.targetTouches[0].pageX;
	
		function fnMove(ev){
			a=ev.targetTouches[0].pageX-disX;
			data.oUl.style.transform='translateX('+a+'px)'
		}
		function fnEnd(ev){
			document.removeEventListener('touchmove',fnMove,false);
			document.removeEventListener('touchend',fnEnd,false);
			var upX=ev.changedTouches[0].pageX;
	
			data.oUl.style.transition='.4s all ease';
			if(Math.abs(upX-downX)>50){
				if(downX>upX){
					iNow++;
					if(iNow==2){
						iNow=1;
					}
				}else{
					iNow--;
					if(iNow==-1){
						iNow=0;
					}
				}
			}
			a=-data.W*iNow;
			data.oUl.style.transform='translateX('+a+'px)'
		}
		document.addEventListener('touchmove',fnMove,false);
		document.addEventListener('touchend',fnEnd,false);
		ev.preventDefault();
	},false);
}
module.exprots=page();