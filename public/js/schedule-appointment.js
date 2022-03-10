async function addDogToCalendar(event) {
  event.preventDefault();

  /*in order to capture the calendarId it was set to a 
  data-* attribute and then fed into the API request*/
  const calendarId = this.parentNode.dataset.calendar;

  const doggo = document.getElementById('doggos');
  //this was created to capture the data from the indicated drop down selection
  const doggoSelected = doggo.options[doggo.selectedIndex].dataset.dog;

  const response = await fetch(`/api/calendars/${calendarId}`, {
    method: 'PUT',
    body: JSON.stringify({
      dog_id: doggoSelected,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (response.ok) {
    document.location.reload();
  }
}

//forEach was necessary because of how many .schedule-dog buttons there are
document
  .querySelectorAll('.schedule-dog')
  .forEach((element) => element.addEventListener('click', addDogToCalendar));
