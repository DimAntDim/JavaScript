function cook(num, act1, act2, act3, act4, act5) {
    actionList = [act1, act2, act3, act4, act5]
    let result = Number(num)
    for (let i = 0; i < actionList.length; i++) {
       let action = actionList[i] 
       switch (action) {
            case "chop":
                result /= 2;
                break;
            case "dice":
                result = Math.sqrt(result);
                break;
            case "spice":
                result += 1;
                break;
            case "bake":
                result *= 3;
                break;
            case "fillet":
                result -= result*0.2;
                break;
       }
       console.log(result)
    }
}

cook('32', 'chop', 'chop', 'chop', 'chop', 'chop')
cook('9', 'dice', 'spice', 'chop', 'bake', 'fillet')