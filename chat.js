document.addEventListener("DOMContentLoaded", function () {
    const chatBox = document.getElementById("chatBox");
    const messageInput = document.getElementById("messageInput");
    const sendBtn = document.getElementById("sendBtn");
    const nextBtn = document.getElementById("nextBtn");
    const notification = document.getElementById("notification");

    // Function to send a message
    function sendMessage() {
        const messageText = messageInput.value.trim();

        if (messageText !== "") {
            const message = document.createElement("p");
            message.classList.add("user-message");
            message.textContent = "You: " + messageText;

            chatBox.appendChild(message);
            chatBox.scrollTop = chatBox.scrollHeight; // Auto-scroll

            messageInput.value = ""; // Clear input
        }
    }

    // Function to show notification with fade effect
    function showNotification(message) {
        notification.textContent = message;
        notification.style.opacity = "1";
        notification.style.display = "block";

        // Fade out after 3 seconds
        setTimeout(() => {
            notification.style.opacity = "0";
            setTimeout(() => {
                notification.style.display = "none";
            }, 500); // Wait for fade-out transition
        }, 3000);
    }

    // Function to start a new chat
    function startNewChat() {
        chatBox.innerHTML = ""; // Clear chat box
        showNotification("You are now connected to a new stranger.");
    }

    // Event listener for Send button
    sendBtn.addEventListener("click", sendMessage);

    // Event listener for Enter key in input
    messageInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            sendMessage();
        }
    });

    // Event listener for Next button
    nextBtn.addEventListener("click", startNewChat);

    // Event listener for Escape key to trigger Next
    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            startNewChat();
        }
    });
});


//success notifictaion
document.addEventListener("DOMContentLoaded", () => {
    const notification = document.getElementById("success");

    if (notification) {
        notification.classList.remove("hidden");
        notification.classList.add("show");

        // Hide notification after 2 seconds
        setTimeout(() => {
            notification.classList.remove("show");
            setTimeout(() => {
                notification.classList.add("hidden");
            }, 500); // Wait for fade-out transition
        }, 2000);
    }
});




