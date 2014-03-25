var homeView =function(){  
	
	var firstRun = true,
		$view,
		$findBtn;
	
	function init(){
		
		$view = $('#home-view');
		$findBtn = $('#find-btn');
			
		$findBtn.on("click",function(event){
				
			viewController.showListDevicesView();
		});	
		
		firstRun = false;
	}
	
	function showView(){
		
		if(firstRun)
		{
			init();
		}
		
		$view.css('display','block');
	}
	
	function hideView(){
		
		$view.css('display','none');
	}

	return{   
		showView:showView,
		hideView:hideView
	};

}();