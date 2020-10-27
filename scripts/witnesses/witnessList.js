
import { getWitnesses, useWitnesses } from './witnessDataProvider.js';
import { witnessCard } from './witness.js';

const eventHub = document.querySelector(".container")
const witnessElement = document.querySelector(".criminalsContainer")

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "witnessClick") {
        getWitnesses()
            .then(() => {
                let witnessHTMLstring = ``
                const witnesses = useWitnesses()
                for (const individual of witnesses) {
                    witnessHTMLstring += witnessCard(individual)
                }
            })
    }
})