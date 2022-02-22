const loadKanyeData = () => {
    fetch('https://api.kanye.rest')
        .then(res => res.json())
        .then(data => getKanyeData(data));
}
loadKanyeData();

const getKanyeData = data => {
    const outputTag = document.getElementById("px");
    outputTag.innerText = data.quote;
}