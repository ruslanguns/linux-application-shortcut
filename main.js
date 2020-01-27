const countdownNumberEl = document.getElementById('countdown-number');
let countdown = 5;
const APP_URL = 'http://localhost/';

countdownNumberEl.textContent = countdown;

const conteo$ = setInterval(function () {
  // countdown = --countdown <= 0 ? 10 : countdown;
  countdown = --countdown;

  countdownNumberEl.textContent = countdown;
  if (countdown === 0) {
    console.log('Redireccionando...');

    window.location.href = APP_URL;
    clearInterval(conteo$);
  }
}, 1000);
