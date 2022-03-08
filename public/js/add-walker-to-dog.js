async function connectWalker(event) {
  event.preventDefault();
}

document
  .querySelectorAll('.btn')
  .forEach((element) => element.addEventListener('click', connectWalker));
