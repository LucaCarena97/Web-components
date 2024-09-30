function footer() {
  const footer = document.querySelector(".foot");
  footer.innerHTML = `
<img class="logoFooter" src="./images/Logo.jpeg" alt="Logo"/>
<section class="botones">
  <div>
    <img class="iconos" src="./images/casa.png" alt="home"/>
    <a href="./index.html">Home</a>
  </div>
  <div>
    <img class="iconos" src="./images/user.png" alt="user"/>
    <a href="./servicios.html">Servicios</a>
  </div>
  <div>
    <img class="iconos" src="../images/phone.png" alt="contacto"/>
    <a href="./contacto.html">Contacto</a>
  </div>
</section>

<section class="redes">
  <a href="https://www.linkedin.com/in/luca-carena-463855127/">
  <img class="redes" src="../images/link.png" alt="link"/></a>

  <a href="https://github.com/LucaCarena97">
  <img class="redes" src="../images/git.png" alt="git"/></a>
</section>

<p>©2022 - https://apx.school</p>
  
  `;
}

footer();
