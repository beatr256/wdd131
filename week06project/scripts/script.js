// Greeting on Home Page
function displayGreeting() {
    const greetingEl = document.getElementById('greeting');
    const savedName = localStorage.getItem('userName');
    if (greetingEl && savedName) {
        greetingEl.textContent = `Hello, ${savedName}! Welcome back to the site.`;
    }
}

// Dynamic List Example on Content Page
function populateList() {
    const listEl = document.getElementById('dynamic-list');
    if (listEl) {
        const items = ['JavaScript', 'HTML', 'CSS', 'Responsive Design', 'Accessibility'];
        listEl.innerHTML = items.map(item => `<li>${item}</li>`).join('');
    }
}

// Contact Form Handling with localStorage
function handleForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('nameInput').value.trim();
        const email = document.getElementById('emailInput').value.trim();
        const message = document.getElementById('messageInput').value.trim();

        if (!name || !email || !message) {
            alert('Please fill out all fields.');
            return;
        }

        const submission = { name, email, message };
        let submissions = JSON.parse(localStorage.getItem('submissions')) || [];
        submissions.push(submission);
        localStorage.setItem('submissions', JSON.stringify(submissions));
        localStorage.setItem('userName', name);

        document.getElementById('thankYouMessage').textContent = `Thank you, ${name}, for your message!`;
        form.reset();
        displaySubmissions();
        displayGreeting();
    });
}

// Display saved submissions
function displaySubmissions() {
    const listEl = document.getElementById('submissionList');
    if (!listEl) return;

    const submissions = JSON.parse(localStorage.getItem('submissions')) || [];
    listEl.innerHTML = submissions.map(sub => `<li><strong>${sub.name}</strong>: ${sub.message}</li>`).join('');
}

// Initialize all
document.addEventListener('DOMContentLoaded', () => {
    displayGreeting();
    populateList();
    handleForm();
    displaySubmissions();
});
