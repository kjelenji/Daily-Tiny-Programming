//Day 14 of Daily Tiny Programming

// This script updates a clock display every second in the format H:MM:SS
function updateClock() {
    // 1. Get the current date and time
    const now = new Date();

    // 2. Extract hours, minutes, and seconds
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // 3. Format to ensure two digits (e.g., 9 becomes 09)
    // The .padStart() method is perfect for this.
    hours = String(hours).padStart(2, '0');
    minutes = String(minutes).padStart(2, '0');
    seconds = String(seconds).padStart(2, '0');

    // 4. Combine into the H:MM:SS format
    const timeString = `${hours}:${minutes}:${seconds}`;

    // 5. Update the HTML element
    document.getElementById('clock').textContent = timeString;
}

// 6. Run once immediately to show the time without delay
updateClock();

// 7. Set an interval to run the function every 1000 milliseconds (1 second)
setInterval(updateClock, 1000);