function addListItem(text) {
    const container = document.getElementById("container");

    //create a li element
    const newElement = document.createElement("li");

    // add the text to it
    newElement.textContent = text;

    //actually add the element to the page
    container.appendChild(newElement);


}

//listen to the button and wait for click
document.getElementById("first-button").addEventListener("click", (e) => {

    //Get the text box value
    const text = document.querySelector("#input-box").value;

    addListItem(text);
})


    

