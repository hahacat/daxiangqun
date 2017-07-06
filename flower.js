// JavaScript Document
//无依赖模块
var aBig=document.querySelectorAll('.flower_big i');
var oSmall=document.querySelector('.flower_small i');

var animation=function(){
	var bBig=true;
	for(var i=0; i<aBig.length; i++){
		aBig[i].index=i;
		aBig[i].addEventListener('touchstart',function(){
			if(bBig==true){
				bBig=false;
				this.style.webkitAnimation='scale 0.3s ease 3';
				aBig[this.index].addEventListener('webkitAnimationEnd',function(){
					this.style.webkitAnimation='none';
				bBig=true;
			},false);
			}else{
				return ;
			}
		},false);
	}
	var bSmall=true;
	oSmall.addEventListener('touchstart',function(ev){
		if(bSmall==true){
			bSmall=false;
			this.style.webkitAnimation='rotate2 0.3s ease 3';
			oSmall.addEventListener('webkitAnimationEnd',function(){
				this.style.webkitAnimation='none';
				bSmall=true;
			},false);
		}else{
			return ;
		}
	},false);
}
module.exports=animation();