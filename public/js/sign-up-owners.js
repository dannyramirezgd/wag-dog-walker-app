async function signupFormHandler(event) {
  event.preventDefault();

  const usernameInput = document.querySelector('#username-signup').value.trim();
  const emailInput = document.querySelector('#email-signup').value.trim();
  const passwordInput = document.querySelector('#password-signup').value.trim();
  const nameInput = document.querySelector('#name-signup').value.trim();
  const addressInput = document.querySelector('#address-signup').value.trim();
  const phoneInput = document.querySelector('#phone-signup').value.trim();

  if (
    usernameInput &&
    emailInput &&
    passwordInput &&
    nameInput &&
    addressInput &&
    phoneInput
  ) {
    const response = await fetch('/api/owners', {
      method: 'post',
      body: JSON.stringify({
        user_name: usernameInput,
        email: emailInput,
        password: passwordInput,
        owner_name: nameInput,
        address: addressInput,
        phone: phoneInput,
      }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
      const data = await response.json();
      setTimeout(() => {
        document.location.replace(`/owner/dashboard/${data.id}`);
      }, 1000);
    } else {
      alert(response.statusText);
    }
  }
}

document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);
