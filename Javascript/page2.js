$(document).ready(function () {
    $('#done').hide()
    $('.confetti').hide()
    let counter = 0
    $('#1a').on('change', function() {
      $('#1ans').text("Take another look at the examples in this lesson.");
      $('html, body').scrollTop($(document).height());
    });
    $('#1b').on('change', function() {
      $('#1a').attr("disabled",true);
      $('#1ans').text("Good job!");
      $('html, body').scrollTop($(document).height());
      counter++;
    });
    $('#2a').on('change', function() {
      $('#2b').attr("disabled",true);
      $('#2ans').text("Good Job!");
      $('html, body').scrollTop($(document).height());
      counter++;
    });
    $('#2b').on('change', function() {
      $('#2ans').text("Take another look at the examples in this lesson.");
      $('html, body').scrollTop($(document).height());
    });
    $('#3a').on('change', function() {
      $('#3ans').text("Take another look at the examples in this lesson.");
      $('html, body').scrollTop($(document).height());
    });
    $('#3b').on('change', function() {
      $('#3a').attr("disabled",true);
      $('#3ans').text("Good job!");
      $('html, body').scrollTop($(document).height());
      counter++;
    });
    $('#4a').on('change', function() {
      $('#4b').attr("disabled",true);
      $('#4ans').text("Good Job!");
      $('html, body').scrollTop($(document).height());
      counter++;
    });
    $('#4b').on('change', function() {
      $('#4ans').text("Take another look at the examples in this lesson.");
      $('html, body').scrollTop($(document).height());
    });
    $('#5a').on('change', function() {
      $('#5ans').text("Take another look at the examples in this lesson.");
      $('html, body').scrollTop($(document).height());
    });
    $('#5b').on('change', function() {
      $('#5a').attr("disabled",true);
      $('#5ans').text("Good job!");
      $('html, body').scrollTop($(document).height());
      counter++;
    });
    $('#6a').on('change', function() {
      $('#6ans').text("Take another look at the examples in this lesson.");
      $('html, body').scrollTop($(document).height());
    });
    $('#6b').on('change', function() {
      $('#6a').attr("disabled",true);
      $('#6ans').text("Good job!");
      counter++;
      if (counter === 6){
        $('.confetti').show()
        $('#done').show();
      }
      $('html, body').scrollTop($(document).height());
    });
  });