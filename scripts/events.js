function changeService() {
    const choice = document.getElementById('musicService').value;
    document.querySelectorAll(".loading").forEach(element => {
        element.classList.remove("shown");
    });
    document.querySelectorAll(".service").forEach(element => {
        element.classList.remove("shown");
    });
    document.querySelectorAll(choice).forEach(element => {
        element.classList.add("shown");
    });
}
function modifyIframe() {
    var iframe = document.getElementsByClassName('youtube')[0];
    var innerDoc = iframe.contentDocument || iframe.contentWindow.document;
    var targetElement = innerDoc.getElementById('ytp-id-22');

    if (targetElement) {
        targetElement.style.display = "";
    }
}
function loadCal() {
    document.getElementById('loadCalButton').classList.add("hidden");
    if (document.getElementById('calendar').children.length===0) {
        var element = document.getElementById('calendar');
        var events = [
            // REMEMBER, the month (second column) starts at ZERO, not one.
            {'Date': new Date(2024, 9, 8), 'Title': 'Drill Support', 'Time':'16:30 - 18:30', 'Description': "Provide audio system for 1st & 2nd Reg Drill Practice"},
            {'Date': new Date(2024, 9, 10), 'Title': 'Drill Support', 'Time':'16:30 - 18:30', 'Description': "Provide audio system for 1st/2nd drill practice"},
            {'Date': new Date(2024, 9, 12), 'Title': 'Broadcast Football', 'Time':'12:00 - 16:00', 'Description': "UAB @ USMA"},
            //{'Date': new Date(2024, mm, dd), 'Title': "", 'Time':'hh:mm - hh:mm', 'Description': ""},

        ];
        var settings={
            Color: '#000',                //(string - color) font color of whole calendar.
            LinkColor: 'white',            //(string - color) font color of event titles.
            NavShow: true,                //(bool) show navigation arrows.
            NavVertical: false,           //(bool) show previous and coming months.
            NavLocation: '#foo',          //(string - element) where to display navigation, if not in default position.
            DateTimeShow: true,           //(bool) show current date.
            DateTimeFormat: 'mmm, yyyy',  //(string - dateformat) format previously mentioned date is shown in.
            DatetimeLocation: '',         //(string - element) where to display previously mentioned date, if not in default position.
            EventClick: '',               //(function) a function that should instantiate on the click of any event. parameters passed in via data link attribute.
            EventTargetWholeDay: false,   //(bool) clicking on the whole date will trigger event action, as opposed to just clicking on the title.
            DisabledDays: [0,6],             //(array of numbers) days of the week to be slightly transparent. ie: [1,6] to fade Sunday and Saturday.
            //ModelChange: model            //(array of objects) new data object to pass into calendar (serving suggestion: passing through only the currently selected month's events if working with large dataset.
        }
        caleandar(element, events, settings);
    }
}
window.onload = loadCal();