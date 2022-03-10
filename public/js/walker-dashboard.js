async function addCalendarDate(event) {
  event.preventDefault();

  const dayInput = document.querySelector('.day').value;
  const timeInput = document.querySelector('.time').value;

  const response = await fetch('/api/calendars', {
    method: 'POST',
    body: JSON.stringify({
      day: dayInput,
      time: timeInput,
      walker_id: window.location.href.split('/').pop(),
      dog_id: null,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (response.ok) {
    document.location.reload();
  }
}

async function deleteCalendarDate(event) {
  event.preventDefault();

  /*in order to capture the calendarId it was set to a 
  data-* attribute and then fed into the API request*/
  const calendarId = this.parentNode.dataset.calendar;

  const response = await fetch(`/api/calendars/${calendarId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (response.ok) {
    document.location.reload();
  } else {
    alert(response.statusText);
  }
}

document
  .querySelector('.weekly-form')
  .addEventListener('submit', addCalendarDate);

//forEach was necessary because of how many .delete-btn buttons there are
document
  .querySelectorAll('.delete-btn')
  .forEach((element) => element.addEventListener('click', deleteCalendarDate));
