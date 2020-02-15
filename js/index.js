import {cipherAlphabet} from './cipherAlphabet.js';
import {cipherUnicode} from './cipherUnicode.js';
import {output} from "./utilities.js";

//Переменные используемые для вывода шифра(алфавитный метод)
const outputAlph = document.getElementById('outputAlph');
const shiftAlph = document.getElementById('shiftAlph');
const messageAlph = document.getElementById('messageAlph');
const decodeAlph = document.getElementById('decodeAlph');

//Переменные используемые для вывода шифра(метод с юникодом)
const outputUni = document.getElementById('outputUni');
const shiftUni = document.getElementById('shiftUni');
const messageUni = document.getElementById('messageUni');
const decodeUni = document.getElementById('decodeUni');

//Импортированная вспомагательная функция
output(messageAlph, shiftAlph, decodeAlph, outputAlph, cipherAlphabet);
output(messageUni, shiftUni, decodeUni, outputUni, cipherUnicode);
