function solve(num) {
    let sum = 0
    let num_string = String(num)
    let isSame = true
    for (let i = 0; i < num_string.length; i++) {
        sum += Number(num_string[i])
        if (num_string[i] !== num_string[i+1] && num_string[i+1] !== undefined)  {
            isSame = false
        }
    }
    return `${isSame}\n${sum}` 
}

console.log(solve(22222))