document.addEventListener('DOMContentLoaded', function () {
    const contentElement = document.querySelector('.content');
    const sectionTopElement = document.querySelector('.Section_top');

    // Play the animation
    sectionTopElement.style.animation = 'change 15s ease-in-out';

    // Set a timeout to redirect after the animation duration (in milliseconds)
    setTimeout(function () {
        // Redirect to another page after the animation is complete
        window.location.href = '../Dialogues/Dialogue-2.html';
    }, 12000); // 15,000 milliseconds = 15 seconds
});