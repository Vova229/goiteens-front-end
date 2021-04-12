'use strict'



let number = prompt('введите число')

if (number >= 55 && number <=99) {
   console.log(true);;
}
    else{console.log(false);;}

    console.log('-----------------------------------');

    

    let age = +prompt('введите ваш возраст')

    console.log(age);

     if (age <= 16 && age > 0) alert( 'Максим ти дитина') ;
        

    else  if (age >= 17 && age  <= 60) alert ( 'Максим ти дорослий');

   else   if  (age >= 61 && age <= 100) alert ( 'Максим ти пенсіонер');
       
   console.log('-----------------------------------');
     
   let nam= prompt('введите ваш имя')

   let lnam= prompt('введите ваш пр')

   

   if (nam.length >= 4 && lnam.length >= 5){
      console.log(true);;
   }
   else{console.log('УПС');}

   console.log(nam.length + lnam.length);

   console.log('-----------------------------------');

   let num = Math.floor(Math.random() * 6 ) + 1;

   if (num = 1) alert(1)

   else if (num = 2) alert(2)

   else if (num = 3) alert(3)

   else if (num = 4) alert(4)

   else if (num = 5) alert(5)

   console.log('-----------------------------------');

   let lang = prompt('введите ваш язык');

switch (lang) {
 case 'ua':
    alert( 'Украинский' );
    break;
  case' fr':
    alert( 'Француский' );
    break;
  case 'ru':
    alert( 'Руский' );
    break;

    case 'en':
    alert( 'Английскй' );
    break;

  default:
    alert( "Нет таких значений" );
}