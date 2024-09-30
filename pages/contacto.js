document
  .querySelector("form")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

    const nombre = event.target.querySelector('input[type="text"]').value;
    const email = event.target.querySelector('input[type="email"]').value;
    const mensaje = event.target.querySelector("textarea").value;

    const bodyData = {
      to: email,
      message: `Nombre: ${nombre}\nMensaje: ${mensaje}`,
    };

    try {
      const response = await fetch(
        "https://apx.school/api/utils/email-to-student",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(bodyData),
        }
      );

      if (response.ok) {
        console.log("Correo enviado exitosamente");
      } else {
        console.error("Error al enviar el correo:", response.statusText);
      }
    } catch (error) {
      console.error("Error de red:", error);
    }
  });
