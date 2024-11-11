const sobreLink = document.getElementById("sobre-link");
const sobreSection = document.getElementById("sobre-nos");
sobreLink.addEventListener("click", () => {
  sobreSection.scrollIntoView({ behavior: "smooth" });
});

const contatoLink = document.getElementById("contato-link");
const contatoSection = document.getElementById("nosso-contato");
contatoLink.addEventListener("click", () => {
  contatoSection.scrollIntoView({ behavior: "smooth" });
});
