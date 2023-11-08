document.addEventListener('DOMContentLoaded', function () {
    const sectionTopElement = document.querySelector('#container');

    // Play the animation
    sectionTopElement.style.animation = 'change 15s ease-in-out';

    // Set a timeout to redirect after the animation duration (in milliseconds)
    setTimeout(function () {
        // Redirect to another page after the animation is complete
        window.location.href = '../Questions/Question-1.html';
    }, 3000); // 15,000 milliseconds = 15 seconds
});