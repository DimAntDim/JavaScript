function radar(speed, area) {
    areaList = {
        "motorway" : 130,
        "interstate" : 90,
        "city" : 50,
        "residential" : 20,
    }
    let status = ''
    let overspeed = 0
    let speedLimit = areaList[area]
    if (speed < speedLimit) {
        return `Driving ${speed} km/h in a ${speedLimit} zone`
    }
    else {
        overspeed = speed - speedLimit
        if (0 < overspeed && overspeed <= 20) {
            status = 'speeding'
        } 
        else if (20 < overspeed && overspeed <= 40){
            status = 'excessive speeding'
        } 
        else {
            status = 'reckless driving'   
        }
        return `The speed is ${overspeed} km/h faster than the allowed speed of ${speedLimit} - ${status}`
    }
}

console.log(radar(40, 'city'))
console.log(radar(21, 'residential'))
console.log(radar(120, 'interstate'))
console.log(radar(200, 'motorway'))
