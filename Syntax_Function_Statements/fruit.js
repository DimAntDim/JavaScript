function fruit(fruit, weight, price) {
    //calc
    const weightKg = weight/1000
    const totalPrice = weightKg*price
    //print
    return `I need $${totalPrice.toFixed(2)} to buy ${weightKg.toFixed(2)} kilograms ${fruit}.`;
}

console.log(fruit('orange', 2500, 1.80))
