// JavaScript Document
var webpack= require('webpack');
var path = require('path');
module.exports={
	entry:path.join(__dirname,'entry.js'),
	output:{
		path:path.join(__dirname),
		filename:'bundle.js'
	},
	module:{
		loaders:[
			{test: /\.css$/, loader:'style!css'},

            { 
                test: /\.(png|jpg|jpeg|gif)$/, 
                loader: 'url-loader?limit=1000000&name=img/[name].[ext]' 
            }
		]
	}
}