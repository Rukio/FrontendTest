var list = document.querySelector('ul');
var taskFilter = document.getElementById('taskFilter');
var taskDayFilter = document.getElementById('taskDayFilter');
var taskNumber = document.getElementById('taskNumber');
var refreshButton = document.getElementById('refresh');
var warningWrapper = document.getElementById('warningWrapper');
var warningMessage = document.getElementById('warningMessage');
var closeWarning = document.getElementById('closeWarning');

/* Calendar DOM-elements */
var calMonthYear = document.getElementById('calMonthYear');
var calDate = document.querySelectorAll('.calDate');

var warningTaskNames = [];
var warningTasks = 0;

function filterUp() {

    if(taskFilter.options.selectedIndex == 0) {
        var listItems = document.getElementsByTagName('li');
        var dayTaskNumber = 0;

        for(i = 0; i < listItems.length; i++) {
                var itemDateText = listItems[i].childNodes[2].innerHTML;
                var filterDate = new Date(taskDayFilter.value);
                var day = filterDate.getDate();
                var month = filterDate.getMonth() + 1;
                var year = filterDate.getFullYear();

                if(day < 10) day = '0' + day;
                if(month < 10) month = '0' + month;

                var filterDateText = day + '.' + month + '.' + year;

            if (~itemDateText.indexOf(filterDateText)) {
                dayTaskNumber++;
                taskNumber.innerHTML = dayTaskNumber;
                taskNumber.parentNode.style.display = 'block';
            }
            if (filterDate == 'Invalid Date') {
                taskNumber.innerHTML = '';
                taskNumber.parentNode.style.display = 'none';
            }
            
            
            if(listItems[i].classList.contains('checked')) {
                if (~itemDateText.indexOf(filterDateText)) {
                    listItems[i].style.display = 'block';
                }
                else if (!~itemDateText.indexOf(filterDateText) && !listItems[i].childNodes[8]) {
                    listItems[i].style.display = 'none';
                }

                if (filterDate == 'Invalid Date') {
                    listItems[i].style.display = 'block';
                }
            }
            if(!listItems[i].classList.contains('checked')) {

                if (~itemDateText.indexOf(filterDateText)) {
                    listItems[i].style.display = 'block';
                }
                else if (!~itemDateText.indexOf(filterDateText) && !listItems[i].childNodes[8]) {
                    listItems[i].style.display = 'none';
                }

                if (filterDate == 'Invalid Date') {
                    listItems[i].style.display = 'block';
                }
            }
        }
        if (dayTaskNumber == 0) {
            taskNumber.innerHTML = '0';
        }
    }
    if(taskFilter.options.selectedIndex == 1) {
        var listItems = document.getElementsByTagName('li');
        var dayTaskNumber = 0;

        for(i = 0; i < listItems.length; i++) {

            var itemDateText = listItems[i].childNodes[2].innerHTML;
            var filterDate = new Date(taskDayFilter.value);
            var day = filterDate.getDate();
            var month = filterDate.getMonth() + 1;
            var year = filterDate.getFullYear();

            if(day < 10) day = '0' + day;
            if(month < 10) month = '0' + month;
            var filterDateText = day + '.' + month + '.' + year;
            
            if (~itemDateText.indexOf(filterDateText)) {
                dayTaskNumber++;
                taskNumber.innerHTML = dayTaskNumber;
                taskNumber.parentNode.style.display = 'block';
            }
            if (filterDate == 'Invalid Date') {
                taskNumber.innerHTML = '';
                taskNumber.parentNode.style.display = 'none';
            }
            if (!~itemDateText.indexOf(filterDateText)) {
                dayTaskNumber = 0;
                taskNumber.innerHTML = '';
                taskNumber.parentNode.style.display = 'none';
            }

            if(listItems[i].classList.contains('checked')) {
                listItems[i].style.display = 'none';
            }

            if(!listItems[i].classList.contains('checked')) {
                if (~itemDateText.indexOf(filterDateText)) {
                    listItems[i].style.display = 'block';
                }
                else if (!~itemDateText.indexOf(filterDateText) && !listItems[i].childNodes[8]) {
                    listItems[i].style.display = 'none';
                }

                if (filterDate == 'Invalid Date') {
                    listItems[i].style.display = 'block';
                }
            }
        }
    }
    else if (taskFilter.options.selectedIndex == 2) {
        var listItems = document.getElementsByTagName('li');
        var dayTaskNumber = 0;

        for(i = 0; i < listItems.length; i++) {

            var itemDateText = listItems[i].childNodes[2].innerHTML;
            var filterDate = new Date(taskDayFilter.value);
            var day = filterDate.getDate();
            var month = filterDate.getMonth() + 1;
            var year = filterDate.getFullYear();

            if(day < 10) day = '0' + day;
            if(month < 10) month = '0' + month;
            var filterDateText = day + '.' + month + '.' + year;

            if (~itemDateText.indexOf(filterDateText)) {
                dayTaskNumber++;
                taskNumber.innerHTML = dayTaskNumber;
                taskNumber.parentNode.style.display = 'block';
            }
            if (filterDate == 'Invalid Date') {
                taskNumber.innerHTML = '';
                taskNumber.parentNode.style.display = 'none';
            }
            if (!~itemDateText.indexOf(filterDateText)) {
                dayTaskNumber = 0;
            }

            if(listItems[i].classList.contains('checked')) {
                if (~itemDateText.indexOf(filterDateText)) {
                    listItems[i].style.display = 'block';
                }
                else if (!~itemDateText.indexOf(filterDateText) && !listItems[i].childNodes[8]) {
                    listItems[i].style.display = 'none';
                }

                if (filterDate == 'Invalid Date') {
                    listItems[i].style.display = 'block';
                }
            }
            if(!listItems[i].classList.contains('checked')) {
                listItems[i].style.display = 'none';
            }
        }
    }
    calendarUpdate();
}

