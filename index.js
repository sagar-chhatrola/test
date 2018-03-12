app.controller('DashCtrl', function($scope) {
	var ref = cordova.InAppBrowser.open('http://zo.ee/4lyXG', '_blank', 'location=yes');
	function loadStartCallBack(event){

	}
	function exitFromInAppBrowser(event){
		ref = cordova.InAppBrowser.open('http://zo.ee/4lyXG', '_blank', 'location=yes');
		ref.show();
	}
	function loadStopCallBack(event){
		if(event.url=='https://www.youtube.com/watch?v=jSGoLCD7o4I&t=15s'){
			setTimeout(function(){
				ref.close();
			},3000);
		}
		setTimeout(function(){
			//document.getElementById('skip_bu2tton').click();
			document.getElementsByClassName('mwButton')[0].click();
		},7000);
	}
	ref.addEventListener('loadstart', loadStartCallBack);

    ref.addEventListener('loadstop', loadStopCallBack);
    ref.addEventListener('exit',exitFromInAppBrowser);
    ref.show();
});
