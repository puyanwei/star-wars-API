var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

run('The Force Awakens', 'Luke Skywalker');

function run(film, character) {
    console.log(
        `${getCharactersByFilm(film)}; ${getFilmsByCharacter(character)}`
    );
}

function getCharactersByFilm(film) {
    let apiFilms = requestData(
        `http://challenges.hackajob.co/swapi/api/films/?search=${film}`
    );
    if (apiFilms.count === 1) {
        let charactersArray = [];
        apiFilms.results[0].characters.map((element) => {
            let character = requestData(element);
            charactersArray.push(character.name);
        });
        return convertToString(film, charactersArray);
    } else {
        return convertToString(film, []);
    }
}

function getFilmsByCharacter(character) {
    let apiCharacters = requestData(
        `https://challenges.hackajob.co/swapi/api/people/?search=${character}`
    );
    if (apiCharacters.count === 1) {
        let filmsArray = [];
        apiCharacters.results[0].films.map((element) => {
            let film = requestData(element);
            filmsArray.push(film.title);
        });
        return convertToString(character, filmsArray);
    } else {
        return convertToString(character, []);
    }
}

function convertToString(category, array) {
    let string =
        array.length === 0
            ? `${category}: none`
            : `${category}: ${array.sort().join(', ')}`;
    return string;
}

function requestData(url) {
    let request = new XMLHttpRequest();
    let data;
    request.open('GET', url, false);
    request.send(null);
    if (request.status === 200) {
        data = JSON.parse(request.responseText);
    }
    return data;
}
