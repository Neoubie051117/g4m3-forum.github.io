    document.addEventListener("DOMContentLoaded", () => {
        // ====================
        // COMMUNITY DATA (MODIFY HERE)
        // ====================
        const communities = [
            {
                title: "r/pcgaming",
                description: "A community for PC gaming enthusiasts. Discuss hardware, games, and more.",
                icon: "reddit.svg", // Replace with your SVG path
                link: "https://www.reddit.com/r/pcgaming"
            },
            {
                title: "r/pcgamingcommunity",
                description: "A friendly space for PC gamers to share tips, tricks, and experiences.",
                icon: "reddit.svg", // Replace with your SVG path
                link: "https://www.reddit.com/r/pcgamingcommunity"
            },
            {
                title: "r/gaming",
                description: "The largest gaming community on Reddit. Discuss all things gaming.",
                icon: "reddit.svg", // Replace with your SVG path
                link: "https://www.reddit.com/r/gaming"
            },
            {
                title: "Discord: PC Gamers",
                description: "Join our Discord server to chat with fellow PC gamers.",
                icon: "discord.svg", // Replace with your SVG path
                link: "#"
            },
            {
                title: "Discord: Indie Games",
                description: "A Discord server dedicated to indie game developers and players.",
                icon: "discord.svg", // Replace with your SVG path
                link: "#"
            },
            {
                title: "r/indiegaming",
                description: "A subreddit for indie game developers and fans.",
                icon: "reddit.svg", // Replace with your SVG path
                link: "https://www.reddit.com/r/indiegaming"
            },
            {
                title: "r/gamedev",
                description: "A community for game developers to share resources and advice.",
                icon: "reddit.svg", // Replace with your SVG path
                link: "https://www.reddit.com/r/gamedev"
            },
            {
                title: "Discord: Game Devs",
                description: "A Discord server for game developers to collaborate and network.",
                icon: "discord.svg", // Replace with your SVG path
                link: "#"
            },
            {
                title: "r/esports",
                description: "Discuss the latest in competitive gaming and esports.",
                icon: "reddit.svg", // Replace with your SVG path
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

            communityElement.innerHTML = `
                <div class="icon">
                    <img src="${community.icon}" alt="${community.title} Icon">
                </div>
                <h3>${community.title}</h3>
                <p>${community.description}</p>
                <button class="join-button" onclick="window.location.href='${community.link}'">Join Now</button>
            `;
            communityContainer.appendChild(communityElement);
        });
    });