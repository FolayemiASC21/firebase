let usernameElement = document.querySelector("#username");
let messageElement = document.querySelector("#message");
let button = document.querySelector("#submitButton");
// Set database object REFERENCE here:

let database = firebase.database().ref();

/**
 * Updates the database with the username and message.
 */
button.onclick = function updateDB(event){
    event.preventDefault(); //stop refreshing
    let username        = usernameElement.value;
    let message         = messageElement.value;
    messageElement.value  = "";
    console.log(username + " : " + message);
    // Update database here
    let value = {
        Name: username,
        Message: message
    }

    database.push(value)
}

// Set database "child_added" event
database.on("child_added",addMessageToBoard);

function addMessageToBoard(rowData){
let board = document.querySelector(".allMessages")
let row = rowData.val()
let message = document.createElement("p")
message.innerHTML = row.Name + ": " + row.Message
board.appendChild(message)
console.log(row.Name)
console.log(row.Message)
}