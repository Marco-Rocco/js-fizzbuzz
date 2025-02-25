console.log('fizzbuzz');

for (let counter = 1; counter <= 100; counter++) {
    console.log(counter)

    if (counter%5 === 0 && counter%3 === 0) {
        let counter = 'fizzbuzz'
        console.log(counter);
    }

    else if (counter%3 === 0) {
        let counter = 'fizz'
        console.log(counter);
    }

    else if (counter%5 === 0) {
        let counter = 'buzz'
        console.log(counter);
    }
}