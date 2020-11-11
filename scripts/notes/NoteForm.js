
import { saveNote } from './NoteProvider.js'
import { getCriminals, useCriminals } from '../criminals/CriminalProvider.js'


const formElement = document.querySelector(".noteFormContainer")
const eventHub = document.querySelector(".container")


const renderNoteForm = () => {
    getCriminals()
        .then(() => {
            const criminalsArray = useCriminals()
            formElement.innerHTML = `
    <select id="noteForm--criminal" class="criminalSelect">
        <option value="0">Please select a Criminal...</option>
        ${criminalsArray.map(taco => {
                return `<option value="${taco.id}">${taco.name}</option>`
            }).join(" ")
                }
                <textarea placeholder="Enter Note Here..." id="note--text"></textarea>
                <button id="saveNote">Save Note</button>
    </select>
    `
        })
}


// Handle browser-generated click event in component
eventHub.addEventListener("click", clickEvent => {
    // console.log("Click Event")
    // debugger

    if (clickEvent.target.id === "saveNote") {

        const text = document.querySelector("#note--text").value
        const criminalId = document.querySelector(".criminalSelect").value

        // Make a new object representation of a note
        const newNote = {
            // Key/value pairs here
            text,
            criminalId,
        }

        // Change API state and application state
        saveNote(newNote)
    }
})


export const NoteForm = () => {
    renderNoteForm()
}


// \/ \/ \/ OLD VERSION \/ \/ \/
// const render = () => {
//     contentTarget.innerHTML = `
//         <input type="date" id="note--date" name="date">
//         <input type="text" id="note--author" name="author">
//         <input type="text" id="note--suspect" name="suspect">
//         <textarea placeholder="Enter Note Here" id="note--content"></textarea>
//         <button id="saveNote">Save Note</button>
//     `
// }

// const date = document.querySelector("#note--date").value
// const author = document.querySelector("#note--author").value
// const suspect = document.querySelector("#note--suspect").value
// const content = document.querySelector("#note--content").value

// const newNote = {
//     date,
//     author,
//     suspect,
//     content
// }