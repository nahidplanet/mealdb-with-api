const getDataFormApi = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => getData(data))

}
getDataFormApi();

loadContryDetails = name => {
    const url = ` https://restcountries.com/v3.1/name/${name}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayDetails(data[0]))
}

const displayDetails = (contry) => {
    const countryDetails = document.getElementById("country-details");
    countryDetails.innerHTML = `
    <h4>${contry.name.common}</h4>
    <p>${contry.capital}</p>
    <img  src="${contry.flags.png}" alt="">
    `;
    console.log(contry.flags.png);
}
const getData = contries => {
    const getTag = document.getElementById("countries");
    contries.forEach(country => {
        const div = document.createElement("div");
        div.classList.add("countries");
        const name = country.name.common;
        div.innerHTML = `
        <h4>${country.name.common}</h4>
        <p>${country.capital}</p>
        <button onclick="loadContryDetails('${name}')">Contry Details</button>
        `;
        getTag.appendChild(div);


    });
}