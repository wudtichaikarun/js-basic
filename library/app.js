$('#login').click(function() {
  var loginGrtr = G$('Wudtichai', 'Karun');

  $('#logindiv').hide();

  $('#logoutdiv').show();

  // method full name can't chaining because it not return 'this'
  var fullname = loginGrtr.fullname();
  console.log(fullname);

  loginGrtr
    // get value from html selected
    .setLang($('#lang').val())
    // write message to html dom
    .HTMLGreeting('#greeting', true)
    // log message on console
    .log();

})

$('#logout').click(function() {
  var msgSelect = $('#greeting');
  msgSelect.html('Please Login!');

  $('#logindiv').show();
  
  $('#logoutdiv').hide();
});