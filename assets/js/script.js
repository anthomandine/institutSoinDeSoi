$(() => {

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

	const initAlbum = () => {

		$(".album").on("click", () => {
			//$('.content-change').hide('slow');
			$('.album-photo').slideToggle('slow');
		});
	};


	initAlbum();
	carousel();





});