$(document).ready(function(){
    $('.confetti').hide();
    $('#done').hide();
    let counter = 0
    const finished = ()=>{
        if (counter === 8){
            $('.confetti').show()
            $('#done').show();
            $('html, body').scrollTop($(document).height());
        }
    }
    // def1
    $('#cell1').on('click', function(){
        if ($('#def1').text() == ""){
            $('#def1').text("search far and wide for food");
            counter++
            finished();
        } else {
            $('#def1').empty();
            counter --
        }
    });
    // def2
    $('#cell2').on('click', function(){
        if ($('#def2').text() == ""){
            $('#def2').text("creating spontaneously, using whatever is available");
            counter ++
            finished();
        } else {
            $('#def2').empty();
            counter --
        }
    });
    // def3
    $('#cell3').on('click', function(){
        if ($('#def3').text() == ""){
            $('#def3').text("moving with a wave-like motion");
            counter ++
            finished();
        } else {
            $('#def3').empty();
            counter --
        }
    });
    // def4
    $('#cell4').on('click', function(){
        if ($('#def4').text() == ""){
            $('#def4').text("spooky, unsettling");
            counter ++
            finished();
        } else {
            $('#def4').empty();
            counter --
        }
    });
    // def5
    $('#cell5').on('click', function(){
        if ($('#def5').text() == ""){
            $('#def5').text("twisted or squirmed, usually in pain");
            counter ++
            finished();
        } else {
            $('#def5').empty();
            counter --
        }
    });
    // def6
    $('#cell6').on('click', function(){
        if ($('#def6').text() == ""){
            $('#def6').text("an act or gesture of respect and gratitude");
            counter ++
            finished();
        } else {
            $('#def6').empty();
            counter --
        }
    });
    // def7
    $('#cell7').on('click', function(){
        if ($('#def7').text() == ""){
            $('#def7').text("in a threatening, aggressive way");
            counter ++
            finished();
        } else {
            $('#def7').empty();
            counter --
        }
    });
    // def8
    $('#cell8').on('click', function(){
        if ($('#def8').text() == ""){
            $('#def8').text("a very small bite of something");
            counter ++
            finished();
        } else {
            $('#def8').empty();
            counter --
        }
    });
});