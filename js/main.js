document.querySelectorAll('.unit-card').forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('selected');
  });
  card.addEventListener('dblclick', () => {
    const url = card.getAttribute('href') || card.dataset.url;
    if (url) window.location.href = url;
  });
});
