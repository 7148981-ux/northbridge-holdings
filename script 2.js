const langBtn = document.getElementById('langBtn');
let currentLang = 'ru';
langBtn.addEventListener('click', () => {
  currentLang = currentLang === 'ru' ? 'en' : 'ru';
  document.documentElement.lang = currentLang;
  document.querySelectorAll('[data-ru][data-en]').forEach(el => {
    el.innerHTML = el.dataset[currentLang];
  });
  langBtn.textContent = currentLang.toUpperCase() + ' / ' + (currentLang === 'ru' ? 'EN' : 'RU');
});
const menuToggle = document.getElementById('menuToggle');
const nav = document.querySelector('.nav');
menuToggle.addEventListener('click', () => nav.classList.toggle('open'));
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));
const form = document.getElementById('inquiryForm');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const message = `NORTHBRIDGE HOLDINGS — обращение\\nИмя: ${data.get('name')}\\nКонтакт: ${data.get('contact')}\\nТема: ${data.get('topic')}\\nСообщение: ${data.get('message')}`;
  const note = document.getElementById('formNote');
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(message).then(() => {
      note.textContent = 'Обращение скопировано. Отправьте его в Telegram холдинга.';
    }).catch(() => {
      window.prompt('Скопируйте текст обращения:', message);
    });
  } else {
    window.prompt('Скопируйте текст обращения:', message);
  }
});
