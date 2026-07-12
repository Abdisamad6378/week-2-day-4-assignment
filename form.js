// Real-Time Form Validation
const form = document.getElementById('registrationForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const passwordInput = document.getElementById('password');
const submitBtn = document.getElementById('submitBtn');

// Validation state
const validation = {
    name: false,
    email: false,
    phone: false,
    password: false
};

// Validation functions
function validateName(value) {
    const errorEl = document.getElementById('nameError');
    const iconEl = document.getElementById('nameIcon');
    
    if (value.length === 0) {
        errorEl.textContent = '';
        iconEl.textContent = '';
        return false;
    }
    
    if (value.length < 2) {
        errorEl.textContent = '❌ Name must be at least 2 characters';
        iconEl.textContent = '✗';
        return false;
    }
    
    errorEl.textContent = '';
    iconEl.textContent = '✓';
    return true;
}

function validateEmail(value) {
    const errorEl = document.getElementById('emailError');
    const iconEl = document.getElementById('emailIcon');
    
    if (value.length === 0) {
        errorEl.textContent = '';
        iconEl.textContent = '';
        return false;
    }
    
    const atIndex = value.indexOf('@');
    const dotAfterAt = value.indexOf('.', atIndex);
    
    if (atIndex === -1 || dotAfterAt === -1 || dotAfterAt < atIndex + 2) {
        errorEl.textContent = '❌ Email must contain @ and at least one . after the @';
        iconEl.textContent = '✗';
        return false;
    }
    
    errorEl.textContent = '';
    iconEl.textContent = '✓';
    return true;
}

function validatePhone(value) {
    const errorEl = document.getElementById('phoneError');
    const iconEl = document.getElementById('phoneIcon');
    
    if (value.length === 0) {
        errorEl.textContent = '';
        iconEl.textContent = '';
        return false;
    }
    
    const phoneRegex = /^[01][0-9]{9}$/;
    
    if (!phoneRegex.test(value)) {
        errorEl.textContent = '❌ Phone must be exactly 10 digits starting with 07 or 01';
        iconEl.textContent = '✗';
        return false;
    }
    
    errorEl.textContent = '';
    iconEl.textContent = '✓';
    return true;
}

function validatePassword(value) {
    const errorEl = document.getElementById('passwordError');
    const iconEl = document.getElementById('passwordIcon');
    
    if (value.length === 0) {
        errorEl.textContent = '';
        iconEl.textContent = '';
        return false;
    }
    
    const hasUppercase = /[A-Z]/.test(value);
    const hasNumber = /[0-9]/.test(value);
    
    if (value.length < 8) {
        errorEl.textContent = '❌ Password must be at least 8 characters';
        iconEl.textContent = '✗';
        return false;
    }
    
    if (!hasUppercase) {
        errorEl.textContent = '❌ Password must contain at least 1 uppercase letter';
        iconEl.textContent = '✗';
        return false;
    }
    
    if (!hasNumber) {
        errorEl.textContent = '❌ Password must contain at least 1 number';
        iconEl.textContent = '✗';
        return false;
    }
    
    errorEl.textContent = '';
    iconEl.textContent = '✓';
    return true;
}

// Real-time validation on input
nameInput.addEventListener('input', function() {
    validation.name = validateName(this.value);
    updateSubmitButton();
    updateFieldStyle(this, validation.name);
});

emailInput.addEventListener('input', function() {
    validation.email = validateEmail(this.value);
    updateSubmitButton();
    updateFieldStyle(this, validation.email);
});

phoneInput.addEventListener('input', function() {
    validation.phone = validatePhone(this.value);
    updateSubmitButton();
    updateFieldStyle(this, validation.phone);
});

passwordInput.addEventListener('input', function() {
    validation.password = validatePassword(this.value);
    updateSubmitButton();
    updateFieldStyle(this, validation.password);
});

// Update field styling
function updateFieldStyle(input, isValid) {
    const wrapper = input.closest('.input-wrapper');
    if (isValid) {
        wrapper.classList.add('valid');
        wrapper.classList.remove('invalid');
    } else if (input.value.length > 0) {
        wrapper.classList.add('invalid');
        wrapper.classList.remove('valid');
    } else {
        wrapper.classList.remove('valid', 'invalid');
    }
}

// Update submit button
function updateSubmitButton() {
    const allValid = validation.name && validation.email && validation.phone && validation.password;
    submitBtn.disabled = !allValid;
}

// Form submission
form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = {
        name: nameInput.value,
        email: emailInput.value,
        phone: phoneInput.value,
        password: passwordInput.value
    };
    
    console.log('Form Data:', formData);
    alert('✅ Form submitted successfully! Check console for data.');
});