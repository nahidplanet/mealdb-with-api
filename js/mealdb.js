

const searchBtn = ()=>{
    const getInputTag = document.getElementById("search-input");
    const inputSectionTag = document.getElementById("input-section");
    let getInputValue = getInputTag.value;
    
    if (getInputValue == '') {
     let noResultTag = document.createElement("h4");
      noResultTag.innerHTML = `
      <h4 class='text-center text-danger'> plase search solid food</h4>
      `;
      
      inputSectionTag.appendChild(noResultTag);
    }else{
      const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${getInputValue}`;
      getInputValue = "";
      fetch(url)
      .then(res => res.json())
      .then(data => getData(data.meals) );
    }
    
     
    
    
}
const getData = data => {
    const cardRow = document.getElementById("card-row");
    cardRow.textContent = '';

// const dataLength = data.length ;
// console.log(dataLength);
// if(data.length  == 1){
//   console.log("know data found");
// }
    data.forEach(meal => {
      // console.log(meal);
      const div = document.createElement("div");
      div.classList.add("col");
      div.innerHTML = `
      <div class="card">
      <img onclick="seeDetails('${meal.idMeal}')" height="200" src="${meal.strMealThumb}" class="card-img-top" alt="${meal.strTags}" >
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

const seeDetails = (mealId) =>{
 const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
//  console.log(url);
 fetch(url)
 .then(res =>  res.json())
 .then(data => getMealDetails(data.meals[0]));
}

const getMealDetails = data =>{
const getMealDetailsTag = document.getElementById("single-meal-details");
getMealDetailsTag.innerHTML = `
<div class="card">
            <img height="500"  src="${data.strMealThumb}" class="card-img-top" alt="${data.strTags}">
            <div class="card-body">
              <h5 class="card-title">${data.strMeal}</h5>
              <p class="card-text">${data.strInstructions}</p>
              <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
`
}