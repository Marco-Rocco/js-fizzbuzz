console.log('fizzbuzz');

for (let i = 1; i <= 100; i++) {

    if (i%5 === 0 && i%3 === 0) {
        let i = 'fizzbuzz'
        console.log(i);
    }

    else if (i%3 === 0) {
        let i = 'fizz'
        console.log(i);
    }

    else if (i%5 === 0) {
        let i = 'buzz'
        console.log(i);
    }

    else {
        console.log(i)
    }
}