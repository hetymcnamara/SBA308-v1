const fruitSelect = document.getElementById("fruitSelect");

async function getPhoto(e) {
  e.preventDefault();
  document.getElementById("photoSpot").innerHTML = "";

  const query = fruitSelect.value;

  const photoReq = await axios.get(
    `https://api.pexels.com/v1/search?query=${query}&per_page=1`,
    {
      headers: {
        Authorization:
          "8k39SXwgrEHkq2Zei7Nu2HCchpgkCw63rPlQApOoFvZrvOpA0eFgbuo5",
      },
    }
  );

  const photo = await photoReq.data;

  const img = document.createElement("img");
  img.classList.add("card");
  img.src = photo.photos[0].src.original;
  document.getElementById("photoSpot").append(img);
}

export { getPhoto };
