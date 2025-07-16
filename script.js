$(document).ready(function () {
  // Show/hide password toggle
  $('#togglePassword').click(function () {
    const passwordInput = $('#password');
    const type = passwordInput.attr('type') === 'password' ? 'text' : 'password';
    passwordInput.attr('type', type);
    $(this).text(type === 'password' ? 'Show' : 'Hide');
  });

  // Form submission handler
  $('#registrationForm').on('submit', function (e) {
    e.preventDefault();

    // Get input values
    const name = $('#name').val().trim();
    const email = $('#email').val().trim();
    const phone = $('#phone').val().trim();
    const password = $('#password').val();

    let errorMessage = '';

    // Validation rules
    if (!name || !email || !phone || !password) {
      errorMessage = 'All fields are required.';
    } else if (!isValidEmail(email)) {
      errorMessage = 'Invalid email format.';
    } else if (!/^\d{10}$/.test(phone)) {
      errorMessage = 'Phone number must be 10 digits.';
    } else if (!isValidPassword(password)) {
      errorMessage = 'Password must be at least 8 characters and include uppercase, lowercase, and numbers.';
    }

    if (errorMessage) {
      showMessage(errorMessage, 'error');
    } else {
      showMessage('Form submitted successfully!', 'success');
      this.reset(); // Optional: clear form after success
    }
  });

  // Helper functions
  function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  function isValidPassword(password) {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(password);
  }

  function showMessage(msg, type) {
    const messageBox = $('#message');
    messageBox.removeClass('error success').addClass(type).text(msg).fadeIn();
  }
});
