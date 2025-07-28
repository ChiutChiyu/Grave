import { auth } from './firebase-config.js';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

function showForm(id) {
  document.getElementById('form-login').classList.add('hidden');
  document.getElementById('form-register').classList.add('hidden');
  document.getElementById('form-reset').classList.add('hidden');
  document.getElementById(id).classList.remove('hidden');
}

window.switchToRegister = () => showForm('form-register');
window.switchToLogin = () => showForm('form-login');
window.switchToReset = () => showForm('form-reset');

window.login = async () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  try {
    await signInWithEmailAndPassword(auth, email, password);
    alert("Login berhasil!");
    window.location.href = "feed.html";
  } catch (e) {
    alert("Gagal login: " + e.message);
  }
};

window.register = async () => {
  const email = document.getElementById("reg-email").value;
  const password = document.getElementById("reg-password").value;
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    alert("Registrasi berhasil! Silakan login.");
    switchToLogin();
  } catch (e) {
    alert("Gagal registrasi: " + e.message);
  }
};

window.forgotPassword = async () => {
  const email = document.getElementById("reset-email").value;
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Email reset telah dikirim.");
    switchToLogin();
  } catch (e) {
    alert("Gagal mengirim reset: " + e.message);
  }
};
