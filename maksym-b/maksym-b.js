const btnHouses = document.querySelector(".characters-section__filter");
const charactersSectionCharacters = document.querySelector(
  ".characters-section__characters"
);
const url = "https://hp-api.onrender.com/api/characters/house/slytherin";
btnHouses.addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button) return;
  if (button.dataset.house !== "slytherin") return;
  getData();
});

async function getData() {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const result = await response.json();
    // const getUsers = await result.filter((user, idx) => idx <= 7);
    setUsers(result);
  } catch (error) {
    console.error(error);
  }
}

function setUsers(data) {
  charactersSectionCharacters.innerHTML = "";

  data.forEach(({ name, alternate_names, house, dateOfBirth, image }) => {
    let userItem = `
            <div class="characters-section__characters-card">
							${
                image
                  ? `<img src="${image}" alt="${name}" class="characters-section__characters-card-img" />`
                  : `<img src="https://placehold.co/400" alt="placeholder" class="characters-section__characters-card-img"  />`
              }
							<div class="characters-section__characters-card-info">
								<p class="characters-section__character-name">${name}</p>
								<p class="characters-section__character-descr">
									${alternate_names.length === 0 ? "Не має другого імені" : alternate_names[0]}
								</p>
								<p class="characters-section__character-house">${house}</p>
								<p class="characters-section__character-dob">${
                  dateOfBirth === null ? "Невідомо" : dateOfBirth
                }</p>
								<a href="#" class="characters-section__character-moreinfo">
									<p class="characters-section__character-moreinfo-link">
										Більше інформації
									</p>
									<img
										src="./images/ellipse .svg"
										alt=""
										class="characters-section__character-moreinfo-ellipse"
									/>
									<img
										src="./images/arrow.svg"
										alt=""
										class="characters-section__character-moreinfo-arrow"
									/>


								</a>
							</div>
							<span class="characters-section__characters-gradient"></span>
						</div>
        `;

    charactersSectionCharacters.insertAdjacentHTML("beforeend", userItem);
  });
}

const filterContainer = document.querySelector(".characters-section__filter");
const allFilterBtns = document.querySelectorAll(
  ".characters-section__filter-btn"
);
function handleActiveButton(event) {
  const clickedButton = event.target.closest("button");
  if (!clickedButton) {
    return;
  }

  allFilterBtns.forEach((btn) => {
    btn.classList.remove("active");
    const span = btn.querySelector(".characters-section__btns-text");
    if (span) {
      span.classList.remove("active-span");
    }
  });

  clickedButton.classList.add("active");
  const clickedSpan = clickedButton.querySelector(".characters-section__btns-text");
  if (clickedSpan) {
    clickedSpan.classList.add("active-span");
  }
}

filterContainer.addEventListener("click", handleActiveButton);
