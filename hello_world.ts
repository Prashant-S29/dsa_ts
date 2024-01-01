import promptSync from "prompt-sync"
const prompt = promptSync();

const name: string = prompt("Your good name:  ");

console.log(`HELLO ${name}!`);