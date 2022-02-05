function validityChecker(x1, y1, x2, y2) {
    let base_x = 0
    let base_y = 0
    let check1 = Math.sqrt(Math.pow(x1-base_x)+Math.pow(y1-base_y))
    let check2 = Math.sqrt(Math.pow(x2-base_x)+Math.pow(y2-base_y))
    let check3 = Math.sqrt(Math.pow(x1-x2)+Math.pow(y1-y2))
    if (check1.isinteger) {
        return `{x1, y1} to {x2, y2} is valid`;
    }
    else { 
        return `${x1, y1} to ${x2, y2} is invalid`;
    }    
}

console.log(validityChecker(3, 0, 0, 4))

