//   1)Запитай у користувача його вік і визначи, ким він є: дитиною (0-11), підлітком (12-17),
//   дорослим (18_59) або пенсіонером (60 ...), передбач можливість введення невірних даних.

const howOld = prompt('Будь ласка, введіть свій вік')
if (howOld >= 0 && howOld <=11) {
    alert('Зрозуміло, ви дитина');
} else if (howOld >= 12 && howOld <=17) {
    alert('Зрозуміло, ви підліток');
} else if (howOld >= 18 && howOld <=59) {
    alert('Зрозуміло, ви дорослий');
} else if (howOld >= 60 && howOld <=99) {
    alert('Зрозуміло, ви пенсіонер');
} else if (howOld <0) {
    alert('Помилка вводу, спробуйте ще раз');
} else {
    alert('Стільки не живуть');
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
    if (arr[0] > arr[1])
        arr.sort((a, b) => a - b)

    const newArr = []

    for(let i = arr[0]; i <= arr[1]; i += 1)
        newArr.push(i)

    return newArr.reduce((acc, cur) => acc + cur)
}

console.log(sumAll([3,1]))


//   4)Запитай у користувача 2 числа і знайди найбільший спільний дільник.

function nsdTwoNumbers(x, y) {
    if ((typeof x !== 'number') || (typeof y !== 'number'))
        return false;
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

function checkPalindrome(string) {
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

checkPalindrome(string);


//   7)Запитай у користувача суму покупки і виведи суму до оплати зі знижкою:
//      від 200 до 300 - знижка буде 3%;
//      від 300 до 500 - 5%;
//      від 500 і вище - 7%.

const purchaseAmount = prompt('Будь ласка, введіть суму своєї покупки')
if (purchaseAmount >= 500) {
    let discount = (purchaseAmount*7)/100;
    let amountToBePaid = purchaseAmount-discount;
    console.log('Сума до оплати: ${amountToBePaid}');
} else if (purchaseAmount >= 300) {
    let discount = (purchaseAmount*5)/100;
    let amountToBePaid = purchaseAmount-discount;
    console.log('Сума до оплати: ${amountToBePaid}');
} else if (purchaseAmount >= 200) {
    let discount = (purchaseAmount*3)/100;
    let amountToBePaid = purchaseAmount-discount;
    console.log('Сума до оплати: ${amountToBePaid}');
} else {
    console.log('Вибачте, для даної суми знижка не передбачена');
}


//   8)Запитай у користувача 10 чисел і порахуй, скільки він ввів додатніх, від’ємних і нулів.
//   При цьому також порахуй, скільки з них парних і непарних. Виведи статистику на екран.
//   Враховуй, що достатньо однієї змінної (не 10) для введення чисел користувачем.

const numbers = prompt('Введіть число для перевірки, додатнє воно чи від"ємне ');

if (numbers >= 0) {
    if (numbers === 0) {
        console.log('Введене вами число 0');
    } else {
        console.log('Введене вами число додатнє');
    }
} else {
    console.log('Введене вами число від"ємне');
}



const nmbr = prompt('Введіть число для перевірки, парне воно чи непарне ');
const result = (nmbr % 2  === 0) ? 'парне' : 'непарне';
console.log(`Введене вами число ${result}`);

//   9)Зацикли відображення днів тижня таким чином: «День тижня. Хочеш побачити наступний день? »
//   і так до тих пір, поки користувач натискає OK.