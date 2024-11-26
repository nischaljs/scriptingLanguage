document.getElementById("registration-form").addEventListener("submit", (event) => {
    event.preventDefault();
  
    const email = document.getElementById("email").value;
    const age = document.getElementById("age").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
    const zipCode = document.getElementById("zipcode").value;
    const url = document.getElementById("url").value;
    const dob = new Date(document.getElementById("dob").value);
    const file = document.getElementById("file-upload").files[0];
    const country = document.getElementById("country").value;
    const terms = document.getElementById("terms").checked;
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const zipRegex = /^\d{5}(-\d{4})?$/;
    const urlRegex = /^(https?:\/\/)?([\w\d-]+)\.([\w\d-]+)([\w\d.-]*)*\/?$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  
    if (!emailRegex.test(email)) return alert("Invalid email format.");
    if (isNaN(age) || age < 1 || age > 120) return alert("Age must be between 1 and 120.");
    if (!passwordRegex.test(password))
      return alert("Password must be at least 8 characters, with uppercase, lowercase, number, and special character.");
    if (password !== confirmPassword) return alert("Passwords do not match.");
    if (!zipRegex.test(zipCode)) return alert("Invalid ZIP code format.");
    if (!urlRegex.test(url)) return alert("Invalid URL format.");
    if (dob > new Date()) return alert("Date cannot be in the future.");
    if (file.size > 2 * 1024 * 1024) return alert("File size must not exceed 2MB.");
    if (!country) return alert("Please select a country.");
    if (!terms) return alert("You must agree to the terms and conditions.");
  
    alert("Registration successful!");
  });
  