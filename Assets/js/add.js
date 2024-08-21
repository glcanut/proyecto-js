let id = 1;
let cards = JSON.parse(localStorage.getItem("add")) || [];
let cardToEdit = JSON.parse(localStorage.getItem("edit"));

if (cardToEdit) {
  document.getElementById("fName").value = cardToEdit.name;
  document.getElementById("fAuthor").value = cardToEdit.autor;
  document.getElementById("fCategory").value = cardToEdit.category;
  document.getElementById("fDescription").value = cardToEdit.description;

  localStorage.removeItem("edit");
  cards = cards.filter((element) => element.id !== id);
  localStorage.setItem("add", JSON.stringify(cards));
}

const saveData = () => {
  let name = document.getElementById("fName").value;
  let autor = document.getElementById("fAuthor").value;
  let category = document.getElementById("fCategory").value;
  let description = document.getElementById("fDescription").value;
  let image = "https://via.placeholder.com/200";

  if (name === "" || autor === "" || category === "" || description === "") {
    Swal.fire({
      title: "Por favor, complete todos los campos",
      icon: "error",
    });
    return;
  }

  let card = { id, name, autor, category, description, image };

  cards.push(card);

  localStorage.setItem("add", JSON.stringify(cards));

  id++;

  Swal.fire({
    title: "se agrego correctamente",
    icon: "success",
  });

  clearForm();
};

const clearForm = () => {
  document.getElementById("fName").value = "";
  document.getElementById("fAuthor").value = "";
  document.getElementById("fCategory").value = "";
  document.getElementById("fDescription").value = "";
};
