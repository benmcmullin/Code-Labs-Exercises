function arrayOfMultiples (num, length) {
    const result = [];
    for (let i=0; i <= length; i++){
        result.push(num *(i+1));

    }
    return result;
}
const answer = arrayOfMultiples(10,5);
console.log(answer)