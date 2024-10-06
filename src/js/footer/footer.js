// Создание footer
const footer = document.createElement("footer");
footer.className = "footer";

// Создание контейнера
const container = document.createElement("div");
container.className = "container";

// Создание навигации
const navigation = document.createElement("nav");
navigation.className = "navigation-media-f";

// Создание списка для иконок социальных сетей
const list = document.createElement("ul");
list.className = "list-media-f";

// Создание массива с данными для социальных сетей
const socialLinks = [
  { class: "facebook", href: "https://www.facebook.com/", title: "Facebook", icon: "fa-brands fa-facebook"},
  { class: "x", href: "https://x.com/?lang=ru", title: "X", icon: "fa-brands fa-x-twitter"},
  { class: "google", href: "https://www.google.by/", title: "Google", icon: "fa-brands fa-google"},
  { class: "pinterest", href: "https://ru.pinterest.com/", title: "Pinterest", icon: "fa-brands fa-pinterest"},
  { class: "instagram", href: "https://www.instagram.com/", title: "Instagram", icon: "fa-brands fa-instagram", },
  { class: "stumbleupon", href: "https://www.stumbleupon.com/", title: "Stumbleupon", icon: "fa-brands fa-stumbleupon"},
  { class: "rss", href: "https://rss.com/", title: "RSS", icon: "fa-solid fa-rss"}
];

// Создание элементов списка для каждой социальной сети
socialLinks.forEach(link => {
  const listItem = document.createElement("li");
  listItem.className = `item-foot ${link.class}`;
  listItem.style.setProperty("", link.color);

  const anchor = document.createElement("a");
  anchor.href = link.href;
  anchor.title = link.title;
  anchor.target = "_blank";

  const icon = document.createElement("i");
  icon.className = `${link.icon} item-faf item-${link.class}`;

  anchor.appendChild(icon);
  listItem.appendChild(anchor);
  list.appendChild(listItem);
});

// Добавляем список в навигацию
navigation.appendChild(list);

// Создание текста в footer
const footerTextDiv = document.createElement("div");
footerTextDiv.className = "footer-text";

const footerText = document.createElement("p");
footerText.className = "footer-text_color";
footerText.innerHTML = "2024 Collaboration: Polina, Ilya, Sergey";

footerTextDiv.appendChild(footerText);

// Добавляем все элементы в контейнер
container.appendChild(navigation);
container.appendChild(footerTextDiv);

// Добавляем контейнер в footer
footer.appendChild(container);

// Добавляем footer на страницу
document.body.appendChild(footer);



export { footer};