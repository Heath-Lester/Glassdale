
import { useCriminals, getCriminals } from './CriminalProvider.js';
import { CriminalHTML } from './Criminal.js';
import {  useConvictions  } from '../convictions/ConvictionProvider.js'

const criminalElement = document.querySelector(".criminalsContainer")
const eventHub = document.querySelector(".container")


export const criminalList = () => {
    // debugger
    getCriminals()
        .then(() => {
            let CriminalHtmlList = ``
            const criminals = useCriminals()
            for (const criminal of criminals) {
                CriminalHtmlList += CriminalHTML(criminal)
            }
            render(CriminalHtmlList)
        })
    
}


const render = criminalListTaco => {
    criminalElement.innerHTML = criminalListTaco
}

eventHub.addEventListener("crimeSelect", event => {
    debugger
    if (event.detail.crimeThatWasChosen !== 0) {

        const appStateCriminals = useCriminals()
        const appStateConvictions = useConvictions()

        const chosenConviction = appStateConvictions.find(certainConviction => {
            return certainConviction.id === event.detail.crimeThatWasChosen
        })

        const filteredCriminals = appStateCriminals.filter(criminalObject => {
            return criminalObject.conviction === chosenConviction.name
        })
        
        let filteredCriminalsHTML = ``
        for (const criminal of filteredCriminals) {
            filteredCriminalsHTML += CriminalHTML(criminal)
            
        }
        console.log(filteredCriminalsHTML)
        render(filteredCriminalsHTML)
        
        // criminalElement.innerHTML(filteredCriminalsHTML)
        // render(filteredCriminals)
    } 
     
})