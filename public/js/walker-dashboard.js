const walkerId = window.location.href.split('/').pop();

async function makeRequest(property, time) {
  const response = await fetch('/api/calendars', {
    method: 'post',
    body: JSON.stringify({
      day: property,
      time: time,
      walker_id: walkerId,
    }),
    headers: { 'Content-Type': 'application/json' },
  });
  if (response.ok) {
    const data = await response.json();
    console.log(data);
  }
}

async function weeklyAvailableHandler(event) {
  event.preventDefault();
  const mondayCheckboxes = document.getElementsByName('Monday');
  const tuesdayCheckboxes = document.getElementsByName('Tuesday');
  const wednesdayCheckboxes = document.getElementsByName('Wednesday');
  const thursdayCheckboxes = document.getElementsByName('Thursday');
  const fridayCheckboxes = document.getElementsByName('Friday');
  const saturdayCheckboxes = document.getElementsByName('Saturday');
  const sundayCheckboxes = document.getElementsByName('Sunday');

  const mondaySelected = Array.prototype.slice
    .call(mondayCheckboxes)
    .filter((check) => check.checked == true);
  const tuesdaySelected = Array.prototype.slice
    .call(tuesdayCheckboxes)
    .filter((check) => check.checked == true);
  const wednesdaySelected = Array.prototype.slice
    .call(wednesdayCheckboxes)
    .filter((check) => check.checked == true);
  const thursdaySelected = Array.prototype.slice
    .call(thursdayCheckboxes)
    .filter((check) => check.checked == true);
  const fridaySelected = Array.prototype.slice
    .call(fridayCheckboxes)
    .filter((check) => check.checked == true);
  const saturdaySelected = Array.prototype.slice
    .call(saturdayCheckboxes)
    .filter((check) => check.checked == true);
  const sundaySelected = Array.prototype.slice
    .call(sundayCheckboxes)
    .filter((check) => check.checked == true);

  let weeklyAvailability = {};

  if (sundaySelected[0]) {
    let sunday = [];

    for (let i = 0; i < sundaySelected.length; i++) {
      const time = sundaySelected[i].value;

      sunday.push(time);
    }
    weeklyAvailability.sunday = sunday;
  }
  if (mondaySelected[0]) {
    let monday = [];

    for (let i = 0; i < mondaySelected.length; i++) {
      const time = mondaySelected[i].value;

      monday.push(time);
    }
    weeklyAvailability.monday = monday;
  }
  if (tuesdaySelected[0]) {
    let tuesday = [];

    for (let i = 0; i < tuesdaySelected.length; i++) {
      const time = tuesdaySelected[i].value;

      tuesday.push(time);
    }
    weeklyAvailability.tuesday = tuesday;
  }

  if (wednesdaySelected[0]) {
    let wednesday = [];

    for (let i = 0; i < wednesdaySelected.length; i++) {
      const time = wednesdaySelected[i].value;

      wednesday.push(time);
    }
    weeklyAvailability.wednesday = wednesday;
  }
  if (thursdaySelected[0]) {
    let thursday = [];

    for (let i = 0; i < thursdaySelected.length; i++) {
      const time = thursdaySelected[i].value;

      thursday.push(time);
    }
    weeklyAvailability.thursday = thursday;
  }
  if (fridaySelected[0]) {
    let friday = [];

    for (let i = 0; i < fridaySelected.length; i++) {
      const time = fridaySelected[i].value;

      friday.push(time);
    }
    weeklyAvailability.friday = friday;
  }
  if (saturdaySelected[0]) {
    let saturday = [];

    for (let i = 0; i < saturdaySelected.length; i++) {
      const time = saturdaySelected[i].value;

      saturday.push(time);
    }
    weeklyAvailability.saturday = saturday;
  }

  for (const property in weeklyAvailability) {
    weeklyAvailability[property].forEach((time) => {
      makeRequest(property, time);
    });
  }
  document.location.reload();
}

document
  .querySelector('.weekly-form')
  .addEventListener('submit', weeklyAvailableHandler);