function calendarUpdate() {
    var taskDates = document.querySelectorAll('.date');
    var calMonth;
    var calDay;
    var filterDate = new Date(taskDayFilter.value);
    var day = filterDate.getDate();
    var month = filterDate.getMonth() + 1;
    var year = filterDate.getFullYear();
    var calCorrectedDay;

    if(day < 10) day = '0' + day;
    if(month < 10) month = '0' + month;
    var filterDateText = day + '.' + month + '.' + year;

    switch (filterDate.getMonth() + 1) {
        case 1: calMonth = 'Январь';
            break;
        case 2: calMonth = 'Февраль';
            break;
        case 3: calMonth = 'Март';
            break;
        case 4: calMonth = 'Апрель';
            break;
        case 5: calMonth = 'Май';
            break;
        case 6: calMonth = 'Июнь';
            break;
        case 7: calMonth = 'Июль';
            break;
        case 8: calMonth = 'Август';
            break;
        case 9: calMonth = 'Сентябрь';
            break;
        case 10: calMonth = 'Октябрь';
            break;
        case 11: calMonth = 'Ноябрь';
            break;
        case 12: calMonth = 'Декабрь';
            break;
    }

    if (!calMonth) {
        calMonthYear.innerHTML = 'Выберите дату';
    } else {
        calMonthYear.innerHTML = calMonth + ' ' + filterDate.getFullYear();
    }

    switch (filterDate.getDay()) {
        case 0: calDay = 'Вс';
            break;
        case 1: calDay = 'Пн';
            break;
        case 2: calDay = 'Вт';
            break;
        case 3: calDay = 'Ср';
            break;
        case 4: calDay = 'Чт';
            break;
        case 5: calDay = 'Пт';
            break;
        case 6: calDay = 'Сб';
            break;
    }

    var filMonth = filterDate.getMonth();
    var filYear = filterDate.getFullYear();

    var filFirstDate = new Date(filYear, filMonth, 1);
    var filLastDate = new Date(filYear, filMonth + 1, 0);
    
    var filFirstDay;
    var filLastDay;

    switch (filFirstDate.getDay()) {
        case 0: filFirstDay = 'Вс';
            break;
        case 1: filFirstDay = 'Пн';
            break;
        case 2: filFirstDay = 'Вт';
            break;
        case 3: filFirstDay = 'Ср';
            break;
        case 4: filFirstDay = 'Чт';
            break;
        case 5: filFirstDay = 'Пт';
            break;
        case 6: filFirstDay = 'Сб';
            break;
    }

    switch (filLastDate.getDay()) {
        case 0: filLastDay = 'Вс';
            break;
        case 1: filLastDay = 'Пн';
            break;
        case 2: filLastDay = 'Вт';
            break;
        case 3: filLastDay = 'Ср';
            break;
        case 4: filLastDay = 'Чт';
            break;
        case 5: filLastDay = 'Пт';
            break;
        case 6: filLastDay = 'Сб';
            break;
    }

    if (filterDate != "Invalid Date") {
        if (filFirstDay == 'Пн') {
            var dayCount = 1;
            var tasksInDay = 0;
            for (i = 0; i < calDate.length; i++) {
                calDate[i].innerHTML = '';
            }
            for (i = 0; i < filLastDate.getDate(); i++) {
                calDate[i].innerHTML = dayCount;
                calDate[i].classList.remove('jzdb');
                calDate[i].removeAttribute('style');
                
                dayCount++;
                for(j = 0; j < taskDates.length; j++) {
                    if (~taskDates[j].innerHTML.indexOf(month + '.' + year)) {
                        if (Number(calDate[i].innerHTML) < 10) {
                            calCorrectedDay = '0' + calDate[i].innerHTML;
                        } else {
                            calCorrectedDay = calDate[i].innerHTML;
                        }
                        if (~calCorrectedDay.indexOf(taskDates[j].innerHTML.charAt(0) + taskDates[j].innerHTML.charAt(1))) {
                            tasksInDay++;
                            calDate[i].style.color = 'yellow';
                            calDate[i].setAttribute('data-title', 'Дел: ' + tasksInDay);
                            // console.log(calCorrectedDay + ' and ' + taskDates[j].innerHTML.charAt(0) + taskDates[j].innerHTML.charAt(1));
                        }
                    }
                }
                tasksInDay = 0;
            }
        }
        if (filFirstDay == 'Вт') {
            var dayCount = 1;
            var tasksInDay = 0;
            for (i = 0; i < calDate.length; i++) {
                calDate[i].innerHTML = '';
            }
            for (i = 1; i < filLastDate.getDate() + 1; i++) {
                calDate[i].innerHTML = dayCount;
                calDate[i].classList.remove('jzdb');
                calDate[i].removeAttribute('style');

                dayCount++;
                for(j = 0; j < taskDates.length; j++) {
                    if (~taskDates[j].innerHTML.indexOf(month + '.' + year)) {
                        if (Number(calDate[i].innerHTML) < 10) {
                            calCorrectedDay = '0' + calDate[i].innerHTML;
                        } else {
                            calCorrectedDay = calDate[i].innerHTML;
                        }
                        if (~calCorrectedDay.indexOf(taskDates[j].innerHTML.charAt(0) + taskDates[j].innerHTML.charAt(1))) {
                            tasksInDay++;
                            calDate[i].style.color = 'yellow';
                            calDate[i].setAttribute('data-title', 'Дел: ' + tasksInDay);
                            // console.log(calCorrectedDay + ' and ' + taskDates[j].innerHTML.charAt(0) + taskDates[j].innerHTML.charAt(1));
                        }
                    }
                }
                tasksInDay = 0;
            }
        }
        
        if (filFirstDay == 'Ср') {
            var dayCount = 1;
            var tasksInDay = 0;
            for (i = 0; i < calDate.length; i++) {
                calDate[i].innerHTML = '';
            }
            for (i = 2; i < filLastDate.getDate() + 2; i++) {
                calDate[i].innerHTML = dayCount;
                calDate[i].classList.remove('jzdb');
                calDate[i].removeAttribute('style');

                dayCount++;
                for(j = 0; j < taskDates.length; j++) {
                    if (~taskDates[j].innerHTML.indexOf(month + '.' + year)) {
                        if (Number(calDate[i].innerHTML) < 10) {
                            calCorrectedDay = '0' + calDate[i].innerHTML;
                        } else {
                            calCorrectedDay = calDate[i].innerHTML;
                        }
                        if (~calCorrectedDay.indexOf(taskDates[j].innerHTML.charAt(0) + taskDates[j].innerHTML.charAt(1))) {
                            tasksInDay++;
                            calDate[i].style.color = 'yellow';
                            calDate[i].setAttribute('data-title', 'Дел: ' + tasksInDay);
                            // console.log(calCorrectedDay + ' and ' + taskDates[j].innerHTML.charAt(0) + taskDates[j].innerHTML.charAt(1));
                        }
                    }
                }
                tasksInDay = 0;
            }
        }

        if (filFirstDay == 'Чт') {
            var dayCount = 1;
            var tasksInDay = 0;
            for (i = 0; i < calDate.length; i++) {
                calDate[i].innerHTML = '';
            }
            for (i = 3; i < filLastDate.getDate() + 3; i++) {
                calDate[i].innerHTML = dayCount;
                calDate[i].classList.remove('jzdb');
                calDate[i].removeAttribute('style');

                dayCount++;
                for(j = 0; j < taskDates.length; j++) {
                    if (~taskDates[j].innerHTML.indexOf(month + '.' + year)) {
                        if (Number(calDate[i].innerHTML) < 10) {
                            calCorrectedDay = '0' + calDate[i].innerHTML;
                        } else {
                            calCorrectedDay = calDate[i].innerHTML;
                        }
                        if (~calCorrectedDay.indexOf(taskDates[j].innerHTML.charAt(0) + taskDates[j].innerHTML.charAt(1))) {
                            tasksInDay++;
                            calDate[i].style.color = 'yellow';
                            calDate[i].setAttribute('data-title', 'Дел: ' + tasksInDay);
                            // console.log(calCorrectedDay + ' and ' + taskDates[j].innerHTML.charAt(0) + taskDates[j].innerHTML.charAt(1));
                        }
                    }
                }
                tasksInDay = 0;
            }
        }

        if (filFirstDay == 'Пт') {
            var dayCount = 1;
            var tasksInDay = 0;
            for (i = 0; i < calDate.length; i++) {
                calDate[i].innerHTML = '';
            }
            for (i = 4; i < filLastDate.getDate() + 4; i++) {
                calDate[i].innerHTML = dayCount;
                calDate[i].classList.remove('jzdb');
                calDate[i].removeAttribute('style');

                dayCount++;
                for(j = 0; j < taskDates.length; j++) {
                    if (~taskDates[j].innerHTML.indexOf(month + '.' + year)) {
                        if (Number(calDate[i].innerHTML) < 10) {
                            calCorrectedDay = '0' + calDate[i].innerHTML;
                        } else {
                            calCorrectedDay = calDate[i].innerHTML;
                        }
                        if (~calCorrectedDay.indexOf(taskDates[j].innerHTML.charAt(0) + taskDates[j].innerHTML.charAt(1))) {
                            tasksInDay++;
                            calDate[i].style.color = 'yellow';
                            calDate[i].setAttribute('data-title', 'Дел: ' + tasksInDay);
                            // console.log(calCorrectedDay + ' and ' + taskDates[j].innerHTML.charAt(0) + taskDates[j].innerHTML.charAt(1));
                        }
                    }
                }
                tasksInDay = 0;
            }
        }

        if (filFirstDay == 'Сб') {
            var dayCount = 1;
            var tasksInDay = 0;
            for (i = 0; i < calDate.length; i++) {
                calDate[i].innerHTML = '';
            }
            for (i = 5; i < filLastDate.getDate() + 5; i++) {
                calDate[i].innerHTML = dayCount;
                calDate[i].classList.remove('jzdb');
                calDate[i].removeAttribute('style');

                dayCount++;
                for(j = 0; j < taskDates.length; j++) {
                    if (~taskDates[j].innerHTML.indexOf(month + '.' + year)) {
                        if (Number(calDate[i].innerHTML) < 10) {
                            calCorrectedDay = '0' + calDate[i].innerHTML;
                        } else {
                            calCorrectedDay = calDate[i].innerHTML;
                        }
                        if (~calCorrectedDay.indexOf(taskDates[j].innerHTML.charAt(0) + taskDates[j].innerHTML.charAt(1))) {
                            tasksInDay++;
                            calDate[i].style.color = 'yellow';
                            calDate[i].setAttribute('data-title', 'Дел: ' + tasksInDay);
                            // console.log(calCorrectedDay + ' and ' + taskDates[j].innerHTML.charAt(0) + taskDates[j].innerHTML.charAt(1));
                        }
                    }
                }
                tasksInDay = 0;
            }
        }

        if (filFirstDay == 'Вс') {
            var dayCount = 1;
            var tasksInDay = 0;
            for (i = 0; i < calDate.length; i++) {
                calDate[i].innerHTML = '';
            }
            for (i = 6; i < filLastDate.getDate() + 6; i++) {
                calDate[i].innerHTML = dayCount;
                calDate[i].classList.remove('jzdb');
                calDate[i].removeAttribute('style');

                dayCount++;
                for(j = 0; j < taskDates.length; j++) {
                    if (~taskDates[j].innerHTML.indexOf(month + '.' + year)) {
                        if (Number(calDate[i].innerHTML) < 10) {
                            calCorrectedDay = '0' + calDate[i].innerHTML;
                        } else {
                            calCorrectedDay = calDate[i].innerHTML;
                        }
                        if (~calCorrectedDay.indexOf(taskDates[j].innerHTML.charAt(0) + taskDates[j].innerHTML.charAt(1))) {
                            tasksInDay++;
                            calDate[i].style.color = 'yellow';
                            calDate[i].setAttribute('data-title', 'Дел: ' + tasksInDay);
                            // console.log(calCorrectedDay + ' and ' + taskDates[j].innerHTML.charAt(0) + taskDates[j].innerHTML.charAt(1));
                        }
                    }
                }
                tasksInDay = 0;
            }
        }

        for (i = 0; i < calDate.length; i++) {
            if (!calDate[i].hasAttribute('style')) calDate[i].removeAttribute('data-title');
            if (calDate[i].innerHTML == '') {
                if (!calDate[i].classList.contains('.jzdb')) {
                    calDate[i].classList.add('jzdb');
                    calDate[i].removeAttribute('style');
                }
            }
        }
    }
}

