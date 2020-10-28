$(document).ready(function () {
    $('.confetti').hide()
    $('#done').hide()
    $('#yes').on('change', function() {
      $('.confetti').show()
      $('#answer').text("Yes. Many organizations could fall under the idea of political organizations or interest groups since they tend to aim for political influence and focus on areas of common interest. However, some are more explicitly political, while others have politics as a goal among many.");
      $('#doneH3').text("Good Job! Move on to the next page.");
      $('#done').show();
      $('html, body').scrollTop($(document).height());
    });
    $('#no').on('change', function() {
      $('#answer').text("Sorry that is incorrect. Many organizations could fall under the idea of political organizations or interest groups since they tend to aim for political influence and focus on areas of common interest. However, some are more explicitly political, while others have politics as a goal among many.");
      $('#doneH3').text("Move on to the next page.")
      $('#done').show();
      $('html, body').scrollTop($(document).height());
    })
  });