// JavaScript Document
var rnd=function(m,n){
	return Math.floor(Math.random()*(n-m)+m);
}
var m=0;
var rem=function(){
	var oHtml=document.getElementsByTagName('html')[0];
	function change(){
		m= 100*document.documentElement.clientWidth/640;
		oHtml.style.fontSize = m+'px';
	}
	change();
	window.addEventListener('resize',change,false);
}
module.exports={
	rnd:rnd,
	rem:rem(),
	m:m
}
		
		