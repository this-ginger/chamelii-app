mobiscroll.setOptions({
    theme: 'material',
    themeVariant: 'light'
});

var oldEvent,
    tempEvent = {},
    deleteEvent,
    restoreEvent,
    colorPicker,
    tempColor,
    titleInput = document.getElementById('event-title'),
    descriptionTextarea = document.getElementById('event-desc'),
    allDaySwitch = document.getElementById('event-all-day'),
    freeSegmented = document.getElementById('event-status-free'),
    busySegmented = document.getElementById('event-status-busy'),
    deleteButton = document.getElementById('event-delete'),
    colorSelect = document.getElementById('event-color-picker'),
    pickedColor = document.getElementById('event-color'),
    colorElms = document.querySelectorAll('.crud-color-c'),
    datePickerResponsive = {
        medium: {
            controls: ['calendar'],
            touchUi: false
        }
    },
    datetimePickerResponsive = {
        medium: {
            controls: ['calendar', 'time'],
            touchUi: false
        }
    },
    myData = [{
        id: 1,
        start: '2023-01-04T13:00',
        end: '2023-01-04T13:45',
        title: 'Meeting with Alex',
        description: '',
        allDay: false,
        free: false,
        color: '#009788'
    }, {
        id: 2,
        start: '2023-01-09T10:00',
        end: '2023-01-13T16:00',
        title: 'Onboarding week',
        description: '',
        allDay: false,
        free: true,
        color: '#ff9900'
    }, {
        id: 3,
        start: '2023-01-18T18:00',
        end: '2023-01-18T22:00',
        title: 'Meeting with Brett',
        description: '',
        allDay: false,
        free: true,
        color: '#3f51b5'
    }, {
        id: 4,
        start: '2023-01-20T10:30',
        end: '2023-01-20T11:30',
        title: 'Client Meeting',
        description: '',
        allDay: false,
        free: true,
        color: '#f44437'
    }];

function createAddPopup(elm) {
    // hide delete button inside add popup
    deleteButton.style.display = 'none';

    deleteEvent = true;
    restoreEvent = false;

    // set popup header text and buttons for adding
    popup.setOptions({
        headerText: 'New event',
        buttons: ['cancel', {
            text: 'Add',
            keyCode: 'enter',
            handler: function () {
                calendar.updateEvent({
                    id: tempEvent.id,
                    title: tempEvent.title,
                    description: tempEvent.description,
                    allDay: tempEvent.allDay,
                    start: tempEvent.start,
                    end: tempEvent.end,
                    color: tempEvent.color,
                });
                // navigate the calendar to the correct view
                calendar.navigateToEvent(tempEvent);
                deleteEvent = false;
                popup.close();
            },
            cssClass: 'mbsc-popup-button-primary'
        }]
    });

    // fill popup with a new event data
    mobiscroll.getInst(titleInput).value = tempEvent.title;
    mobiscroll.getInst(descriptionTextarea).value = '';
    mobiscroll.getInst(allDaySwitch).checked = true;
    range.setVal([tempEvent.start, tempEvent.end]);
    mobiscroll.getInst(busySegmented).checked = true;
    range.setOptions({ controls: ['date'], responsive: datePickerResponsive });
    pickedColor.style.background = '';

    // set anchor for the popup
    popup.setOptions({ anchor: elm });

    popup.open();
}

function createEditPopup(args) {
    var ev = args.event;

    // show delete button inside edit popup
    deleteButton.style.display = 'block';

    deleteEvent = false;
    restoreEvent = true;

    // set popup header text and buttons for editing
    popup.setOptions({
        headerText: 'Edit event',
        buttons: ['cancel', {
            text: 'Save',
            keyCode: 'enter',
            handler: function () {
                var date = range.getVal();
                var eventToSave = {
                    id: ev.id,
                    title: titleInput.value,
                    description: descriptionTextarea.value,
                    allDay: mobiscroll.getInst(allDaySwitch).checked,
                    start: date[0],
                    end: date[1],
                    free: mobiscroll.getInst(freeSegmented).checked,
                    color: ev.color,
                };
                // update event with the new properties on save button click
                calendar.updateEvent(eventToSave);
                // navigate the calendar to the correct view
                calendar.navigateToEvent(eventToSave);
                restoreEvent = false;
                popup.close();
            },
            cssClass: 'mbsc-popup-button-primary'
        }]
    });

    // fill popup with the selected event data
    mobiscroll.getInst(titleInput).value = ev.title || '';
    mobiscroll.getInst(descriptionTextarea).value = ev.description || '';
    mobiscroll.getInst(allDaySwitch).checked = ev.allDay || false;
    range.setVal([ev.start, ev.end]);
    pickedColor.style.background = ev.color || '';

    if (ev.free) {
        mobiscroll.getInst(freeSegmented).checked = true;
    } else {
        mobiscroll.getInst(busySegmented).checked = true;
    }

    // change range settings based on the allDay
    range.setOptions({
        controls: ev.allDay ? ['date'] : ['datetime'],
        responsive: ev.allDay ? datePickerResponsive : datetimePickerResponsive
    });

    // set anchor for the popup
    popup.setOptions({ anchor: args.domEvent.currentTarget });
    popup.open();
}

