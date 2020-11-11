
export const facilityHTML = (facilityTacos, criminalTacos) => {
    return `
    <section class="facilityCard" id="facility--${facilityTacos.id}">
        <p class="facilityName">${facilityTacos.facilityname}</P>
            <dt>Security: ${facilityTacos.securityLevel}</dt>
            <dt>Capacity: ${facilityTacos.capacity}</dt>
            <h3>Criminals</h3>
            <ul>${criminalTacos.map(taco => `<li>${taco.name}</li>`).join("")}</ul>
    </section>
    `
}