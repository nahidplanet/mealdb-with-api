const getData = () => {
    fetch('https://randomuser.me/api/?results=5')
        .then(res => res.json())
        .then(data => getRandomData(data))

}
getData();
const getRandomData = data => {
    const singleData = data.results;
    console.log(singleData);
    const getTag = document.getElementById("px");
    singleData.forEach(single => {
        const p = document.createElement("p");
        p.innerText = `
        full Name: ${single.name.first } ${single.name.last}  Gender: ${single.gender}   Email:${single.email} 
        `
        getTag.appendChild(p);
    });
}