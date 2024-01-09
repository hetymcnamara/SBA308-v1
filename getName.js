// API for Fruit Names
async function getName() {
  const FRUIT_URL = "https://www.fruityvice.com/api/fruit/all";
  const response = await axios.get(FRUIT_URL, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    },
  });

  const fruitData = await response.data;
  console.log(fruitData);

  fruitData.sort().forEach((fruit) => {
    const fruitEl = document.createElement("option");
    fruitEl.setAttribute("value", fruit.name);
    fruitEl.innerText = fruit.name;
    document.getElementById("fruitSelect").append(fruitEl);
  });
}

export { getName };
