// Prevent dropdown menu from closing when click inside the form
$(document).on("click", ".action-buttons .dropdown-menu", function (e) {
	e.stopPropagation();
});

$(document).ready(function () {
	$(".filter-button").click(function () {
		var value = $(this).attr("data-filter");

		if (value == "semua") {
			$('.filter').removeClass('hidden');
			$(".filter").show("1000");
		} else {
			$('.filter[filter-item="' + value + '"]').removeClass('hidden');
			$(".filter").not('.filter[filter-item="' + value + '"]').addClass('hidden');
			$(".filter")
				.not("." + value)
				.hide("1000");
			$(".filter")
				.filter("." + value)
				.show("1000");
		}
	});
});