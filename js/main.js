let elImgContainer = document.querySelector('.container');
let elrandomhazil = document.getElementById('randomhazil');
let elHazilOlish = document.getElementById('hazilolish');
elrandomhazil.addEventListener(('click'), () => {
    console.log('salom');
    

    let url='https://official-joke-api.appspot.com/random_joke'
    fetch(url)
.then(response => response.json())
.then(data =>
    elHazilOlish.innerHTML = `
    <p>${data.setup}</p> 
    <h3>${data.punchline}😂</h3>`)


.catch(error => console.error('Fetch error:', error));

})
