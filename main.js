const buyClay = () => {
    newPot = {}
    return newPot
}

const makePottery = (pot) => {
    pot.shape = 'Bowl'
    return pot
}

const bisqueFire = (pot) => {
    pot.readyForGlazing = true
    return pot
}

const glazePottery = (pot) => {
    if (pot.readyForGlazing === true) {
        pot.glazing = 'Midnight Blue'
    } 
    else {
        console.log('Make sure you bisque fire the pottery before you glaze it')
    }
    return pot
}

const finalFiring = (pot, temp) => {
    if (temp > 1200) {
        pot.cracked = true
    }
    else {
        pot.cracked = false
    }
    return pot.cracked
}

const pottery = buyClay()
makePottery(pottery)
bisqueFire(pottery)
glazePottery(pottery)

const firedPottery1400 = finalFiring(pottery, 1400)
console.log(firedPottery1400) 

const firedPottery1200 = finalFiring(pottery, 1200)
console.log(firedPottery1200) 

console.log(pottery)