interface Human {
    name: string,
    age: number,
    gender: string
}



const person = {
    name : "bosoeng",
    gender: "male",
    age: 22
}

const sayhi = (person: Human): string =>{
    const {name, age, gender} = person;
    return `Hello ${name}, you are ${age}, you are a ${gender}!`;
}

console.log(sayhi(person));

export {};