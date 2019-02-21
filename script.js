$(document).ready(function() {
  $('.home-nav').on('click', function() {
    document
      .querySelector('.hero-nightsky')
      .scrollIntoView({ behavior: 'smooth' });
  });
  $('.traits-nav').on('click', function() {
    document
      .querySelector('.trait-stop')
      .scrollIntoView({ behavior: 'smooth' });
  });
  $('.tools-nav').on('click', function() {
    document
      .querySelector('.tools-stop')
      .scrollIntoView({ behavior: 'smooth' });
  });
  $('.bio-nav').on('click', function() {
    document.querySelector('.bio-stop').scrollIntoView({ behavior: 'smooth' });
  });
  $('.contact-nav').on('click', function() {
    document
      .querySelector('.contact-stop')
      .scrollIntoView({ behavior: 'smooth' });
  });
});
