// Hamburger Menu Toggle
function toggleMenu() {
    const navMenu = document.querySelector("nav ul");
    navMenu.classList.toggle("show");
}

// Contact Form Validation
function validateForm(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Check if fields are empty
    if (name === "" || email === "" || message === "") {
        alert("Please fill in all the fields.");
        return false;
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    // Success message
    alert("Thank you for contacting us! We will get back to you soon.");

    // Reset form
    document.getElementById("contactForm").reset();

    return true;
}

// Back to Top Button
window.addEventListener("scroll", function () {
    const topBtn = document.getElementById("topBtn");

    if (topBtn) {
        if (window.scrollY > 300) {
            topBtn.style.display = "block";
        } else {
            topBtn.style.display = "none";
        }
    }
});

// Smooth Scroll to Top
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}