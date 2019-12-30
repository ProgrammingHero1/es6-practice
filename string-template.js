const firstName = 'Barak';
const lastName = 'Obama';
const greetings = 'Hello '+ firstName + " " + lastName + ", How are you?";
const greet = `Hello ${firstName} ${lastName}, How are you?`;
const salary = 500;
const bonus = 300;
const payment = `You got total of ${(salary + bonus)/2}. Enjoy it.`
//console.log(payment);

const multiline = "my first line \n"+
"My second line \n"+
"My third line";

const newMulti = `My first line
My second line
my third line.
Myline for ${firstName}`;

console.log(newMulti);