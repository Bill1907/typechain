"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const person = {
    name: "bosoeng",
    gender: "male",
    age: 22
};
const sayhi = (person) => {
    const { name, age, gender } = person;
    return `Hello ${name}, you are ${age}, you are a ${gender}!`;
};
console.log(sayhi(person));
//# sourceMappingURL=index.js.map