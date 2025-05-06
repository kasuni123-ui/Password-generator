// DOM Elements
const passwordEl = document.getElementById('password');
const lengthEl = document.getElementById('length');
const lengthValueEl = document.getElementById('lengthValue');
const lowercaseEl = document.getElementById('lowercase');
const uppercaseEl = document.getElementById('uppercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateBtn = document.getElementById('generateBtn');
const copyBtn = document.getElementById('copyBtn');
const resetBtn = document.getElementById('resetBtn');


const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numberChars = '0123456789';
const symbolChars = '!@#$%^&*';


lengthEl.addEventListener('input', () => {
    lengthValueEl.textContent = lengthEl.value;
});


generateBtn.addEventListener('click', () => {
    const length = +lengthEl.value;
    const includeLower = lowercaseEl.checked;
    const includeUpper = uppercaseEl.checked;
    const includeNumbers = numbersEl.checked;
    const includeSymbols = symbolsEl.checked;

    let charset = '';
    if (includeLower) charset += lowercaseChars;
    if (includeUpper) charset += uppercaseChars;
    if (includeNumbers) charset += numberChars;
    if (includeSymbols) charset += symbolChars;

    if (!charset) {
        alert('Please select at least one character type!');
        return;
    }

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }

    passwordEl.value = password;
});

// Copy Password to Clipboard
copyBtn.addEventListener('click', () => {
    if (passwordEl.value) {
        navigator.clipboard.writeText(passwordEl.value).then(() => {
            alert('Password copied to clipboard!');
        });
    } else {
        alert('No password to copy!');
    }
});

// Reset Functionality
resetBtn.addEventListener('click', () => {
    // Reset password field
    passwordEl.value = '';

    // Reset length slider and display
    lengthEl.value = 12;
    lengthValueEl.textContent = 12;

    // Reset checkboxes
    lowercaseEl.checked = true;
    uppercaseEl.checked = false;
    numbersEl.checked = false;
    symbolsEl.checked = false;
});