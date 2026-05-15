// Функция для подсчёта фотографий
function countPhotos() {
  const photos = document.querySelectorAll('.photo');
  const counter = document.getElementById('count');
  if (counter) {
    counter.textContent = photos.length;
  }
  console.log('Найдено фотографий:', photos.length);
}

// Функция для работы с лайками
function setupLikes() {
  const likeButtons = document.querySelectorAll('.like-btn');
  const totalLikesElement = document.getElementById('total-likes');

  // Перерасчёт общего количества лайков
  function recalcTotalLikes() {
    let total = 0;
    likeButtons.forEach(btn => {
      const likesSpan = btn.querySelector('.likes');
      const likes = likesSpan ? parseInt(likesSpan.textContent) || 0 : 0;
      total += likes;
    });
    if (totalLikesElement) totalLikesElement.textContent = total;
    return total;
  }

  likeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const likesSpan = btn.querySelector('.likes');
      if (!likesSpan) return;

      let currentLikes = parseInt(likesSpan.textContent) || 0;

      if (btn.classList.contains('liked')) {
        // Убираем лайк
        currentLikes = Math.max(currentLikes - 1, 0);
        btn.classList.remove('liked');
      } else {
        // Добавляем лайк
        currentLikes++;
        btn.classList.add('liked');
      }

      // Обновляем счётчик лайков внутри кнопки
      likesSpan.textContent = currentLikes;

      // Обновляем общее число лайков
      recalcTotalLikes();

      // Анимация
      btn.style.transform = 'scale(1.2)';
      setTimeout(() => {
        btn.style.transform = 'scale(1)';
      }, 300);

      console.log('Общее количество лайков:', totalLikes);
    });
  });

  // Изначально считаем все лайки
  recalcTotalLikes();
}

// Обработчик загрузки DOM
document.addEventListener('DOMContentLoaded', () => {
  console.log('Галерея загружена!');
  countPhotos();
  setupLikes();

  // Легкая проверка, что скрипт работает
  setTimeout(() => {
    console.log('✅ JavaScript работает правильно!');
  }, 1000);
});
