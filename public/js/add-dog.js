async function addDogHandler(event) {
  event.preventDefault();
  const dogName = document.querySelector('#dog-name').value.trim();
  const dogSize = document.querySelector('#size').value.trim();
  const ownerId = document.location.pathname.split('/')[2];

  if (dogName && dogSize) {
    const response = await fetch('/api/dogs', {
      method: 'POST',
      body: JSON.stringify({
        dog_name: dogName,
        size: dogSize,
        owner_id: ownerId,
      }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
      setTimeout(() => {
        document.location.replace(`/owner/dashboard/${ownerId}`);
      }, 500);
    } else {
      alert(response.statusText);
    }
  }
}

document
  .querySelector('.signup-form')
  .addEventListener('submit', addDogHandler);
