const toggleButton = document.getElementById('toggle-button');
const body = document.body;
document.getElementsByTagName("h1")[0].innerHTML="Toggle Light/Dark Mode"

if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    toggleButton.textContent = 'Switch to Light Mode';
} else {
    body.classList.add('light-mode');
    toggleButton.textContent = 'Switch to Dark Mode';
}

// Function toggle light into dark mode and viceversa
toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');

    // Update button text based on current mode
    if (body.classList.contains('dark-mode')) {
        toggleButton.textContent = 'Switch to Light Mode';
        localStorage.setItem('theme', 'dark'); 
    } else {
        toggleButton.textContent = 'Switch to Dark Mode';
        localStorage.setItem('theme', 'light'); 
    }
});
window.alert("welcome to my toggle switch website")

