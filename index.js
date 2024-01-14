document
  .getElementById("searchKitty")
  .addEventListener("click", async function () {
    try {
      const response = await fetch(
        "https://api.thecatapi.com/v1/images/search"
      );
      const data = await response.json();

      if (Array.isArray(data) && data.length > 0 && data[0].url) {
        const imgElement = document.createElement("img");

        imgElement.src = data[0].url;
        imgElement.setAttribute("data-test", "img-kitty");

        document.body.appendChild(imgElement);

        imgElement.style.display = "block";
      } else {
        console.error("Error API.");
      }
    } catch (error) {
      console.error("Error kot", error);
    }
  });
