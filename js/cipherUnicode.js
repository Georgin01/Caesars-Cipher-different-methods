//Объявление функции "юникодного" шифра Цезаря
export function cipherUnicode(input){
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
