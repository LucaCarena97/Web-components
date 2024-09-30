function home() {
  async function respuesta() {
    try {
      const response = await fetch(
        "https://cdn.contentful.com/spaces/mj0511fqvjkt/environments/master/entries?access_token=N2SG2zCvUhTEXpF_Ur3OwLJjWnDkjS2WIodo_dyploE"
      );
      const data = await response.json();
      const titulo = data.items[9].fields.titulo.slice(0, 4);
      const titulo2 = data.items[9].fields.titulo.slice(4);
      const assetId = data.items[9].fields.imagen.sys.id;
      const imagenData = data.includes.Asset.find(
        (asset) => asset.sys.id === assetId
      );
      const imageUrl = `https:${imagenData.fields.file.url}`;

      document.querySelector(".home").innerHTML = `
      <div>
        <h1 class="tituloPrincipal" >${titulo}</h1>
        <h1 class="tituloPrincipal2" >${titulo2}</h1>
      </div>
        <img class="imagenPrincipal" src="${imageUrl}" alt="${imagenData.fields.title}" />
      `;
    } catch (error) {
      console.error("Error al obtener los datos:", error);
    }
  }

  respuesta();
}

home();

function sobreMi() {
  async function respuesta() {
    try {
      const response = await fetch(
        "https://cdn.contentful.com/spaces/mj0511fqvjkt/environments/master/entries?access_token=N2SG2zCvUhTEXpF_Ur3OwLJjWnDkjS2WIodo_dyploE"
      );
      const data = await response.json();
      const tituloSobreMi = data.items[8].fields.tituloSobreMi;
      const textoSobreMi = data.items[8].fields.textoSobreMi;
      const assetId = data.items[8].fields.imagenSobreMi.sys.id;
      const imagenData = data.includes.Asset.find(
        (asset) => asset.sys.id === assetId
      );
      const imageUrl = `https:${imagenData.fields.file.url}`;

      document.querySelector(".presentacion").innerHTML = `
      <section class="presentacion_info">
        <h1 class="tituloMi" >${tituloSobreMi}</h1>
        <p class="textoMi" >${textoSobreMi}</p>
      </section>
        <img class="imagenMi" src="${imageUrl}" alt="${imagenData.fields.title}" />
      `;
    } catch (error) {
      console.error("Error al obtener los datos:", error);
    }
  }

  respuesta();
}

sobreMi();
