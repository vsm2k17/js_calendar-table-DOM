'use strict';

const calendar = document.querySelector('#calendar');

function calendarTable(year, month, element) {
  const currentMonth = month - 1;
  const date = new Date(year, currentMonth);
  const firstDay = date.getDay() === 0 ? 7 : date.getDay();
  let maxDays = 31;

  date.setDate(31);

  if (date.getMonth() !== currentMonth) {
    maxDays = 31 - date.getDate();
  }

  const table = document.createElement('table');
  const tbody = document.createElement('tbody');

  tbody.className = 'tbody';

  calendar.append(table);
  table.append(tbody);

  const daysAtWeek = 7;
  const firstRow = 1;
  const firstFullRow = 2;
  let counter = 1;

  for (let i = 0; counter <= maxDays; i++) {
    tbody.append(document.createElement('tr'));

    for (let j = 0; j < daysAtWeek; j++) {
      if (i === 0) {
        tbody.rows[i].prepend(document.createElement('th'));
      } else {
        tbody.rows[i].append(document.createElement('td'));
      }

      if (i === firstRow && j >= firstDay - 1) {
        table.rows[i].cells[j].textContent = counter;
        counter++;
      }

      if (i >= firstFullRow && counter <= maxDays) {
        table.rows[i].cells[j].innerHTML = counter;
        counter++;
      }
    }
  }

  const namesOfDay = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];

  for (let i = 0; i < namesOfDay.length; i++) {
    tbody.rows[0].cells[i].textContent = namesOfDay[i];
  }
}

calendarTable(2019, 10, calendar);
