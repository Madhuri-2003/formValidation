$(document).ready(function () {
  // Show/hide password toggle
  $('#togglePassword').click(function () {
    const passwordInput = $('#password');
    const type = passwordInput.attr('type') === 'password' ? 'text' : 'password';
    passwordInput.attr('type', type);
    $(this).text(type === 'password' ? 'Show' : 'Hide');
  });

  // Restrict phone input to digits only and max 10 digits
  $('#phone').on('input', function () {
    this.value = this.value.replace(/\D/g, '').slice(0, 10);
  });

  // Form submission handler
  $('#registrationForm').on('submit', function (e) {
    e.preventDefault();

    const name = $('#name').val().trim();
    const email = $('#email').val().trim();
    const phone = $('#phone').val().trim();
    const password = $('#password').val();
    const confirmPassword = $('#confirmPassword').val();

    let errorMessage = '';

    // Validation rules
    if (!name || !email || !phone || !password || !confirmPassword) {
      errorMessage = 'All fields are required.';
    } else if (!isValidEmail(email)) {
      errorMessage = 'Invalid email format.';
    } else if (!/^\d{10}$/.test(phone)) {
      errorMessage = 'Phone number must be exactly 10 digits.';
    } else if (!isValidPassword(password)) {
      errorMessage = 'Password must be at least 8 characters and include uppercase, lowercase, and numbers.';
    } else if (password !== confirmPassword) {
      errorMessage = 'Passwords do not match.';
    }

    if (errorMessage) {
      showMessage(errorMessage, 'error');
    } else {
      showMessage('Form submitted successfully!', 'success');
      this.reset(); // clear form
    }
  });

  // Helper: Email format check
  function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  // Helper: Password complexity check
  function isValidPassword(password) {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(password);
  }

  // Display message box
  function showMessage(msg, type) {
    const messageBox = $('#message');
    messageBox
      .removeClass('error success')
      .addClass(type)
      .text(msg)
      .fadeIn()
      .delay(3000)
      .fadeOut();
  }
});
