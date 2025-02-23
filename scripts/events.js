class Event {
    constructor(month, day, year, startTime, endTime, type, title, description, dj, serviceFragments = []) {
        this.Date = new Date(year, month - 1, day);  // month is 0-based in JS
        this.StartTime = startTime;
        this.EndTime = endTime;
        this.Type = type;
        this.Title = title;
        this.Description = description;
        this.DJ = dj;
        this.ServiceFragments = serviceFragments;  // Contains the service fragments for Tidal, Spotify, etc.
    }
    getFormattedTime() {
        return `${this.StartTime} - ${this.EndTime}`;
    }
    getServiceEmbeds() {
        return this.ServiceFragments.map((fragment, index) => {
            switch (index) {
                case 0: // Tidal
                    return `<iframe class="tidal service" src="https://embed.tidal.com/playlists/${fragment}" title="TIDAL Embed Player" loading="lazy" frameborder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>`;
                case 1: // Spotify
                    return `<iframe class="spotify service" src="https://open.spotify.com/embed/playlist/${fragment}?utm_source=generator" title="Spotify Embed Player" loading="lazy" frameborder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>`;
                case 2: // YouTube
                    return `<iframe class="youtube service" src="https://www.youtube.com/embed/${fragment}" title="YouTube video player" loading="lazy" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
                case 3: // YouTube Music
                    return `<iframe class="youtubeMusic service" src="https://www.youtube.com/embed/${fragment}" title="YouTube Music player" loading="lazy" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
                default:
                    return ''; // Default case for any unexpected fragments
            }
        }).join('');
    }
}

