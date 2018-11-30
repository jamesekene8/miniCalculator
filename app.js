const allBtn = document.querySelectorAll('button');
const output = document.getElementById('output');
const result = document.getElementById('result');


allBtn.forEach((button, index) => {
  button.addEventListener('click', () => {
    if(button.value !== '='){
      output.value += button.value
    } else {
      result.value = eval(output.value);
    }

    if(button.value === 'C'){
      output.value = '';
      result.value = '';
    }
  })
})