
var urlParams = new URLSearchParams(window.location.search);

const selectedExists = urlParams.has('selected');
if (selectedExists) {
  const selectedName = urlParams.get('selected');
  $(`#${selectedName}`).addClass("active");
} else {
  $(".carousel-item").first().addClass("active");
}
