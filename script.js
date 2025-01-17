// Lokalna baza podataka (koristi localStorage)
const users = JSON.parse(localStorage.getItem('users')) || [];

// Elementi DOM-a
const loginPage = document.getElementById('login-page');
const registerPage = document.getElementById('register-page');
const dashboardPage = document.getElementById('dashboard-page');
const registerLink = document.getElementById('register-link');
const image = document.getElementById('lines-more');
const popup = document.getElementById('moreinfo');
const popup1 = document.getElementById('pricesshow');
const openprice = document.getElementById('option');
// Prikazivanje stranica
const showPage = (page) => {
    document.querySelectorAll('.page').forEach(p => p.classList.add('hidden'));
    page.classList.remove('hidden');
};

// Login forma
document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        showPage(dashboardPage);
    } else {
        alert('Account does not exist or incorrect password!');
        registerLink.classList.remove('hidden');
    }
});

// Prelazak na Register stranicu
document.getElementById('go-to-register').addEventListener('click', () => {
    showPage(registerPage);
});

// Register forma
document.getElementById('register-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;

    if (users.find(user => user.email === email)) {
        alert('User already exists!');
        return;
    }

    users.push({ email, password });
    localStorage.setItem('users', JSON.stringify(users));
    alert('Registration successful! Please log in.');
    showPage(loginPage);
});

// Logout dugme
document.getElementById('logout-btn').addEventListener('click', () => {
    showPage(loginPage);
});
image.addEventListener('click', () => {
    // Provjeri trenutno stanje diva i prebacuj
    if (popup.style.display === 'none' || popup.style.display === '') {
        popup.style.display = 'block'; // Prikaži div
    } else {
        popup.style.display = 'none'; // Sakrij div
    }
});

openprice.addEventListener('click', () => {
    // Provjeri trenutno stanje diva i prebacuj
    if (popup1.style.display === 'none' || popup1.style.display === '') {
        popup1.style.display = 'block'; // Prikaži div
    } else {
        popup1.style.display = 'none'; // Sakrij div
    }
});

