//Объявление функции "алфавитного" шифра Цезаря
export function cipherAlphabet(input) {
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
