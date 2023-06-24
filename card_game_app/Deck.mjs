import Card from "./Card.mjs";

class Deck {
  constructor(gameMode = null) {
    this.deck = Deck.generateDeck(gameMode);
  }

  static generateDeck(gameMode = null) {
    let newDeck = [];
    const suits = ["♣", "♦", "♥", "♠"];
    const values = [
      "A",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K",
    ];

    const blackJack = { A: 1, J: 10, Q: 10, K: 10 };

    for (let i = 0; i < suits.length; i++) {
      for (let j = 0; j < values.length; j++) {
        let currentValue = values[j];
        let intValue =
          gameMode === "21"
            ? currentValue in blackJack
              ? blackJack[currentValue]
              : parseInt(currentValue)
            : j + 1;
        newDeck.push(new Card(suits[i], values[j], j + 1));
      }
    }
    return newDeck;
  }

  shuffle() {
    for (let i = this.deck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]]; // Swap elements
    }
  }

  draw() {
    return this.deck.pop();
  }

  print() {
    console.log("Displaying cards...");
    for (let i = 0; i < this.deck.length; i++) {
      console.log(this.deck[i].getCardString());
    }
  }
}

export default Deck;
