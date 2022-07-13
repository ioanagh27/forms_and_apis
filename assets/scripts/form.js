function addListItem(text) {
    const container = document.getElementById("container");

    //create a li element
    const newElement = document.createElement("li");

    // add the text to it
    newElement.textContent = text;

    //actually add the element to the page
    container.appendChild(newElement);


}

function handleFormSubmit (e) {

    //stop page refreshing
    e.preventDefault();

    //get reference to the form
    const form = e.target;

   addListItem(form.name.value)

}

document.getElementById("identity-form").addEventListener("submit", handleFormSubmit);
