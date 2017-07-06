// JavaScript Document

//依赖base模块 m
var base=require('./base.js');
var flowerSize=[{w:0.6,h:0.6},{w:0.21,h:0.19},{w:0.14,h:0.13},{w:0.31,h:0.17},{w:0.18,h:0.20},{w:0.16,h:0.13},{w:0.39,h:0.39},{w:0.25,h:0.11},{w:0.17,h:0.11}];

var W=document.documentElement.clientWidth;
var H=document.documentElement.clientHeight;
var oWrapper=document.getElementById('wrapper');
var oUl=oWrapper.children[0];
var oSecond=document.getElementById('second');
var oFirst=document.getElementById('first');
var oDiv=oFirst.getElementsByTagName('div')[0];
var oA=oFirst.getElementsByTagName('a')[0];


oWrapper.style.height=H/base.m+'rem';
oWrapper.children[0].style.height=H/base.m+'rem';           
oSecond.style.height=H/base.m+'rem';
oFirst.children[0].style.height=H/base.m+'rem';
oDiv.style.height=document.documentElement.clientHeight+'px';
var w=W/base.m-0.6;

module.exports={
	W:W,
	H:H,
	oWrapper:oWrapper,
	w:w,
	oA:oA,
	oDiv:oDiv,
	oUl:oUl,
	flowerSize:flowerSize
}