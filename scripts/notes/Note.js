
export const notesToHTML = (note, criminal) => {
    return `
    <div class="note" id="note--${note.id}: ${note.criminalId}">
        <h4>Note on ${criminal.name}:</h4>
        <dt class"note__text">${note.text}</dt>
    </div>
    `
}