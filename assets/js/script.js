function loadAnime() {
  fetch("../../anime.json")
    .then((response) => response.json())
    .then((data) => {
      const result = data.anime;
      for (let i = 0; i < result.length - 1; i++) {
        document.getElementById("data-anime").innerHTML += `
          <div class="card">
          <img src="${result[i].img}" alt="Luffy">
          <div class="card-body">
              <h4>${result[i].name}</h4>
              <p>${result[i].skill}</p>
          </div>
      </div>
      `;
      }
    })
    .catch((error) => {
      console.error(error.message);
    });
}

loadAnime();
