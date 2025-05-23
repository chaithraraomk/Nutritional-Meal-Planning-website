document.addEventListener("DOMContentLoaded", function () {
    const logoutBtn = document.getElementById("logout-btn");
    const protectedLinks = document.querySelectorAll(".protected-link");
    const getStartedBtn = document.getElementById("getStartedBtn");

    // Check if user is logged in
    function isLoggedIn() {
        return localStorage.getItem("loggedInUser") !== null;
    }

    // Handle protected links properly
    protectedLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            if (isLoggedIn()) {
                window.location.href = this.getAttribute("data-page");
            } else {
                alert("Please log in to access this page.");
                window.location.href = "login.html";
            }
        });
    });

    // Show logout button if logged in
    if (logoutBtn) {
        if (isLoggedIn()) {
            logoutBtn.style.display = "inline-block";
        }
        logoutBtn.addEventListener("click", function () {
            localStorage.removeItem("loggedInUser");
            alert("You have been logged out.");
            window.location.href = "login.html";
        });
    }

    // Change "Get Started" button to meal plans if logged in
    if (isLoggedIn() && getStartedBtn) {
        getStartedBtn.href = "mealplan.html"; // Redirect to meal plans after login
        getStartedBtn.innerText = "Explore Meal Plans";
    }
});
