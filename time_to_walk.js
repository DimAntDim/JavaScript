function toTimeString(seconds) {
    return (new Date(seconds * 1000)).toUTCString().match(/(\d\d:\d\d:\d\d)/)[0];
  }

function solve(steps, footLenght, speed) {
    let distance = (steps * footLenght)
    let extraTime = 0
    if (distance > 500) {
        extraTime = Math.floor(distance / 500)*60
    }
    speed = (speed*1000) / 3600
    let time = distance / speed
    time += extraTime

    return toTimeString(time)
}


console.log(solve(4000, 0.60, 5))