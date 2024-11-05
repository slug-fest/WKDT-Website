function loadAll() {
    //mm,dd,yyyy,start,end,type,title,description,[dj,Tidal,Spotify,YouTube,YoutubeMusic]
    const eventmatrix = `11,05,2024,16:20,19:30,dj,Company Athletics Brigade Finals,Provide audio system and DJ support for Company Athletics Brigade Finals
    11,02,2024,12:00,16:00,dj,Texas Tamale Tailgate,Provide DJ support for West Point Parents' Club of Houston Tailgate,Demize,7f1d97ed-fad0-47b8-8d84-1781e6d3e374,68McwWRWvwZ5lWrz5x1L97,videoseries?si=w2BdHKteVcOAmGgQ&amp;list=PLOh6mlSStDuTnux_naBM_ft5WFVRREr86,videoseries?si=8F_QOYXpZc3pbhit&amp;list=PLOh6mlSStDuRXSG7U-ij_ZdIro2N-8N7M
    11,02,2024,12:00,16:00,fb,USAFA @ USMA,Broadcast live coverage of Army football
    11,01,2024,17:50,20:00,dj,1st Reg Halloween,Provide DJ support for 1st Reg Halloween BBQ,Sototo,5450aff9-93ab-47b8-afec-9081ff960d91,7cfrWd1sUhXPp4Pow24UMf,videoseries?si=ftZ1C6B3N-DWZo0c&amp;list=PLOh6mlSStDuRYuPg2DbPBhoLqJj7Yz9pW,videoseries?si=aYm6Y1qNuVUixlj3&amp;list=PLOh6mlSStDuR5uaITv-g9dHYjjvlpPO3K
    11,01,2024,17:30,21:00,bx,USAFA @ USMA,Provide walk-on music for Army Boxing,Demize,2e1c1d03-f204-450c-ac40-e0535ae49ea9,2Tp4L4WIWRSXdvncVd44DL,videoseries?si=23bmc7JmFrWWfKkH&amp;list=PLOh6mlSStDuRVboSuvF3Kquh5xrs1zLeL,videoseries?si=9GjecAv4GJNNMkS0&amp;list=PLOh6mlSStDuRCoOYHL0M0nepVIA5-tAld
    10,31,2024,16:30,18:30,pa,Drill Support,Provide audio system for 1st/2nd drill practice
    10,29,2024,16:30,18:30,pa,Drill Support,Provide audio system for 1st/2nd drill practice
    10,25,2024,16:30,20:30,dj,Brigade Sandhurst Combatives Competition,Provide DJ support for Brigade Sandhurst Combatives Competition,Knuckles,4c294755-2493-488f-bc4d-a857c12f5281,5720b5UcDp4PiCmPOEplll,videoseries?si=TEKSO5OukcyYF5wh&amp;list=PLOh6mlSStDuRnCuSS5o0ba3vKAuGGcTt2,videoseries?si=doVZ2z6NqeqP3x1A&amp;list=PLOh6mlSStDuT8SMvAkXUeIm7U_yL3tgU-
    10,19,2024,12:00,16:00,fb,ECU @ USMA,Broadcast live coverage of Army football (Homecoming Game)
    10,18,2024,18:00,20:30,dj,2nd Reg BBQ,Provide DJ support for 2nd Reg BBQ,Coop,bd638bfc-4709-4b7c-a150-41d60bd2ad1f,1vTWO8lt05Sq543ZRbwXT1,videoseries?si=lvVWo8AaBOMnY76F&list=PLOh6mlSStDuQ8rXuQIKYg2Jpw98qYJfI9,videoseries?si=pMeUK0dq9LNL4q-w&list=PLOh6mlSStDuS6EGwOA6j-RvtJHFoPs_Yf
    10,18,2024,17:00,19:30,dj,4th Reg TurkeyBowl,Provide DJ support for 4th Reg TurkeyBowl,Schmitty,1f70effb-d141-4b51-99e7-9f6ee72e7ea5,1UsxpwlNuJeESEds0a5HA0,videoseries?si=2-mq5dK1EiHqWBut&list=PLOh6mlSStDuTCV3DeStLJrqiQKfAFEzBR,videoseries?si=XfTiubVfpGRfHR17&list=PLOh6mlSStDuRSlqQGKQoNsBFAYROWSjsm
    10,17,2024,16:30,18:30,pa,Drill Support,Provide audio system for full brigade drill practice
    10,16,2024,16:30,18:30,pa,Drill Support,Provide audio system for 1st/2nd drill practice
    10,15,2024,16:30,18:30,pa,Drill Support,Provide audio system for 3rd/4th drill practice
    10,12,2024,12:00,16:00,fb,UAB @ USMA,Broadcast live coverage of Army football
    10,10,2024,16:30,18:30,pa,Drill Support,Provide audio system for 1st/2nd drill practice
    10,08,2024,16:30,18:30,pa,Drill Support,Provide audio system for 1st/2nd drill practice`;
    document.getElementById('loadCalButton').classList.add("hidden");
    if (document.getElementById('calendar').children.length===0) {
        var element = document.getElementById('calendar');
        caleandar(element, eventmatrix);
    }
    const events = eventmatrix.split('\n');
    let x=0;
    events.forEach(event => {
        x+=1;
        const data = event.split(',');
        data[0]=data[0].trim();
        if ((data[5]==="dj"||data[5]==="bx")&&data[8]) {
            document.getElementById("eventReplays").innerHTML+=`<hr class="fullWidth"><details class="eventReplay"><summary id="${data[0]}/${data[1]}/${data[2]}_${x}" class="replayTitle">${data[6]} by DJ ${data[8]} | ${data[0]}/${data[1]}/${data[2]}</summary><div class="replayContainer"><div class="none service shown"><h3 class="explainer">Please select a music provider from the <a href="#selectService">list</a> above.</h3></div><div class="tidal loading"><h3 class="explainer">Tidal is loading...</h3></div><div class="spotify loading"><h3 class="explainer">Spotify is loading...</h3></div><div class="youtube loading"><h3 class="explainer">YouTube is loading...</h3></div><div class="youtubeMusic loading"><h3 class="explainer">YouTube Music is loading...</h3></div><iframe class="tidal service" src="https://embed.tidal.com/playlists/${data[9]}" title="TIDAL Embed Player" loading="lazy" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" sandbox="allow-same-origin allow-scripts allow-forms allow-popups" ></iframe><iframe class="spotify service" src="https://open.spotify.com/embed/playlist/${data[10]}?utm_source=generator" title="Spotify Embed Player" loading="lazy" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe><iframe class="youtube service" src="https://www.youtube.com/embed/${data[11]}&amp;rel=0" title="YouTube video player" loading="lazy" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe><iframe class="youtubeMusic service" src="https://www.youtube.com/embed/${data[12]}&amp;rel=0" title="YouTube video player" loading="lazy" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div></details>`;
        }
    });
    document.querySelectorAll(".eventReplay")[0].classList.add("topEvent");
}
class Calendar {
    constructor(model, date) {
        this.Model = model || {}; // This will be an array of events
        this.Today = new Date();
        this.Selected = date || this.Today;
        this.initSelectedDates();
        this.Prev = new Date(this.Selected.Year, this.Selected.Month - 1, 1);
        if (this.Selected.Month === 0) this.Prev = new Date(this.Selected.Year - 1, 11, 1);
        this.Prev.Days = new Date(this.Prev.getFullYear(), this.Prev.getMonth() + 1, 0).getDate();
    }
    initSelectedDates() {
        this.Selected.Month = this.Selected.getMonth();
        this.Selected.Year = this.Selected.getFullYear();
        this.Selected.Days = new Date(this.Selected.Year, this.Selected.Month + 1, 0).getDate();
        this.Selected.FirstDay = new Date(this.Selected.Year, this.Selected.Month, 1).getDay();
        this.Selected.LastDay = new Date(this.Selected.Year, this.Selected.Month + 1, 0).getDay();
    }
    getEventsForDay(day) {
        return this.Model.filter(event => {
            return event.Date.getDate() === day &&
            event.Date.getMonth() === this.Selected.Month &&
            event.Date.getFullYear() === this.Selected.Year;
        }).reverse();  // This will reverse the order of the events
    }
}
function createCalendar(calendar, element, adjuster) {
    if (adjuster !== undefined) {
        const newDate = new Date(calendar.Selected.Year, calendar.Selected.Month + adjuster, 1);
        calendar = new Calendar(calendar.Model, newDate);
        element.innerHTML = '';
    }
    const mainSection = document.createElement('div');
    mainSection.className = "cld-main";
    mainSection.innerHTML += `<style>.cld-main{color:#000;}.cld-title a{color:#000;}</style>`;
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const createNavButton = (className, adjuster) => {
        const button = document.createElement('div');
        button.className = className;
        button.innerHTML = `<svg height="15" width="15" viewBox="0 0 75 100" fill="rgba(0,0,0,0.5)"><polyline points="${adjuster === -1 ? '0,50 75,0 75,100' : '0,0 75,50 0,100'}"></polyline></svg>`;
        button.addEventListener('click', () => createCalendar(calendar, element, adjuster));
        return button;
    };
    const AddDateTime = () => {
        const datetime = document.createElement('div');
        datetime.className = "cld-datetime";
        datetime.appendChild(createNavButton('cld-rwd cld-nav', -1));
        const indicator = document.createElement('div');
        indicator.id = 'indicator';
        indicator.innerHTML = `${months[calendar.Selected.Month]}, ${calendar.Selected.Year}`;
        datetime.appendChild(indicator);
        datetime.appendChild(createNavButton('cld-fwd cld-nav', 1));
        (document.getElementById('foo') || mainSection).appendChild(datetime);
    };
    const AddLabels = () => {
        const labels = document.createElement('ul');
        labels.className = 'cld-labels';
        ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].forEach(labelText => {
            const label = document.createElement('li');
            label.className = "cld-label";
            label.innerHTML = labelText;
            labels.appendChild(label);
        });
        mainSection.appendChild(labels);
    };
    function createDay(className, dayNumber, events) {
        const day = document.createElement('div');
        day.className = `cld-day ${className}`;
        day.innerHTML = `<p class="cld-number">${dayNumber}</p>`;
        if ((dayNumber === calendar.Today.getDate()) && (calendar.Selected.Month === calendar.Today.getMonth()) && (calendar.Selected.Year === calendar.Today.getFullYear())) {
            day.id = "today";
        }
        if (events && events.length > 0) {
            const eventContainer = document.createElement('div');
            eventContainer.className = "cld-event";
            events.forEach(event => {
                eventContainer.innerHTML += `
                <details class="cld-title">
                <summary class="eventTitle ${event.Type} button">
                <strong>${event.Title}</strong> ${event.Time}&nbsp;&#8209;&nbsp;${event.T_end}
                </summary>
                <div class="eventDetails">
                <p>Details: ${event.Description}</p>
                </div>
                </details>`;
            });
            day.appendChild(eventContainer);
        }
        return day;
    }
    function AddDays() {
        const days = document.createElement('div');
        days.id = "cld-days";
        for (let i = 0; i < calendar.Selected.FirstDay; i++) {
            days.appendChild(createDay('prevMonth', (calendar.Prev.Days - calendar.Selected.FirstDay) + (i + 1), []));
        }
        for (let i = 0; i < calendar.Selected.Days; i++) {
            const dayEvents = calendar.getEventsForDay(i + 1);
            const day = createDay('currMonth', i + 1, dayEvents);
            days.appendChild(day);
        }
        const totalDays = calendar.Selected.FirstDay + calendar.Selected.Days;
        const extraDays = totalDays > 35 ? 6 : totalDays < 29 ? 20 : 13;
        for (let i = 0; i < (extraDays - calendar.Selected.LastDay); i++) {
            days.appendChild(createDay('nextMonth', i + 1, []));
        }
        mainSection.appendChild(days);
    }
    element.appendChild(mainSection);
    AddDateTime();
    AddLabels();
    AddDays();
}
function parseEventMatrix(eventmatrix) {
    return eventmatrix.split('\n').map(event => {
        const [month, day, year, startTime, endTime, type, title, description] = event.split(',');
        const eventData = {
            Date: new Date(year, month - 1, day),
            Title: title,
            Time: startTime,
            T_end: endTime,
            Type: type,
            Description: description
        };
        return eventData;
    });
}
function caleandar(el, eventmatrix) {
    const eventData = parseEventMatrix(eventmatrix);
    const calendar = new Calendar(eventData);
    createCalendar(calendar, el);
}
// document.querySelectorAll(".link").forEach(element => {
//     element.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" height=".9em" viewBox="0 0 36 36"><path fill="#000" d="M15 9l6-6s6-6 12 0 0 12 0 12l-8 8s-6 6-12 0c-1.125-1.125-1.822-2.62-1.822-2.62l3.353-3.348S14.396 18.396 16 20c0 0 3 3 6 0l8-8s3-3 0-6-6 0-6 0l-3.729 3.729s-1.854-1.521-5.646-.354L15 9z"/><path fill="#000" d="M20.845 27l-6 6s-6 6-12 0 0-12 0-12l8-8s6-6 12 0c1.125 1.125 1.822 2.62 1.822 2.62l-3.354 3.349s.135-1.365-1.469-2.969c0 0-3-3-6 0l-8 8s-3 3 0 6 6 0 6 0l3.729-3.729s1.854 1.521 5.646.354l-.374.375z"/></svg>';
// });
window.onload = loadAll();
function scrollElementIntoContainerView() {
    const container = document.getElementById('cld-days');
    const element = document.getElementById('today');
    if (window.innerWidth < 1024 && container && element) {
        const offset = element.getBoundingClientRect().top - container.getBoundingClientRect().top;
        container.scrollTo({ top: container.scrollTop + offset, behavior: 'instant' });
    }
}
window.addEventListener('resize', scrollElementIntoContainerView);
document.addEventListener('DOMContentLoaded', () => {
    scrollElementIntoContainerView();
    document.querySelectorAll('.cld-event').forEach(container => {
        container.addEventListener('wheel', function(event) {
            if (container.scrollHeight > container.clientHeight) {
                console.log('Scrolling event on calendar modified');
                event.preventDefault();
                const scrollAmount = 32; // Set desired scroll amount
                this.scrollTop += event.deltaY < 0 ? -scrollAmount : scrollAmount;
            }
        });
    });
});
function changeService(choice) {
    console.log(choice);
    document.querySelectorAll(".loading").forEach(element => {
        element.classList.remove("shown");
    });
    document.querySelectorAll(".service").forEach(element => {
        element.classList.remove("shown");
    });
    document.querySelectorAll(choice).forEach(element => {
        element.classList.add("shown");
    });
    if (!Array.from(document.querySelectorAll('details')).some(detail => detail.open)) {
        document.querySelectorAll(".topEvent").forEach(element => {
            element.open = true;
        });
    }
    if (choice===".none") {
        document.querySelectorAll("details").forEach(element => {
            element.open = false;
        });
    }
}
