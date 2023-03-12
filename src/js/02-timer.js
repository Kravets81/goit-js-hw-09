import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

require('flatpickr/dist/themes/material_orange.css');
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  startBtnRef: document.querySelector('[data-start]'),
  timerDataDays: document.querySelector('[data-days]'),
  timerDataHours: document.querySelector('[data-hours]'),
  timerDataMinutes: document.querySelector('[data-minutes]'),
  timerDataSeconds: document.querySelector('[data-seconds]'),
};

const currentDate = new Date();
refs.startBtnRef.disabled = true;
let timerId = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  onClose(selectedDates) {
    let userDate = new Date(selectedDates[0]);

    if (userDate < currentDate) {
      Notify.failure('Please choose a date in the future', {
        timeout: 1500,
        width: '400px',
      });
    } else {
      refs.startBtnRef.disabled = false;
    }
  },
};

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function onTimerStart() {
  const selectedDate = onFlatpickr.selectedDates[0];

  timerId = setInterval(() => {
    const startTime = new Date();
    const countdown = selectedDate - startTime;
    refs.startBtnRef.disabled = true;

    if (countdown < 0) {
      clearInterval(timerId);
      return;
    }
    updateTimerFace(convertMs(countdown));
  }, 1_000);
}

function addLeadingZero(value) {
  return String(value).padStart(2, 0);
}

function updateTimerFace({ days, hours, minutes, seconds }) {
  refs.timerDataDays.textContent = addLeadingZero(days);
  refs.timerDataHours.textContent = addLeadingZero(hours);
  refs.timerDataMinutes.textContent = addLeadingZero(minutes);
  refs.timerDataSeconds.textContent = addLeadingZero(seconds);
}

const onFlatpickr = flatpickr('#datetime-picker', options);
refs.startBtnRef.addEventListener('click', onTimerStart);
