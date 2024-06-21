// JavaScript for responsive navigation menu
const sideMenu = document.getElementById("sidemenu");
const openMenuIcon = document.querySelector(".fa-bars");
const closeMenuIcon = document.querySelector(".fa-times");

// Function to open side menu
function openMenu() {
    sideMenu.style.right = "0";
}

// Function to close side menu
function closeMenu() {
    sideMenu.style.right = "-200px";
}

// Event listeners for menu icons
openMenuIcon.addEventListener("click", openMenu);
closeMenuIcon.addEventListener("click", closeMenu);

// JavaScript for changing backgrounds
const changeBackgroundBtn = document.getElementById("change-background-btn");

// Event listener for button click
changeBackgroundBtn.addEventListener("click", function() {
    // Select the elements whose background you want to change
    const headerSection = document.getElementById("header");
    const aboutSection = document.querySelector(".about");
    const resumeSection = document.querySelector(".resume");
    const servicesSection = document.getElementById("services");

    // Example: Change background color of header
    headerSection.style.background = "#f0f0f0";
    headerSection.style.color = "#333"; // Example: Change text color

    // Example: Change background image of about section
    aboutSection.style.backgroundImage = "url('images/light-smoke-ambiance-effect-isolated-footage-034508565_iconl.webp')";
    aboutSection.style.backgroundSize = "cover";
    aboutSection.style.backgroundPosition = "center";

    // Example: Change background color of resume section
    resumeSection.style.backgroundColor = "#d8e1e9";

    // Example: Change background color of services section
    servicesSection.style.backgroundColor = "#f7f7f7";
});
