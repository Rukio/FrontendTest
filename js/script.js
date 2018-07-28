var list = document.querySelector('ul');
var taskFilter = document.getElementById('taskFilter');
var taskDayFilter = document.getElementById('taskDayFilter');
var refreshButton = document.getElementById('refresh');

function filterUp() {

    // if (new Date(listItems[i].childNodes[2].innerHTML).getDate == new Date(taskDayFilter.value).getDate) {
        if(taskFilter.options.selectedIndex == 0) {
            var listItems = document.getElementsByTagName('li');

            for(i = 0; i < listItems.length; i++) {
                    var itemDateText = listItems[i].childNodes[2].innerHTML;
                    var filterDate = new Date(taskDayFilter.value);
                    var day = filterDate.getDate();
                    var month = filterDate.getMonth() + 1;
                    var year = filterDate.getFullYear();
                    var filterDateText = day + '.' + month + '.' + year;

                if(listItems[i].classList.contains('checked')) {
                    if (~itemDateText.indexOf(filterDateText)) {
                        listItems[i].style.display = 'block';
                    }
                    else if (!~itemDateText.indexOf(filterDateText)) {
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
                    else if (!~itemDateText.indexOf(filterDateText)) {
                        listItems[i].style.display = 'none';
                    }

                    if (filterDate == 'Invalid Date') {
                        listItems[i].style.display = 'block';
                    }
                    // console.log(itemDateText);
                    // console.log(filterDateText);
                }
            }
        }
        if(taskFilter.options.selectedIndex == 1) {
            var listItems = document.getElementsByTagName('li');

            for(i = 0; i < listItems.length; i++) {

                var itemDateText = listItems[i].childNodes[2].innerHTML;
                var filterDate = new Date(taskDayFilter.value);
                var day = filterDate.getDate();
                var month = filterDate.getMonth() + 1;
                var year = filterDate.getFullYear();
                var filterDateText = day + '.' + month + '.' + year;
                
                if(listItems[i].classList.contains('checked')) {
                    listItems[i].style.display = 'none';
                }
                if(!listItems[i].classList.contains('checked')) {
                    if (~itemDateText.indexOf(filterDateText)) {
                        listItems[i].style.display = 'block';
                    }
                    else if (!~itemDateText.indexOf(filterDateText)) {
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

            for(i = 0; i < listItems.length; i++) {

                var itemDateText = listItems[i].childNodes[2].innerHTML;
                var filterDate = new Date(taskDayFilter.value);
                var day = filterDate.getDate();
                var month = filterDate.getMonth() + 1;
                var year = filterDate.getFullYear();
                var filterDateText = day + '.' + month + '.' + year;

                if(listItems[i].classList.contains('checked')) {
                    if (~itemDateText.indexOf(filterDateText)) {
                        listItems[i].style.display = 'block';
                    }
                    else if (!~itemDateText.indexOf(filterDateText)) {
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
    // }
}

taskFilter.onchange = filterUp;
taskDayFilter.onchange = filterUp;

var todos;
function toLocal() { // write the changes to the local storage
    todos = list.innerHTML;
    localStorage.setItem('todos', todos);
}

list.addEventListener('click', function(ev) {
    if(ev.target.tagName === 'H2') {
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
    var listItem = ev.target.parentNode; // returning targeted list item

    if (!listItem.classList.contains('editing')) {
        listItem.classList.toggle('editing');
        var removeButton = ev.target.parentNode.childNodes[0];
        var editBtn = ev.target.parentNode.lastChild;
        var listItemTitle = ev.target.parentNode.childNodes[1];
        var listItemDate = ev.target.parentNode.childNodes[2];
        var listItemDesc = ev.target.parentNode.childNodes[3];

        var listItemTitleText = ev.target.parentNode.childNodes[1].innerHTML; // returning title and description of an element
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

        var listItemTitleFieldText = listItemTitleField.value; // returning title and description of an element
        var listItemDateFieldText = listItemDateField.value;
        var changedDate = new Date(listItemDateFieldText);
        var day = changedDate.getDate();
        var month = changedDate.getMonth() + 1;
        var year = changedDate.getFullYear();
        var hours = changedDate.getHours();
        var minutes = changedDate.getMinutes();

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

        listItemTitle.innerHTML = listItemTitleFieldText;
        listItemDate.innerHTML = day + '.' + month + '.' + year + ' ' + hours + ':' + minutes;
        listItemDesc.innerHTML = listItemDescFieldText;

        // listItem.prepend(listItemDescField);
        // listItem.prepend(listItemDateField);
        // listItem.prepend(listItemTitleField);
        // listItem.prepend(removeButton);

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

for (i = 0; i < document.querySelectorAll('.title').length; i++) {
    if(localStorage.getItem(document.querySelectorAll('.title')[i].innerHTML)) {
            var storeItemDate = new Date(localStorage.getItem(document.querySelectorAll('.title')[i].innerHTML));

            if(storeItemDate < new Date()) {
                if (!document.querySelectorAll('.title')[i].parentNode.classList.contains('outdated'))
                    document.querySelectorAll('.title')[i].parentNode.classList.toggle('outdated');
            }
    }
}