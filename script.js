$(() => {

	

	const initNav = () => {
		$(".pages").hide();
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

	const initOngletTarif = () => {

		$(".tarif-1").on("click", () => {
			$(".tarif-1 ul").slideToggle();
		});

		$(".tarif-2").on("click", () => {
			$(".tarif-2 ul").slideToggle();
		});

		$(".tarif-3").on("click", () => {
			$(".tarif-3 ul").slideToggle();
		});

		$(".tarif-4").on("click", () => {
			$(".tarif-4 ul").slideToggle();
		});

		$(".tarif-5").on("click", () => {
			$(".tarif-5 ul").slideToggle();
		});

		$(".tarif-6").on("click", () => {
			$(".tarif-6 ul").slideToggle();
		});

		$(".tarif-7").on("click", () => {
			$(".tarif-7 ul").slideToggle();
		});

	};

	const carousel = () => {
		const img = document.getElementById('carousel');
		const rightBtn = document.getElementById('right-btn');
		const leftBtn = document.getElementById('left-btn');

		
		let pictures = ['assets/style/images/galerie_photo1.jpg',
						'assets/style/images/galerie_photo2.jpg',
						'assets/style/images/galerie_photo3.jpg',
						'assets/style/images/galerie_photo4.jpg',
						'assets/style/images/galerie_photo5.jpg',
						'assets/style/images/galerie_photo6.jpg',
						'assets/style/images/galerie_photo7.jpg',
						'assets/style/images/galerie_photo8.jpg',
						'assets/style/images/galerie_photo9.jpg',
						'assets/style/images/galerie_photo10.jpg',
						'assets/style/images/galerie_photo11.jpg',
						'assets/style/images/galerie_photo12.jpg',
						'assets/style/images/galerie_photo13.jpg',
						'assets/style/images/galerie_photo14.jpg',
						'assets/style/images/galerie_photo15.jpg',
						'assets/style/images/galerie_photo16.jpg',
						'assets/style/images/galerie_photo17.jpg'
						];

		img.src = pictures[0];
		let position = 0;

		const moveRight = () => {
		    if (position >= pictures.length - 1) {
		        position = 0
		        img.src = pictures[position];
		        return;
		    }
		    img.src = pictures[position + 1];
		    position++;
		}

		const moveLeft = () => {
		    if (position < 1) {
		        position = pictures.length - 1;
		        img.src = pictures[position];
		        return;
		    }
		    img.src = pictures[position - 1];
		    position--;
		}

		rightBtn.addEventListener("click", moveRight);
		leftBtn.addEventListener("click", moveLeft);

	};

	
	initNav();
	initOngletTarif();
	carousel();
});