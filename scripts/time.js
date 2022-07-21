let displayDateAndTime = document.getElementById("displayTime");
let displayDate = document.getElementById("displayDate");
let date;
let monthList;
let dayList;
let localHour;
let localMinute;
let localSeconds;
let localDay;
let localDate;
let localMonth;
let localYear;
let displayLocalTime;
let displayLocalDate;

monthList = [
    "January","February", "March", 
    "April", "May", "June", "July", 
    "August", "September", "October",
    "November", "December"
]
dayList  = [
    "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"
]


let localTime = ()=>{
    date = new Date();
    localHour = date.getHours();
    localMinute = date.getMinutes();
    localSeconds = date.getSeconds();
    localDate = date.getDate();
    localDay = dayList[date.getDay()];
    localMonth = monthList[date.getMonth()];
    localYear = date.getFullYear();

    displayLocalTime = localHour+":"+localMinute+":"+localSeconds;
    displayLocalDate = `${localDay}, ${localDate} ${localMonth} ${localYear}`

    displayTime.innerText = date.toLocaleTimeString();
    displayDate.innerText = displayLocalDate
}

// fetch(timeSRC).then(response => response.json()).then(data=>{
// //console.log(data);
// })

setInterval(localTime, 995);



