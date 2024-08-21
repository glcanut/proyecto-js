let videogames = [];
const getVideoGames = fetch("https://videogamedb.uk:443/api/videogame");

getVideoGames
  .then((res) => res.json())
  .then((res) => {
    videogames = res;
    rendercards(videogames);
  })
  .catch((error) => console.log(error));

const rendercards = (arrayCards) => {
  let containerCards = document.getElementById("wlCardContainer");
  containerCards.innerHTML = "";

  arrayCards.forEach((card) => {
    let dataCard = document.createElement("div");
    dataCard.className = "card mb-3";
    dataCard.innerHTML = `
          <div class="row g-0">              
          <div class="col">
          <div class="card-body d-flex flex-column">
          <h5 class="card-title">${card.name}</h5>
          <p class="card-text">Release Date: ${card.releaseDate}</p>
          <p class="card-text">Category: ${card.category}</p>
          <p class="card-text">Rating: ${card.rating}</p>
          <div class="collectionIcons d-flex justify-content-end">
          <i onclick="editCard(${card.id})" class="bi bi-pencil-fill me-2"></i>
          <i onclick="deleteCard(${card.id})" class="bi bi-trash-fill me-2"></i>
          </div>
          </div>
          </div>
          </div>
          `;

    containerCards.appendChild(dataCard);
  });
};

rendercards(videogames);

const getVideoGameById = (id) => {
  let videogame = fetch(`https://videogamedb.uk:443/api/videogame/${id}`);
  videogame
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
    })
    .catch((error) => console.log(error));
};

const btnSearchGame = document.getElementById("btn-search");
btnSearchGame.addEventListener("click", () => {
  getVideoGameById(id);
});
