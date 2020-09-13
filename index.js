const dogs = [
  { name: "Snickers", age: 2 },
  { name: "hugo", age: 8 },
];

function makeGreen() {
  const p = document.querySelector("p");
  p.style.color = "#BADA55";
  p.style.fontSize = "50px";
}

// Regular
console.log("Hello");
// Interpolated
console.log("Hello I am a %s string!", "😊");
// Styled
console.log(
  "%c I am some great text",
  "font-size:20px; background:white;color:black;"
);
// warning!
console.warn("OH NO!!!!!!!!");
// Error :|
console.error("SHIT💩💩‼");
// Info
console.info("Crocodiles eat 3-4 people per year");
// Testing
const p = document.querySelector("p");
console.assert(p.classList.contains("ouch"), "That is wrong!!!");
// clearing
// console.clear();
// Viewing DOM Elements
console.log(p);
console.dir(p);
// console.clear();
// Grouping together
dogs.forEach((dogs) => {
  console.group(`${dogs.name}`);
  console.log(`Ths is ${dogs.name}`);
  console.log(`${dogs.name} is ${dogs.age} years old.`);
  console.log(`${dogs.name} is ${dogs.age * 7} dog years.`);
  console.groupEnd(`${dogs.name}`);
});

// counting
console.count("BHAVYA");
console.count("AAVYA");
console.count("BHAVYA");
console.count("AAVYA");
console.count("BHAVYA");
console.count("SAHU");
console.count("BHAVYA");
console.count("SAHU");

// timing
console.time("fetching data");
fetch("https://api.github.com/users/Bhavya1703")
  .then((data) => data.json())
  .then((data) => {
    console.timeEnd("Fetching Data");
    console.log(data);
  });

// table
console.table(dogs);
