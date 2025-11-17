document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contato-form");
  const status = document.getElementById("form-status");

  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    status.textContent =
      "Mensagem enviada (simulação). Obrigado por entrar em contato!";

    form.reset();
    setTimeout(() => {
      status.textContent = "";
    }, 4000);
  });
});