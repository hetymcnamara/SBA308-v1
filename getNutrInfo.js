const fruitSelect = document.getElementById("fruitSelect");

async function getNutrInfo(e) {
  const query = fruitSelect.value;

  const nutrientHeader = document.getElementById("nutrients");
  const ul = document.getElementById("nutrientSpot");

  e.preventDefault();
  nutrientHeader.innerText = "Nutrients";
  const api_key = "PhNX9mQllnBDgFFxzLWzdr8w4p7KH2bg4Dk7kckX";
  const fruitTextUrl = `https://api.nal.usda.gov/fdc/v1/foods/search?api_key=${api_key}&query=${query}`;

  const response = await axios.get(fruitTextUrl);
  const data = await response.data;
  ul.innerHTML = "";
  console.log(data);
  const nutrients = data.foods[0].foodNutrients.slice(0, 10);

  nutrients.forEach((fruit) => {
    const li = document.createElement("li");
    li.classList.add(
      "list-group-item",
      colors[Math.floor(Math.random() * colors.length)]
    );
    li.innerText = `${fruit.nutrientName} - ${fruit.nutrientNumber} ${fruit.unitName}`;
    ul.append(li);
  });
}

export { getNutrInfo };
