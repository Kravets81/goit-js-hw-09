const startBtnRef = document.querySelector('[data-start]');
const stopBtnRef = document.querySelector('[data-stop]');
const bodyRef = document.querySelector('body');

let intervalId;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeBackgroundColor = evt => {
  intervalId = setInterval(() => {
    const color = getRandomHexColor();
    startBtnRef.setAttribute('disabled', 'true');
    stopBtnRef.removeAttribute('disabled', 'true');
    bodyRef.style.backgroundColor = color;
  }, 1000);
};

const stopChangeBackgroundColor = evt => {
  clearInterval(intervalId);
  stopBtnRef.setAttribute('disabled', 'true');
  startBtnRef.removeAttribute('disabled', 'true');
};

startBtnRef.addEventListener('click', changeBackgroundColor);
stopBtnRef.addEventListener('click', stopChangeBackgroundColor);
