//задание1

let a = 10;
let b = 5;
let c = 2;

console.log("Сложите все три переменные:", a + b + c);
console.log("Вычтите переменную `b` из суммы `a + c`", (a + c) - b);
console.log(" Умножьте переменную `a` на `b` и разделите на `c`:", (a * b) / c);
console.log("Найдите остаток от деления `a` на `b`:", a % b);

//задание2

let x = 7;

let result1 = x++ + ++x;
console.log("Выведите результат выражения `x++ + ++x`:", result1);

let result2 = x-- - --x;
console.log("Выведите результат выражения `x-- - --x`", result2);


//задание3

let z = 4;
let y = 5;
let outcome = "The result is: " + (z + y);

console.log(outcome);

//задание4

let k = 10;
let l = 3;
let m = 2;


let condition1 = k > l && k > 0 && l > 0;
console.log("Число `k` больше `l`, и оба числа больше 0:", condition1);


let condition2 = m < 10 || m === 2;
console.log("Число `m` меньше 10 или равно 2:", condition2);


let condition3 = a / c !== 5;
console.log(" Результат деления `k` на `m` не равен 5:", condition3);


//задание5

let num = 10;
let str = "10";

console.log("Число `10` и строку `10` с помощью оператора `==`:", num == str); 

console.log("Число `10` и строку `10` с помощью оператора `===`:", num === str); 



//задание6


let o = 9;
let outcome1 = ((o % 2 === 0 || o % 3 === 0) && o % 6 !== 0);
console.log("Напишите выражение, которое возвращает `true`, если переменная `x` делится на 2 или 3, но не делится на 6:", outcome1);


let p = 12;
let outcome2 = !(p > 10 || p < 5);
console.log("Напишите выражение, которое возвращает `false`, если переменная `y` больше 10 или меньше 5:", outcome2);