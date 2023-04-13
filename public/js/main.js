const els = {
  welcomeScreen: null,
  chatScreen: null,
};
let nickname = "";

const init = () => {
  els.welcomeScreen = document.querySelector(".welcome-screen");
  els.chatScreen = document.querySelector(".chat-screen");

  const socket = io();

  els.welcomeScreen.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
  });
  els.chatScreen.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
  });

  const wBtn = els.welcomeScreen.querySelector("button");
  wBtn.addEventListener("click", () => {
    const inputEl = els.welcomeScreen.querySelector("input");
    if (inputEl.value.length === 0) {
      return;
    }
    nickname = inputEl.value;

    els.welcomeScreen.style.display = "none";
    els.chatScreen.style.display = "block";
  });
};
window.addEventListener("load", init);
