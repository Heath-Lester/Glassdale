
export const CriminalHTML = (criminal) => {
    return `
    <section class="criminalCard" id="criminal--${criminal.id}">
        <h2 class="criminalName">${criminal.name}</h2>
            <div class="criminalDetails">
                <p>Age: ${criminal.age}</p>
                <p>Crime: ${criminal.conviction}</p>
                <p>Term start: ${new Date(criminal.incarceration.start).toLocaleDateString('en-US')}</p>
                <p>Term end: ${new Date(criminal.incarceration.end).toLocaleDateString('en-US')}</p>
            </div>
    </section>
    `
}