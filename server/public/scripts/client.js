$(document).ready(onReady);

function onReady() {
    console.log('DOM ready');
    $('#addJokeButton').on('click', addJoke)
    returnJokes();
}

function addJoke() {
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
        console.log(`Valid POST Received From Server: ${response}`);
        returnJokes();
    }).catch(response => {
        alert(`Invalid POST Received From Server: ${response}`);
    })
}

function returnJokes() {
    $.ajax({
        method: 'GET',
        url: '/returnJokes'
    }).then(response => {
        console.log(`Valid GET Received From Server: ${response}`);
        let el = $('#outputDiv');
        el.empty();
        for (i = 0; i < response.length; i++) {
            el.append(`<h3 class="gridItem" id="gridItem${i}">~<u>${response[i].whoseJoke}</u>~<br><br>Q: ${response[i].jokeQuestion}<br>P: ${response[i].punchLine}</h3>`);
        }
    }).catch(response => {
        alert(`Invalid GET Received From Server: ${response}`);
    })
}