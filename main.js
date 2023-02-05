const form = document.forms[0];
const input = document.getElementById('inmsg');
const cipher = document.createElement('cipher');

const alpha = Array.from(Array(26)).map((e, i) => i + 65);
const alphabet = alpha.map((x) => String.fromCharCode(x));

const newAlpha = "";

const shift = (n) => {
    for(let i = 0; i < alphabet.length(); i++) {
        let offset = (i + n) % alphabet.length;
		newAlpha += alphabet[offset];
    }
}

const encoder = (input) => {
    let result = "";
    input = input.toLowerCase();
    for (let i = 0; i < input.length; i++){
        let index = alphabet.indexOf(input[i]);
        result += newAlpha[index];
    }
    return result;
}