'use strict'

for (let t = 1; t < 11; t += 1) {
  console.log(t);
}

console.log('-----------------------------------');

for (let i = 1; i <= 10; i++) {
  if (i % 2 == 0) {
    alert('Число парное');
  break;
    }
  else{alert('Число не парное')
  break;
    }
}

console.log('-----------------------------------');

let num = 20;

while (num < 29) {
  console.log( num);
  num += 1;
}

console.log('-----------------------------------');

{let name = prompt('Ведите имя');}

while(name.length <= 6);


{console.log(name);}