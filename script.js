$(document).ready(function () {
    let sentences = ['ten ate neite ate nee enet ite ate inet ent eate', 'Too ato too nOt enot one totA not anot tOO aNot', 'oat itain oat tain nate eate tea anne inant nean', 'itant eate anot eat nato inate eat anot tain eat', 'nee ene ate ite tent tiet ent ine ene ete ene ate'];
    let sentenceDisplay = $("#sentence")
    let targetLetter = $("#target-letter")
    let sentenceCounter = 0
    let letterCounter = 0
    let currentSentence = sentences[0];
    var currentLetter = currentSentence.charAt(0);


    sentenceDisplay.text(sentences[sentenceCounter])

    $(document).keydown(function (e) {
        //console.log(sentences[sentenceCounter][letterCounter = letterCounter + 1]);//use w/if to move to next letter
        if (e.key === sentences[sentenceCounter][letterCounter]) {
            letterCounter++
            console.log(letterCounter)
            targetLetter.empty()
            targetLetter.text(sentences[sentenceCounter][letterCounter])
            if (
                sentences[sentenceCounter][letterCounter]=== " "
            ){
                targetLetter.empty()
                targetLetter.text("space")
            }
        } else {
            console.log('wrongKey')
        }
        let asciiCode = e.key.charCodeAt(0)
        if (e.which == 16) {
            $('#keyboard-upper-container').show();
            $('#keyboard-lower-container').hide();
        }
        $("#" + asciiCode).css('background-color', 'yellow');

    });

    $(document).keyup(function (e) {  //returns to lowercase when shift released
        let asciiCode = e.key.charCodeAt(0)
        if (e.which == 16) {
            $('#keyboard-upper-container').hide();
            $('#keyboard-lower-container').show();
        }
        if (letterCounter===sentences[sentenceCounter].length){
            sentenceCounter++
            sentenceDisplay.empty()
            sentenceDisplay.text(sentences[sentenceCounter])
        }
        $('#' + asciiCode).css('background-color', 'whiteSmoke'); //returns key back to normal color when keyup
    });

    $('#keyboard-lower-container').show();//overrides css hide lowercase
    $('#sentence').append(sentences[sentenceCounter]);
    $('#target-letter').append(sentences[sentenceCounter][letterCounter]);


})