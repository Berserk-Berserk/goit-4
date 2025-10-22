document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('character-search');
  const characters = document.querySelectorAll('.characters-section__characters-card');
  const filterButtons = document.querySelectorAll('.characters-section__filter-btn');

 // имена
  searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();
    characters.forEach(card => {
      const name = card.querySelector('.characters-section__character-name').textContent.toLowerCase();
      card.style.display = name.includes(query) ? 'flex' : 'none';
    });
  });

  // факультеты
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const house = button.dataset.house;
      characters.forEach(card => {
        if (house === 'all' || card.dataset.house === house) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
});
// переключение языка
const langButton = document.getElementById("lang-toggle");
let currentLang = "ru";

const translations = {
  ru: {
    title: "Гарри Поттер (Вики)",
    searchLabel: "Поиск персонажа",
    searchPlaceholder: "Введите имя персонажа...",
    houses: {
      Gryffindor: "Гриффиндор",
      Slytherin: "Слизерин",
      Ravenclaw: "Когтевран",
      Hufflepuff: "Пуффендуй",
      all: "Все"
    },
    characters: [
      { name: "Гарри Поттер", descr: "Мальчик, который выжил", house: "Гриффиндор", dob: "31-07-1980" },
      { name: "Драко Малфой", descr: "Ученик Слизерина", house: "Слизерин", dob: "05-06-1980" },
      { name: "Луна Лавгуд", descr: "Ученик Когтеврана", house: "Когтевран", dob: "13-02-1981" },
      { name: "Седрик Диггори", descr: "Ученик Пуффендуя", house: "Пуффендуй", dob: "01-09-1977" }
    ]
  },
  en: {
    title: "Harry Potter (Wiki)",
    searchLabel: "Search character",
    searchPlaceholder: "Enter character name...",
    houses: {
      Gryffindor: "Gryffindor",
      Slytherin: "Slytherin",
      Ravenclaw: "Ravenclaw",
      Hufflepuff: "Hufflepuff",
      all: "All"
    },
    characters: [
      { name: "Harry Potter", descr: "The Boy Who Lived", house: "Gryffindor", dob: "31-07-1980" },
      { name: "Draco Malfoy", descr: "Slytherin Student", house: "Slytherin", dob: "05-06-1980" },
      { name: "Luna Lovegood", descr: "Ravenclaw Student", house: "Ravenclaw", dob: "13-02-1981" },
      { name: "Cedric Diggory", descr: "Hufflepuff Student", house: "Hufflepuff", dob: "01-09-1977" }
    ]
  }
};

function setLanguage(lang) {
  // заголовок
  document.querySelector(".characters-section__title").textContent = translations[lang].title;

  // поиск
  document.querySelector(".characters-section__search-label").textContent = translations[lang].searchLabel;
  document.querySelector("#character-search").placeholder = translations[lang].searchPlaceholder;

  // факультеты
  document.querySelector('[data-house="Gryffindor"] span').textContent = translations[lang].houses.Gryffindor;
  document.querySelector('[data-house="Slytherin"] span').textContent = translations[lang].houses.Slytherin;
  document.querySelector('[data-house="Ravenclaw"] span').textContent = translations[lang].houses.Ravenclaw;
  document.querySelector('[data-house="Hufflepuff"] span').textContent = translations[lang].houses.Hufflepuff;
  document.querySelector('[data-house="all"] span').textContent = translations[lang].houses.all;

  // персонажи
  const cards = document.querySelectorAll(".characters-section__characters-card");
  translations[lang].characters.forEach((char, i) => {
    const card = cards[i].querySelector(".characters-section__characters-card-info");
    card.querySelector(".characters-section__character-name").textContent = char.name;
    card.querySelector(".characters-section__character-descr").textContent = char.descr;
    card.querySelector(".characters-section__character-house").textContent = char.house;
    card.querySelector(".characters-section__character-dob").textContent = char.dob;
  });

  // кнопка
  langButton.textContent = lang === "ru" ? "EN" : "RU";
}

langButton.addEventListener("click", () => {
  currentLang = currentLang === "ru" ? "en" : "ru";
  setLanguage(currentLang);
});

setLanguage(currentLang); // старт — русск