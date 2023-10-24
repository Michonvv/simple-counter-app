
//animations home page
gsap.from(".logo", { opacity: 0, y: -50, duration: 0.5 });
gsap.from(".counter", { opacity: 0, y: -50, duration: 0.4, delay: 0.4 });
gsap.from(".buttonmain", { opacity: 0, y: 50, duration: 0.4, delay: 0.7 });
gsap.from(".footer1", { opacity: 0, y: 50, duration: 0.3, delay: 0.8});


//animations index page
gsap.from(".muller", { opacity: 0, duration: 1.2, x: -50, scale: 1, delay: 0.9 });
gsap.from(".title", { opacity: 0, duration: 1, y: 500 });

//animations settings page
gsap.from(".login", { opacity: 0, y: -50, duration: 0.2, delay: 0.5 });
gsap.from(".fillin", { opacity: 0, y: -50, duration: 0.2, delay: 0.3});
gsap.from(".submit", { opacity: 0, y: -50, duration: 0.2});

function checkPassword() {
    var passwordInput = document.getElementById("password").value;
    if (passwordInput === "Demo-password") {
        // Correct password, redirect to a different page
        window.location.href = "admin.html";
    } else {
        // Incorrect password, show an error message (optional)
        alert("Wrong password. Please try again.");
    }
}