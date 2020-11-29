output = '*';
counter = 6;

while (counter >= 0) {
    subCounter = 1;
    spaces = '';

    while (subCounter <= counter) {

        subCounter += 1;
        spaces += ' ';
    }

    console.log(spaces + output);
    output += '**';
    counter -= 1;
}

counter = 5;
spaces = ' ';

while (counter >= 0) {
    subCounter = 1;
    output = '*';


    while (subCounter <= counter) {

        subCounter += 1;
        output += '**';
    }

    console.log(spaces + output);
    spaces += ' ';
    output += '*';
    counter -= 1;
}

counter = 6;
spaces = '';

while (counter >= 0) {
    
    subCounter = 1;
    output = '*';
    

    while(subCounter <= counter) {
        subCounter += 1;
        output += '*';
    }

    console.log(output + spaces + output );
    spaces += '  ';
    counter -= 1;
}

counter = 6;
output = '*';

while (counter >= 0) {

    subCounter = 1;
    spaces = '';

    while (subCounter <= counter) {
        subCounter += 1;
        spaces += '  ';
    }

    console.log(output + spaces + output);
    spaces += '  ';
    output += '*';
    counter -= 1;
}

let i = prompt('Please give a number');
if (i % 15 == 0) {
    alert("FizzBuzz");
} else if (i % 3 == 0) {
    alert("Fizz");
} else if (i % 5 == 0) {
    alert("Buzz");
} else {
    alert(`${i} ain't either Fizz or Buzz`);
}

let guess = parseInt(prompt('Please enter your password'));
let password = 123;
while (guess != password) {
    guess = prompt('Wrong password. Please reenter your password');
}
if (guess == password) {
    alert('You may proceed. Please do not forget to have a look at the console');
}
