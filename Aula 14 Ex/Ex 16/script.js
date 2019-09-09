var inicio = window.document.getElementById('inicio');
var fim = window.document.getElementById('fim');
var passo = window.document.getElementById('passo');
var btn = window.document.getElementById('contar');
var result = window.document.getElementById('result');

function contaPassos(){
  
  if(inicio.value.length === 0 || fim.value.length  === 0 || passo.value.length  === 0){
    result.innerText += 'Impossivel Contar';
  }else{
    var valueInicio = Number(inicio.value);
    var valueFim = Number(fim.value);
    var valuePasso = Number(passo.value);
    if(valuePasso === 0){
      alert('Passo invalido considerando Passo: 1');
      valuePasso = 1;
    }
    if(valueInicio < valueFim){
      for(var i = valueInicio; i < valueFim; i += valuePasso){
        result.innerText += i + '👉';
      }
    }
    else{
      for(var i = valueInicio; i > valueFim; i -= valuePasso){
        result.innerText += i + '👉';
      }
    }
    result.innerText += '🏁';
  }
}
