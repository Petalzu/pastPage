var _cal
$(document).ready(function() {
    var templates = {
        popupEdit: function() {
            return 'Edit Me';
        },
        popupDelete: function() {
            return 'Delete Me';
        }
    }

    _cal = new tui.Calendar('#calendar', {
        defaultView: 'week',
        taskView: false,
        template: templates,
        useDetailPopup: true
    });



    //create calendar
    var CalendarList = []
    calendar = new CalendarInfo();

    calendar.id = 1;
    calendar.calendarId = String(1);
    calendar.name = 'Subject';
    calendar.color = 'ffffff';
    calendar.bgColor = '#9e5fff';
    CalendarList.push(calendar);
    _cal.setCalendars(CalendarList)


    //create schedules
    _cal.createSchedules([{
        id: '1',
        calendarId: '1',
        title: 'Termin1',
        category: 'time',
        dueDateClass: '',
        start: '2021-04-06T17:30:00+01:00',
        end: '2021-04-06T19:30:00+01:00',
        isReadOnly: false,
        location: 'here'
    }]);
})