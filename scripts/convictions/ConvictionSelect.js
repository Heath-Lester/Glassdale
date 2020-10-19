
import { useConvictions, getConvictions } from "./ConvictionProvider.js"


const crimeFilterHTML = document.querySelector(".filters__crime")


export const ConvictionSelect = () => {
    getConvictions()
    .then( () => {
        const convictions = useConvictions()
        render(convictions)   
    })
    
}

const render = convictionsCollection => {

    crimeFilterHTML.innerHTML = `
        <select class="dropdown" id="crimeSelect">
            <option value="0">Please select a crime...</option>
            ${
                convictionsCollection.map(crime => {
                    const crimeName = crime.name
                    return `<option>${crimeName}</option>`
                })
            }
        </select>
    `
}