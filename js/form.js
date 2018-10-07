$(document).ready(function() {
  $('.footer__inputGroup input').focus(function() {
    $("label[for='"+ $(this).attr('id')+"']").addClass("animate");
  }) ;
  $('.footer__inputGroup input').blur(function() {
    if ( $(this).val() == ""){
      $("label[for='"+ $(this).attr('id')+"']").removeClass("animate");
    }
  });
})

$('.footer__inputGroup input, .footer__inputGroup textarea').on('input', function() {
  var pattern;
  switch (this.name) { 
    case 'name':
    case 'subject':
    case 'message':
      pattern = /^.{3,}$/;
      break;
    case 'email':
      pattern = /(^@)|(@$)/;
      break;
    case 'tel':
      pattern = /[0-9]{9,}/;
      break;
    default:
    break;
  }
  if (this.name === 'email') {
    if (pattern.test(this.value)) {
      $(this).removeClass();
      $(this).addClass("incorrect");
    } else {
      $(this).removeClass();
      $(this).addClass("correct");
    }

  } else {
    if (!pattern.test(this.value)) {
      $(this).removeClass();
      $(this).addClass("incorrect");
    } else {
      $(this).removeClass();
      $(this).addClass("correct");
    }
  }
  if (this.value === '') $(this).removeClass();
}).trigger('change');