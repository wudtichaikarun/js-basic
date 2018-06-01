$('#login').click(function() {
  var loginGrtr = G$('Wudtichai', 'Karun');

  $('#logindiv').hide();

  loginGrtr
    .setLang($('#lang').val())
    .HTMLGreeting('#greeting', true)
    .log();

})