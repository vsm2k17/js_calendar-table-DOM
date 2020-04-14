'use strict';

const calendar = document.querySelector('#calendar');

function calendarTable(year, month, element) {
  const realMonth = month - 1;
  const date = new Date(year, realMonth);
  const firstDay = date.getDay() === 0 ? 7 : date.getDay();
  let maxDays = 31;

  date.setDate(31);

  if (date.getMonth() !== realMonth) {
    maxDays = 31 - date.getDate();
  }

  const table = document.createElement('table');
  const tbody = document.createElement('tbody');

  tbody.className = 'tbody';

  calendar.append(table);
  table.append(tbody);

  let counter = 1;

  for (let i = 0; counter <= maxDays; i++) {
    tbody.append(document.createElement('tr'));

    for (let j = 0; j < 7; j++) {
      if (i === 0) {
        tbody.rows[i].prepend(document.createElement('th'));
      } else {
        tbody.rows[i].append(document.createElement('td'));
      }

      if (i === 1 && j >= firstDay - 1) {
        table.rows[i].cells[j].textContent = counter;
        counter++;
      }

      if (i >= 2 && counter <= maxDays) {
        table.rows[i].cells[j].innerHTML = counter;
        counter++;
      }
    }
  }

  tbody.rows[0].cells[0].textContent = 'ПН';
  tbody.rows[0].cells[1].textContent = 'ВТ';
  tbody.rows[0].cells[2].textContent = 'СР';
  tbody.rows[0].cells[3].textContent = 'ЧТ';
  tbody.rows[0].cells[4].textContent = 'ПТ';
  tbody.rows[0].cells[5].textContent = 'СБ';
  tbody.rows[0].cells[6].textContent = 'ВС';
}

calendarTable(2019, 10, calendar);
