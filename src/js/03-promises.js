import { Notify } from 'notiflix/build/notiflix-notify-aio';

const formRef = document.querySelector('.form');

function onFormSubmit(evt) {
  evt.preventDefault();

  const formData = new FormData(evt.currentTarget);
  const formDataValues = {};

  formData.forEach((value, name) => {
    formDataValues[name] = Number(value);
  });
  let { delay, step, amount } = formDataValues;

  for (let index = 1; index <= amount; index += 1) {
    let position = index;
    createPromise(position, delay).then(onSuccess).catch(onError);
    delay += step;

    formRef.reset();
  }
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

function onError({ position, delay }) {
  Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
}

function onSuccess({ position, delay }) {
  Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
}

formRef.addEventListener('submit', onFormSubmit);
