function carregar(){
  var data = new Date();
  var horaAtual = data.getHours();
  var minutoAtual = data.getMinutes();
  var segundoAtual = data.getSeconds();
  var msg = window.document.getElementById('msg');
  var img = window.document.getElementById('imagem');
  msg.innerHTML = `Agora são ${horaAtual}:${minutoAtual}:${segundoAtual} horas`;
  if(horaAtual >= 00 && horaAtual <= 12){
    // Bom dia
    img.src = 'aerial-agriculture-countryside-2278543.jpg';
    document.body.style.background = '#E2CD9F';
  }
  else if(horaAtual >= 12 && horaAtual  <= 18){
    img.src = 'afternoon-boat-clouds-2386144.jpg';
    document.body.style.background = '#B9846F';
  }
  else{
    img.src = 'astronomy-beautiful-clouds-355465.jpg';
    document.body.style.background = '#515154';
  }
}
