fetch(
  "https://cors-anywhere.herokuapp.com/" +
    "https://fierce-ravine-06007.herokuapp.com/books?format=json"
)
  .then(res => res.json())
  // .then(res => console.log(res));
  .then(res => {
    document.querySelector("h1").textContent = res[1].title;
  });
