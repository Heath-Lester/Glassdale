
import { getWitnesses, useWitnesses } from './witnessDataProvider.js';
import { criminalList } from '../criminals/CriminalList.js';
import { witnessCard } from './witness.js';

const eventHub = document.querySelector(".container")
const witnessElement = document.querySelector(".criminalsContainer")

eventHub.addEventListener("witnessClick", clickEvent => {
    // debugger
        console.log("witness reciever pinged")

        if( witnessElement.childNodes.length > 19) {
        getWitnesses()
            .then(() => {
                let witnessHTMLstring = ``
                const witnesses = useWitnesses()
                for (const individual of witnesses) {
                    witnessHTMLstring += witnessCard(individual)
                }
                render(witnessHTMLstring)
            })
        } else if (witnessElement.childNodes.length < 20) {
            criminalList()
        }
})

const render = (taco) => {
    witnessElement.innerHTML = taco
}