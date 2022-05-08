console.log('client.js sourced');

$(document).ready(onReady);

function onReady() {
    console.log('DOM ready');
    $('#addJokeButton').on('click', addJoke)
    returnJokes();
}

function addJoke() {
    console.log('POST Added Joke');
    let joke = {
        whoseJoke: $('#whoseJokeIn').val(),
        jokeQuestion: $('#questionIn').val(),
        punchLine: $('#punchlineIn').val()
    }
    $.ajax({
        method: 'POST',
        url: '/addJoke',
        data: joke
    }).then(response => {
        console.log('POST Received', response);
        returnJokes();
    }).catch(response => {
        alert('POST Invalid', response);
    })
}

function returnJokes() {
    console.log(`GET Returned Joke`);
    $.ajax({
        method: 'GET',
        url: '/returnJokes'
    }).then(response => {
        console.log('GET Received', response);
        let el = $('#outputDiv');
        el.empty();
        for (i = 0; i < response.length; i++) {
            el.append(`<h3 class="gridItem" id="gridItem${i}">~<u>${response[i].whoseJoke}</u>~<br><br>Q: ${response[i].jokeQuestion}<br>P: ${response[i].punchLine}</h3>`);
        }
    }).catch(response => {
        alert('GET Invalid', response);
    })
}