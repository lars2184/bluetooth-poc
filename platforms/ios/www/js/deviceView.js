var deviceView =function(){  
	
	var firstRun = true,
		$view,
		deviceData,
		$deviceTextArea,
		$disconnectBtn;
	
	function init(){
		
		$view = $('#device-view');
		$deviceTextArea = $('#device-feedback');
		$disconnectBtn = $('#disconnect-btn');
		
		$disconnectBtn.on("click",function(event){
			
			bluetoothSerial.disconnect(disconnectSuccess, disconnectFailure);
			
		});
		
		firstRun = false;
	}
	
	function showView(data){
		
		if(firstRun)
		{
			init();
		}
		
		deviceData = data;
		
		$view.css('display','block');
		
		$('#device-header').text("Connecting to "+deviceData.name);
		
		$deviceTextArea.text("Device address = "+deviceData.address);
		
		connectToDevice();
	}
	
	function connectToDevice(){
		
		var systemDevice = "IOS";
		
		alert("connectToDevice 1");
		
		if(systemDevice == "IOS")
		{
		
			alert("connectToDevice 2");
		
			bluetoothSerial.subscribe("\n", subscribeMessage, subscribeError);
			
			bluetoothSerial.connect(deviceData.address, connectSuccess, connectFailure);
		
		}else if(systemDevice == "AND"){
			
			alert("connectToDevice 3");
			
			//android
			//bluetoothle.init(androidSuccessCallback, androidErrorCallback);
			
		}else{
			
			alert("System is not IOS or AND");
		}
		
		
		
		
		
	}
	
	function androidSuccessCallback(){
		
		alert("androidSuccessCallback");
	}
	
	function androidErrorCallback(){
		
		alert("androidErrorCallback");
	}
	
	function subscribeMessage(message){
		
		alert('subscribe message = '+message);
	}
	
	function subscribeError(){
		
		alert("Subscribe Error");
	}
	
	function connectSuccess(){
		
		$disconnectBtn.css('display','inline-block');
		
		if (Modernizr.localstorage) {
			
			localStorage["bluetoothTest.currentName"] = deviceData.name;
			localStorage["bluetoothTest.currentAddress"] = deviceData.address;
		}
		
		$('#device-header').text("Connected to "+deviceData.name);
	}
	
	function connectFailure(){
		
		alert("connect failure");
	}
	
	function disconnectSuccess(){
		
		/*
		if (Modernizr.localstorage) {
			
			localStorage["bluetoothTest.currentName"] = deviceData.name;
			localStorage["bluetoothTest.currentAddress"] = deviceData.address;
		}
		*/
		
		alert("disconnect SUCCESS");
		
		viewController.showHomeView();
	}
	
	function disconnectFailure(){
		
		alert("disconnect ERROR");
	}
	
	function hideView(){
		$view.css('display','none');
	}

	return{   
		showView:showView,
		hideView:hideView
	};
}();