function parseEventMatrix(eventmatrix) {
    return eventmatrix.split('\n').map(event => {
        const [month, day, year, startTime, endTime, type, title, description, dj, tidal, spotify, yt, ytmusic] = event.split(',');
        return new Event(
            parseInt(month, 10),
            parseInt(day, 10),
            parseInt(year, 10),
            startTime,
            endTime,
            type,
            title,
            description,
            dj,
            [tidal, spotify, yt, ytmusic].filter(fragment => fragment)
        );
    });
}
function loadEvents() {
    // mm,dd,yyyy,start,end,type,title,[description,dj,Tidal,Spotify,YouTube,YoutubeMusic]
    // DO NOT USE @, (, ), /, or other symbols!!!
    const eventmatrix = `02,28,2025,17:00,23:30,dj,Infantry Ball
    02,21,2025,16:30,21:30,dj,Brigade Boxing Open,WKDT provided walkout music and hype music between rounds for the Brigade Boxing Open,Demize,945885e7-ab3b-463a-b95c-8e569ecba368,6Yj5agJJGtRwitHEzhOpBi,videoseries?si=TuEbOphGmtuwQ_bb&amp;list=PLOh6mlSStDuTt6PWaUpZJzmzDW0kPAclj,videoseries?si=qhIj9U4AyYYTTtaK&amp;list=PLOh6mlSStDuSd0Ah1OtaMGgKI7hwtO7a4
    01,31,2025,17:00,02:00,dj,Norwegian Foot March,WKDT provided DJ support for the step-off and finish of the Norwegian Foot March,Coop,b124ade3-6216-47a2-9d72-c4bdb5d83cec,6j9Qr6TXPO4oLKqycUPgQC,videoseries?si=bfAPTr7wiFY48pt6&amp;list=PLOh6mlSStDuQdHSiuWcAclFTSZANa0dvH,videoseries?si=6jCsjGcwoGU8ld5j&amp;list=PLOh6mlSStDuRALJ6RP77uGv5QPigilgwF
    12,25,2024,12:00,12:00,pa,Merry Christmas!
    12,14,2024,15:00,19:00,fb,ARMY vs NAVY
    12,12,2024,16:30,19:00,dj,Goat-Engineer Game,WKDT provided DJ support for the Goat/Engineer Game,Edox,f46b5452-a085-4491-a564-c7aca406589c,3ClRHsjxR3fJEyIwpN4nAf,videoseries?si=13-L-vXnKIM1pn17&amp;list=PLOh6mlSStDuTibDhz3sLF23Elwf100oJb,videoseries?si=s-nvEbi-JYcwKL4J&amp;list=PLOh6mlSStDuSp7YPlEW84WWRX50-5GoeO
    12,06,2024,20:00,23:00,fb,Tulane vs USMA,Broadcast live coverage of Army football
    12,04,2024,20:00,22:00,dj,Branch Night 2,WKDT provided DJ support for Branch Night,Demize,69f6c7c7-7e35-4f82-a407-ba0733de9218,2tLMzmvhDiN7vulipavyUW,videoseries?si=vu74IfpLkdGauaOt&amp;list=PLOh6mlSStDuTGrPeTpGaz3A9KODENlKjJ,videoseries?si=LOfNRe_upcvq4qJz&amp;list=PLOh6mlSStDuTCywOAnHQBhKrKGqbtAT44
    12,04,2024,18:00,20:00,dj,Branch Night 1,WKDT provided DJ support for Branch Night,Blue Hildreth,acd6bbf9-eccd-49ee-acce-bb54c2fdd265,13b9DH9Id1Qy9C7Nub0kvW,videoseries?si=_3wwdA0u1jMwdiNf&amp;list=PLOh6mlSStDuR8oqHuiQq-zk7_L_wenqt7,videoseries?si=b7LKuwVKwe_8PAQS&amp;list=PLOh6mlSStDuRWY94PlwHpDYsswbga2Z5e
    11,30,2024,12:00,16:00,fb,UTSA vs USMA
    11,28,2024,12:00,12:00,pa,Happy Thanksgiving!
    11,23,2024,12:00,16:00,fb,Notre Dame vs USMA,No coverage due to Yankee Stadium
    11,09,2024,12:00,16:00,fb,USMA vs North Texas,Broadcast live coverage of Army football
    11,05,2024,16:20,19:30,dj,Company Athletics Brigade Finals,WKDT provided audio system and DJ support for Company Athletics Brigade Finals
    11,02,2024,12:00,16:00,dj,Texas Tamale Tailgate,WKDT provided DJ support for West Point Parents' Club of Houston Tailgate,Demize,7f1d97ed-fad0-47b8-8d84-1781e6d3e374,68McwWRWvwZ5lWrz5x1L97,videoseries?si=w2BdHKteVcOAmGgQ&amp;list=PLOh6mlSStDuTnux_naBM_ft5WFVRREr86,videoseries?si=8F_QOYXpZc3pbhit&amp;list=PLOh6mlSStDuRXSG7U-ij_ZdIro2N-8N7M
    11,02,2024,12:00,16:00,fb,USAFA vs USMA,Broadcast live coverage of Army football
    11,01,2024,17:50,20:00,dj,1st Reg Halloween,WKDT provided DJ support for 1st Reg Halloween BBQ,Edox,5450aff9-93ab-47b8-afec-9081ff960d91,7cfrWd1sUhXPp4Pow24UMf,videoseries?si=ftZ1C6B3N-DWZo0c&amp;list=PLOh6mlSStDuRYuPg2DbPBhoLqJj7Yz9pW,videoseries?si=aYm6Y1qNuVUixlj3&amp;list=PLOh6mlSStDuR5uaITv-g9dHYjjvlpPO3K
    11,01,2024,17:30,21:00,dj,USAFA vs USMA Boxing,WKDT provided walk-on music for Army Boxing,Demize,2e1c1d03-f204-450c-ac40-e0535ae49ea9,2Tp4L4WIWRSXdvncVd44DL,videoseries?si=23bmc7JmFrWWfKkH&amp;list=PLOh6mlSStDuRVboSuvF3Kquh5xrs1zLeL,videoseries?si=9GjecAv4GJNNMkS0&amp;list=PLOh6mlSStDuRCoOYHL0M0nepVIA5-tAld
    10,31,2024,16:30,18:30,pa,Drill Support,WKDT provided audio system for 1st/2nd drill practice
    10,29,2024,16:30,18:30,pa,Drill Support,WKDT provided audio system for 1st/2nd drill practice
    10,25,2024,16:30,20:30,dj,Brigade Sandhurst Combatives Competition,WKDT provided DJ support for Brigade Sandhurst Combatives Competition,Demize,4c294755-2493-488f-bc4d-a857c12f5281,5720b5UcDp4PiCmPOEplll,videoseries?si=TEKSO5OukcyYF5wh&amp;list=PLOh6mlSStDuRnCuSS5o0ba3vKAuGGcTt2,videoseries?si=doVZ2z6NqeqP3x1A&amp;list=PLOh6mlSStDuT8SMvAkXUeIm7U_yL3tgU-
    10,19,2024,12:00,16:00,fb,ECU vs USMA,Broadcast live coverage of Army football (Homecoming Game)
    10,18,2024,18:00,20:30,dj,2nd Reg BBQ,WKDT provided DJ support for 2nd Reg BBQ,Coop,bd638bfc-4709-4b7c-a150-41d60bd2ad1f,1vTWO8lt05Sq543ZRbwXT1,videoseries?si=lvVWo8AaBOMnY76F&list=PLOh6mlSStDuQ8rXuQIKYg2Jpw98qYJfI9,videoseries?si=pMeUK0dq9LNL4q-w&list=PLOh6mlSStDuS6EGwOA6j-RvtJHFoPs_Yf
    10,18,2024,17:00,19:30,dj,4th Reg TurkeyBowl,WKDT provided DJ support for 4th Reg TurkeyBowl,Schmitty,1f70effb-d141-4b51-99e7-9f6ee72e7ea5,1UsxpwlNuJeESEds0a5HA0,videoseries?si=2-mq5dK1EiHqWBut&list=PLOh6mlSStDuTCV3DeStLJrqiQKfAFEzBR,videoseries?si=XfTiubVfpGRfHR17&list=PLOh6mlSStDuRSlqQGKQoNsBFAYROWSjsm
    10,17,2024,16:30,18:30,pa,Drill Support,WKDT provided audio system for full brigade drill practice
    10,16,2024,16:30,18:30,pa,Drill Support,WKDT provided audio system for 1st/2nd drill practice
    10,15,2024,16:30,18:30,pa,Drill Support,WKDT provided audio system for 3rd/4th drill practice
    10,12,2024,12:00,16:00,fb,UAB vs USMA,Broadcast live coverage of Army football
    10,10,2024,16:30,18:30,pa,Drill Support,WKDT provided audio system for 1st/2nd drill practice
    10,08,2024,16:30,18:30,pa,Drill Support,WKDT provided audio system for 1st/2nd drill practice`;
    const events = parseEventMatrix(eventmatrix);
    if (document.getElementById('calendar').children.length === 0) {
        const element = document.getElementById('calendar');
        caleandar(element, events);
    }
    // Add event to overlays (reworked to use Event class)
    events.forEach(event => {
        if (event.Type === "dj" && event.ServiceFragments.length > 0) {
            const eventRef = `${event.Date.getMonth() + 1}-${event.Date.getDate()}-${event.Date.getFullYear()}_${event.Title.replace(/ /g, '-')}`;
            document.getElementById("overlays").innerHTML += `
            <div class="replayContainer" eventRef="${eventRef}">
                <details open class="contentWrapper">
                    <summary class="replayTitle">${event.Title} by DJ ${event.DJ} | ${event.Date.getMonth()+1}/${event.Date.getDate()}/${event.Date.getFullYear()}<span class="closeOverlay" onclick="hideEventOverlay('${eventRef}');">x</span></summary>
                    <p>${event.Description}</p>
                    <div id="selectService" class="radioGroup">
                        <input type="radio" id="none" name="service" onClick="changeService('.none')" checked>
                        <label for="none" class="radioLabel">None</label>
                        <input type="radio" id="tidal" name="service" onClick="changeService('.tidal')">
                        <label for="tidal" class="radioLabel">Tidal</label>
                        <input type="radio" id="spotify" name="service" onClick="changeService('.spotify')">
                        <label for="spotify" class="radioLabel">Spotify</label>
                        <input type="radio" id="youtube" name="service" onClick="changeService('.youtube')">
                        <label for="youtube" class="radioLabel">YouTube</label>
                        <input type="radio" id="youtubeMusic" name="service" onClick="changeService('.youtubeMusic')">
                        <label for="youtubeMusic" class="radioLabel">YouTube Music</label>
                    </div>
                </details>
                <div class="none service shown">
                    <h3 class="explainer">Please select a music provider from the list above.</h3>
                </div>
                ${event.getServiceEmbeds()}
            </div>`;
        }
    });
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
        // Directly calculate the number of days in the selected month:
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

    // Function to create navigation buttons (previous/next month)
    const createNavButton = (className, adjuster) => {
        const button = document.createElement('div');
        button.className = className;
        button.innerHTML = `<svg height="15" width="15" viewBox="0 0 75 100" fill="rgba(0,0,0,0.5)"><polyline points="${adjuster === -1 ? '0,50 75,0 75,100' : '0,0 75,50 0,100'}"></polyline></svg>`;
        button.addEventListener('click', () => createCalendar(calendar, element, adjuster));
        return button;
    };

    // Function to add the date/time title section
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

    // Function to add the day labels (Sun, Mon, etc.)
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

    // Function to create individual day elements
    function createDay(className, dayNumber, events) {
        const day = document.createElement('div');
        day.className = `cld-day ${className}`;
        day.innerHTML = `<p class="cld-number">${dayNumber}</p>`;

        // Highlight today's date
        if ((dayNumber === calendar.Today.getDate()) && (calendar.Selected.Month === calendar.Today.getMonth()) && (calendar.Selected.Year === calendar.Today.getFullYear())) {
            day.id = "today";
        }

        // If events exist for the day, show them
        if (events && events.length > 0) {
            const eventContainer = document.createElement('div');
            eventContainer.className = "cld-event";
            day.classList.add("eventDay");
            events.forEach(event => {
                eventContainer.innerHTML += `
                <div class="cld-title ${event.Type} button" eventRef="${calendar.Selected.Month+1}-${dayNumber}-${calendar.Selected.Year}_${event.Title.replace(/ /g,'-')}">
                <strong>${event.Title}</strong> ${event.StartTime}&#8209;${event.EndTime}
                </div>`;
            });
            day.appendChild(eventContainer);
        }
        return day;
    }

    // Function to add days to the calendar
    function AddDays() {
        const days = document.createElement('div');
        days.id = "cld-days"; // Create the container for the days

        // Add previous month's days if necessary
        for (let i = 0; i < calendar.Selected.FirstDay; i++) {
            days.appendChild(createDay('prevMonth', (calendar.Prev.Days - calendar.Selected.FirstDay) + (i + 1), []));
        }

        // Add current month's days
        for (let i = 0; i < calendar.Selected.Days; i++) {
            const dayEvents = calendar.getEventsForDay(i + 1);
            const day = createDay('currMonth', i + 1, dayEvents);
            days.appendChild(day);
        }

        // Add next month's days if necessary
        const totalDays = calendar.Selected.FirstDay + calendar.Selected.Days;
        const extraDays = totalDays > 35 ? 6 : totalDays < 29 ? 20 : 13;
        for (let i = 0; i < (extraDays - calendar.Selected.LastDay); i++) {
            days.appendChild(createDay('nextMonth', i + 1, []));
        }

        mainSection.appendChild(days);
    }

    // Append the whole structure to the main element
    element.appendChild(mainSection);
    AddDateTime();
    AddLabels();
    AddDays();
}

