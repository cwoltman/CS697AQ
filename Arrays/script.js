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

    if (evenNums.length() > 0)
    {
        console.log("Even numbers:", evenNums);
    }
    else
    {
        console.log("None");
    }

    if (oddNums.length() > 0)
    {
        console.log("Odd numbers:", oddNums);
    }
    else
    {
        console.log("None");
    }
}
