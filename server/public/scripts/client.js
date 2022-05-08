console.log('client.js sourced');

$(document).ready(onReady);

function onReady() {
    console.log('DOM ready');
}

function addJoke() {
    console.log(`POST Added Joke`)
}

function returnedJoke() {
    console.log(`GET Returned Joke`)
}
