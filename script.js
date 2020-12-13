/*JSON javascript object notation
represent data based on Javascrit object syntax
send data from server to client
 json exists as a string looks like 
need to convert to java script object to access data
Json string stored n its own file.
its a text file with .json and application/json
We can also convert arrays to/from JSON.
json has only properties no methods and need double quotes*/
//this is the json file going to use in heroes.html
/*'{
  "squadName": "Super hero squad",
  "homeTown": "Metro City",
  "formed": 2016,
  "secretBase": "Super tower",
  "active": true,
  "members": [
    {
      "name": "Molecule Man",
      "age": 29,
      "secretIdentity": "Dan Jukes",
      "powers": [
        "Radiation resistance",
        "Turning tiny",
        "Radiation blast"
      ]
    },
    {
      "name": "Madame Uppercut",
      "age": 39,
      "secretIdentity": "Jane Wilson",
      "powers": [
        "Million tonne punch",
        "Damage resistance",
        "Superhuman reflexes"
      ]
    },
    {
      "name": "Eternal Flame",
      "age": 1000000,
      "secretIdentity": "Unknown",
      "powers": [
        "Immortality",
        "Heat Immunity",
        "Inferno",
        "Teleportation",
        "Interdimensional travel"
      ]
    }
  ]
}'*/
/*in the heroes example is simple.we set XHR request to 
convert JSON response directly to javascript object.
request.responseType = 'json';
sometimes json string need to convert to jSON first
for this two builtin json objects with these methods
parse(): Accepts a JSON string as a parameter, and 
returns the corresponding JavaScript object. 
stringify(): Accepts an object as a parameter, 
and returns the equivalent JSON string.
first example only change is we set XHR to return raw JSON text
then use parse()
**
request.open('GET', requestURL);
request.responseType = 'text'; // now we're getting a string!
request.send();

request.onload = function() {
  const superHeroesText = request.response; // get the string from the response
  const superHeroes = JSON.parse(superHeroesText); // convert it to an object
  populateHeader(superHeroes);
  showHeroes(superHeroes);
}
**stringify()
Here we're creating a JavaScript object, then checking what it contains, then converting it to a JSON string using stringify() — saving the
 return value in a new variable — then checking it again.
 **
 https://jsonformatter.curiousconcept.com/
 . This webpage lets you paste in JSON code and
  will search it for formatting errors.