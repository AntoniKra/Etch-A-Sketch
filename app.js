const button = document.querySelector("button");
const section = document.querySelector("section");
const main = document.querySelector("main");
const container = document.querySelector(".container");

const generate = () => {
  for (let i = 0; i < 2500; i++) {
    const div = document.createElement("div");
    div.classList.add("square");
    const helpDiv = document.createElement("div");
    helpDiv.classList.add("helpDiv");
    div.appendChild(helpDiv);
    container.appendChild(div);
  }
};

button.addEventListener("click", () => {
  section.classList.add("hidden");
  main.classList.remove("hidden");
  generate();
});
