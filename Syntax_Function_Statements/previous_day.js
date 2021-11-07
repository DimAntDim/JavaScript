function solve(year, month , day) {
    const today = new Date(year, month, day)
    today.setDate(today.getDate() - 1)
    let yesterday = new Date(today)
    yesterday.getDate()-1
    y= yesterday.ge
    return yesterday(year, month, day)
}

console.log(solve(2016, 9, 30))