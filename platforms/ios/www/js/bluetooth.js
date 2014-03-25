var bluetooth =function(){  
	
	var $connectBtn,
		$resultTextArea,
		subscribeMessage = "";
	
	function init(){    
		
		$connectBtn = $('#connect-btn');
		
		//$resultTextArea = $('#connect-response');
		
		//$connectBtn.css('display','inline-block');
		$connectBtn.on("click",function(event){
			
			alert("connect clicked");
			
			bluetoothSerial.subscribe("\n", subscribeMessage, subscribeError);
			
			alert("connect clicked: subscribed");
			
		});
		
		// get a list of peers
        setTimeout(list, 2000);
		
		//var bluetoothSerial = cordova.require('bluetoothSerial');
		
		//var macID = '64:B9:E8:E9:BD:95'; // works to connect to mac from android (xoom)
		
		//var macID = '00:1A:7D:D4:62:25';
		
		//var macID = 'D0:23:D8:8D:BB:4B';
		
		//alert('init 2: bluetoothSerial = '+bluetoothSerial+", CONNECTING TO: "+macID);
		// on Android, takes a macAddress of the remote device - on iOS, empty string can be used
		//bluetoothSerial.connect(macID, connectSuccess, connectFailure);
		
		//alert('init 3 = '+bluetoothSerial);
    	
    	/*
    	bluetoothSerial.isEnabled(function (enabled) {
		    console.log(enabled); // true or false
		}, isEnabledFailure);
		*/
		
		//alert('init 4');
    	
    	/*
    	Draggable.create(".scaleContainer", {
			edgeResistance:0.65,
			type:"x,y",
			throwProps:true,
			liveSnap:false
		});
		
		var scaleArm = $('.scaleArm').css("transform", "rotate(7deg)");
		TweenLite.to(scaleArm, 1, {rotation:90, transformOrigin:"20px 93px"});  
		
		*/
		
		
	}; 
	
	function list(){
		
		bluetoothSerial.list(ondevicelist, ondevicelistError);
	}
	
	function ondevicelist(devices){
		
		var totalDevices = devices.length,
			$devicesList = $('#devices-list');
		
		//alert("totalDevices = "+totalDevices);
		
		subscribeMessage += "totalDevices = "+totalDevices;
		
		//$resultTextArea.text(subscribeMessage);
		
		
		
		 devices.forEach(function(device) {

            //option = document.createElement('option');
            if (device.hasOwnProperty("uuid")) {
                //option.value = device.uuid;
                
                subscribeMessage += ", uuid = "+device.uuid;
                
            } else if (device.hasOwnProperty("address")) {
                //option.value = device.address;
                
                subscribeMessage += ", address = "+device.address;
                
            } else {
                //option.value = "ERROR " + JSON.stringify(device);
                
                subscribeMessage += ", ERROR " + JSON.stringify(device);
            }
            
            if(device.hasOwnProperty("name"))
            {
            	alert("device.address = "+device.address+", device.uuid = "+device.uuid);
            	
            	$devicesList.append('<ul class="topcoat-list list device-list" id="device-item" data-address="'+device.address+'">'+device.name+'</ul>');
            	
            	//alert("-0-");
            	//$('#deviceItem-'+ device.name).on("click",deviceClick);
            	
            	document.getElementById('devices-list').addEventListener('click', deviceClick,false);
            	
            	//alert("-1-");
            	//$("#testDeviceItem").text(device.name);
            }
            
            //$resultTextArea.text(subscribeMessage);
            
            //option.innerHTML = device.name;
            //deviceList.appendChild(option);
        });
        
        
        alert("latest");
        
        devices.forEach(function(device) {
        
	        for(var propertyName in device) {
			   // propertyName is what you want
			   // you can get the value like this: myObject[propertyName]
			   
			   
			    try {
			    //print out in form "propertyname:::value"
			       //System.debug(i + ":::" + vm[i]);
			        
			        //alert(propertyName+" = "+devices[propertyName]);
			        
			         subscribeMessage += ", "+propertyName+" = "+device[propertyName];
			  		//subscribeMessage += ", myObject[propertyName] = "+myObject[propertyName];
			  
			  		//$resultTextArea.text(subscribeMessage);
			        
			        
			    } catch (ex) {
			    	
			    	subscribeMessage += ", CATCH ERROR";
			  		//subscribeMessage += ", myObject[propertyName] = "+myObject[propertyName];
			  
			  		//$resultTextArea.text(subscribeMessage);
			        //just ignore error and continue with next iteration(=property)
			        continue;
			    }
			};
		});
		
		
	}
	
	function deviceClick(event){
		
		console.log(event);
		
		/*
		if(event.){
			
			
		}
		*/
		
		if(event.toElement.id == 'device-item'){
			
			alert(event.toElement.dataset.address);
		}
		
		//alert($(this).attr("data-address"));
	}
	
	function ondevicelistError(){
		
		alert("ondevicelistError");
	}
	
	function subscribeMessage(message){
		
		alert('subscribe message = '+message);
		
		subscribeMessage += message;
		
		//$resultTextArea.text(subscribeMessage);
	}
	
	function subscribeError(){
		
		alert("Subscribe Error");
	}
	
	function connectSuccess(){
		
		alert("connect success");
	}
	
	function connectFailure(){
		
		alert("connect failure");
	}
	
	function isEnabledFailure(){
		
		alert("isEnabled failed");
	}
	
	return{   
		init:init
	};
}();