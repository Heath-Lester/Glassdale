
import {  useOfficers, getOfficers  } from './OfficerProvider.js';
import {  OfficerHTML  } from './Officer.js';



export const officerList = () => {
    // debugger
    getOfficers()
        .then( () => {
        let OfficerHtmlList = ``
        const officers = useOfficers()
        for (const officer of officers) {
            OfficerHtmlList += OfficerHTML(officer)
        } 
        document.querySelector(".officersContainer").innerHTML += `${OfficerHtmlList}`
        }) 
}