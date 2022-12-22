//   1)Запитай у користувача його вік і визначи, ким він є: дитиною (0-11), підлітком (12-17),
//   дорослим (18-59) або пенсіонером (60 ...), передбач можливість введення невірних даних.

const howOld = prompt('Будь ласка, введіть свій вік')

console.log(howOld)
if(isNaN(howOld)) {
    console.log('Ви ввели не число')
} else if (howOld <0) {
    console.log('Помилка вводу, спробуйте ще раз');
} else if (howOld >= 0 && howOld <=11) {
    console.log('Зрозуміло, ви дитина');
} else if (howOld >= 12 && howOld <=17) {
    console.log('Зрозуміло, ви підліток');
} else if (howOld >= 18 && howOld <=59) {
    console.log('Зрозуміло, ви дорослий');
} else if (howOld >= 60 && howOld <=99) {
    console.log('Зрозуміло, ви пенсіонер');
}  else {
    console.log('Стільки не живуть');
}


//   2)Запитай у користувача число від 0 до 9 і виведи йому спецсимвол,
//   який розташований на цій клавіші (1 !, 2 @, 3 # і т. д).

const number = prompt('Введіть число від 0 до 9');
switch (number) {
    case '0':
        console.log(')')
        break;
    case '1':
        console.log('!')
        break;
    case '2':
        console.log('@')
        break;
    case '3':
        console.log('#')
        break;
    case '4':
        console.log('$')
        break;
    case '5':
        console.log('%')
        break;
    case '6':
        console.log('^')
        break;
    case '7':
        console.log('&')
        break;
    case '8':
        console.log('*')
        break;
    case '9':
        console.log('(')
        break;
    default:
        console.log('Ви ввели невірне число');
        break;
}


//   3)Підрахуй суму всіх чисел в заданому користувачем діапазоні.

function sumAll(arr) {
    if (arr[0] > arr[1]) {
        arr.sort((a, b) => a - b);
    }

    const newArr = [];

    for(let i = arr[0]; i <= arr[1]; i += 1) {
        newArr.push(i);
    }

    return newArr.reduce((acc, cur) => acc + cur);
}

console.log(sumAll([3,1]))


//   4)Запитай у користувача 2 числа і знайди найбільший спільний дільник.

function nsdTwoNumbers(x, y) {
    if ((typeof x !== 'number') || (typeof y !== 'number')) {
        return false;
    }

    x = Math.abs(x);
    y = Math.abs(y);
    while(y) {
        let t = y;
        y = x % y;
        x = t;
    }
    return x;
}

console.log(nsdTwoNumbers(120, 360));


//   5)Запитай у користувача число і виведи всі дільники цього числа.

const num = prompt('Введіть будь-яке додатнє число для визначення всіх його дільників');
console.log(`Дільниками числа ${num} є числа: `);
for(let i = 1; i <= num; i++) {
    if(num % i === 0) {
        console.log(i);
    }
}


//   6)Запитай у користувача п’ятирозрядне число і визначи, чи є воно паліндромом.

function checkIfPalindrome(string) {
    const arrayValues = string.split('');
    const reverseArrayValues = arrayValues.reverse();
    const reverseString = reverseArrayValues.join('');

    if(string === reverseString) {
        console.log('Введене число є паліндромом');
    }
    else {
        console.log('Введене число НЕ є паліндромом');
    }
}

const string = prompt('Введіть будь-яке число для визначення, чи є воно паліндромом');

checkIfPalindrome(string);


//   7)Запитай у користувача суму покупки і виведи суму до оплати зі знижкою:
//      від 200 до 300 - знижка буде 3%;
//      від 300 до 500 - 5%;
//      від 500 і вище - 7%.

const purchaseAmount = prompt('Будь ласка, введіть суму своєї покупки');

const howMuchToPay = (amount) => {
    const amountNumber = +amount;
    if(isNaN(amountNumber)) {
        console.log('Ви ввели не число');
        return;
    }
    let discountAmount = 0;
    if (amountNumber >= 500) {
        discountAmount = 7;
    } else if (amountNumber >= 300) {
        discountAmount = 5;
    } else if (amountNumber >= 200) {
        discountAmount = 3;
    }

    const discount = (amountNumber*discountAmount)/100;
    const amountToBePaid = amountNumber-discount;
    console.log(`Сума до оплати: ${amountToBePaid} грн`);
}

howMuchToPay(purchaseAmount)


//   8)Запитай у користувача 10 чисел і порахуй, скільки він ввів додатніх, від’ємних і нулів.
//   При цьому також порахуй, скільки з них парних і непарних. Виведи статистику на екран.
//   Враховуй, що достатньо однієї змінної (не 10) для введення чисел користувачем.

const emptyArr = [];
for (let i = 1; i <=10; i++) {
    const newNumber = prompt('Введіть число для перевірки, додатнє воно чи від"ємне, парне чи непарне (10 з ' + i + ')');
    emptyArr.push(newNumber);
}

const filtered = emptyArr.filter((num) => !isNaN(num)) // remove all string (not a number)
const sortedArr = filtered.map((num) => Number(num)); // transform to number

const getAllPositive = (arr) => {
    const result = arr.filter((num) => num > 0);
    console.log('додатніх чисел ' + result.length + ' шт.');
}

const getAllNegative = (arr) => {
    const result = arr.filter((num) => num < 0);
    console.log('від"ємних чисел ' + result.length + ' шт.');
}

const getAllEven = (arr) => {
    const result = arr.filter((num) => num % 2  === 0);
    console.log('парних чисел ' + result.length + ' шт.');
}

const getAllOdd = (arr) => {
    const result = arr.filter((num) => num % 2  === !0);
    console.log('непарних чисел ' + result.length + ' шт.');
}

const getAllZero = (arr) => {
    const result = arr.filter((num) => num === 0);
    console.log('нулів ' + result.length + ' шт.');
}

getAllPositive(sortedArr);
getAllNegative(sortedArr);
getAllEven(sortedArr);
getAllOdd(sortedArr);
getAllZero(sortedArr);


//   9)Зацикли відображення днів тижня таким чином: «День тижня. Хочеш побачити наступний день?»
//   і так до тих пір, поки користувач натискає OK

const week = [
    'Понеділок',
    'Вівторок',
    'Середа',
    'Четвер',
    'П"ятниця',
    'Субота',
    'Неділя'
];
let iter = 0;
while(true) {
    const result = confirm('Натисни ОК, якщо хочеш побачити наступний день');
    if (result) {
        console.log(week[iter]);
        iter = iter === week.length - 1 ? 0 : iter + 1;
    } else {
        break;
    }
}