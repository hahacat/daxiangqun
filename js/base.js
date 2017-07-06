    function(){
    	var oHtml=document.getElementsByTagName('html')[0];
        function change(){
            oHtml.style.fontSize = 20*document.documentElement.clientWidth/640+'px';
        }
        change();
        window.addEventListener('resize',change,false);
    }();
