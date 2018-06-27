function run(film, character) {
    // code goes here
}

// function requestData() {
//     let data;
//     let request = new XMLHttpRequest();
//     request.open('http', 'https://swapi.co/api/films/', true);
//     request.send(null);
//     console.log(request.status);
//     if (request.status === 200) {
//         console.log(JSON.parse(request.responseText));
//     }
// }

// function requestData() {
//     let theData;
//     fetch('https://swapi.co/api/films/?format=json')
//     .then((response) => response.json())
//     .then((data) => (theData = data))
//     .catch((err) => console.log(err));
//     console.log(theData);
// }
function test() {
    var req = new XMLHttpRequest();
    var URLhost = 'https://swapi.co/api/planets/';

    req.open('GET', URLhost, true);
    req.addEventListener('load', function() {
        if (req.status >= 200 && req.status < 400) {
            var response = JSON.parse(req.responseText);
            console.log(response);
        } else {
            console.log('Error in network request: ' + req.statusText);
        }
    });
    req.send(null);
}

test();
