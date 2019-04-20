const name = 'anderson';
const age = 29;
console.log(``)
const mark = (text, ...values) => {
	console.log(text[0].trim())
  	console.log(values[0].trim()) //first value ${nome}
  	console.log(text[1].trim())
  	console.log(values[1]) //second value ${idade}
  	console.log(text[2].trim())
}

mark`My name is ${name} and I'm ${age} years old`;
console.log(``)


const defineMessage = (text, ...values) => {
    
    const hour = values[1];
    const name = values[0];

    if(hour >= 6 && hour <= 12) {
      values[0] = `Good morning`;
    } 
    else if (hour > 12 && hour <= 18) {
      values[0] = "Good afternoon";
    } 
    else {
      values[0] = "Good evening";
    }
    
    values[0] = `${values[0]} ${name}, it's `;
    return `${values[0]}${text[0]}${hour}${text[2]}`

  }

console.log(defineMessage`${'Anderson'} ${10}:00`)

//Keep the format, braek lines, spaces and so on
console.log(`
            - Hello!
            - My name is Anderson,
            - Nice to meet you!
`)