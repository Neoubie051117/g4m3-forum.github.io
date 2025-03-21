document.addEventListener("DOMContentLoaded", () => {
    // ====================
    // ICON MAPPING (MODIFY HERE)
    // ====================
    const iconMap = {
        reddit: "reddit.svg",
        discord: "discord.svg"
    };

    // ====================
    // COMMUNITY DATA (MODIFY HERE)
    // ====================
    const communities = [
        {
            title: "r/pcgaming",
            description: "A community for PC gaming enthusiasts. Discuss hardware, games, and more.",
            icon: "reddit", // Use the key from iconMap
            link: "https://www.reddit.com/r/pcgaming"
        },
        {
            title: "r/pcgamingcommunity",
            description: "A friendly space for PC gamers to share tips, tricks, and experiences.",
            icon: "reddit", // Use the key from iconMap
            link: "https://www.reddit.com/r/pcgamingcommunity"
        },
        {
            title: "r/gaming",
            description: "The largest gaming community on Reddit. Discuss all things gaming.",
            icon: "reddit", // Use the key from iconMap
            link: "https://www.reddit.com/r/gaming"
        },
        {
            title: "Discord: PC Gamers",
            description: "Join our Discord server to chat with fellow PC gamers.",
            icon: "discord", // Use the key from iconMap
            link: "#"
        },
        {
            title: "Discord: Indie Games",
            description: "A Discord server dedicated to indie game developers and players.",
            icon: "discord", // Use the key from iconMap
            link: "#"
        },
        {
            title: "r/indiegaming",
            description: "A vibrant subreddit for indie game developers, fans, and creative enthusiasts.",
            icon: "reddit", // Use the key from iconMap
            link: "https://www.reddit.com/r/indiegaming"
        },
        {
            title: "r/gamedev",
            description: "A community for game developers to share resources and advice.",
            icon: "reddit", // Use the key from iconMap
            link: "https://www.reddit.com/r/gamedev"
        },
        {
            title: "Discord: Game Devs",
            description: "A Discord server for game developers to collaborate and network.",
            icon: "discord", // Use the key from iconMap
            link: "#"
        },
        {
            title: "r/esports",
            description: "Discuss the latest in competitive gaming and esports.",
            icon: "reddit", // Use the key from iconMap
            link: "https://www.reddit.com/r/esports"
        }
    ];

    // ====================
    // GENERATE COMMUNITIES
    // ====================
    const communityContainer = document.getElementById("community-container");
    communities.forEach((community) => {
        const communityElement = document.createElement("div");
        communityElement.className = "community-card";

        // Get the icon path from the iconMap
        const iconPath = iconMap[community.icon] || "default.svg"; // Fallback to a default icon if not found

        communityElement.innerHTML = `
            <div class="icon">
                <img src="${iconPath}" alt="${community.title} Icon">
            </div>
            <h3>${community.title}</h3>
            <p>${community.description}</p>
            <button class="join-button">Join Now</button>
        `;

        // Add event listener to the button to open the link in a new tab
        const joinButton = communityElement.querySelector(".join-button");
        joinButton.addEventListener("click", () => {
            window.open(community.link, "_blank");
        });

        communityContainer.appendChild(communityElement);
    });
});