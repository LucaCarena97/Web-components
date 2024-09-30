function servicios() {
  async function respuesta() {
    try {
      const response = await fetch(
        "https://cdn.contentful.com/spaces/mj0511fqvjkt/environments/master/entries?access_token=N2SG2zCvUhTEXpF_Ur3OwLJjWnDkjS2WIodo_dyploE"
      );
      const data = await response.json();
      const titulo = data.items[4].fields.titulo.slice(0, 4);
      const titulo2 = data.items[4].fields.titulo.slice(4);
      const assetIdMaletin = data.items[4].fields.imagenServicios.sys.id;
      const imagenDataMaletin = data.includes.Asset.find(
        (asset) => asset.sys.id === assetIdMaletin
      );
      const imageUrlMaletin = `https:${imagenDataMaletin.fields.file.url}`;

      const tituloDevWeb = data.items[7].fields.tituloServiciosWeb;
      const textoDevWeb = data.items[7].fields.textoServicios;
      const assetIdDevWeb = data.items[7].fields.imagenServicios.sys.id;
      const imagenDataDevWeb = data.includes.Asset.find(
        (asset) => asset.sys.id === assetIdDevWeb
      );
      const imageUrlDevWeb = `https:${imagenDataDevWeb.fields.file.url}`;

      const tituloAnim = data.items[6].fields.tituloServiciosWeb;
      const textoAnim = data.items[6].fields.textoServicios;
      const assetIdAnim = data.items[6].fields.imagenServicios.sys.id;
      const imagenDataAnim = data.includes.Asset.find(
        (asset) => asset.sys.id === assetIdAnim
      );
      const imageUrlAnim = `https:${imagenDataAnim.fields.file.url}`;

      const tituloApp = data.items[5].fields.tituloServiciosWeb;
      const textoApp = data.items[5].fields.textoServicios;
      const assetIdApp = data.items[5].fields.imagenServicios.sys.id;
      const imagenDataApp = data.includes.Asset.find(
        (asset) => asset.sys.id === assetIdApp
      );
      const imageUrlApp = `https:${imagenDataApp.fields.file.url}`;

      document.querySelector(".servicios").innerHTML = `
      <section class="principal_servicios">
      <div>
      <span class="tituloServicios" >${titulo}</span>
      <span class="tituloServicios2" >${titulo2}</span>
      </div>
        <img class="maletin" src="${imageUrlMaletin}" alt="${imagenDataDevWeb.fields.title}" />
      </section>
      <section class="servicios_info">
        <div class="servicios_card">
        <img class="imagenSer" src="${imageUrlDevWeb}" alt="${imagenDataDevWeb.fields.title}" />
        <h1 class="tituloSer" >${tituloDevWeb}</h1>
        <p class="textoSer" >${textoDevWeb}</p>
        </div>
        <div class="servicios_card">
        <img class="imagenSer" src="${imageUrlAnim}" alt="${imagenDataAnim.fields.title}" />
        <h1 class="tituloSer" >${tituloAnim}</h1>
        <p class="textoSer" >${textoAnim}</p>
        </div>
        <div class="servicios_card">
        <img class="imagenSer" src="${imageUrlApp}" alt="${imagenDataAnim.fields.title}" />
        <h1 class="tituloSer" >${tituloApp}</h1>
        <p class="textoSer" >${textoApp}</p>
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
