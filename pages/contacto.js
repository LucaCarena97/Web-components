const form = document.getElementById("contactForm");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("text").value;

  const body = {
    to: "lucacarena98@gmail.com",
    message: `Nombre: ${name}\nEmail: ${email}\nMensaje: ${message}`,
  };

  try {
    const response = await fetch(
      "https://apx.school/api/utils/email-to-student",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );

    if (response.ok) {
      alert("¡Mensaje enviado con éxito!");
      form.reset();
    } else {
      alert("Error al enviar el mensaje. Intenta nuevamente.");
    }
  } catch (error) {
    console.error("Error:", error);
    alert("Ocurrió un error al enviar el mensaje. Intenta nuevamente.");
  }
});
