
        function updateTime() {
            const now = new Date();
            const timeString = now.toLocaleTimeString();
            document.getElementById("time").innerText = timeString;
        }

        // Update every second
        setInterval(updateTime, 1000);

        // Run immediately
        updateTime();
document.getElementById("sb").addEventListener("onclick", function () {
    alert("Your message has been sent successfully!");
});    
