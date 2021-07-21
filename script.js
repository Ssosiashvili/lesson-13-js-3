// 1.

function isEven(a) {
    if (a % 2 == 0) {
        return true
    } else {
        return false
    }
}

// 2. დაწერეთ ფუნქცია, რომელიც პარამეტრად მიიღებს ორ რიცხვს - მართკუთხედის გვერდების ზომებს და დააბრუნებს მართკუთხედის ფართობს.

function rectArea (a, b) {
    return a * b;
}

// 3. დაწერეთ ფუქცია, რომელიც პარამეტრად მიიღებს ერთ რიცხვს - კვადრატის გვერდის სიგრძეს და დააბრუნებს კვადრატის ფართობს. 
//    ფართობის გამოსათვლელად გამოიყენეთ #2 პუნქტში აღწერილი ფუნქცია.

function squareArea(a) {
    return rectArea (a , a);
}

// 4. დაწერეთ ფუნქცია getRandomNumbers, რომელიც Math.random() ფუნქციის გამოყენებით დააგენერირებს 
//    და დააბრუნებს 0-დან 100-მდე შემთხვევით რიცხვს.

function getRandomNumber () {
    return Math.round (Math.random() * 100);
}
// 5. დაწერეთ ფუნქცია getRandomNumbersFromRange, რომელიც მიიღებს ორ რიცხვს პარამეტრად (a, b)  
//    და დააბრუნებს შემთხვევით რიცხვს a -დან b -მდე შუალედში.

function getRandomNumbersFromRange (a, b) {
    return Math.round ( Math.random() * (b-a) + a);
}

// 6. დაწერეთ ფუნქცია generateRandomNumbersArray, რომელიც მიიღებს ერთ პარამეტრს (n - ნატურალური რიცხვი) და დააბრუნებს n 
//სიგრძის მასივს, რომელშიც იქნება 0-დან 100-მდე შემთხვევითი რიცხვები. შემთხვევითი რიცხვის მისაღებად გამოიყენეთ უკვე 
//დაწერილი ფუნქცია getRandomNumbersFromRange. ფუნქციის მიერ დაბრუნებული მასივი შეინახეთ ცვლადში randomNumbers

function generateRandomNumbersArray (n) {
    let randomNumbers = [];  
    for (let i = 0; i < n; i++) {
        randomNumbers.push (getRandomNumbersFromRange (0, 100));
    }
    return randomNumbers;
}
let randomNumbers = generateRandomNumbersArray (7);



// 7. დაწერეთ ფუნქცია, რომელიც პარამეტრად მიიღებს generateRandomNumbersArray ფუნქციის მიერ დაბრუნებულ მასივს randomNumbers, 
//    ამ მასივში იპოვის და დააბრუნებს უდიდეს რიცხვს.
function hugeNumber (numbers) {
    let maxNum = 0;
    for (let i = 0; i < numbers.length; i ++) {
        if (numbers[i] > maxNum) {
            maxNum = numbers[i]
        }
    }
    return maxNum;
} 

// 8* დაწერეთ ფუნქცია, რომელიც პარამეტრად მიიღებს ნატურალურ რიცხვს და დააბრუნებს true -ს თუ რიცხვი არის მარტივი,
//    ან false -ს თუ რიცხვი არ არის მარტივი. მარტივია რიცხვი, რომელიც მხოლოდ 1-ზე და თავისთავზე იყოფა. 
//    მარტივი რიცხვებია: 2, 3, 5, 7, 11 და ა.შ.

/* არ მუშაობს
function isPrimeNumber (num) {
    if (num == 1) {
        return false
    }

    if (num == 2) {
        return true
    }

    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            return false
        } else {
            return true
        }
    } 
}                         რატო არ მუშაოოობს? -_-    */

// 8. ვიწვალე და ჩავიტანე "return true" for- ის გარეთ, მაგრამ არ მესმის შინაარსში რა სხვაობაა.

function isPrimeNumber (num) {
    if (num == 1) {
        return false
    }

    if (num == 2) {
        return true
    }

    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            return false
        }
    }
    return true 
}