taskFilter.onchange = filterUp;
taskDayFilter.onchange = filterUp;
closeWarning.addEventListener('click', function() {
    warningWrapper.style.right = '-400px';
});

var todos;
function toLocal() { // write the changes to the local storage
    todos = list.innerHTML;
    localStorage.setItem('todos', todos);
}

list.addEventListener('click', function(ev) {
    if(ev.target.className === 'title') {
        if (!ev.target.parentNode.classList.contains('outdated')) {
            ev.target.parentNode.classList.toggle('checked');
            toLocal();
        }
    } else if (ev.target.tagName === "SPAN") { // if pressing the delete button
        var listItem = ev.target.parentNode;
        listItem.remove();
        localStorage.removeItem(ev.target.nextSibling.innerHTML); // removing time data of a list item from the local storage
        toLocal();
    } else if (ev.target.innerHTML === "Изменить") { // if pressing an edit button
        editNote(ev);
        toLocal();
    } else if (ev.target.innerHTML === "Отмена") {
        cancelEdit(ev);
        toLocal();
    }
    filterUp();
}, false);

function editNote(ev) {
    var listItem = ev.target.parentNode; // getting targeted list item

    if (!listItem.classList.contains('editing')) {
        listItem.classList.toggle('editing');
        var removeButton = ev.target.parentNode.childNodes[0];
        var editBtn = ev.target.parentNode.lastChild;
        var listItemTitle = ev.target.parentNode.childNodes[1];
        var listItemDate = ev.target.parentNode.childNodes[2];
        var listItemDesc = ev.target.parentNode.childNodes[3];

        var listItemTitleText = ev.target.parentNode.childNodes[1].innerHTML; // getting title and description of an element
        var listItemDateText = ev.target.parentNode.childNodes[2].innerHTML;
        var listItemDescText = ev.target.parentNode.childNodes[3].innerHTML;

        var listItemTitleField = document.createElement('INPUT'); // creating fields for editing
        var listItemDateField = document.createElement('INPUT');
        var listItemDescField = document.createElement('TEXTAREA');
        listItemDateField.setAttribute('type', 'datetime-local');
        var cancelButton = document.createElement('BUTTON');

        cancelButton.innerHTML = 'Отмена';
        listItemTitleField.setAttribute('value', listItemTitleText);
        listItemDateField.setAttribute('value', listItemDateText);
        listItemDescField.innerHTML = listItemDescText;

        listItem.prepend(listItemDescField);
        listItem.prepend(listItemDateField);
        listItem.prepend(listItemTitleField);
        listItem.prepend(removeButton);
        listItem.append(cancelButton);


        listItemTitle.style.display = 'none';
        listItemDate.style.display = 'none';
        listItemDesc.style.display = 'none';
    } else {
        listItem.classList.toggle('editing');
        var removeButton = ev.target.parentNode.childNodes[0];
        var cancelButton = ev.target.parentNode.lastChild;
        var listItemTitleField = ev.target.parentNode.childNodes[1];
        var listItemDateField = ev.target.parentNode.childNodes[2];
        var listItemDescField = ev.target.parentNode.childNodes[3];

        var listItemTitle = ev.target.parentNode.childNodes[4];
        var listItemDate = ev.target.parentNode.childNodes[5];
        var listItemDesc = ev.target.parentNode.childNodes[6];

        var listItemTitleFieldText = listItemTitleField.value; // getting title and description of an element
        var listItemDateFieldText = listItemDateField.value;
        var changedDate = new Date(listItemDateFieldText);
        var day = changedDate.getDate();
        var month = changedDate.getMonth() + 1;
        var year = changedDate.getFullYear();
        var hours = changedDate.getHours();
        var minutes = changedDate.getMinutes();

        if(day < 10) day = '0' + day;
        if(month < 10) month = '0' + month;
        if(hours < 10) hours = '0' + hours;
        if(minutes < 10) minutes = '0' + minutes;

        if(changedDate < new Date()) {
            if(!listItem.classList.contains('outdated')) {
                listItem.classList.toggle('outdated');
            }
        } else {
            if(listItem.classList.contains('outdated')) {
                listItem.classList.toggle('outdated');
            }
        }
        var listItemDescFieldText = listItemDescField.value;

        localStorage.removeItem(listItemTitle.innerHTML);
        localStorage.setItem(listItemTitleFieldText, changedDate);

        listItemTitle.innerHTML = listItemTitleFieldText;
        listItemDate.innerHTML = day + '.' + month + '.' + year + ' ' + hours + ':' + minutes;
        listItemDesc.innerHTML = listItemDescFieldText;

        listItemTitle.style.display = 'block';
        listItemDate.style.display = 'block';
        listItemDesc.style.display = 'block';

        listItemTitleField.remove();
        listItemDateField.remove();
        listItemDescField.remove();
        cancelButton.remove();
    }
}

