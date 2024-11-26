
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


// this java script is for menu list expand and hide 

