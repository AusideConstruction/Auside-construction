let isEnglish = true;
function toggleLang() {
  isEnglish = !isEnglish;
  document.querySelectorAll("[data-en]").forEach(el => {
    el.textContent = isEnglish ? el.getAttribute("data-en") : el.getAttribute("data-zh");
  });
  document.querySelector(".lang-toggle").textContent = isEnglish ? "CN 中文" : "EN English";
}
window.addEventListener("DOMContentLoaded", toggleLang);