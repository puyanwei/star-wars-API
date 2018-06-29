# Star Wars Celebration

This was a challenge set working with the [Star Wars API](https://swapi.co/).

You must use the API to fetch data and return two strings after inputting two parameters; film, and character.

For the film, it must return the name of the film, and all the characters in the film in alphabetical order.

eg. "The Force Awakens: Luke Skywalker, Rey...[etc]"

For the character, it must return the films he or she has been in, also in alphabetical order.

eg. "Rey: The Force Awakens, The Last Jedi"

You must complete the function provided;

```
function run(film, character) {
    // code goes here
}
```

### Installation

```
git clone
cd star-wars-API
npm install
node star-wars
```

star-wars.js calls `run('The Force Awakens', 'Luke Skywalker')`

which logs `The Force Awakens: Ackbar, BB8, Captain Phasma, Chewbacca, Finn, Han Solo, Leia Organa, Luke Skywalker, Poe Dameron, R2-D2, Rey; Luke Skywalker: A New Hope, Return of the Jedi, Revenge of the Sith, The Empire Strikes Back, The Force Awakens` to the console.

You can try out other films and characters by changing the parameters and then running `node star-wars`. If they are not found the category will return 'none'.

```
run('Star Trek', 'Picard')
// 'Star Trek: none; Picard: none'
```
