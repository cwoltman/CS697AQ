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

    console.log("Even numbers:");
    if (evenNums.length > 0)
    {
        evenNums.forEach((num) =>
        {
            console.log(num);
        });
    }
    else
    {
        console.log("None");
    }

    console.log("Odd numbers:");
    if (oddNums.length > 0)
    {
        oddNums.forEach((num) =>
        {
            console.log(num);
        });
    }
    else
    {
        console.log("None");
    }
}
