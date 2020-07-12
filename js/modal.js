$(document).ready(function() {
  var button = $('#button');
  var modal = $('#modal');
  var close = $('#close');

  button.on('click', function() {
    modal.addClass('mmodal_active');
  });

  close.on('click', function() {
    modal.removeClass('mmodal_active');
  });
});