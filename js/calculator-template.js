let field1 = document.querySelector('#i__f1');
let field2 = document.querySelector('#i__f2');

let countValue = document.querySelector('#count__in');

let result = document.querySelector('#o__res');

const runCalk = document.querySelector('#run__calk');

let labelSize = document.querySelector('#label__size');

let inputField1;
let inputField2;

let countInValue;


let checkResult;

field1.addEventListener('input', function() {
    this.value = this.value.replace(/[^0-9.,]/g, '');
    this.value = this.value.replace(/,/g, '.');
    if (this.value.split('.').length > 2) {
        document.querySelector('#i__f1').classList.add('form__validat');
      } else {
        document.querySelector('#i__f1').classList.remove('form__validat');
    };
    inputField1 = parseFloat(field1.value);
});

field2.addEventListener('input', function() {
    this.value = this.value.replace(/[^0-9.,]/g, '');
    this.value = this.value.replace(/,/g, '.');
    if (this.value.split('.').length > 2) {
        document.querySelector('#i__f2').classList.add('form__validat');
      } else {
        document.querySelector('#i__f2').classList.remove('form__validat');
    };
    inputField2 = parseFloat(field2.value);
});

countValue.addEventListener('change', function () {

    labelSize.textContent = countValue.options[countValue.selectedIndex].text;

    switch (countValue.value) {
        case 'selected1':
            labelSize.removeAttribute('style');
            result.innerText = '0';
            labelSize.setAttribute('style', 'color: #4650dd; background-color: #dadcf8;');
        break;
        case 'selected2':
            labelSize.removeAttribute('style');
            result.innerText = '0';
            labelSize.setAttribute('style', 'color: #1c6c09; background-color: #d9fbd0;');
        break;
        case 'selected3':
            labelSize.removeAttribute('style');
            result.innerText = '0';
            labelSize.setAttribute('style', 'color: #bc3803; background-color: #ffefca;');
        break;
    };
});

runCalk.addEventListener('click', function(e) {
    e.preventDefault();

    switch (countValue.value) {
        case 'selected1':
            countInValue = 10;
        break;
        case 'selected2':
            countInValue = 100;
        break;
        case 'selected3':
            countInValue = 1000;
        break;
    };

    checkResult = ((inputField1 + inputField2) / countInValue).toFixed(4);

    result.innerText = '';
    if (isNaN(checkResult)) {
        result.innerText = '0';
      } else {
        result.innerText = checkResult;
      };
});