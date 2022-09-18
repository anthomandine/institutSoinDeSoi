$(() => {

	/*const carousel = () => {
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
	};*/

	const carousel2 = () => {
		document.querySelector('#gallery').appendChild(JGallery.create([{
			title: 'Images',
			items: [
				{
					url: 'assets/style/images/galerie_photo1.jpg',
					thumbUrl: 'assets/style/images/galerie_photo1_mini.jpg',
					title: 'Photo1',
					hash: 'photo-1'
				},
				{
					url: 'assets/style/images/galerie_photo2.jpg',
					thumbUrl: 'assets/style/images/galerie_photo2_mini.jpg',
					title: 'Photo2',
					hash: 'photo-2'
				},
				{
					url: 'assets/style/images/galerie_photo3.jpg',
					thumbUrl: 'assets/style/images/galerie_photo3_mini.jpg',
					title: 'Photo3',
					hash: 'photo-3'
				},
				{
					url: 'assets/style/images/galerie_photo4.jpg',
					thumbUrl: 'assets/style/images/galerie_photo4_mini.jpg',
					title: 'Photo4',
					hash: 'photo-4'
				},
				{
					url: 'assets/style/images/galerie_photo5.jpg',
					thumbUrl: 'assets/style/images/galerie_photo5_mini.jpg',
					title: 'Photo5',
					hash: 'photo-5'
				},
				{
					url: 'assets/style/images/galerie_photo6.jpg',
					thumbUrl: 'assets/style/images/galerie_photo6_mini.jpg',
					title: 'Photo6',
					hash: 'photo-6'
				},
				{
					url: 'assets/style/images/galerie_photo7.jpg',
					thumbUrl: 'assets/style/images/galerie_photo7_mini.jpg',
					title: 'Photo7',
					hash: 'photo-7'
				},
				{
					url: 'assets/style/images/galerie_photo8.jpg',
					thumbUrl: 'assets/style/images/galerie_photo8_mini.jpg',
					title: 'Photo8',
					hash: 'photo-8'
				},
				{
					url: 'assets/style/images/galerie_photo9.jpg',
					thumbUrl: 'assets/style/images/galerie_photo9_mini.jpg',
					title: 'Photo9',
					hash: 'photo-9'
				},
				{
					url: 'assets/style/images/galerie_photo10.jpg',
					thumbUrl: 'assets/style/images/galerie_photo10_mini.jpg',
					title: 'Photo10',
					hash: 'photo-10'
				},
				{
					url: 'assets/style/images/galerie_photo11.jpg',
					thumbUrl: 'assets/style/images/galerie_photo11_mini.jpg',
					title: 'Photo11',
					hash: 'photo-11'
				},
				{
					url: 'assets/style/images/galerie_photo12.jpg',
					thumbUrl: 'assets/style/images/galerie_photo12_mini.jpg',
					title: 'Photo12',
					hash: 'photo-12'
				},
				{
					url: 'assets/style/images/galerie_photo13.jpg',
					thumbUrl: 'assets/style/images/galerie_photo13_mini.jpg',
					title: 'Photo13',
					hash: 'photo-13'
				},
				{
					url: 'assets/style/images/galerie_photo14.jpg',
					thumbUrl: 'assets/style/images/galerie_photo14_mini.jpg',
					title: 'Photo14',
					hash: 'photo-14'
				},
				{
					url: 'assets/style/images/galerie_photo15.jpg',
					thumbUrl: 'assets/style/images/galerie_photo15_mini.jpg',
					title: 'Photo15',
					hash: 'photo-15'
				},
				{
					url: 'assets/style/images/galerie_photo16.jpg',
					thumbUrl: 'assets/style/images/galerie_photo16_mini.jpg',
					title: 'Photo16',
					hash: 'photo-16'
				},
				{
					url: 'assets/style/images/galerie_photo17.jpg',
					thumbUrl: 'assets/style/images/galerie_photo17_mini.jpg',
					title: 'Photo17',
					hash: 'photo-17'
				}

			]
		}]).getElement());
	}

	const initAlbum = () => {

		$('#closeAlbum').on("click", () => {
			$('#gallery').hide('slow');
		});

		$(".album").on("click", () => {
			//$('.content-change').hide('slow');
			//$('.album-photo').slideToggle('slow');
			$('#gallery').toggle('slow');
		});
	};


	initAlbum();
	carousel2();
	//carousel();





});