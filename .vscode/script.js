let allMenu = [];
fetch("https://wpu-cafe.vercel.app/api/menu")
  .then((res) => res.json())
  .then((data) => {
    allMenu = data.data;
    console.log(allMenu);
    displayMenu(allMenu);
  });

function displayMenu(menu) {
  const menuList = document.querySelector(".menu-grid");
  menuList.innerHTML = "";

  menu.forEach((item) => {
    const card = document.createElement("div");
    card.classList.add("menu-card");

    const image = document.createElement("img");
    image.src = item.image_url;
    image.alt = item.name;
    card.appendChild(image);

    const name = document.createElement("h2");
    name.textContent = item.name;
    card.appendChild(name);

    menuList.appendChild(card);
  });
}
