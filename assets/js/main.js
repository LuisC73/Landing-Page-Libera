"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const allSections = [...document.querySelectorAll("section")];

  function handleActiveSection(e) {
    let idBtn = e.target.getAttribute("href").split("#")[1];
    allSections.forEach((el) => el.classList.remove("active"));
    let section = allSections.find((el) => el.id === idBtn);
    section.classList.toggle("active");
  }

  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("navbar__link")) handleActiveSection(e);
  });
});
