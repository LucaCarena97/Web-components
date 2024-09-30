function header() {
  const header = document.querySelector(".nav");
  header.innerHTML = `
    <a href="/Web-components/index.html">
      <img class="logoHeader" src="/Web-components/images/Logo.jpeg" alt="Logo"/>
    </a>

    <div class="menu_a_desk">
      <a href="/Web-components/portfolio.html">Portfolio</a>
      <a href="/Web-components/servicios.html">Servicios</a>
      <a href="/Web-components/contacto.html">Contacto</a>
    </div>
    <button class="menu-button">
      <img class="menu-icon" src="/Web-components/images/menu.png" alt="Menu"/>
    </button>
    <div class="menu-content hidden">
      <button class="close-button">X</button>
      <div class="menu_a">
        <a href="/Web-components/portfolio.html">Portfolio</a>
        <a href="/Web-components/servicios.html">Servicios</a>
        <a href="/Web-components/contacto.html">Contacto</a>
      </div>
    </div>
  `;

  const menuButton = header.querySelector(".menu-button");
  const menuContent = header.querySelector(".menu-content");
  const closeButton = header.querySelector(".close-button");

  menuButton.addEventListener("click", () => {
    menuContent.classList.toggle("hidden");
  });

  closeButton.addEventListener("click", () => {
    menuContent.classList.add("hidden");
  });
}

header();
