let userLanguageInput = document.querySelector("#inputLanguageId").value;
let form = document.querySelector("#searchForm");
let imageContainer = document.querySelector("#imageContainer");

const makeTitles = (shows) => {
  for (let result of shows) {
    if (result.image) {
      if (result.language === userLanguageInput) {
        let img = document.createElement("img");
        img.setAttribute("src", result.image.medium);
        imageContainer.append(img);
      }
    }
  }
};

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  for (let i = 0; i < 275; i++) {
    let response = await axios.get(`https://api.tvmaze.com/shows?page=${i}`);
    let shows = response.data;
    makeTitles(shows);
  }
});
