var viewController =function(){  
	
	var currentViewIndex = -1,
		views = [];
	
	function init(x){
		
		views = [homeView,listDevicesView, deviceView];
		
		//F000AA00-0451-4000-B000-000000000000 - this is the address for the Texas Instruments bluetooth device
		
		 var savedDevice = {"address": "F000AA00-0451-4000-B000-000000000000", "name": "Texas Inst Test"};
		 
		 showDeviceView(savedDevice);
		
		/*
		 
		// This is an example of using local storage to save settings - not using for now 
		 
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
		
		// cooresponds to home-view div in html - just contains 'Find Devices' button - not using for now
		
		hideCurrentView();
		
		currentViewIndex = 0;
		
		homeView.showView();
	}
	
	function showListDevicesView(){
		
		// corresponds to 'list-devices-view' div in html - not using for now
		
		hideCurrentView();
		
		currentViewIndex = 1;
		
		listDevicesView.showView();
	}
	
	function showDeviceView(deviceData){
		
		// corresponds to 'device-view' div in html - currently passing deviceData to this view and trying to connect with it
		
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