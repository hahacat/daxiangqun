// JavaScript Document
//依赖  data模块 oDiv, w , flowerSize
var base=require('./base.js');
var data = require('./data.js');
function createSpan(){
		var oSpan=document.createElement('span');
		var x=base.rnd(0,9);
		oSpan.style.width=data.flowerSize[x].w+'rem';
		oSpan.style.height=data.flowerSize[x].h+'rem';
		oSpan.style.background='url(images/hua'+(x+1)+'.png)';
		oSpan.style.backgroundSize='cover';
		data.oDiv.appendChild(oSpan);
		oSpan.style.left=Math.random()*data.w+'rem';
		oSpan.style.webkitTransition=(5+x)+'s all linear';
		oSpan.style.webkitTransform='translateY('+(data.oDiv.offsetHeight-60)+'px) rotateZ(720deg)';
		oSpan.style.opacity=0.4;

		var s=(5+x)*1000;
		setTimeout(function(){
			data.oDiv.removeChild(oSpan);	
		},s);
}
/*setInterval(createSpan,50);*/

module.exports=setInterval(createSpan,50);