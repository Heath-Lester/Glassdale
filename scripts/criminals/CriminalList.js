
import {  useCriminals, getCriminals  } from './CriminalProvider.js';
import {  CriminalHTML  } from './Criminal.js';



export const criminalList = () => {
    debugger
    getCriminals()
        .then( () => {
        let CriminalHtmlList = ``
        const criminals = useCriminals()
        for (const criminal of criminals) {
            CriminalHtmlList += CriminalHTML(criminal)
        } 
        document.querySelector(".criminalsContainer").innerHTML += `${CriminalHtmlList}`
        }) 
}

