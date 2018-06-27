function run(film, character) {
    // code goes here
}

function requestData(url) {
    // Make a request for a user with a given ID
    axios
        .get(url)
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        });
}

requestData('https://swapi.co/api/films/');
