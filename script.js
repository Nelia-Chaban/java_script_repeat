//////////////  складні типи данних (мутабельні)   ////////////////
// створюється посилання на комірку//
// let a = [1, 2, 3, 4, 5];
// let b = a;
// a.push(6, 7);
// b.unshift("Mango");
// console.log(a); //["Mango, 1, 2, 3, 4, 5, 6, 7];
// console.log(b); //["Mango, 1, 2, 3, 4, 5, 6, 7];

// a === b; // true

//////////////  примітивні типи данних (не мутабельні)   ////////////////
// створюють дві різні комірки в пам'яті//
// прості типи данних порівнюються по значеннях, а скалдні за посиланнями
// let value = 10;
// let test = value;
// value += 5;
// value += "Mango";

// console.log(value); //15Mango
// console.log(test); //10

// console.log(test === value);// false
//
//////////////////   Масиви    //////////////

//////////  Методи масивів  ////////////
// split(" ") - перетворює рядок на масив
// join(" ") - перетворює масив на рядок
// reverse() - змінює елементи в масиві в зворотньому напрямку
//
// const str = "Hello world, my name is Nelia";
// const arr = str.split(" ").reverse().join(" ");
// console.log(arr); //Nelia is name my world, Hello
//
// indefOf("елемент")- якщо елемент присутній в масиві, повертає його індекс. Якщо елеметн відсутній повертає (-1)
// includes("елемент") - якщо елемент присутній в масиві, повертає true, коли відсутній - false
//push("eлемент") - додає елемент в кінець масиву
// const arr = [3, 56, 28];
// arr.push(5, 8, 13);
// console.log(arr); //[3, 56, 28, 5, 8, 13]
//pop("елемент") - видаляє один елемент з кінеця масиву
// arr.pop();
// console.log(arr); //[3, 56, 28, 5, 8]
//unshift("елемент") - додає елемент на початок масиву
//shift("елемент") - видаляє один елемент з початку масиву
//splice(індекс) - видаляє, додає, замінює елементи в масиві - унікальний метод!
//slice(індекс) - не мутує масив, а створює копію. Використовується дуже рідко
//concat (масив) - обєднує масиви в один. Не мутує початковий масив, а створює копію
//
//
//              0        1     2  3  4
// const arr = ["Hello", "world", 1, 5, 8];
// ////slice (видалення)
// console.log(arr.slice(2)); //[1,5,8] - копія
// console.log(arr); // ['Hello', 'world', 1, 5, 8]
// ////splice
// console.log(arr.splice(2)); //[1,5,8]
// console.log(arr); //['Hello', 'world']
// //splice (додавання перед елементом)
// arr.splice(2, 0, "my", "name", "is", "Nelly");
// console.log(arr); //['Hello', 'world', 'my', 'name', 'is', 'Nelly']
// //splice (заміна)
// arr.splice(2, 3, "I'm");
// console.log(arr); //['Hello', 'world', "I'm", 'Nelly']
// const str = "Hello world my name is Nelly";
// const arr = str.split(" ");
// console.log(arr);
// const idx = arr.indexOf("name");
// const result = arr.splice(idx, 1, "face");
// console.log(result); //["name"]
// console.log(arr); //['Hello', 'world', 'my', 'face', 'is', 'Nelly']
//Створити масив genres з елементами "Jazz" та "Blues"
//Додайте "Рок-н-рол" до кінця.
//Виведіть у консоль перший елемент масиву
//Виведіть у консоль останній елемент масиву. Код повинен працювати для маству довільної довжини
//Видаліть перший елемент та виведіть його у консоль
//Вставте "Country" та "Reggae"на початок масиву
// const genres = ["Jazz", "Blues"];
// genres.push("Рок-н-рол");
// console.log(genres);
// console.log(genres[0]);
// lastElIdx = genres.length - 1;
// console.log(lastElIdx);
// console.log(genres[lastElIdx]);
// const firstEl = genres.shift(0);
// console.log(firstEl);
// console.log(genres);
// genres.unshift("Country", "Reggae");
// console.log(genres);
// genres.splice(genres.length, 0, "Рок-н-рол");
// console.log(genres);
// genres.splice(0, 0, "Country", "Reggae");
// console.log(genres);
//Напиши скрипт для обчислення площі прямокутника зі сторонами, значення яких
//зберігається у змінній value у вигляді рядка. Значення гарантовано розділені пробілом.
// const value = "8 11";
// const arr = value.split(" "); //["8", "11"] але елементи мають тип даних рядок
// const firstEl = Number(arr[0]);
// const lastEl = Number(arr[arr.length - 1]);
// const result = firstEl * lastEl;
// console.log(result);
//Напиши скрипт для перебору масиву fruits циклом for. Для кожного елементу масиву
//виведи в консоль рядок у форматі номер_елемента: значення_елемента. Номерація елемента
//починається з одиниці
// const fruits = ["banana", "kiwi", "lemon", "apple"];
/////////////  1-й спосіб  //////////////
// for (let i = 0; i < fruits.length; i++) {
//   console.log(`${i + 1} : ${fruits[i]}`);
// }
///////////  2-й спосіб   /////////////////
// for (let i = 0, n = 1; i < fruits.length; i++, n++) {
//   console.log(`${n} : ${fruits[i]}`);
// }
// Напиши скрипт, який виводить у консоль імя та телефоний номер користувача.
//У змнних names та phones зберігаються імена та телефони користувачів, розділені
//комамию. Порядковий номер імен та телефонів у рядках вказують на відповідність.
//Кількість імен та телефонів гарановано однакова.
// const names = "Jacob,William,Solomon,Artemis";
// const phones = "0934445555,0952121121,09312313153,095021315465";
// const namesArr = names.split(",");
// console.log(namesArr);
// const phoneArr = phones.split(",");
// console.log(phoneArr);
// for (let i = 0; i < namesArr.length, i < phoneArr.length; i++) {
//   //якщо різна довжина у масивів
//   console.log(`${namesArr[i]}:`, phoneArr[i]);
// }
// Напиши скрипт,який виводить у консоль усі слова рядка крім першого і останьогою
//Рядок не повинен починатись або закінчуватись символом пробілу.Скрипт повинен
// працювати для будь-якого рядка
// const string = "Welcome to the future";
// const test = arr.push("!");
// console.log(test); // метод push - повертає довжину масиву
// // arr.splice(0, 1); //або arr.pop()
// // arr.splice(arr.length - 1); //або arr.shift()
// // const str = arr.join(" ");
// // console.log(str);
// const arr = string.split(" ").slice(1, -1).join(" "); //Можна одніює строчкою
// console.log(arr);
//як зробити реверс шляхом циклу for
// let newString = "";
// for (let i = string.length-1; i >= 0; i--) {
//   newString += string[i];
// }
// console.log(newString);
////////////////// Сортування масиву  ////////////
//Напиши скрипт сортування масиву рядків в алфавітному порядку
// за першою літерою елемента
// const langs = ["python", "php", "ruby", "c++", "javascript", "haskel"];
// const sortArr = langs.sort();
// console.log(sortArr);
// for (let i = 0; i < langs.length; i++) {
// if (langs[0] > langs[i]) { не правильно!!!! Треба робити два цикли for
// let newValue = langs[i];
// langs[i] = langs[0];
// langs[0] = newValue;