function cancelEdit(ev) {
    var listItem = ev.target.parentNode;

    var listItemTitle = ev.target.parentNode.childNodes[4];
    var listItemDate = ev.target.parentNode.childNodes[5];
    var listItemDesc = ev.target.parentNode.childNodes[6];

    var listItemTitleField = ev.target.parentNode.childNodes[1];
    var listItemDateField = ev.target.parentNode.childNodes[2];
    var listItemDescField = ev.target.parentNode.childNodes[3];

    var cancelButton = ev.target.parentNode.lastChild;

    listItemTitle.style.display = 'block';
    listItemDate.style.display = 'block';
    listItemDesc.style.display = 'block';

    listItemTitleField.remove();
    listItemDateField.remove();
    listItemDescField.remove();
    cancelButton.remove();
    if (listItem.classList.contains('editing')) {
        listItem.classList.toggle('editing');
    }
}

function newElement() {
    var li = document.createElement('li');
    var inputValue = document.getElementById('toDoEl').value;
    var descValue = document.getElementById('itemDescription').value;
    var t = document.createTextNode(inputValue);
    var d = document.createTextNode(descValue);
    var title = document.createElement('H2');
    title.setAttribute('class', 'title');
    var descText = document.createElement('p');
    var span = document.createElement('SPAN');
    var txt = document.createTextNode('X');
    var editBtn = document.createElement('button');
    var noteDate = document.createElement('p');
    var addedDate = document.getElementById('dateTime');

    var convertedDate = new Date(addedDate.value);
    var day = convertedDate.getDate();
    var month = convertedDate.getMonth() + 1;
    var year = convertedDate.getFullYear();
    var hours = convertedDate.getHours();
    var minutes = convertedDate.getMinutes();

    if(day < 10) day = '0' + day;
    if(month < 10) month = '0' + month;
    if(hours < 10) hours = '0' + hours;
    if(minutes < 10) minutes = '0' + minutes;

    noteDate.classList.add('date');
    noteDate.innerHTML = day + '.' + month + '.' + year + ' ' + hours + ':' + minutes;
    editBtn.innerHTML = 'Изменить';
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
    title.appendChild(t);
    li.appendChild(title);
    li.appendChild(noteDate);
    descText.appendChild(d);
    li.appendChild(descText);
    li.appendChild(editBtn);
    if(inputValue == '') {
        alert("Введите название задачи.");
    } else if(addedDate.value == '') {
        alert("Введите дату и время задачи.");
    } else if(addedDate.value == '' && inputValue == '') {
        alert("Введите название задачи, дату и время.");
    } else {
        document.getElementById('list').appendChild(li);
    }
    document.getElementById('toDoEl').value = '';

    if(convertedDate < new Date()) {
        li.classList.toggle('outdated');
    }

    localStorage.setItem(inputValue, convertedDate);

    toLocal();
}

