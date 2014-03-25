var viewController =function(){  
	
	var currentViewIndex = -1,
		views = [];
	
	function init(x){
		
		views = [homeView,listDevicesView, deviceView];
		
		//F000AA00-0451-4000-B000-000000000000
		 var savedDevice = {"address": "F000AA00-0451-4000-B000-000000000000", "name": "Texas Inst Test"};
		 showDeviceView(savedDevice);
		
		/*
		if (Modernizr.localstorage) {
		  
		  var savedAddress = localStorage["bluetoothTest.currentAddress"];
		  
		  if(savedAddress != null){
		  	
		  	var savedName = localStorage["bluetoothTest.currentName"];
		  	
		  	var savedDevice = {"address": savedAddress, "name": savedName};
		  	
		  	showDeviceView(savedDevice);
		  	
		  }else{
		  	
		  	showHomeView();
		  }
		  
		} else {
		  // no native support for HTML5 storage :(
		  // maybe try dojox.storage or a third-party solution
		  
		  alert("no storage");
		}
		*/
	}
	
	function showHomeView(){
		
		hideCurrentView();
		
		currentViewIndex = 0;
		
		homeView.showView();
	}
	
	function showListDevicesView(){
		
		hideCurrentView();
		
		currentViewIndex = 1;
		
		listDevicesView.showView();
	}
	
	function showDeviceView(deviceData){
		
		hideCurrentView();
		
		currentViewIndex = 2;
		
		deviceView.showView(deviceData);
	}
	
	function hideCurrentView(){
		
		if(currentViewIndex > -1){
		
			views[currentViewIndex].hideView();
		}
	}

	return{   
		init:init,
		showHomeView:showHomeView,
		showListDevicesView:showListDevicesView,
		showDeviceView:showDeviceView
	};

}();