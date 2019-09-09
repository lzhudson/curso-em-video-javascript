var inputNumber = window.document.querySelector('#num');
var selectNumbers = window.document.querySelector('#numeros');
var resultado = window.document.querySelector('#result')
var nums = [];

function isNumValid(n){
  if(Number(n) >= 1 && Number(n) <= 100){
    return true;
  }else{
    return false;
  }
}

function inLista(n, lista){
  if(lista.indexOf(Number(n)) != -1){
    return true;
  }else{
    return false;
  }
}

function adicionar(){
  if(isNumValid(inputNumber.value) && !inLista(inputNumber.value, nums)){
    var optionNum = document.createElement('option');
    nums.push(Number(inputNumber.value));
    selectNumbers.appendChild(optionNum);
    optionNum.innerHTML = `Valor ${Number(inputNumber.value)} adicionado`;
  }else{
    alert('Digite um numero valido');
  }
  inputNumber.value = '';
  inputNumber.focus();
  
}
function finalizar(){
  if(nums.length > 0){
    var paragraph = document.createElement('p');
    var tot = nums.length;
    var maior = nums[0];
    var menor = nums[0];
    var somaTodos = 0;
    var media = 0;
    for (const key in nums) {
      nums[key] > maior ? maior = nums[key] : '';
      nums[key] < menor ? menor = nums[key] : '';
      somaTodos += nums[key];
    }
    media = soma / tot;
    resultado.appendChild(paragraph);
    paragraph.innerHTML = 'Ao todo temos ' + nums.length + ' numeros cadastrados <br><br>' +
    'O maior valor informado foi ' + maior + '. <br><br>' +
    'O menor valor informado foi ' + menor + '. <br><br>' +
    'Somando os valores temos ' + somaTodos + '.<br><br>'+
    'A media dos valores digitados é ' + media;
  }else{
    alert('Digite valores antes de finalizar');
  }
}