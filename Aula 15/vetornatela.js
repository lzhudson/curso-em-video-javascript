let valores = [8, 1, 7, 4, 2, 9];

for(let pos = 0; pos < valores.length; pos++){
    console.log(`Com for tradicional: A posição ${pos} tem o valor ${valores[pos]}`);
}
for (let key in valores) {
  console.log(`Com for in: A posição ${key} tem o valor ${valores[key]}`);
}
let valor = valores.indexOf(7);
valor == -1 ? console.log(`O valor não foi encontrado`) : console.log(`O valor foi encontrado na posição ${valor}`);
