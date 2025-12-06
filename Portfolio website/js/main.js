// Footer year
document.querySelectorAll('[id^="year"]').forEach(el => el.textContent = new Date().getFullYear());

// Modal for projects
const modal = document.getElementById('projectModal');
if (modal) {
  const title = document.getElementById('modalTitle');
  const desc = document.getElementById('modalDesc');
  document.querySelectorAll('.detail-btn').forEach(btn=>{
    btn.addEventListener('click', () => {
      title.textContent = btn.dataset.title;
      desc.textContent = btn.dataset.desc;
      modal.setAttribute('aria-hidden','false');
    });
  });
  const close = document.getElementById('modalClose');
  if (close) close.addEventListener('click', ()=> modal.setAttribute('aria-hidden','true'));
  modal.addEventListener('click', (e) => { if (e.target===modal) modal.setAttribute('aria-hidden','true'); });
}

// Contact form simulation
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function(e){
    e.preventDefault();
    const name = document.getElementById('cname').value.trim();
    const email = document.getElementById('cemail').value.trim();
    const msg = document.getElementById('message').value.trim();
    const el = document.getElementById('contactMsg');
    if (!name || !email || !msg) {
      el.textContent = 'Please fill all fields.';
      el.className = 'error';
      return;
    }
    el.textContent = 'Message sent (simulation).';
    el.className = '';
    contactForm.reset();
  });
}

// Sign-up/login simple client-side validation (simulation)
const signupForm = document.getElementById('signupForm');
if (signupForm) {
  signupForm.addEventListener('submit', function(e){
    e.preventDefault();
    const name = document.getElementById('suName').value.trim();
    const email = document.getElementById('suEmail').value.trim();
    const pass = document.getElementById('suPass').value;
    const confirm = document.getElementById('suConfirm').value;
    const err = document.getElementById('signupError');

    if (!name) { err.textContent = 'Enter your name'; return; }
    if (!validateEmail(email)) { err.textContent = 'Enter a valid email'; return; }
    if (!checkPassword(pass)) { err.textContent = 'Password must be 8+ chars, include letters and numbers'; return; }
    if (pass !== confirm) { err.textContent = 'Passwords do not match'; return; }

    err.style.color = 'lightgreen';
    err.textContent = 'Account created (simulation).';
    signupForm.reset();
  });
}

const loginForm = document.getElementById('loginForm');
if (loginForm) {
  loginForm.addEventListener('submit', function(e){
    e.preventDefault();
    const email = document.getElementById('liEmail').value.trim();
    const pass = document.getElementById('liPass').value;
    const err = document.getElementById('loginError');
    if (!validateEmail(email)) { err.textContent = 'Enter a valid email'; return; }
    if (!pass) { err.textContent = 'Enter password'; return; }

    err.style.color = 'lightgreen';
    err.textContent = 'Login successful (simulation).';
    loginForm.reset();
  });
}

function validateEmail(email){
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
function checkPassword(p){
  return /^(?=.[A-Za-z])(?=.\d)[A-Za-z\d]{8,}$/.test(p);
}