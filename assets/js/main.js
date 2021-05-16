const form = document.querySelector('.form');
const result = document.querySelector('.result');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const numberToConvert = event.target.querySelector('.numberToConvert');

  const resultSubmit = numberToConvert.value;

  if(!resultSubmit) {
    return result.innerHTML = 'Invalid Number';
  }
  
  if(resultSubmit < 0) return;

  function numberParsed (number) {
    return parseInt(number, 2).toString(10);
  }
  
  const msg = `${numberParsed(resultSubmit)}`;
  result.innerHTML = `<div class="alert alert-success" role="alert">
                        <h4 class="alert-heading">${msg}</h4>
                        <p class="mb-0"> This is your number converted </p>
                      </div>`;
})

