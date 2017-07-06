// JavaScript Document
require('./index.css');
var rem=require('./base.js');
var data = require('./data.js');
var flower=require('./flower.js');
var float=require('./float.js');
var page= require('./page.js');
var window= require('./window.js');
var script = document.createElement('script');
script.innerHTML=rem+data+flower+float+page+window;