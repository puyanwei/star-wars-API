function run(film, character) {
    // code goes here
    charactersOfFilm(film);
}

function charactersOfFilm(film) {
    let characters = [];
    let title;
    requestData('https://swapi.co/api/films/').then((response) => {
        response.data.results.map((element, index) => {
            if (element.title === film) {
                element.characters.map((element) => {
                    requestData(element).then((response) => {
                        console.log(
                            'response ' + JSON.stringify(response.data.name)
                        );
                    });
                    // characters.push(requestData(element.characters));
                });
            }
        });
    });
}

function requestData(url) {
    return axios
        .get(url)
        .then((response) => {
            return response;
        })
        .catch((error) => {
            console.log(error);
        });
}

charactersOfFilm('Return of the Jedi');