var calendar = mobiscroll.eventcalendar('#demo-add-delete-event', {
    clickToCreate: 'double',
    dragToCreate: true,
    dragToMove: true,
    dragToResize: true,
    view: {
        calendar: { labels: true }
    },
    // This is for week and day view.
    // renderHeader: function () {
    //     return '<div mbsc-calendar-nav class="cal-header-nav"></div>' +
    //         '<div class="cal-header-picker">' +
    //         '<label><input data-icon="material-event-note" mbsc-segmented type="radio" name="view" value="month" class="md-view-change" checked></label>' +
    //         '<label><input data-icon="material-date-range" mbsc-segmented type="radio" name="view" value="week" class="md-view-change"></label>' +
    //         '<label><input data-icon="material-view-day" mbsc-segmented type="radio" name="view" value="day" class="md-view-change"></label>' +
    //         '</div>' +
    //         '<div mbsc-calendar-prev class="cal-header-prev"></div>' +
    //         '<div mbsc-calendar-next class="cal-header-next"></div>';
    // },
    data: myData,
    onEventClick: function (args) {
        oldEvent = Object.assign({}, args.event);
        tempEvent = args.event;

        if (!popup.isVisible()) {
            createEditPopup(args);
        }
    },
    onEventCreated: function (args) {
        popup.close();
        // store temporary event
        tempEvent = args.event;
        createAddPopup(args.target);
    },
    onEventDeleted: function () {
        mobiscroll.snackbar({            button: {
                action: function () {
                    calendar.addEvent(args.event);
                },
                text: 'Undo'
            },
            message: 'Event deleted'
        });
    }
});

var popup = mobiscroll.popup('#demo-add-popup', {
    display: 'bottom',
    contentPadding: false,
    fullScreen: true,
    onClose: function () {
        if (deleteEvent) {
            calendar.removeEvent(tempEvent);
        } else if (restoreEvent) {
            calendar.updateEvent(oldEvent);
        }
    },
    responsive: {
        medium: {
            display: 'anchored',
            width: 400,
            fullScreen: false,
            touchUi: false
        }
    }
});

titleInput.addEventListener('input', function (ev) {
    // update current event's title
    tempEvent.title = ev.target.value;
});

descriptionTextarea.addEventListener('change', function (ev) {
    // update current event's title
    tempEvent.description = ev.target.value;
});

allDaySwitch.addEventListener('change', function () {
    var checked = this.checked
    // change range settings based on the allDay
    range.setOptions({
        controls: checked ? ['date'] : ['datetime'],
        responsive: checked ? datePickerResponsive : datetimePickerResponsive
    });

    // update current event's allDay property
    tempEvent.allDay = checked;
});

var range = mobiscroll.datepicker('#event-date', {
    controls: ['date'],
    select: 'range',
    startInput: '#start-input',
    endInput: '#end-input',
    showRangeLabels: false,
    touchUi: true,
    responsive: datePickerResponsive,
    onChange: function (args) {
        var date = args.value;
        // update event's start date
        tempEvent.start = date[0];
        tempEvent.end = date[1];
    }
});

document.querySelectorAll('input[name=event-status]').forEach(function (elm) {
    elm.addEventListener('change', function () {
        // update current event's free property
        tempEvent.free = mobiscroll.getInst(freeSegmented).checked;
    });
});

document.querySelectorAll('.md-view-change').forEach(function (elm) {
    elm.addEventListener('change', function (ev) {
        switch (ev.target.value) {
            case 'month':
                calendar.setOptions({
                    view: {
                        calendar: { type: 'month' },
                        agenda: { type: 'month' }
                    }
                })
                break;
            case 'week':
                calendar.setOptions({
                    view: {
                        calendar: { type: 'week' },
                        agenda: { type: 'week' }
                    }
                })
                break;
            case 'day':
                calendar.setOptions({
                    view: {
                        agenda: { type: 'day' }
                    }
                })
                break;
        }
    });
});

deleteButton.addEventListener('click', function () {
    // delete current event on button click
    calendar.removeEvent(oldEvent);
    popup.close();

    // save a local reference to the deleted event
    var deletedEvent = tempEvent;

    mobiscroll.snackbar({        button: {
            action: function () {
                calendar.addEvent(deletedEvent);
            },
            text: 'Undo'
        },
        message: 'Event deleted'
    });
});

colorPicker = mobiscroll.popup('#demo-event-color', {
    display: 'bottom',
    contentPadding: false,
    showArrow: false,
    showOverlay: false,
    buttons: [
        'cancel',
        {
            text: 'Set',
            keyCode: 'enter',
            handler: function (ev) {
                setSelectedColor();
            },
            cssClass: 'mbsc-popup-button-primary'
        }
    ],
    responsive: {
        medium: {
            display: 'anchored',
            anchor: document.getElementById('event-color-cont'),
            buttons: {}
        }
    }
});

function selectColor(color, setColor) {
    var selectedElm = document.querySelector('.crud-color-c.selected');
    var newSelected = document.querySelector('.crud-color-c[data-value="' + color + '"]');

    if (selectedElm) {
        selectedElm.classList.remove('selected')
    }
    if (newSelected) {
        newSelected.classList.add('selected')
    }
    if (setColor) {
        pickedColor.style.background = color || '';
    }
}

function setSelectedColor() {
    tempEvent.color = tempColor;
    pickedColor.style.background = tempColor;
    colorPicker.close();
}

colorSelect.addEventListener('click', function () {
    selectColor(tempEvent.color || '');
    colorPicker.open();
});

colorElms.forEach(function (elm) {
    elm.addEventListener('click', function () {
        tempColor = elm.getAttribute('data-value');
        selectColor(tempColor);

        if (!colorPicker.s.buttons.length) {
            setSelectedColor();
        }
    });
});