window.onload = function () {
    var formHandle = document.forms.contactform;
    formHandle.onsubmit = validateform;

    function validateform() {
        var nameValue = formHandle.name;
        console.log(nameValue.value);
        var emailValue = formHandle.email;
        console.log(emailValue.value);
        var message = formHandle.message;
        if (nameValue.value === "") {
            alert("Please enter your Name");
            return false;
        }
        else if (emailValue.value === "") {
            alert("Please enter your Email");
            return false;
        }

        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Test the input against the regular expression
        if (!emailRegex.test(emailValue.value)) {
            alert("Invalid email address! Please enter a valid email.");
            return false;
        }

        if (message.value === "") {
            alert("Please enter your message");
            return false;
        }

        alert("Form submitted successfully!");
    }
 
}

document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();

        var email = document.getElementById('loginEmail').value;
        var password = document.getElementById('loginPassword').value;

        if (!email || !password) {
            document.getElementById('loginMessage').textContent = 'Please enter both email and password.';
            return;
        }
        var emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (emailFormat != email && password.length < 5) {
            document.getElementById('loginMessage').textContent = 'Invalid email or password.';

        } else {
            alert("Login Successful!!");
            window.location.href = 'index.html';
        }
    });

});

document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.getElementById('registerForm');
    registerForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const name = document.getElementById('registerName').value;
        const email = document.getElementById('registerEmail').value;
        const password = document.getElementById('registerPassword').value;
        const address = document.getElementById('registerAddress').value;
        const city = document.getElementById('registerCity').value;
        const province = document.getElementById('registerProvince').value;
        const zipcode = document.getElementById('registerZipcode').value;

        if (!name || !email || !password || !address || !city || !province || !zipcode) {
            document.getElementById('registerMessage').textContent = 'Please fill in all fields.';
            return; 
        }
        const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailFormat.test(email)) {
            document.getElementById('registerMessage').textContent = 'Invalid email format.';
            return; 
        }

        if (password.length < 5) {
            document.getElementById('registerMessage').textContent = 'Password must be at least 5 characters long.';
            return; 
        }
         alert("Registration Successful!!");
         window.location.href = 'index.html';
    });

});

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.nav-menu');
    
    menuToggle.addEventListener('click', function() {
      menu.classList.toggle('active');
    });
  });

  $(document).ready(function() {

  var slideIndex = 0;
  showSlides();
  
  function showSlides() {
      var i;
      var slides = $(".mySlides");
      var dots = $(".dot");
      
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";  
      }
      
      slideIndex++;
      
      if (slideIndex > slides.length) {slideIndex = 1}    
      
      for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
      }
      
      slides[slideIndex-1].style.display = "block";  
      dots[slideIndex-1].className += " active";
      
      setTimeout(showSlides, 2000); // Change image every 2 seconds
  }
});