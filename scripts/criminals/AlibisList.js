
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
    const alibiElement = document.querySelector(`#criminal--${criminal.id}`)

    alibiElement.innerHTML += `
    <div class="alibi__list">
        ${criminal.known_associates.map(alibiObj => {
            return `
                <br>
                <dt>Associate: ${alibiObj.name}</dt>
                <dt>Alibi: ${alibiObj.alibi}</p>
            `
        }).join("")}
    </div>
    `
}