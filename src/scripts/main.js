'use strict';

const calendar = document.querySelector('#calendar');

function calendarTable(year, month, element) {
  const date = new Date(year, month);
  const firstDay = date.getDay() === 0 ? 7 : date.getDay();
  let maxDays;

  date.setDate(31);

  if (date.getMonth() !== month) {
    maxDays = 31 - date.getDate();
  }

  element.innerHTML
  = `
  <table>
    <tbody id='mainTable'>
    <tr>
      <th>ПН</th>
      <th>ВТ</th>
      <th>СР</th>
      <th>ЧТ</th>
      <th>ПТ</th>
      <th>СБ</th>
      <th>ВС</th>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    </tbody>
  </table>`;

  const table = document.getElementById('mainTable');
  let counter = 1;

  for (let j = firstDay - 1; j < 7; j++) {
    table.rows[1].cells[j].innerHTML = counter;
    counter++;
  }

  for (let i = 2; i < 6; i++) {
    for (let j = 0; j < 7; j++) {
      table.rows[i].cells[j].innerHTML = counter;
      counter++;

      if (counter > maxDays) {
        break;
      }
    }

    if (counter > maxDays) {
      break;
    }
  }

  if (!table.rows[5].cells[0].innerHTML) {
    table.lastElementChild.innerHTML = '';
  };
}

calendarTable(2019, 10, calendar);
