function verificar(){
  var data = new Date();
  var anoAtual = data.getFullYear();
  var anoNascimento = window.document.getElementById('txtano');
  var res = window.document.querySelector('div#res');
 
  if(anoNascimento.value.length == 0 || anoNascimento.value > anoAtual){
    alert('Erro, verifique os dados e tente novamente');
  }
  else{
    var sex = window.document.getElementsByName('radsex');
    var idade = anoAtual - Number(anoNascimento.value);
    var img = document.createElement('imxg');
    img.setAttribute('id','foto');
    var genero = '';
    if(sex[0].checked){
      genero = 'Homem';
      if(idade >=0 && idade < 10){
        img.setAttribute('src', 'bebe-mulher.png');
      }
      else if(idade < 21 ){
        img.setAttribute('src', 'jovem-menino.png');
      }
      else if(idade < 50){
        img.setAttribute('src', 'adulto-homem.png');
      }
      else{
        img.setAttribute('src', 'senhor-homem.png');
      }
    }else{
      genero = 'Mulher';
      if(idade >= 0 && idade < 10){
        img.setAttribute('src', 'mulher-nova.png');
      }
      else if(idade < 21 ){
        img.setAttribute('src', 'jovem-mulher.png');
      }
      else if(idade < 50){
        img.setAttribute('src', 'adulta-mulher.png');
      }
      else{
        img.setAttribute('src', 'senhora-mulher.png');
      }
    }
    res.style.textAlign = 'center';
    res.innerHTML = `<p>Detectamos um ${genero} de ${idade} anos</p>`;
    res.appendChild(img);
  }
}