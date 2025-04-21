let paragraph;

function setup() {
    paragraph = select("#message");
    

}

function keyPressed() {
    if (keyCode === 49){
        paragraph.html("'Dancing Queen' by ABBA is playing. Press another number between 1 and 4 to play a different song or press the enter key to stop the song.");
    }
    if (keyCode === 50){
        paragraph.html("'Purple Rain' by Prince is playing. Press another number between 1 and 4 to play a different song or press the enter key to stop the song.");
    }
    if (keyCode === 51){
        paragraph.html("'I Will Survive' by Gloria Gaynor is playing. Press another number between 1 and 4 to play a different song or press the enter key to stop the song.");
    }
    if (keyCode === 52){
        paragraph.html("'Lucy In the Sky with Diamonds' by The Beatles is playing. Press another number between 1 and 4 to play a different song or press the enter key to stop the song.");
    }

    if (keyCode === ENTER){
        paragraph.html("The music has stopped playing. Press a number between 1 and 4 to play a song.");
    }
}