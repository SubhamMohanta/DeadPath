var changeCount = 0;

// Function to change the HTML content
function changeContent() {
    var contentDiv = document.getElementById("container");

    if (changeCount === 0) {
        contentDiv.innerHTML = '<h1>Made By</h1><h1>Subham Mohanta</h1>';
    } else {
        // If the content has been changed twice, stop the timer
        clearInterval(contentChangeInterval);
    }
    changeCount++;
}

// Set a timer to change the content every 5 seconds (5000 milliseconds)
var contentChangeInterval = setInterval(changeContent, 8000);

document.body.onkeydown = function (e){
    if(e.key == " " || e.code == "Space" || e.keycode == 32){
        window.open("./index-1.html",  "_self");
    }
}


