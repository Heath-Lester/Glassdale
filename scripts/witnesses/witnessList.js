
import { getWitnesses, useWitnesses } from './witnessDataProvider.js';
import { witnessCard } from './witness.js';

const eventHub = document.querySelector(".container")
const witnessElement = document.querySelector(".criminalsContainer")

eventHub.addEventListener("witnessClick", clickEvent => {
    debugger
    // if (clickEvent.target.id === "witnessClick") {
        console.log("witness reciever pinged")
        getWitnesses()
            .then(() => {
                let witnessHTMLstring = ``
                const witnesses = useWitnesses()
                for (const individual of witnesses) {
                    witnessHTMLstring += witnessCard(individual)
                }
                render(witnessHTMLstring)
            })
    // }
})

const render = (taco) => {
    witnessElement.innerHTML = taco
}