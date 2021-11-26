$(() => {

	

	const initNav = () => {
		
		$(window).on('hashchange', function(){
     		let hash = window.location.hash.substr(1);
     		$('[data-page]').fadeOut("slow");
     		setTimeout(function(){ $('[data-page=' + hash + ']').fadeIn("slow"); }, 700);
			
	    });


 		let hash = window.location.hash.substr(1);
 		if (window.location.hash.substr(1) === '') {
 			window.location.hash = 'accueil';
 		} else {
 			let hash = window.location.hash.substr(1);
	 		$('[data-page]').fadeOut("slow");
	 		setTimeout(function(){ $('[data-page=' + hash + ']').fadeIn("slow"); }, 700);
			
 		}


		

		
	};

	
	initNav();
	//initOngletTarif();
});