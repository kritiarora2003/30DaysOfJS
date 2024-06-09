///////////////////////////// EXERCISE LEVEL 1
let bahar = () => {
    let a = 'me'
    let andar = () => {
        a = a+' n you'
        return a
    }
    return andar;
}

let func = bahar()
console.log(func())


bahar = () => {
    let a = 'me'
    andar1 = () => {
        a = a + ' n  you'
        return a
    }

    andar2 = () => {
        a = a + ' n myself'
        return a
    }

    return {
        andar2:andar2(),
        andar1:andar1()
    }
}

func = bahar()
console.log(func.andar1) // me n myself n you
console.log(func.andar2) // me n myself