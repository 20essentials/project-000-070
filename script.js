const d = document,
  $input = d.querySelector('input'),
  LS = localStorage;

let getInputValue = () => {
  if (LS.nuevo) $input.value = LS.nuevo;
};

$input.addEventListener('input', e => {
  LS.setItem('nuevo', $input.value);
  getInputValue();
});

d.addEventListener('DOMContentLoaded', getInputValue);
