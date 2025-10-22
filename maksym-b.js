const searchInput = document.getElementById('character-search');
const characters = document.querySelectorAll('.characters-section__characters-card');

searchInput.addEventListener('input', () => {
  const query = searchInput.value.toLowerCase();
  characters.forEach(card => {
    const name = card.querySelector('.characters-section__character-name').textContent.toLowerCase();
    card.style.display = name.includes(query) ? 'flex' : 'none';
  });
});
