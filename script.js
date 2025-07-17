// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form Submission
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const method = this.querySelector('select')?.value || 'email';
        alert(`Thank you! Your ${method === 'gmail' ? 'Gmail' : 'Instagram'} message/request has been sent to Satyam Ediz (me__satyam_). I’ll respond soon.`);
        this.reset();
    });
});

// Dynamic Date & Time
function updateDateTime() {
    const now = new Date();
    const options = { timeZone: 'Asia/Kolkata', hour12: true, hour: '2-digit', minute: '2-digit' };
    const dateTimeString = now.toLocaleString('en-US', options).replace(',', ' -') + ' IST, ' + now.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    document.getElementById('date-time').textContent = dateTimeString;
}
updateDateTime();
setInterval(updateDateTime, 1000);

// Particle Effect
function createParticles() {
    const particles = document.querySelector('.particles');
    for (let i = 0; i < 100; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.left = Math.random() * 100 + 'vw';
        particle.style.top = Math.random() * 100 + 'vh';
        particle.style.animationDelay = Math.random() * 10 + 's';
        particle.style.background = `hsl(${Math.random() * 360}, 70%, 50%)`;
        particles.appendChild(particle);
    }
}
createParticles();