(function(){
    const numbers = [1,2,3,4,5,6,7,8,9,10]
    const suit = [1,2,3,4]

    const randomCard = function(){
        const randomValue =  Math.ceil(Math.random()*13)
        const randomSuit = Math.ceil(Math.random()*4)

        const value_card = Number(prompt('Digite o valor da carta: \nAs - 1\nValete - 2\nRainha - 3\nReis - 4'))
        const suit_card = Number(prompt('Digite naipe da carta: \nEspadas - 1\nCopas - 2\nPaus - 3\nOuros - 4'))

        if(value_card > 13 || suit_card > 4){
            alert('Numeros Invalidos')
        }else if(randomValue === value_card && randomSuit === suit_card){
            alert("Voce Acertou")
        }else if(randomValue === value_card){
            alert("Acertou Valor")
        }
        else if(randomSuit === suit_card){
            alert("Acertou Naipe")
        }else{
            alert("Voce Errou")
        }

        alert(`Voce chutou a seguinte carta: \nValor: ${value_card}\nNaipe: ${suit_card}`)
        alert(`O computador gerou a seguinte carta: \nvalor${value_card}\nNaipe: ${suit_card}`)
    }

    randomCard()

})()
