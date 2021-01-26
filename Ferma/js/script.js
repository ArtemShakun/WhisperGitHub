// $(document).ready(function () {
//   $('.header__burger, nav').click(function (event) {
//     $('.header__burger, nav').toggleClass('active');
//   });
// });


$(document).ready(function () {
  $('.header__right__block__icon__user').click(function (event) {
    $('.header__burger, .nav').toggleClass('active');
  });
});


$(document).ready(function () {
  $('.search__mobile__version').click(function (event) {
    $('.header__left__block__search').toggleClass('activeForme');
  });
});

$('#checkbox').click(function () {
  if ($(this).is(':checked')) {
    $('#controls__all__add input:checkbox').prop('checked', true);
  } else {
    $('#controls__all__add input:checkbox').prop('checked', false);
  }
});

$(document).ready(function () {
  $('.slider').slick({
    dots: true,

  });

});

