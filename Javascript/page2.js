$(document).ready(function () {
  const finished = ()=>{
    if (counter === 6){
        $('.confetti').show()
        $('#done').show();
        $('html, body').scrollTop($(document).height());
    }
}
    $('#done').hide()
    $('.confetti').hide()
    let counter = 0
    $('#1a').on('click', function() {
      $('#1ans').text("Take another look at the examples in this lesson.");
      $('html, body').scrollTop($(document).height());
    });
    $('#1b').on('click', function() {
      $('#1a').attr("disabled",true);
      $('#1ans').text("Good job!");
      counter++;
      finished();
      $('html, body').scrollTop($(document).height());
    });
    $('#2a').on('click', function() {
      $('#2b').attr("disabled",true);
      $('#2ans').text("Good Job!");
      counter++;
      finished();
      $('html, body').scrollTop($(document).height());
    });
    $('#2b').on('click', function() {
      $('#2ans').text("Take another look at the examples in this lesson.");
      $('html, body').scrollTop($(document).height());
    });
    $('#3a').on('click', function() {
      $('#3ans').text("Take another look at the examples in this lesson.");
      $('html, body').scrollTop($(document).height());
    });
    $('#3b').on('click', function() {
      $('#3a').attr("disabled",true);
      $('#3ans').text("Good job!");
      counter++;
      finished();
      $('html, body').scrollTop($(document).height());
    });
    $('#4a').on('click', function() {
      $('#4b').attr("disabled",true);
      $('#4ans').text("Good Job!");
      counter++;
      finished();
      $('html, body').scrollTop($(document).height());
    });
    $('#4b').on('click', function() {
      $('#4ans').text("Take another look at the examples in this lesson.");
      $('html, body').scrollTop($(document).height());
    });
    $('#5a').on('click', function() {
      $('#5ans').text("Take another look at the examples in this lesson.");
      $('html, body').scrollTop($(document).height());
    });
    $('#5b').on('click', function() {
      $('#5a').attr("disabled",true);
      $('#5ans').text("Good job!");
      counter++;
      finished();
      $('html, body').scrollTop($(document).height());
    });
    $('#6a').on('click', function() {
      $('#6ans').text("Take another look at the examples in this lesson.");
      $('html, body').scrollTop($(document).height());
    });
    $('#6b').on('click', function() {
      $('#6a').attr("disabled",true);
      $('#6ans').text("Good job!");
      counter++;
      finished();
      $('html, body').scrollTop($(document).height());
    });
  });