function caleandar(el, eventData) {
    const calendar = new Calendar(eventData);
    createCalendar(calendar, el);
}
// Non calendar stuff
function scrollElementIntoContainerView() {
    const container = document.getElementById('cld-days');
    const element = document.getElementById('today');
    if (window.innerWidth < 1024 && container && element) {
        const offset = element.getBoundingClientRect().top - container.getBoundingClientRect().top;
        container.scrollTo({ top: container.scrollTop + offset, behavior: 'instant' });
    }
}
function updateURL(eventRef) {
    if (eventRef === '') {
        window.history.pushState({ path: '/events' }, "", '/events');
    } else {
        const newURL = `/events?${eventRef}`;
        window.history.pushState({ path: newURL }, "", newURL);
    }
}
function showEventOverlay(eventRef) {
    updateURL(eventRef);
    const overlay = document.querySelector(`#overlays [eventRef="${eventRef}"]`);
    if (overlay) {
        overlay.classList.toggle('shown');
        shrinkHeader();
        document.body.style.overflow = 'hidden';
    }
}
function hideEventOverlay(eventRef) {
    document.body.style.overflow = '';
    updateURL('');
    const overlay = document.querySelector(`#overlays [eventRef="${eventRef}"]`);
    if (overlay) {
        overlay.querySelector('details').toggleAttribute('open');
        overlay.querySelectorAll('iframe').forEach(iframe => {
            const src = iframe.src;
            iframe.src = '';
            iframe.src = src;
        });
        setTimeout(() => {overlay.classList.toggle('shown');}, 100);
    }
}
function changeService(choice) {
    document.querySelectorAll(".loading").forEach(element => {
        element.classList.remove("shown");
    });
    document.querySelectorAll(".service").forEach(element => {
        element.classList.remove("shown");
    });
    document.querySelectorAll(choice).forEach(element => {
        element.classList.add("shown");
    });
    if (choice===".none") {
        document.querySelectorAll("details").forEach(element => {
            element.open = true;
        });
    } else {
        document.querySelectorAll("details").forEach(element => {
            element.open = false;
        });
    }
}
// Listener based code
window.onload = function() {
    loadEvents();
    const eventRef = window.location.search.substring(1);  // Extract the part after the '?'
    if (eventRef) {
        // Show the overlay for the event corresponding to the eventRef
        setTimeout(() => {showEventOverlay(eventRef);}, 1000);
    }
};
window.addEventListener('resize', scrollElementIntoContainerView);
document.addEventListener('DOMContentLoaded', () => {
    scrollElementIntoContainerView();
    document.getElementById('calendar').addEventListener('wheel', function(event) {
        const container = event.target.closest('.cld-event');
        if (container) {
            event.preventDefault();
            const scrollAmount = event.deltaY < 0 ? -10 : 10;  // Scrolls by 10px
            container.scrollTop += scrollAmount;
        }
    });
    document.getElementById('calendar').addEventListener('click', function(event) {
        let target = event.target.closest('.dj');
        if (target) {
            showEventOverlay(target.getAttribute('eventRef'));
        }
    });    
});
