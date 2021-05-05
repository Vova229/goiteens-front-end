'use strict'

const Arr1 = [1,5, '4', 'hello'];

const Arr2 = [true,2, {} , ["a"]];

console.log(Arr1[2]);

console.log(Arr2[2]);

console.log(Arr1[2] + Arr2[2]);

console.log('-----------------------------------');

Arr1[4] = 22;

console.log(Arr1);

console.log('-----------------------------------');

for (const Arr of Arr1) {
  console.log(typeof Arr + ' ' + Arr);
};

console.log('-----------------------------------');

const message =['W','e','l','c','o','m','e',' ','t','o',' ','U','k','r','a','i','n','e']

console.log(message);

console.log(message.indexOf('l'));

console.log(message.join(' '));

console.log('-----------------------------------');

const styles = ['Джаз','Блюз'];

styles.push('Рок-н-ролл');

styles.splice(1,1);

styles.unshift('Джаз','Класика','Рок-н-ролл');

styles.pop();

styles.pop();

styles.unshift('Реп','Реггі')

console.log(styles);

console.log('-----------------------------------');