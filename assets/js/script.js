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
					url: 'assets/style/images/album/entre_institut.jpg',
					thumbUrl: 'assets/style/images/album/entre_institut_thumb.jpg',
					title: 'Entrée de l\'institut',
					hash: 'entre_institut'
				},
				{
					url: 'assets/style/images/album/deventure_institut.jpg',
					thumbUrl: 'assets/style/images/album/deventure_institut_thumb.jpg',
					title: 'Deventure de l\'institut',
					hash: 'deventure_institut'
				},
				{
					url: 'assets/style/images/album/onglerie.jpg',
					thumbUrl: 'assets/style/images/album/onglerie_thumb.jpg',
					title: 'Onglerie',
					hash: 'onglerie'
				},
				{
					url: 'assets/style/images/album/cabine_soin.jpg',
					thumbUrl: 'assets/style/images/album/cabine_soin_thumb.jpg',
					title: 'Cabine de soin',
					hash: 'cabine_soin'
				},
				{
					url: 'assets/style/images/album/cabine.jpg',
					thumbUrl: 'assets/style/images/album/cabine_thumb.jpg',
					title: 'Cabine',
					hash: 'cabine'
				},
				{
					url: 'assets/style/images/album/materiels.jpg',
					thumbUrl: 'assets/style/images/album/materiels_thumb.jpg',
					title: 'Materiels',
					hash: 'materiels'
				},
				{
					url: 'assets/style/images/album/produits_physio_vente.jpg',
					thumbUrl: 'assets/style/images/album/produits_physio_vente_thumb.jpg',
					title: 'Produits Physio vente',
					hash: 'produits_physio_vente'
				},
				{
					url: 'assets/style/images/album/produits_physiodermie.jpg',
					thumbUrl: 'assets/style/images/album/produits_physiodermie_thumb.jpg',
					title: 'Produits Physiodermie',
					hash: 'produits_physiodermie'
				},
				{
					url: 'assets/style/images/album/produits_vente.jpg',
					thumbUrl: 'assets/style/images/album/produits_vente_thumb.jpg',
					title: 'Produits Vente',
					hash: 'produits_vente'
				},
				{
					url: 'assets/style/images/album/salle_attente.jpg',
					thumbUrl: 'assets/style/images/album/salle_attente_thumb.jpg',
					title: 'salle d\'attente',
					hash: 'salle_attente'
				},
				{
					url: 'assets/style/images/album/salle_soin.jpg',
					thumbUrl: 'assets/style/images/album/salle_soin_thumb.jpg',
					title: 'Salle de soin',
					hash: 'salle_soin'
				},
				{
					url: 'assets/style/images/album/soin.jpg',
					thumbUrl: 'assets/style/images/album/soin_thumb.jpg',
					title: 'Soin',
					hash: 'soin'
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