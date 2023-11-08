let start = document.getElementById('start');

start.onclick = () => {
    window.open("../game/game.html", "_self")
};

const knickname = document.getElementById('knickname');
// Add a click event listener to the button
start.addEventListener('click', function () {
    const data = knickname.value;

    // Check if the input field is not empty
    if (data.trim() !== '') {
        // Save the data to local storage
        localStorage.setItem('userInput', data);
        alert('Data saved');
    } else {
        alert('Please fill the input fields');
    }
});