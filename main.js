const form = document.forms[0];
const input = document.getElementById('inmsg');
const cipher = document.createElement('cipher');
const alpha = Array.from(Array(26)).map((e, i) => i + 65);
const alphabet = alpha.map((x) => String.fromCharCode(x));

const caesar = (alphabet) => {
    let rand = Math.floor(Math.random()*1);
    let caeCipher = alphabet.map((x) => x + rand);
    return caeCipher; 
}

const encoder = (input, caesar) => {
    for(let i = 0; i < input.length; i++) {
        let int = parseInt(input[i], 26);
        return int;
    }
    for(let j = 0; j < caesar.length; j++) {
        let int2 = parseInt(caesar[j], 26);
        return int2;
    }
    if (this.int === this.int2) {
        return this.int[i + 1];
    } else {
        return this.int2;
    }
}

encoder();