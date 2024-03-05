fetch("https://jsonplaceholder.typicode.com/photos")
  .then((res) => res.json())
  .then((data) => {
    // Assuming you have an HTML element with id "output" to display the data
    const outputElement = document.getElementById("output");

    // Manipulate the DOM to display the data
    data.forEach((photo) => {
      const photoElement = document.createElement("img");
      photoElement.src = photo.url;
      outputElement.appendChild(photoElement);
    });
  })
  .catch((error) => console.error("Error fetching data:", error));