alert("Welcome to Moonwood Café! Today's note: we're closing early at 5:00 PM due to weather.");

const menuItems = ["Latte", "Espresso", "Green Tea", "Muffin", "Iced Coffee"];
const menuList = document.getElementById("menu-list");

menuItems.forEach((item) => {
  const listItem = document.createElement("li");
  listItem.textContent = item;
  menuList.appendChild(listItem);
});

const button = document.getElementById("show-special");
const display = document.getElementById("daily-special");

button.addEventListener("click", () => {
  const randomItem = menuItems[Math.floor(Math.random() * menuItems.length)];
  display.textContent = `Today's Special: ${randomItem}`;
});

const modeButton = document.getElementById("toggle-mode");
const cafeImage = document.getElementById("cafe-img");

modeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    cafeImage.src = "./cafe-night.svg";
    cafeImage.alt = "Illustration of Moonwood Café at night";
  } else {
    cafeImage.src = "./cafe-day.svg";
    cafeImage.alt = "Illustration of Moonwood Café in daytime";
  }
});

const questions = document.querySelectorAll(".faq-question");

questions.forEach((question) => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;
    const isOpen = answer.classList.contains("show");

    document.querySelectorAll(".faq-answer").forEach((item) => {
      item.classList.remove("show");
    });

    if (!isOpen) {
      answer.classList.add("show");
    }
  });
});
