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
function loadCal() {
    document.getElementById('loadCalButton').classList.add("hidden");
    if (document.getElementById('calendar').children.length===0) {
        var element = document.getElementById('calendar');
        var events = [
            // REMEMBER, the month (second column) starts at ZERO, not one.
            {'Date': new Date(2024, 09, 08), 'Title': 'Drill Support',      'Time':'16:30', 'T_end':'18:30', 'Type':'pa', 'Description': "Provide audio system for 1st/2nd drill practice"},
            {'Date': new Date(2024, 09, 10), 'Title': 'Drill Support',      'Time':'16:30', 'T_end':'18:30', 'Type':'pa', 'Description': "Provide audio system for 1st/2nd drill practice"},
            {'Date': new Date(2024, 09, 12), 'Title': 'UAB @ USMA',         'Time':'12:00', 'T_end':'16:00', 'Type':'fb', 'Description': "Broadcast live coverage of Army football"},
            {'Date': new Date(2024, 09, 15), 'Title': 'Drill Support',      'Time':'16:30', 'T_end':'18:30', 'Type':'pa', 'Description': "Provide audio system for 3rd/4th drill practice"},
            {'Date': new Date(2024, 09, 16), 'Title': 'Drill Support',      'Time':'16:30', 'T_end':'18:30', 'Type':'pa', 'Description': "Provide audio system for 1st/2nd drill practice"},
            {'Date': new Date(2024, 09, 17), 'Title': 'Drill Support',      'Time':'16:30', 'T_end':'18:30', 'Type':'pa', 'Description': "Provide audio system for full brigade drill practice"},
            {'Date': new Date(2024, 09, 18), 'Title': '4th Reg TurkeyBowl', 'Time':'17:00', 'T_end':'19:30', 'Type':'dj', 'Description': "Provide DJ support for 4th Reg TurkeyBowl (<a href='#10/18/2024_1'>Replay</a>)"},
            {'Date': new Date(2024, 09, 18), 'Title': '2nd Reg BBQ',        'Time':'18:00', 'T_end':'20:30', 'Type':'dj', 'Description': "Provide DJ support for 2nd Reg BBQ (<a href='#10/18/2024_2'>Replay</a>)"},
            {'Date': new Date(2024, 09, 19), 'Title': 'ECU @ USMA',         'Time':'12:00', 'T_end':'16:00', 'Type':'fb', 'Description': "Broadcast live coverage of Army football (Homecoming Game)"},
            {'Date': new Date(2024, 09, 25), 'Title': 'Brigade Sandhurst',  'Time':'16:30', 'T_end':'20:30', 'Type':'dj', 'Description': "Provide DJ support for Brigade Sandhurst Combatives"},
            {'Date': new Date(2024, 09, 30), 'Title': 'Drill Support',      'Time':'16:30', 'T_end':'18:30', 'Type':'pa', 'Description': "Provide audio system for 1st/2nd drill practice"},
            {'Date': new Date(2024, 09, 31), 'Title': 'Drill Support',      'Time':'16:30', 'T_end':'18:30', 'Type':'pa', 'Description': "Provide audio system for 1st/2nd drill practice"},
            {'Date': new Date(2024, 09, 31), 'Title': "1st Reg Halloween",  'Time':'17:50', 'T_end':'20:00', 'Type':'dj', 'Description': "Provide DJ support for 1st Reg Halloween BBQ"},
            {'Date': new Date(2024, 10, 01), 'Title': "USAFA @ USMA",       'Time':'17:30', 'T_end':'21:00', 'Type':'bx', 'Description': "Provide walk-on music for Army Boxing"},
            {'Date': new Date(2024, 10, 01), 'Title': "2nd Reg Strikefest", 'Time':'19:45', 'T_end':'21:00', 'Type':'dj', 'Description': "Provide DJ support for 2nd Reg Strikefest"},
            {'Date': new Date(2024, 10, 02), 'Title': "USAFA @ USMA",       'Time':'12:00', 'T_end':'16:00', 'Type':'fb', 'Description': "Broadcast live coverage of Army football"},
            //{'Date': new Date(2024, mm, dd), 'Title': "",                 'Time':'hh:mm', 'T_end':'hh:mm', 'Type':'--', 'Description': ""},

        ];
        var settings={
            Color: '#000',                //(string - color) font color of whole calendar.
            //LinkColor: 'white',         //(string - color) font color of event titles.
            NavShow: true,                //(bool) show navigation arrows.
            NavVertical: false,           //(bool) show previous and coming months.
            NavLocation: '#foo',          //(string - element) where to display navigation, if not in default position.
            DateTimeShow: true,           //(bool) show current date.
            DateTimeFormat: 'mmm, yyyy',  //(string - dateformat) format previously mentioned date is shown in.
            DatetimeLocation: '',         //(string - element) where to display previously mentioned date, if not in default position.
            EventClick: '',               //(function) a function that should instantiate on the click of any event. parameters passed in via data link attribute.
            EventTargetWholeDay: false,   //(bool) clicking on the whole date will trigger event action, as opposed to just clicking on the title.
            //DisabledDays: [0,6],        //(array of numbers) days of the week to be slightly transparent. ie: [0,6] to fade Sunday and Saturday.
            //ModelChange: model          //(array of objects) new data object to pass into calendar (serving suggestion: passing through only the currently selected month's events if working with large dataset.
        }
        caleandar(element, events, settings);
    }
}
window.onload = loadCal();