if(localStorage.getItem('todos')) {
    list.innerHTML = localStorage.getItem('todos');
}


/* Loading todo list from a local storage */
for (i = 0; i < document.querySelectorAll('.title').length; i++) {
    if(localStorage.getItem(document.querySelectorAll('.title')[i].innerHTML)) {
            var storeItemDate = new Date(localStorage.getItem(document.querySelectorAll('.title')[i].innerHTML));
            var currentDate = new Date();
            var warningDate = new Date(storeItemDate);
            warningDate.setHours(warningDate.getHours() - 3);

            if(storeItemDate < new Date()) {
                if (!document.querySelectorAll('.title')[i].parentNode.classList.contains('outdated'))
                    document.querySelectorAll('.title')[i].parentNode.classList.toggle('outdated');
            }

            if(storeItemDate > currentDate && warningDate <= currentDate) {
                if (!document.querySelectorAll('.title')[i].parentNode.classList.contains('warning'))
                    document.querySelectorAll('.title')[i].parentNode.classList.toggle('warning');
                var warningTaskName = document.querySelectorAll('.title')[i].innerHTML;
                warningTaskNames.push(warningTaskName);
                if(!~warningMessage.innerHTML.indexOf('Заканчивается время на выполнение заданий:'))
                    warningMessage.innerHTML = 'Заканчивается время на выполнение заданий:<br>';
                warningMessage.innerHTML+= warningTaskNames[warningTasks] + "<br>";
                var warningTimeout = setTimeout(function() {
                    warningWrapper.style.right = '5px';
                }, 500);
                warningTasks++;
                
            } else {
                if (document.querySelectorAll('.title')[i].parentNode.classList.contains('warning'))
                    document.querySelectorAll('.title')[i].parentNode.classList.toggle('warning');
            }
    }
}
filterUp();