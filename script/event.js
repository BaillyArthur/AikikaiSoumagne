import { events } from "../data/events.js";

export function displayEvent() {
    

    const myEvents = events
    const today = new Date();

    const container = document.getElementById("events-container");

    const exist = myEvents.some((event) => {
        const start = new Date(event.startDate);
        return start > today
    })

    if (exist) {
        myEvents.forEach(event => {
            const start = new Date(event.startDate);
            const end = event.endDate ? new Date(event.endDate) : null;

            const dayStart = start.getDate();
            const dayEnd = end ? end.getDate() : null;

            const monthYear = end ? end.toLocaleDateString("fr-FR", { month: "long", year: "numeric" }) : start.toLocaleDateString("fr-FR", { month: "long", year: "numeric" });

            let dateDisplay = "";

            if (end) {
                dateDisplay = `${dayStart} → ${dayEnd}`;
            } else {
                dateDisplay = dayStart;
            }

            if ((end && end > today) || (!end && start > today)) {
                container.innerHTML += `
            <div class="flex flex-row w-full gap-6 md:gap-18 px-8 md:px-32 justify-start">
            <div class="min-w-[30%] max-w-[30%] md:min-w-[20%] md:max-w-[20%]">
            <div class="flex flex-col items-center">
            <p class="md:text-2xl font-bold">${dateDisplay}</p>
                <p class="text-center">${monthYear}</p>
                </div>
                </div>
                <div>
                <p class="text-xl md:text-4xl">${event.title}</p>
                <p>${event.description}</p>
                    </div>
                    </div>
                    <hr class="w-[80%] mx-auto border-gray-300">
                    `;
            }
        });
    } else {
        container.innerHTML += `
            <div class="pl-12 text-2xl">
            Aucun évenement pour le moment
                </div>                    `;

    }

}