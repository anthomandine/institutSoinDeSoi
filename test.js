/*$('[data-link-href]').on('click', (e) => {
			$('[data-href]').fadeOut("slow");
			$('[data-href=' + $(e.currentTarget).data('link') + ']').fadeIn("slow");
		});
		$('[data-link-collapse]').on('click', (e) => {
			$('[data-collapse]').fadeOut("slow");
			$('[data-collapse=' + $(e.currentTarget).data('link') + ']').fadeIn("slow");
		});*/




		const initAccueil = () => {
		$(".pages").hide();
		$(".page-1").fadeIn("slow");
	};

	const initButton = () => {

		$("#accueil").on("click", () => {

			$(".pages").fadeOut("slow");
			$(".page-1").fadeIn("slow");
		});

		$("#prestation").on("click", () => {

			$(".pages").fadeOut("slow");
			$(".page-2").fadeIn("slow");
		});

		$("#tarif").on("click", () => {

			$(".pages").fadeOut("slow");
			$(".page-3").fadeIn("slow");
		});

		$("#permanent").on("click", () => {

			$(".pages").fadeOut("slow");
			$(".page-4").fadeIn("slow");
		});

		$("#album").on("click", () => {

			$(".pages").fadeOut("slow");
			$(".page-5").fadeIn("slow");
		});

		$("#contact").on("click", () => {

			$(".pages").fadeOut("slow");
			$(".page-6").fadeIn("slow");
		});
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

	const initOngletPrestation = () => {

		$(".presta-1").on("click", () => {
			$(".presta-1 ul").slideToggle();
		});

		$(".presta-2").on("click", () => {
			$(".presta-2 ul").slideToggle();
		});

		$(".presta-3").on("click", () => {
			$(".presta-3 ul").slideToggle();
		});

		$(".presta-4").on("click", () => {
			$(".presta-4 ul").slideToggle();
		});
	};

	const initOngletPermanent = () => {

		$(".perma-1").on("click", () => {
			$(".perma-in-1").slideToggle();
		});

		$(".perma-2").on("click", () => {
			$(".perma-in-2").slideToggle();
		});

		$(".perma-3").on("click", () => {
			$(".perma-in-3").slideToggle();
		});
	};