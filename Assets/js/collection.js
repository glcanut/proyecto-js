let cards = JSON.parse(localStorage.getItem("add")) || [];
let id = 0;

const rendercards = (arrayCards) => {
  let containerCards = document.getElementById("cardContainer");
  containerCards.innerHTML = "";

  arrayCards.forEach((card) => {
    let dataCard = document.createElement("div");
    dataCard.className = "card mb-3";
    dataCard.innerHTML = `
          <div class="row g-0">
              <img src=${card.image} class="img-fluid rounded-start collectionImage" alt="...">
              <div class="card-body d-flex flex-column">
                  <h5 class="card-title">${card.name}</h5>
                  <p class="card-text">Author: ${card.autor}</p>
                  <p class="card-text">Category: ${card.category}</p>
                  <p class="card-text">Category: ${card.description}</p>
                  <div class="collectionIcons d-flex justify-content-end">
                      <i onclick="editCard(${card.id})" class="bi bi-pencil-fill me-2"></i>
                      <i onclick="deleteCard(${card.id})" class="bi bi-trash-fill me-2"></i>
                  </div>
              </div>
          </div>
        `;
    containerCards.appendChild(dataCard);
  });
};

rendercards(cards);

const deleteCard = (id) => {
  Swal.fire({
    title: "Seguro que deseas borrarlo?",
    showDenyButton: true,
    confirmButtonText: "Si",
    denyButtonText: "No",
    icon: "error",
  }).then((res) => {
    if (res.isConfirmed) {
      cards = cards.filter((element) => element.id !== id);
      localStorage.setItem("add", JSON.stringify(cards));
      rendercards(cards);
    } else if (res.isDenied) {
    }
  });
};

const editCard = (id) => {
  card = cards.find((element) => element.id === id);
  localStorage.setItem("edit", JSON.stringify(card));
  window.location.href = "add.html";
};
