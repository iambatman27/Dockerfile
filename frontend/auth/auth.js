// For development (when testing locally)
// const API_URL = 'http://localhost:5000/api';

// For production (Netlify frontend)
const API_URL = 'https://infohub-backend-h11h.onrender.com/api';

// Utility functions
function showMessage(message, type = 'error') {
    alert(message);
}

function setLoading(button, isLoading) {
    if (isLoading) {
        button.disabled = true;
        button.textContent = 'Loading...';
    } else {
        button.disabled = false;
        button.textContent = button.getAttribute('data-original-text');
    }
}

// Check if user is logged in
function checkAuth() {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');
    
    if (token && user) {
        updateNavigation(true);
        return JSON.parse(user);
    }
    updateNavigation(false);
    return null;
}

// Update navigation based on auth status
function updateNavigation(isLoggedIn) {
    const nav = document.querySelector('nav');
    if (!nav) return;
    
    if (isLoggedIn) {
        const user = JSON.parse(localStorage.getItem('user'));
        nav.innerHTML = `
            <a href="/">Home</a>
            <a href="/categories">Categories</a>
            <span>Welcome, ${user.fullname}</span>
            <a href="#" onclick="logout()">Logout</a>
        `;
    } else {
        nav.innerHTML = `
            <a href="/">Home</a>
            <a href="/categories">Categories</a>
            <a href="/auth/login.html">Login</a>
            <a href="/auth/signup.html">Sign Up</a>
        `;
    }
}

// Login function
async function loginUser(email, password) {
    const loginBtn = document.querySelector('#loginForm button');
    setLoading(loginBtn, true);
    
    try {
        const response = await fetch(`${API_URL}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password })
        });
        
        const data = await response.json();
        
        if (response.ok) {
            localStorage.setItem('token', data.token);
            localStorage.setItem('user', JSON.stringify(data.user));
            
            showMessage('Login successful!', 'success');
            setTimeout(() => {
                window.location.href = '/';
            }, 1000);
        } else {
            showMessage(data.message || 'Login failed. Please check your credentials.');
        }
    } catch (error) {
        console.error('Login error:', error);
        showMessage('Network error. Please try again.');
    } finally {
        setLoading(loginBtn, false);
    }
}

// Signup function - FIXED: changed 'name' to 'fullname'
async function signupUser(name, email, password) {
    const signupBtn = document.querySelector('#signupForm button');
    setLoading(signupBtn, true);
    
    try {
        const response = await fetch(`${API_URL}/auth/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ fullname: name, email, password }) // FIXED THIS LINE
        });
        
        const data = await response.json();
        
        if (response.ok) {
            showMessage('Account created successfully! Please login.', 'success');
            setTimeout(() => {
                window.location.href = '/auth/login.html';
            }, 1500);
        } else {
            showMessage(data.message || 'Signup failed. Please try again.');
        }
    } catch (error) {
        console.error('Signup error:', error);
        showMessage('Network error. Please try again.');
    } finally {
        setLoading(signupBtn, false);
    }
}

// Logout function
function logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    showMessage('Logged out successfully!', 'success');
    setTimeout(() => {
        window.location.href = '/';
    }, 1000);
}

// Forgot password function
async function forgotPassword(email) {
    const forgotBtn = document.querySelector('#forgotForm button');
    setLoading(forgotBtn, true);
    
    try {
        const response = await fetch(`${API_URL}/auth/forgot-password`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email })
        });
        
        const data = await response.json();
        
        if (response.ok) {
            showMessage('Password reset instructions sent to your email!', 'success');
        } else {
            showMessage(data.message || 'Failed to send reset instructions.');
        }
    } catch (error) {
        console.error('Forgot password error:', error);
        showMessage('Network error. Please try again.');
    } finally {
        setLoading(forgotBtn, false);
    }
}

// Initialize auth when page loads
document.addEventListener('DOMContentLoaded', function() {
    checkAuth();
    
    document.querySelectorAll('button[type="submit"]').forEach(button => {
        button.setAttribute('data-original-text', button.textContent);
    });
    
    // Login form
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            const password = this.querySelector('input[type="password"]').value;
            loginUser(email, password);
        });
    }
    
    // Signup form
    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const password = this.querySelector('input[type="password"]').value;
            signupUser(name, email, password);
        });
    }
    
    // Forgot password form
    const forgotForm = document.getElementById('forgotForm');
    if (forgotForm) {
        forgotForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            forgotPassword(email);
        });
    }
});

// Make functions globally available
window.logout = logout;
window.checkAuth = checkAuth;