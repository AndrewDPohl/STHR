$('#header').load('header.html');
$('.artist-header').load("../header.html");
// $('#footer').load('../_footer.html');

$("img").on("click", function() {
  var sr = $(this).attr('src'); 
  $('#imagepreview').attr('src', sr);
  $('#imagemodal').modal('show');
});
