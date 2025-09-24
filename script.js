const webhookURL =
  "https://surcocode.app.n8n.cloud/webhook-test/formulario-registro"; // ← reemplaza con tu URL

document
  .getElementById("formularioContacto")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const payload = {
      nombre: document.getElementById("nombre").value,
      email: document.getElementById("email").value,
      telefono: document.getElementById("telefono").value,
      empresa: document.getElementById("empresa").value,
    };

    fetch(webhookURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((response) => {
        if (response.ok) {
          alert("Formulario enviado correctamente.");
        } else {
          alert("Error al enviar el formulario.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Error de conexión.");
      });
  });
