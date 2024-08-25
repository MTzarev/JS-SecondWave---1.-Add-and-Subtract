function addAndSubtract(input) {
    let firstSum = 0;
    let secondSum = 0;
    let num = 0;

    for (let i = 0; i < input.length; i++) {
        num = Number(input[i]);
        firstSum += num;
        if (num % 2 === 0) {
            num += i;
        } else {
            num -= i;
        }
        input[i] = num;
        secondSum += num;
    }
    console.log(input);
    console.log(firstSum);
    console.log(secondSum);
    
    
    
    //console.log(`${input}\n${firstSum}\n${secondSum}`)
}
addAndSubtract([5, 15, 23, 56, 35]);
