function servicios() {
  async function respuesta() {
    try {
      const response = await fetch(
        "https://cdn.contentful.com/spaces/mj0511fqvjkt/environments/master/entries?access_token=N2SG2zCvUhTEXpF_Ur3OwLJjWnDkjS2WIodo_dyploE"
      );
      const data = await response.json();
      const titulo = data.items[0].fields.tituloPortfolio.slice(0, 4);
      const titulo2 = data.items[0].fields.tituloPortfolio.slice(4);
      const assetIdMaletin = data.items[0].fields.maletinPortfolio.sys.id;
      const imagenDataMaletin = data.includes.Asset.find(
        (asset) => asset.sys.id === assetIdMaletin
      );
      const imageUrlMaletin = `https:${imagenDataMaletin.fields.file.url}`;

      const tituloPersonal = data.items[1].fields.tituloProyectos;
      const textoPersonal = data.items[1].fields.infoPortfolio;
      const UrlPersonal = data.items[1].fields.urlProyecto;
      const assetIdPersonal = data.items[1].fields.imagenPortfolio.sys.id;
      const imagenDataPersonal = data.includes.Asset.find(
        (asset) => asset.sys.id === assetIdPersonal
      );
      const imageUrlPersonal = `https:${imagenDataPersonal.fields.file.url}`;

      const tituloPrecios = data.items[2].fields.tituloProyectos;
      const textoPrecios = data.items[2].fields.infoPortfolio;
      const UrlPrecios = data.items[2].fields.urlProyecto;
      const assetIdPrecios = data.items[2].fields.imagenPortfolio.sys.id;
      const imagenDataPrecios = data.includes.Asset.find(
        (asset) => asset.sys.id === assetIdPrecios
      );
      const imageUrlPrecios = `https:${imagenDataPrecios.fields.file.url}`;

      const tituloFront = data.items[3].fields.tituloProyectos;
      const textoFront = data.items[3].fields.infoPortfolio;
      const UrlFront = data.items[3].fields.urlProyecto;
      const assetIdFront = data.items[3].fields.imagenPortfolio.sys.id;
      const imagenDataFront = data.includes.Asset.find(
        (asset) => asset.sys.id === assetIdFront
      );
      const imageUrlFront = `https:${imagenDataFront.fields.file.url}`;

      document.querySelector(".portfolio").innerHTML = `
      <section class="principal_portfolio">
      <div>
        <span class="tituloPortfolio" >${titulo}</span>
        <span class="tituloPortfolio2" >${titulo2}</span>
      </div>
        <img class="maletin" src="${imageUrlMaletin}" alt="${imagenDataPersonal.fields.title}" />
      </section>
      <section class="portfolio_info">
        <div class="portfolio_card">
        <img class="imagenPortfolio" src="${imageUrlPersonal}" alt="${imagenDataPersonal.fields.title}" />
        <h1 class="tituloPort" >${tituloPersonal}</h1>
        <p class="titulo" >${textoPersonal}</p>
        <a href="${UrlPersonal}">Web</a>
        </div>
        <div class="portfolio_card">
        <img class="imagenPortfolio" src="${imageUrlPrecios}" alt="${imagenDataPrecios.fields.title}" />
        <h1 class="tituloPort" >${tituloPrecios}</h1>
        <p class="titulo" >${textoPrecios}</p>
        <a href="${UrlPrecios}">Web</a>
        </div>
        <div class="portfolio_card">
        <img class="imagenPortfolio" src="${imageUrlFront}" alt="${imagenDataFront.fields.title}" />
        <h1 class="tituloPort" >${tituloFront}</h1>
        <p class="titulo" >${textoFront}</p>
        <a href="${UrlFront}">Web</a>
        </div>
      </section>
      `;
    } catch (error) {
      console.error("Error al obtener los datos:", error);
    }
  }

  respuesta();
}

servicios();
