//задание1

let number = prompt("Введите число:");


number = Number(number);

if (number > 10) {
    console.log("Число больше 10");
} else {
    console.log("Число меньше или равно 10");
}

//задание2

let isConfirmed = confirm("Вы действительно хотите удалить файл?");


if (isConfirmed) {
    console.log("Файл удален");
} else {
    console.log("Удаление отменено");
}


//задание3

let age = prompt("Введите ваш возраст:");

age = Number(age);

if (age < 18) {
    console.log("Вы еще подросток");
} else if (age >= 18 && age <= 30) {
    console.log("Вы молодой взрослый");
} else if (age > 30) {
    console.log("Вы взрослый");
}


//задание4

let num = prompt("Введите число:");

number = Number(num);

console.log(num % 2 === 0 ? "Четное число" : "Нечетное число");


//задание5

let dayNumber = prompt("Введите номер дня недели (1-7):");

dayNumber = Number(dayNumber);

switch (dayNumber) {
    case 1:
        console.log("Понедельник");
        break;
    case 2:
        console.log("Вторник");
        break;
    case 3:
        console.log("Среда");
        break;
    case 4:
        console.log("Четверг");
        break;
    case 5:
        console.log("Пятница");
        break;
    case 6:
        console.log("Суббота");
        break;
    case 7:
        console.log("Воскресенье");
        break;
    default:
        console.log("только 7 дней");
}


//задание6

let num1 = prompt("Введите первое число:");
let num2 = prompt("Введите второе число:");


num1 = Number(num1);
num2 = Number(num2);


if (num1 === num2) {
    console.log("Числа равны");
} else {

    console.log(num1 > num2 ? "Первое число больше" : "Второе число больше");
}


//доп задание

let month = prompt("Введите номер месяца (1-12):");

month = Number(month);

switch (month) {
    case 12:
    case 1:
    case 2:
        console.log("Зима");
        break;
    case 3:
    case 4:
    case 5:
        console.log("Весна");
        break;
    case 6:
    case 7:
    case 8:
        console.log("Лето");
        break;
    case 9:
    case 10:
    case 11:
        console.log("Осень");
        break;
    default:
        console.log("Неправильно");
}
