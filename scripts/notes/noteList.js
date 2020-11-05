
import { getCriminals, useCriminals } from "../criminals/CriminalProvider.js"
import { getNotes, useNotes } from "./NoteProvider.js"
import { notesToHTML } from "./Note.js"


const eventHub = document.querySelector(".container")
const notesElement = document.querySelector(".notesContainer")



export const notesList = () => {
    // debugger
    getCriminals()
        .then(() => getNotes())
        .then(() => {
            let noteHtmlList = ``
            const notes = useNotes()
            const criminalsArray = useCriminals()
            // debugger
                for (const note of notes) {
                    let criminal = criminalsArray.find(criminal => { return criminal.id === parseInt(note.criminalId)})
                    noteHtmlList += notesToHTML(note, criminal)
                }
                render(noteHtmlList)
            }
        )

}



eventHub.addEventListener("noteStateChanged", event => {
    console.log("Render Listener Pinged")
    debugger
    let noteHtmlList = ``
    const updatedNotes = useNotes()
    const criminalsArray = useCriminals()
    for (const note of updatedNotes) {
        let criminal = criminalsArray.find(criminal => { return criminal.id === parseInt(note.criminalId)})
        noteHtmlList += notesToHTML(note, criminal)
        render(noteHtmlList)
    }
})


const render = string => {
    notesElement.innerHTML = `<label class="formLabel">Notes</label>${string}`
}


// \/ \/ \/ OLD VERSION \/ \/ \/

// eventHub.addEventListener("noteStateChanged", event => {
//     console.log("Render Listener Pinged")
//     // debugger
//     const updatedNotes = useNotes()
//     let noteHtmlList = ``
//     for (const note of updatedNotes) {
//         noteHtmlList += notesToHTML(note)
//         render(noteHtmlList)
//     }
// })


// export const notesList = () => {
//     // debugger
//     getNotes()
//         .then(() => {
//             let noteHtmlList = ``
//             const notes = useNotes()
//             for (const note of notes) {
//                 noteHtmlList += notesToHTML(note)
//             }
//             render(noteHtmlList)
//         })

// }