// const result = langs.splice(i, 1)[0];
// langs.unshift(result);
//   }
// }
// console.log(langs);
// for (let i = 0; i < langs.length; i++) {
//   for (let j = i + 1; j < langs.length; j++) {
//     if (langs[i] > langs[j]) {
//       const value = langs[i];
//       langs[i] = langs[j];
//       langs[j] = value;
//     }
//   }
// }

// for (let i = 0; i < langs.length; i++) {
//   console.log(`${i + 1} : ${i}`);
// }
// console.log(langs);
///////////////////     Метод slice     ///////////////////
// const animals = ["ant", "bison", "camel", "duck", "elephant"];
// const newArr = animals.slice(1, -3);
// console.log(newArr);
//
///////      Пошук найменшого числа у масиві     //////////////////
// const numbers = [1, 2, 57, 23, 55, 47];
// let min = numbers[0];
// for (let number of numbers) {
//   if (number < min) {
//     min = number;
//   }
// }
// console.log(min);
///////////////////     Пошук найбільшого числа у масиві  //////////////////
// const numbers = [1, 2, 57, 23, 55, 47];
// let max = numbers[0];
// for (let number of numbers) {
//   if (number > max){
//     max = number;
//   }
// }
// console.log(max);
//
/////////////////////     Пошук найбільшого числа у пустому масиві  //////////////////
// const numbers = [0];
// let max;
// for (let number of numbers) {
//   if (number > max || max === undefined) {
//     max = number;
//   }
// }
// console.log(max);

