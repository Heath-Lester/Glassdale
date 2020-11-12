
import { useCriminals, getCriminals } from './CriminalProvider.js';


const eventHub = document.querySelector(".container")


eventHub.addEventListener("alibiList", alibiObj=> {
    // debugger
    console.log("receiver pinged")
    getCriminals()
        .then( () => {
            const criminalArray = useCriminals()
            const individualCriminal = criminalArray.find((criminalObj) => { 
                return criminalObj.id === alibiObj.detail.criminalID
            })
            render(individualCriminal)
        })
})


const render = (criminal) => {
    // debugger
    const alibiElement = document.querySelector(`#criminal--${criminal.id}`)

    if (alibiElement.childElementCount === 9) {
        alibiElement.innerHTML += `
    <div class="alibi__list--${criminal.id}">
        ${criminal.known_associates.map(alibiObj => {
            return `
                <br>
                <dt>Associate: ${alibiObj.name}</dt>
                <dt>Alibi: ${alibiObj.alibi}</p>
            `
        }).join("")}
    </div>
    `
    } else {
        const listElement = document.querySelector(`.alibi__list--${criminal.id}`)
        listElement.parentNode.removeChild(listElement)
    }
}

// alibiElement.innerHTML += `
// <div class="alibi__list">
//     ${criminal.known_associates.map(alibiObj => {
//         return `
//             <br>
//             <dt>Associate: ${alibiObj.name}</dt>
//             <dt>Alibi: ${alibiObj.alibi}</p>
//         `
//     }).join("")}
// </div>
// `