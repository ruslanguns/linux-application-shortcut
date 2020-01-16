const countdownNumberEl = document.getElementById('countdown-number');
let countdown = 5;

countdownNumberEl.textContent = countdown;

const conteo$ = setInterval(function() {
  // countdown = --countdown <= 0 ? 10 : countdown;
  countdown = --countdown;

  countdownNumberEl.textContent = countdown;
  if ( countdown === 0 ) {
      console.log('Redireccionando...');

      window.location.href = 'http://192.168.0.25:4200/';
      clearInterval(conteo$);
  }
}, 1000);
