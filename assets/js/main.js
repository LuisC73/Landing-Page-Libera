"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const allSections = [...document.querySelectorAll("section")];
  const loadingScreen = document.querySelector(".loading");

  function handleActiveSection(e) {
    let idBtn = e.target.getAttribute("href").split("#")[1];
    allSections.forEach((el) => el.classList.remove("active"));
    let section = allSections.find((el) => el.id === idBtn);
    section.classList.add("active");
  }

  function hanldeDesactiveSection(e) {
    let idBtn = e.target.dataset.item;
    let section = allSections.find((el) => el.id === idBtn);
    section.classList.remove("active");
  }

  function handleMutedAudio() {
    const audioItem = document.querySelector("audio");
    const audioIcon = document.querySelector(".control-audio > i");

    if (audioItem.paused) {
      audioItem.play();
      audioIcon.classList.remove("bx-volume-mute");
    } else {
      audioItem.pause();
      audioIcon.classList.add("bx-volume-mute");
    }
  }

  function handleActiveMenu() {
    const menuList = document.querySelector(".navbar__list");
    menuList.classList.add("active");
  }
  function handleDesactiveMenu() {
    const menuList = document.querySelector(".navbar__list");
    menuList.classList.remove("active");
  }

  setTimeout(() => loadingScreen.classList.add("hide"), 1500);

  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("navbar__link")) handleActiveSection(e);
    if (e.target.classList.contains("content__button-close")) hanldeDesactiveSection(e);
    if (e.target.classList.contains("control-audio")) handleMutedAudio();
    if (e.target.classList.contains("navbar__toggle")) handleActiveMenu();
    if (e.target.classList.contains("navbar__item-button")) handleDesactiveMenu();
  });
});
