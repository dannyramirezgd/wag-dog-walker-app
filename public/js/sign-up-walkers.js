async function signupFormHandler(event) {
  event.preventDefault();

  const emailInput = document.querySelector('#email-signup').value.trim();
  const passwordInput = document.querySelector('#password-signup').value.trim();
  const nameInput = document.querySelector('#name-signup').value.trim();
  const hourlyRateInput = document.querySelector('#hourly-rate').value.trim();
  const phoneInput = document.querySelector('#phone-signup').value.trim();

  if (
    emailInput &&
    passwordInput &&
    nameInput &&
    hourlyRateInput &&
    phoneInput
  ) {
    const response = await fetch('/api/walkers', {
      method: 'post',
      body: JSON.stringify({
        email: emailInput,
        password: passwordInput,
        walker_name: nameInput,
        hourly_rate: hourlyRateInput,
        phone: phoneInput,
        profile_pic: 'null',
      }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
      const data = await response.json();
      /*these timeouts ensured that the session was created before
      handlebars could refresh the page and auto redirect back to the login page */
      setTimeout(() => {
        document.location.replace(`/walker/dashboard/${data.user.id}`);
      }, 500);
    } else {
      alert(response.statusText);
    }
  }
}

document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);
