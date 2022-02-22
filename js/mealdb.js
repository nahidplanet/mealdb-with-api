

const searchBtn = ()=>{
    const getInputTag = document.getElementById("search-input");
    let getInputValue = getInputTag.value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${getInputValue}`;
    getInputValue = "";
    fetch(url)
    .then(res => res.json())
    .then(data => getData(data.meals) );
}
const getData = data => {
    const cardRow = document.getElementById("card-row");

    data.forEach(meal => {
        console.log(meal);
      const div = document.createElement("div");
      div.classList.add("col");
      div.innerHTML = `
      <div class="card">
      <img src="${meal.strMealThumb}" class="card-img-top" alt="${meal.strTags}" >
      <div class="card-body">
      <h5 class="card-title">${meal.strMeal}</h5>
      <p>
         ${meal.strInstructions.slice(0,200)}
      </p>
      </div>
    </div>
            
      `;
      cardRow.appendChild(div);
   });

}