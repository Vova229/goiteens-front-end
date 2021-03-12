'use strict'
 
const k1 = Number.parseInt('5px');

const k2 = Number.parseInt('12djd334');

const k3 = Number.parseInt('12.45asdwe');

const k4 = Number.parseInt('qwqweeewq');

console.log(k1);

console.log(k2);

console.log(k3);

console.log(k4);

console.log('-----------------------------------');

const k5 = Number.parseFloat('5px');

const k6 = Number.parseFloat('12djd334');

const k7 = Number.parseFloat('12.45asdwe');

const k8 = Number.parseFloat('qwqweeewq');

console.log(k5);

console.log(k6);

console.log(k7);

console.log(k8);

console.log('--------------------------------------');

console.log(Math.max(2, 34, 99, 3, 22, 36, 733, 18));

console.log(Math.min(2, 34, 99, 3, 22, 36, 733, 18));

console.log('---------------------------------------');

console.log(Math.random() * (19 - 3) + 3);

console.log('---------------------------------------');

let result = 5 + '5' + 5;

console.log(result);

console.log(typeof result);

console.log('---------------------------------------');

const email = 'korenevich2@gmail.com'

console.log(email.includes('@'));

console.log(email.length ); 

console.log('--------------------------------------------');

let name = 'Victor'

let letter = 'My'

let lettername = 'name'

let he = 'is'

const fullName =` ${letter} ${lettername} ${he} ${name}`;

console.log(fullName);

console.log('------------------------------------');

let Username = 'Максим'

let prise = '500000'

let santasis = alert(`спасибо ${Username} за покупку доната в brawl stars с вас ${prise}`)

