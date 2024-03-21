function divideArray(numbers) {

    let evenNums = [];
    let oddNums = [];

    numbers.forEach(num => {
        if (num % 2 === 0) {
            evenNums.push(num);
        } else {
            oddNums.push(num);
        }
    });

    evenNums.sort((a, b) => a - b);
    oddNums.sort((a, b) => a - b);

    console.log("Even numbers:", evenNums);
    console.log("Odd numbers:", oddNums);
}
