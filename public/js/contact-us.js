async function contactUsEmail(event) {
  event.preventDefault();
  const senderName = document.querySelector('#contact-name').value.trim();
  const senderEmail = document.querySelector('#contact-email').value.trim();
  const subject = document.querySelector('#contact-subject').value.trim();
  const message = document.querySelector('#contact-msg').value.trim();

  const response = await fetch('/send', {
    method: 'POST',
    body: JSON.stringify({
      name: senderName,
      email: senderEmail,
      subject: subject,
      message: message,
    }),
    headers: { 'Content-Type': 'application/json' },
  });
  if (response.ok) {
    alert(
      'Thank you for reaching out to Wag Inc. Your e-mail has been submitted!',
    );
    document.location.replace('/');
  } else {
    alert(response.statusText, 'Failed to send an e-mail, try again!');
  }
}

document
  .querySelector('.contact-form')
  .addEventListener('submit', contactUsEmail);
