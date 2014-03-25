var listDevicesView =function(){  
	
	var firstRun = true,
		$view,
		masterDevices = [];
	
	function init(){
		
		$view = $('#list-devices-view');
		
		firstRun = false;
	}
	
	function showView(){
		
		if(firstRun)
		{
			init();
		}
		
		$view.css('display','block');
		
		startSearching();
	}
	
	function startSearching(){
		
		setTimeout(list, 2000);
	}
	
	function list(){
		
		bluetoothSerial.list(ondevicelist, ondevicelistError);
	}
	
	function ondevicelist(devices){
		
		masterDevices = devices;
		
		var totalDevices = devices.length,
			$devicesList = $('#devices-list');
		
		
		
		 devices.forEach(function(device) {

            if(device.hasOwnProperty("name"))
            {
            	$devicesList.append('<ul class="topcoat-list list device-list center full" data-address="'+device.address+'" data-name="'+device.name+'">'+device.name+'</ul>');
            }
        });
        
        document.getElementById('devices-list').addEventListener('click', deviceClick,false);
        
       	devices.forEach(function(device) {
        
	        for(var propertyName in device) {
			   
			   try {
			    
			    	subscribeMessage += ", "+propertyName+" = "+device[propertyName];
			        
			    } catch (ex) {
			    	
			    	subscribeMessage += ", CATCH ERROR";
			    	
			        continue;
			    }
			};
		});
		
		
	}
	
	function deviceClick(event){
		
		if(event.toElement.dataset.address){
			
			var deviceAddress = event.toElement.dataset.address;
			var deviceName = event.toElement.dataset.name;
			
			var deviceData = {"address":deviceAddress, "name":deviceName};
			
			viewController.showDeviceView(deviceData);
			
		}else{
			
			alert("111");
		}
		
	}
	
	function ondevicelistError(){
		
		alert("ondevicelistError");
	}
	
	function hideView(){
		$view.css('display','none');
	}

	return{   
		showView:showView,
		hideView:hideView
	};

}();