

import { useCriminals, getCriminals } from './CriminalProvider.js';
import { CriminalHTML } from './Criminal.js';
import {  useConvictions  } from '../convictions/ConvictionProvider.js'
import {  useOfficers  } from '../officers/OfficerProvider.js';

const eventHub = document.querySelector(".container")
const criminalElement = document.querySelector(".criminalsContainer")


export const criminalList = () => {
    // debugger
    getCriminals()
        .then( () => {
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
    // debugger
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
        // console.log(filteredCriminalsHTML)
        render(filteredCriminalsHTML)
        
    } else if (event.detail.crimeThatWasChosen === 0) {

        render(criminalList())        
    }
     
})

eventHub.addEventListener("officerSelect", event => {
    // debugger
    if (event.detail.officerThatWasChosen !== 0) {

        const appStateCriminals = useCriminals()
        const appStateOfficers = useOfficers()

        const chosenOfficer = appStateOfficers.find(certainOfficer => {
            return certainOfficer.id === event.detail.officerThatWasChosen
        })

        const filteredCriminals = appStateCriminals.filter(criminalObject => {
            return criminalObject.arrestingOfficer === chosenOfficer.name
        })
        
        let filteredCriminalsHTML = ``
        for (const criminal of filteredCriminals) {
            filteredCriminalsHTML += CriminalHTML(criminal)
            
        }
        // console.log(filteredCriminalsHTML)
        render(filteredCriminalsHTML)
        
    } else {
        render(criminalList())
    }
     
})

