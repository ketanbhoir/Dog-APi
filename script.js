// 1.responsible 4 fetch list
async function start() {

    const response = await fetch("https://dog.ceo/api/breeds/list/all")
    const data = await response.json()
    createBreedList(data.message)
}

start()
//2. responsible 4 breed list

function createBreedList(breedList) {

    document.getElementById("breed").innerHTML = `  <select onchange="loadByBreed(this.value)">
    <option>Choose a dog breed</option


    ${Object.keys(breedList).map(function (breed) {
        return `<option> ${breed} </option>`
    })}
    </select>
    `
}
// responsible 4 img
async function loadByBreed(breed) {

    if (breed != "choose a dog breed") {
        const response = await fetch(`https://dog.ceo/api/breed/${breed}/images`)
        const data = await response.json()

        createSlideshow(data.message)
    }
}

// respon for loading images

function createSlideshow(images) {

    document.getElementById("slideshow").innerHTML = `
    <div class="slide" style="background-image: url('${images[0]} ')"></div>

    `
}