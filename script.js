// Labb 3

// Startsida
// - Tre random bilder på hundar
// - Refresh-knapp för bilderna
// - Lista med alla hundraser som går att klicka på och därmed komma till en ny sub-page

// Ras-sida
// - Tre bilder på denna ras
// - Refresh-knapp för bilderna
// - Lista med alla underraser för denna ras som går att klicka på och därmed komma till en ny sub-page.
// - Rubrik som säger vilken ras detta är

// Underras-sida
// - Tre bilder på denna underras
// - Refresh-knapp för bilderna
// - Rubrik som säger vilken ras detta är

// Alla sidor
// - URL-identifier

// RENDER LIST
axios.get('https://dog.ceo/api/breeds/list/all')
    .then((response) => response.data.message)
    .then((data) => renderList(data));




document.querySelector('select').addEventListener('change', getBreeds);

function getBreeds() {
    window.location.hash = this.value;
    let subImage = 'https://dog.ceo/api/breed/' + this.value + '/images/random/3';

    console.log(subImage)
    axios.get(subImage)
        .then((response) => response.data.message)
        .then((data) => renderRandomImg(data))
}

function renderList(data) {
    for (let dogs in data) {
        const select = document.querySelector('select');
        const option = document.createElement('OPTION');

        // ladda in alla hash här
        option.textContent = dogs;
        select.appendChild(option);
    }
}

// RENDER RANDOM IMAGE
getRandomImg();

const refresh = document.querySelector('.material-icons');
refresh.addEventListener('click', getRandomImg)

function getRandomImg() {
    axios.get('https://dog.ceo/api/breeds/image/random/3')
        .then((response) => response.data.message)
        .then((data) => renderRandomImg(data))
}

function renderRandomImg(data) {
    const imgContainer = document.querySelector('.img-container');
    imgContainer.innerHTML = "";

    data.forEach(imgURL => {
        const img = document.createElement('img');
        img.setAttribute('src', imgURL);
        imgContainer.appendChild(img)
    });
}
