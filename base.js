
// this java script is for sidebar hide and show 

document.getElementById('toggle').addEventListener('click', function () {
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.querySelector('.main');

    // Check if sidebar currently has the 'hidden' class
    if (sidebar.classList.contains('hidden')) {
        sidebar.classList.remove('hidden'); // Show sidebar
        mainContent.style.marginLeft = "260px"; // Reset margin for main content
    } else {
        sidebar.classList.add('hidden'); // Hide sidebar
        mainContent.style.marginLeft = "0"; // Remove margin when sidebar is hidden
    }
});

// Get all buttons that can toggle the visibility of the submenus
const buttons = document.querySelectorAll('.sidebar-list-but');

// Loop through each button and add click event listeners
buttons.forEach((button) => {
    button.addEventListener('click', function() {
        const panel = this.nextElementSibling; // Get the submenu

        // Toggle visibility of the submenu
        if (panel.style.display === "block") {
            panel.style.display = "none"; // Hide submenu
        } else {
            panel.style.display = "block"; // Show submenu
        }
    });
});




// this disabled js for 
// document.addEventListener('keydown', function(event) {
    
//     if ((event.ctrlKey || event.metaKey) && event.key === 'f') {
//         event.preventDefault(); 
//         document.getElementById('searchBar').focus();
//     }
// }); 








//  this code for search bar short cut 

// Route mapping based on user input
const routes = {
    'dash': '#',
    'tok': '#',
    'lab': '#',
    'inv': '#',
    'l-inv': '#',
    'quo': '#',
    'stat': '#',
    'exp': '#',
    'fil': '#',
    'comp': '#',
    'in': '#',
    'add cv': '#',
    'det cv': '#',
    'rec': '#',
    'add pro': '#',
    'all pro': '#',
    'det pro': '#',
    'add st': '#',
    'det st': '#',
    'pay rec': '#',
    'tr dv': '#',
    'add inv': '#',
    'det inv': '#',
    'add ind': '#',
    'todo': '#',
    'repo': '#',
    'file':'#',
    'lin': '#',
    'iou': '#',
    'reg': '#',

    // Add more routes as needed
};

// Search and redirect functionality
document.getElementById('searchBar').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        const searchValue = event.target.value.trim().toLowerCase(); // Convert to lowercase for easier matching
        
        // Check if the search value matches any of the routes
        if (routes[searchValue]) {
            // Redirect to the corresponding route
            window.location.href = routes[searchValue];
        } else {
            alert('No matching route found!'); // Optional feedback for the user
        }
    }
});

// Ctrl + F functionality to focus on input
document.addEventListener('keydown', function(event) {
    if ((event.ctrlKey || event.metaKey) && event.key === 'f') {
        event.preventDefault(); // Prevent the default browser search
        document.getElementById('searchBar').focus(); // Focus on the search input
    }
});



//  this code for theme toggle 
// document.addEventListener("DOMContentLoaded", () => {
//     const toggleButton = document.getElementById('toggle-theme');
//     const body = document.body;
//     const header = document.querySelector('.header'); 
//     const main = document.querySelector('.main');

//     // Check for the saved theme in local storage
//     const currentTheme = localStorage.getItem('theme') || 'body';
//     body.classList.add(currentTheme);
//     header.classList.add(currentTheme === 'body' ? 'header' : 'header-dark' ); 
//     main.classList.add(currentTheme === 'body' ? 'main' : 'main-dark');

    
//     toggleButton.addEventListener('click', () => {
//         if (body.classList.contains('body')) {
//             // Toggle to dark theme
//             body.classList.remove('body');
//             body.classList.add('body-dark');
//             header.classList.remove('header');
//             header.classList.add('header-dark'); 
//             main.classList.remove('main');
//             main.classList.add('main-dark');
//             localStorage.setItem('theme', 'body-dark');
//         } else {
//             // Toggle to light theme
//             body.classList.remove('body-dark');
//             body.classList.add('body');
//             header.classList.remove('header-dark');
//             header.classList.add('header'); 
//             main.classList.remove('main-dark');
//             main.classList.add('main');
//             localStorage.setItem('theme', 'body');
//         }
//     });
// });