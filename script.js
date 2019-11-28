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

let breedHash = window.location.hash.substr(1);

if (window.location.hash === '') {
    getRandomImg();
} else if (window.location.hash.includes('-')) {
    breedHash = breedHash.split('-')
    getSubImg(breedHash[1])
}
else if (window.location.hash !== '') {
    getBreeds(breedHash);
}

axios.get('https://dog.ceo/api/breeds/list/all')
    .then((response) => response.data.message)
    .then((data) => renderOptions(data))

// RENDER OPTIONS IN SELECT
function renderOptions(data) {
    for (let dogs in data) {
        const select = document.querySelector('#select-breed');
        const option = document.createElement('OPTION');

        option.textContent = dogs;
        select.appendChild(option);
    }
}

document.querySelector('#select-breed').addEventListener('change', function () {
    getBreeds(this.value)
})

// GET DOGS BY BREED
function getBreeds(value) {
    document.querySelector('h3').textContent = value;
    window.location.hash = value;
    let subImage = 'https://dog.ceo/api/breed/' + value + '/images/random/3';

    axios.get(subImage)
        .then((response) => response.data.message)
        .then((data) => renderImg(data))
        .then(renderSubBreed(value))
}

// EVENT ON THE REFRESH ICON, REFRESHES PICS OF DOGS
document.querySelector('.material-icons').addEventListener('click', getRandomImg);

function getRandomImg() {
    if (window.location.hash === '') {
        axios.get('https://dog.ceo/api/breeds/image/random/3')
            .then((response) => response.data.message)
            .then((data) => renderImg(data))
    } else if (window.location.hash.includes('-')) {
        let refreshSubBreed = window.location.hash.split('-')
        getSubImg(refreshSubBreed[1])
    }
    else if (window.location.hash !== '') {
        getBreeds(window.location.hash.substr(1))
    }
}

// RENDER THE IMAGES
function renderImg(data) {
    const imgContainer = document.querySelector('.img-container');
    imgContainer.innerHTML = "";

    data.forEach(imgURL => {
        const img = document.createElement('img');
        img.setAttribute('src', imgURL);
        imgContainer.appendChild(img)
    });
}

// RENDER SUB-BREED
function renderSubBreed(breed) {
    axios.get('https://dog.ceo/api/breed/' + breed + '/list')
        .then((response) => (response.data.message))
        .then((data) => renderSubOptions(data))
    // .then(renderSubImg(breed));
}

// RENDER OPTIONS SUB-BREEDS 
function renderSubOptions(data) {
    const select = document.querySelector('#select-sub-bread');
    select.textContent = '';
    data.forEach(subBreeds => {
        const option = document.createElement('OPTION');
        option.textContent = subBreeds;
        select.appendChild(option);
    });
}

document.querySelector('#select-sub-bread').addEventListener('change', function () {
    getSubImg(this.value)
})

function getSubImg(value) {
    let subBreedHash = window.location.hash + '-' + value;
    subBreedHash = subBreedHash.split('-');
    if (subBreedHash.length >= 3) {
        subBreedHash.splice(1, 1)
    }

    window.location.hash = `${subBreedHash[0]}-${subBreedHash[1]}`
    document.querySelector('h3').textContent = window.location.hash.substr(1);

    axios.get(`https://dog.ceo/api/breed/${subBreedHash[0].substr(1)}/${subBreedHash[1]}/images/random/3`)
        .then((response) => (response.data.message))
        .then((data) => renderImg(data))
}