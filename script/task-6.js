//обьявляем переменные

let total = 0;
let input;

do {
  input = prompt('Введите число:');
  total += Number(input);
} while (input !== null);

//если пользователь не нажал cancel Операция ввода числа продолжается
alert(`Общая сумма чисел равна ${total}`);
