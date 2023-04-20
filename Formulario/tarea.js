
const exchangeForm = document.getElementById('exchange-form');

exchangeForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Evita que el formulario se envíe y se recargue la página

  const currencyFrom = document.getElementById('currency-from').value;
  const currencyTo = document.getElementById('currency-to').value;
  const amount = document.getElementById('amount').value;

  let exchangeRate;

  // Define las tasas de cambio para cada par de monedas
  if (currencyFrom === 'usd' && currencyTo === 'pen') {
    exchangeRate = 3.95; // 1 USD = 3.95 PEN
  } else if (currencyFrom === 'usd' && currencyTo === 'eur') {
    exchangeRate = 0.83; // 1 USD = 0.83 EUR
  } else if (currencyFrom === 'pen' && currencyTo === 'usd') {
    exchangeRate = 0.25; // 1 PEN = 0.25 USD
  } else if (currencyFrom === 'pen' && currencyTo === 'eur') {
    exchangeRate = 0.21; // 1 PEN = 0.21 EUR
  } else if (currencyFrom === 'eur' && currencyTo === 'usd') {
    exchangeRate = 1.21; // 1 EUR = 1.21 USD
  } else if (currencyFrom === 'eur' && currencyTo === 'pen') {
    exchangeRate = 4.85; // 1 EUR = 4.85 PEN
  }

  const total = amount * exchangeRate; // Calcula el total a recibir

  alert(`Total a recibir: ${total.toFixed(2)} ${currencyTo.toUpperCase()}`); // Muestra una alerta con el total a recibir
});
