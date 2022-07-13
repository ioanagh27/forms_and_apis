const url = "http://zoo-animal-api.herokuapp.com/animals/rand";

function displayAnimal (data) {
    //get a ref to the div
    const display = document.getElementById("display");

    //add the animal name to the div
    display.innerHTML = `<h2>${data["name"]} (<em>${data["latin_name"]}</em>)</h2>`

 
}

//make a request using fetch
fetch(url)
    .then((response) => response.json())
    .then((data) => displayAnimal(data))  

