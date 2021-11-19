function solve(steps, footLenght, speed) {
    let distance = (steps * footLenght)
    let extraTime = 0
    if (distance > 500) {
        extraTime = Math.floor(distance / 500)*60
    }
    speed = (speed*1000) / 3600
    let time = distance / speed
    time += extraTime

    return (new Date(time * 1000)).toUTCString().match(/(\d\d:\d\d:\d\d)/)[0];
}


console.log(solve(4000, 0.60, 5))
console.log(solve(2564, 0.70, 5.5))