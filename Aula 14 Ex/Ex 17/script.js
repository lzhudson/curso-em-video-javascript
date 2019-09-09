var numTabuada = document.getElementById('num');
var tabuada = document.getElementById('tabuada');

function criaTabuada(){
  var numTabuadaValue = Number(numTabuada.value);
  if(numTabuada < 0){
    window.alert('digite um numero valido');
  }else{
    for(var i = 0; i <= 10; i++){
      //console.log(`${i} x ${numTabuadaValue} = ${i*numTabuadaValue}`);
      var optionTabuada = document.createElement('option');
      tabuada.appendChild(optionTabuada);
      optionTabuada.innerHTML = `${i} x ${numTabuadaValue} = ${i*numTabuadaValue}`;
      optionTabuada.value = `tab${i}`
    }
  }
}