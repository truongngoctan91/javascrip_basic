console.log('Hello world from HTML')
// Key: value
let a = {
    name: 'Tan',
    address: 'Hanoi',
    telephon_number: '0758392119',
  
};
a['gender'] = 'male'
let b = 'Tan';
console.log('What is your name', `My name is: `, a.name)
console.log('Where are you from', `I'm from: `, a.address)
console.log('Where are you from', `I'm from: `, a['gender'])
console.log('Type of a:', typeof a, 'Type of b:', typeof b)