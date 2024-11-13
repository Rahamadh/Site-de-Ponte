function scrollToSection(event, targetId) {
  event.preventDefault();
  window.scrollTo({ top: 100, behavior: "smooth" });

  /*
  const targetElement = document.getElementById(targetId);
  targetElement.scrollIntoView({
    behavior: "smooth",
  });

  */
}
/*
const sobreLink = document.getElementById("sobre-link");
sobreLink.addEventListener("click", (event) => {
  scrollToSection(event, "sobre-nos");
});
*/
