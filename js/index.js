$('.burgerMenu').click(function(){
    $('span:nth-child(1)').toggleClass('first');
    $('span:nth-child(2)').toggleClass('middle');
    $('span:nth-child(3)').toggleClass('last');
    $('.headerMenu').toggleClass('active');
    $('body').toggleClass('lock');
  });
  
  
