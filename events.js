document.addEventListener("DOMContentLoaded", () => {
    // ====================
    // EVENT DATA (MODIFY HERE)
    // ====================
    const events = [
        {
            title: "GameCon 2023",
            date: "November 10-12, 2023",
            location: "Los Angeles, CA",
            description: "Join us for the biggest gaming convention of the year! Meet developers, play demos, and win prizes.",
            image: "Event1.png", // Replace with your image path
            link: "#"
        },
        {
            title: "MineCon Live",
            date: "December 5, 2023",
            location: "Online",
            description: "Tune in for the latest updates on Minecraft, exclusive reveals, and community showcases.",
            image: "Event2.png", // Replace with your image path
            link: "#"
        },
        {
            title: "Indie Game Fest",
            date: "January 20-22, 2024",
            location: "San Francisco, CA",
            description: "Celebrate indie games and meet the creators behind your favorite titles.",
            image: "Event3.png", // Replace with your image path
            link: "#"
        }
    ];

    // ====================
    // GENERATE EVENTS
    // ====================
    const eventsContainer = document.getElementById("events-container");
    events.forEach((event, index) => {
        const eventElement = document.createElement("div");
        eventElement.className = "event-item";

        eventElement.innerHTML = `
            <h3>${event.title}</h3>
            <div class="event-details">
                <p><strong>Date:</strong> ${event.date}</p>
                <p><strong>Location:</strong> ${event.location}</p>
                <p>${event.description}</p>
            </div>
            <div class="event-image-container">
                <img src="${event.image}" alt="${event.title}">
            </div>
            <button class="register-button" onclick="window.location.href='${event.link}'">Register Now</button>
        `;
        eventsContainer.appendChild(eventElement);
    });
});