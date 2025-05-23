document.addEventListener("DOMContentLoaded", function () {
    // Select all meal plan and recipe links
    const mealLinks = document.querySelectorAll(".meal-plan, .recipe");

    mealLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default navigation

            const userPaid = confirm("Have you completed the payment? Click OK to proceed.");
            if (userPaid) {
                window.location.href = this.href; // Allow navigation if paid
            } else {
                alert("Payment is required to access this content.");
            }
        });
    });
});
