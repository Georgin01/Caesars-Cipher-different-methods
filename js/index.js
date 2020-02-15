//Переменные используемые для вывода шифра(алфавитный метод)
const outputAlph = document.getElementById('outputAlph');
const shiftAlph = Number(document.getElementById('shiftAlph').value);
const messageAlph = document.getElementById('messageAlph').value;

//Переменные используемые для вывода шифра(метод с юникодом)
const outputUni = document.getElementById('outputUni');
const shiftUni = Number(document.getElementById('shiftUni').value);
const messageUni = document.getElementById('messageUni').value;

//Объявление функции "алфавитного" шифра Цезаря
function cipherAlphabet(input) {
    let text, shift, result = '';

    //Проверяем аргумент функции. Если аргумент - объект присваиваем зарание объявленные переменные
    if (typeof input === 'object'){
        text = input.msg;
        shift = input.shift;
    }
    else {
        result = 'Error!';
        return result;
    }

    //Сохраняем наши алфавиты в переменные разбивая на массив
    const rusAlphabetUp = 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ'.split('');
    const rusAlphabetLow = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя'.split('');
    const engAlphabetUp = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    const engAlphabetLow = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const numbers = '0123456789'.split('');
    const chars = '-=~\"\'#$%&*^:<>?/!{(|)}.\\, '.split('');

    //Сдвигаем алфавиты с помощью функции arrEncrypting
    const encryptedRusAlphabetUp = arrEncrypting(shift, rusAlphabetUp);
    const encryptedRusAlphabetLow = arrEncrypting(shift, rusAlphabetLow);
    const encryptedEngAlphabetUp = arrEncrypting(shift, engAlphabetUp);
    const encryptedEngAlphabetLow = arrEncrypting(shift, engAlphabetLow);
    const encryptedNumbers = arrEncrypting(shift, numbers);
    const encryptedChars = arrEncrypting(shift, chars);

    function arrEncrypting(shift, arr) {
        //Объявляем переменную сдвинутого массива алфавита.
        // Присваиваем ему часть обычного массива начиная с индекса [shift]
        let encryptedArr = arr.slice(shift);
        //Дополняем наш массив оставшимися елементами в конец и возвращаем массив
        return encryptedArr.concat(arr.slice(0, shift));
    }

    //В цикле делаем посимвольную проверку: Если данный симфол введенной строки есть в определенном масиве -
    //добавляем к результатирующей строке символ из сдвинутого массива с тем же индексом, на котором находился
    //введенный символ в обычном массиве
    for (let i=0; i<text.length; i++){
        if (chars.includes(text[i])) result += encryptedChars[chars.indexOf(text[i])];
        if (numbers.includes(text[i])) result += encryptedNumbers[numbers.indexOf(text[i])];
        if (engAlphabetLow.includes(text[i])) result += encryptedEngAlphabetLow[engAlphabetLow.indexOf(text[i])];
        if (engAlphabetUp.includes(text[i])) result += encryptedEngAlphabetUp[engAlphabetUp.indexOf(text[i])];
        if (rusAlphabetLow.includes(text[i])) result += encryptedRusAlphabetLow[rusAlphabetLow.indexOf(text[i])];
        if (rusAlphabetUp.includes(text[i])) result += encryptedRusAlphabetUp[rusAlphabetUp.indexOf(text[i])];
    }
    //Выводим результат
    return result;
}

function cipherUnicode(input){
    let text, shift, result = '';

    //Проверяем аргумент функции. Если аргумент - объект присваиваем зарание объявленные переменные
    if (typeof input === 'object'){
        text = input.msg;
        shift = input.shift;
    }
    else {
        result = 'Error!';
        return result;
    }

    //С помощью функций charCodeAt и fromCharCode получаем код символа введенной строки
    //И приписываем к строке вывода символ с кодом сдвинутым на shift
    for (let i=0; i<text.length; i++){
        let code = text.charCodeAt(i);
        result += String.fromCharCode(code + shift);
    }
    //Выводим результат
    return result;
}

//Последующие операции служат для вывода закодированного и розшифрованного сообщения
//"Вешаем" обработчик на каждое событие и применяем функцию шифрования к объекту вывода

//Для метода с алфавитом
document.getElementById("messageAlph").addEventListener("input", function(){
    let value = this.value;
    outputAlph.textContent = cipherAlphabet({
        msg: value,
        shift: shiftAlph
    });
});
document.getElementById("shiftAlph").addEventListener("keyup", function(){
    let value = Number(this.value);
    outputAlph.textContent = cipherAlphabet({
        msg: messageAlph,
        shift: value
    })
});
document.getElementById("decodeAlph").addEventListener("input", function(){
    let value = this.value;
    outputAlph.textContent = cipherAlphabet({
        msg: value,
        shift: -shiftAlph
    });
});

//Для метода с юникодом
document.getElementById("messageUni").addEventListener("input", function(){
    let value = this.value;
    outputUni.textContent = cipherUnicode({
        msg: value,
        shift: shiftUni
    });
});
document.getElementById("shiftUni").addEventListener("keyup", function(){
    let value = Number(this.value);
    outputUni.textContent = cipherUnicode({
        msg: messageUni,
        shift: value
    })
});
document.getElementById("decodeUni").addEventListener("input", function(){
    let value = this.value;
    outputUni.textContent = cipherUnicode({
        msg: value,
        shift: -shiftUni
    });
});