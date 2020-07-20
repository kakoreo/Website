$(".toggler").change(function() {
  $(".main").toggleClass("slideMain");
});
$(".unCheck").click(function() {
  $(".toggler").prop("checked", false);
  $(".main").removeClass("slideMain");

});