///////////////   метод charCodeAt     /////////////
// const str = "Welcome to Ukraine!";
// const char = str.charCodeAt(5);
// console.log(char);
// function includes(array, value) {
//   for (let i = 0; i < array.lenght; i++) {
//     const arrEl = array[i];

//     if (arrEl === value) {
//       return true;
//     }
//   }
//   return false;
// }
// console.log(includes([1, 2, 3, 4, 5], 1));

// function includes(array, value) {
//   // Change code below this line

//   for (let i = 0; i < array.length; i += 1) {
//     const arrayElt = array[i];

//     if (arrayElt === value) {
//       return true;
//     }
//   }
//   return false;
//   // Change code above this line
// }
// console.log(includes([1, 2, 3, 17, 5], 17));
///////////          Приклад розстановик слів в алфавітному порядку  ///////////////
// const animals = ["bison", "duck", "camel", "ant", "elephant"];
// for (let i = 0; i < animals.length; i++) {
//   for (let j = i + 1; j < animals.length; j++) {
//     if (animals[i] > animals[j]) {
//       let newValue = animals[i];
//       animals[i] = animals[j];
//       animals[j] = newValue;
//     }
//   }
// }
// console.log(animals);

/////      Область видимості функції      ///////////////
// let b = 10;
// function foo(b) {
//   b = 45;
// }
// foo(115);
// console.log(b);
// const test = [1, 2, 3, 4];

// function foo(arr) {
//   arr.splice(0, 1);
// }
// foo(test);
// console.log(test);
// function includes(array, value) {
//   for (let i = 0; i < array.lenght; i++) {
//     // const arrEl = array[i];
//     if (value === arr[i]) {
//       return true;
//     } else {
//       return false;
//     }
//   }
// }
// console.log(includes([1, 2, 3, 4, 5], 2));

// function includes(array, value) {
//   for (let i = 0; i < array.length; i += 1) {
//     if (array[i] === value) {
//       return true;
//     }
//   }
//   return false;
// }
// console.log(includes([1, 2, 3, 17, 5], 20));
//Виконай рефакторинг функції findNumber(start, end, divisor) таким чином, щоб вона:
//повертала перше число від start до end, яке ділиться на divisor без остачі
//не використала оператор break
//не використала змінну number
// function findNumber(start, end, divisor) {
//   for (let i = start; i <= end; i++) {
//     if (i % divisor === 0) {
//       return i;
//     }
//   }
// }
// console.log(findNumber(2, 6, 5));
// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i <= end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//   }
// }
// console.log(number);

// Напиши функцію getEvenNumbers(start, end),
// яка повертає масив усіх парних чисел від start до end. Парним вважається число, яке ділиться на 2 без остачі (10 % 2 === 0).
// function getEvenNumbers(start, end) {
//   let numbers = [];
//   for (let i = start; i <= end; i++) {
//     if (i % 2 === 0) {
//       numbers.push(i);
//     }
//   }
//   return numbers;
// }
// console.log(getEvenNumbers(2, 5));
// const a = 3 % 3;
// const b = 4 % 3;
// const c = 11 % 8;
// const d = 12 % 7;
// const e = 8 % 6;
// console.log(e);

//Напиши функцію filterArray(numbers, value), яка приймає масив чисел (параметр numbers) і повертає новий масив,
// в якому будуть тільки ті елементи масиву numbers, які більші за значення параметра value (число).
// function filterArray(numbers, value) {
//   let newArr = [];
//   //   for (let i = 0; i < numbers.length; i++) {
//   //     if (numbers[i] > value) {
//   //       newArr.push(numbers[i]);
//   //     }
//   //   }
//   for (let number of numbers) {
//     if (number > value) {
//       newArr.push(number);
//     }
//   }

//   return newArr;
// }
// console.log(filterArray([12, 24, 8, 41, 76], 24));
/////// Стеки   /////////////////
//
function createString(name, year) {
  //   let result = add(year);
  return `My name is ${name}, I am ${add(year)}`;
}

function add(arr) {
  let sum = 0;
  for (number of arr) {
    sum += number;
  }
  return sum;
}
console.log(createString("Nelia", [1, 8, 6, 7]));
