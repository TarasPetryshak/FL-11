function formatTime(numberOfMinutes) {
    let days = Math.floor(numberOfMinutes / 1440);
    let hours = Math.floor((numberOfMinutes - days * 1440) / 60);
    let minutes = numberOfMinutes % 60;
    return days +' day(s) ' + hours + ' hour(s) ' + minutes +' minute(s)';
}
console.log(formatTime(59));