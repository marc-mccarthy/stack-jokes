## Node Express jQuery Code Challenge

To Install after cloning, run `npm install`


### Objectives
- Send requests to the server from client using an AJAX request(s),
- Display response on the DOM,
- Demonstrate the separation of logic between the client and the server.

### The Joke Book

Your client has asked you to create a Joke Book application. The server will contain all the current joke data and you have been provided with the initial server file (`server/server.js`).

Your job will be to build up the server around the data in the `server/server.js` file, display the current jokes to the DOM, and add the ability for users to add their own jokes and display these too.

##### How the joke data is structured
You can view the full object in ```server/server.js```. The data structure is an array of objects. These objects have three properties: whoseJoke, jokeQuestion, and punchLine.

```JavaScript
let jokes = [
  {
    whoseJoke: "Luke",
    jokeQuestion: "Two fish are in a tank. What did one fish say to the other?",
    punchLine: "Do you know how to drive this thing?"
  }
];
```

To get started, fork this repo and clone it to your machine.

Overview
--------
* when the app is loaded, all jokes should be displayed on the DOM below the inputs
* the user should be able to add jokes using the input form
* after a joke is added, the jokes displayed on the DOM should reflect the new data

Remember to work in small increments and test often. If you want to take things further, first push the working basic mode to your github and update it after.
