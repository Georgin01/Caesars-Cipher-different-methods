//Експортируем вспомогательную функцию
//Последующие операции служат для вывода закодированного и розшифрованного сообщения
//"Вешаем" обработчик на каждое событие и применяем функцию шифрования к объекту вывода

export function output(message, shift, decode, output, cipher) {
    message.addEventListener("input", function(){
        let value = this.value;
        output.textContent = cipher({
            msg: value,
            shift: Number(shift.value)
        });
    });
    shift.addEventListener("keyup", function(){
        let value = Number(this.value);
        output.textContent = cipher({
            msg: message.value,
            shift: value
        });
    });
    decode.addEventListener("input", function(){
        let value = this.value;
        output.textContent = cipher({
            msg: value,
            shift: -Number(shift.value)
        });
    });
}