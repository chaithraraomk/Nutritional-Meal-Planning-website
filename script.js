document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", function (e) {
        const targetId = this.getAttribute("href");
        
        // Only prevent default if the link is for an internal section (starts with "#")
        if (targetId.startsWith("#")) {
            e.preventDefault();
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });
            }
        }
    });
});
