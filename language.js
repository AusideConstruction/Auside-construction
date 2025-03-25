let isEnglish = true;
function toggleLanguage() {
  isEnglish = !isEnglish;
  document.querySelectorAll('[data-en]').forEach(el => {
    el.innerText = isEnglish ? el.getAttribute('data-en') : el.getAttribute('data-zh');
  });
  document.querySelector('.lang-toggle').innerText = isEnglish ? 'CN 中文' : 'EN English';
}
document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.lang-toggle').addEventListener('click', toggleLanguage);
});