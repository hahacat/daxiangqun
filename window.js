// JavaScript Document
//依赖data 模块  oA, oDiv, 
var data=require('./data.js');
var window=function(){
	var bOk=true;
	data.oA.addEventListener('touchstart',function(){
		if(bOk==true){
			if(data.oA.children[1].innerHTML=='点我关闭窗户'){
				data.oDiv.style.backgroundImage='url(images/win_02.jpg)';
				data.oA.children[1].innerHTML='点我打开窗户'
			}else{
				data.oDiv.style.backgroundImage='url(images/win_pop_02.png),url(images/win_light_06.jpg) ';
				data.oA.children[1].innerHTML='点我关闭窗户'
			}
			bOk=false;
			data.oDiv.addEventListener('webkitTransitionEnd',function(){
				bOk=true;
			},false);
		}else{
			return
		}
	},false);
}

module.exports=window();