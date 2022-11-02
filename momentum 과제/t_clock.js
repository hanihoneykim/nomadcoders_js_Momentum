const clock = document.querySelector("h2#clock");

function differenceDay() {
    const eveDay = new Date("2022-12-24");
    const todayDay = new Date();
    const difference = eveDay - todayDay ; 

    const diffDay = Math.floor(difference/ (1000*60*60*24));
    const diffHour = String(Math.floor((difference/ (1000*60*60))% 24)).padStart(2, "0");
    const diffMinutes = String(Math.floor((difference/ (1000*60)) % 60)).padStart(2, "0");
    const diffSeconds = String(Math.floor(difference/ 1000 %60)).padStart(2, "0");

    clock.innerText = `${diffDay}d ${diffHour}h ${diffMinutes}m ${diffSeconds}s`;
};

differenceDay();
setInterval(differenceDay, 1000);