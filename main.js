const talkLink = document.getElementById("talk");
const notification = document.getElementById("notification");

talkLink.addEventListener("click", (event) => {
    event.preventDefault(); // Prevents immediate redirection

    notification.classList.remove("hidden");
    notification.classList.add("show");

    // Hide notification after 2 seconds
    setTimeout(() => {
        notification.classList.remove("show");
        setTimeout(() => {
            notification.classList.add("hidden");
            window.location.href = talkLink.href; // Redirect after notification fades out
        }, 500); // Wait for transition to complete before redirecting
    }, 2000);
});
