let msg = 'Secret Agent Man';
console.log(msg);

const alpha = Array.from(Array(26)).map((e, i) => i + 65);
const alphabet = alpha.map((x) => String.fromCharCode(x));
console.log(alphabet);

const form = document.forms[0];
const output = document.getElementById('output');