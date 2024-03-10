const dog = {
  name: "Max",
  age: 3,
  isGoodBoy: true,
  greeting() {
    console.log("Hello!");
  },
};

const json = JSON.stringify(dog);
console.log(json);
console.log(JSON);
console.log(JSON.stringify(32));

console.log(JSON.stringify(() => console.log("Yes!")));

console.log(JSON.parse(json));
console.log(JSON.parse("true"));

try {
  const data = JSON.parse("well, this is awkward");
} catch (error) {
  console.log(error);
  console.log(error.name);
  console.log(error.message);
  console.log(error.stack);
}

console.log("");

// Можно одразу писати localStorage, адже за замовчуванням пошук відбувається на об’єкті window.

window.localStorage.setItem("ui-theme", "light");
window.localStorage.setItem("ui-theme", "black");
console.log(localStorage);

console.log("");

const settings = {
  theme: "dark",
  isAuthenticated: true,
  options: [1, 2, 3],
};

localStorage.setItem("settings", JSON.stringify(settings));
// console.log(localStorage);

const savedSettings = localStorage.getItem("settings");
console.log(savedSettings); // A string

const parsedSettings = JSON.parse(savedSettings);
console.log(parsedSettings); // Settings object

localStorage.clear();

console.log("");

const form = document.querySelector(".feedback-form");
const localStorageKey = "goit-example-message";

form.addEventListener("input", (evt) => {
  localStorage.setItem(localStorageKey, evt.target.value);
});

form.addEventListener("submit", (evt) => {
  evt.preventDefault();
  console.log(evt.target.elements.message.value);
  localStorage.removeItem(localStorageKey);
  form.reset();
});

inport;
