
export const notesToHTML = (note) => {
    return `
    <div class="note" id="note--${note.id}">
        <dt class"note__date">Date:${note.date}</dt>
        <dt class"note__author">Author:${note.author}</dt>
        <dt class"note__suspect">Suspect:${note.suspect}</dt>
        <p class"note__content">${note.content}</p>
    </div>
    `
}