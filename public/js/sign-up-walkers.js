async function signupFormHandler(event) {
  event.preventDefault();

  const emailInput = document.querySelector('#email-signup').value.trim();
  const passwordInput = document.querySelector('#password-signup').value.trim();
  const nameInput = document.querySelector('#name-signup').value.trim();
  const hourlyRateInput = document.querySelector('#hourly-rate').value.trim();
  const phoneInput = document.querySelector('#phone-signup').value.trim();
  const timesAvailableInput = document
    .querySelector('#times-available')
    .value.trim();

  if (
    emailInput &&
    passwordInput &&
    nameInput &&
    hourlyRateInput &&
    phoneInput &&
    timesAvailableInput
  ) {
    const response = await fetch('/api/walkers', {
      method: 'post',
      body: JSON.stringify({
        email: emailInput,
        password: passwordInput,
        walker_name: nameInput,
        hourly_rate: hourlyRateInput,
        phone: phoneInput,
        times_available: timesAvailableInput,
      }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
      const data = await response.json();
      setTimeout(() => {
        document.location.replace(`/walker/dashboard/${data.id}`);
      }, 500);
    } else {
      alert(response.statusText);
    }
  }
}

document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);
