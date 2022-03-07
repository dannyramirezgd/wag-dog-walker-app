const walkerId = window.location.href.split('/').pop();

async function changeAvailableHandler(event) {
  event.preventDefault();

  const response = await fetch(`/api/calendars/${walkerId}`, {
    method: 'GET',
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
  .querySelector('.change-times')
  .addEventListener('submit', changeAvailableHandler);
