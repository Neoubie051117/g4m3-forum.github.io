document.addEventListener("DOMContentLoaded", () => {
    // ====================
    // DATA (MODIFY HERE)
    // ====================
    const posts = [
        {
            username: "Kaiju_10",
            caption: "A new RPG set in space is making waves. Could this be the next big thing?",
            image: "Trend1.png", // Replace with your image path
            tag: "🔥 New Open-World Game Announced"
        },
        {
            username: "PixelPioneer",
            caption: "Why do modern games feel so repetitive?",
            image: "Trend2.png", // Replace with your image path
            tag: "🎮 Reddit's Hottest Gaming Discussion"
        },
        {
            username: "MemeMaster",
            caption: "When you finally beat the boss after 50 tries and realize there's a second phase...",
            image: "Trend3.png", // Replace with your image path
            tag: "😂 Meme of the Week"
        },
        {
            username: "PatchNotesBot",
            caption: "- Fixed infinite loading screen issue.\n- Nerfed OP sniper rifle in multiplayer.\n- Added new customization options.",
            image: "Trend4.png", // Replace with your image path
            tag: "🛠️ Patch Notes - March 2025"
        }
    ];

    const userIDs = ["Name's Clint 101", "Agent X", "Mr.Bright", "OK_Im Depressed"]; // Modify user IDs here
    const userPictures = ["UserProfile1.png", "UserProfile2.png", "UserProfile3.png", "UserProfile4.png"]; // Replace with your profile picture paths
    const userComments = ["YEAAAAHHHH", "Another Grind....", "Ain't no way", "Nah I have too much games"]; // Modify comments here

    // ====================
    // HELPER FUNCTIONS
    // ====================
    const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
    const shuffleArray = (array) => array.sort(() => Math.random() - 0.5);

    // ====================
    // GENERATE POSTS
    // ====================
    const postsContainer = document.getElementById("posts-container");
    posts.forEach((post, index) => {
        const postElement = document.createElement("div");
        postElement.className = "trend-item";

        // Randomize reaction, comment, and share counts
        const reactions = getRandomInt(1, 100);
        const commentsCount = getRandomInt(1, 100);
        const shares = getRandomInt(5, 25);

        // Randomize user comments
        const shuffledUsers = shuffleArray(userIDs);
        const shuffledPictures = shuffleArray(userPictures);
        const shuffledComments = shuffleArray(userComments);

        postElement.innerHTML = `
            <h3>${post.tag}</h3>
            <p>${post.caption}</p>
            <div class="image-container">
                <img src="${post.image}" alt="Post Image"> <!-- Replace with your image path -->
            </div>
            <div class="interaction-buttons">
                <button class="react-button" data-reacted="false">
                    <img src="ReactHeart.svg" alt="React"> ${reactions} <!-- Replace with your SVG path -->
                </button>
                <button class="comment-button">
                    <img src="Comment.svg" alt="Comment"> ${commentsCount} <!-- Replace with your SVG path -->
                </button>
                <button class="share-button">
                    <img src="Share.svg" alt="Share"> ${shares} <!-- Replace with your SVG path -->
                </button>
            </div>
            <div class="comment-section">
                <div class="comment-box">
                    <div class="profile-pic">
                        <img src="${shuffledPictures[0]}" alt="Profile Picture"> <!-- Replace with your image path -->
                    </div>
                    <textarea placeholder="Add a comment..."></textarea>
                    <button class="post-comment">Comment</button>
                </div>
                <div class="comments">
                    ${shuffledUsers.map((user, i) => `
                        <div class="comment">
                            <div class="profile-pic">
                                <img src="${shuffledPictures[i]}" alt="Profile Picture"> <!-- Replace with your image path -->
                            </div>
                            <p><strong>${user}</strong>: ${shuffledComments[i]}</p>
                        </div>
                    `).join("")}
                </div>
            </div>
        `;
        postsContainer.appendChild(postElement);
    });

    // ====================
    // INTERACTION FUNCTIONALITY
    // ====================
    const reactButtons = document.querySelectorAll('.react-button');
    reactButtons.forEach(button => {
        button.addEventListener('click', () => {
            const reacted = button.getAttribute('data-reacted') === 'true';
            button.setAttribute('data-reacted', !reacted);
            button.style.backgroundColor = reacted ? 'var(--Soft-Black)' : 'tomato';
            button.style.color = reacted ? 'var(--Bright-White)' : 'var(--Soft-Black)';
        });
    });

    const commentButtons = document.querySelectorAll('.comment-button');
    commentButtons.forEach(button => {
        button.addEventListener('click', () => {
            const commentSection = button.closest('.trend-item').querySelector('.comment-section');
            commentSection.classList.toggle('visible'); // Toggle visibility using a class
        });
    });

    const postCommentButtons = document.querySelectorAll('.post-comment');
    postCommentButtons.forEach(button => {
        button.addEventListener('click', () => {
            postComment(button);
        });
    });

    // Add Enter key support for comment submission
    const textareas = document.querySelectorAll('.comment-box textarea');
    textareas.forEach(textarea => {
        textarea.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault(); // Prevent new line in textarea
                const postCommentButton = textarea.closest('.comment-box').querySelector('.post-comment');
                postComment(postCommentButton);
            }
        });
    });

    // Function to post a comment
    const postComment = (button) => {
        const commentBox = button.closest('.comment-box');
        const commentText = commentBox.querySelector('textarea').value;
        if (commentText.trim() !== '') {
            const commentsContainer = commentBox.closest('.comment-section').querySelector('.comments');
            const newComment = document.createElement('div');
            newComment.className = 'comment';
            newComment.innerHTML = `
                <div class="profile-pic">
                    <img src="${userPictures[getRandomInt(0, userPictures.length - 1)]}" alt="Profile Picture"> <!-- Replace with your image path -->
                </div>
                <p><strong>${userIDs[getRandomInt(0, userIDs.length - 1)]}</strong>: ${commentText}</p>
            `;
            commentsContainer.appendChild(newComment);
            commentBox.querySelector('textarea').value = ''; // Clear the textarea
        }
    };
});