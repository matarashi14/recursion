class Card{
    constructor(suit, value, intValue){
        this.suit = suit
        this.value = value
        this.intValue = intValue
    }

    getCardString(){
        return this.suit + " " + this.value + "(" + this.intValue + ")";
    }
}

export default Card;

// let card1 = new Card("♦︎", "A", 1);

// console.log(card1.getCardString());