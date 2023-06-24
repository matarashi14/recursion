import Deck from "./Deck.mjs";
import HelperFunction from "./HelperFunction.mjs";

class Dealer {
  static startGame(amountOfPlayers, gameMode) {
    let table = {
      players: [],
      gameMode: gameMode,
      deck: new Deck(gameMode),
    };

    table["deck"].shuffle();

    for (let i = 0; i < amountOfPlayers; i++) {
      let playerCard = [];
      for (let j = 0; j < Dealer.initialCards(gameMode); j++) {
        playerCard.push(table["deck"].draw());
      }
      table["players"].push(playerCard);
    }

    return table;
  }

  static initialCards(gameMode) {
    if (gameMode == "poker") return 5;
    if (gameMode == "21") return 2;
    if (gameMode == "Pair of Cards") return 5;
  }

  static printTableInfo(table) {
    console.log(
      `Amount of players: ${table["players"].length}... Game mode: ${table["gameMode"]}. At this table: `
    );

    for (let i = 0; i < table["players"].length; i++) {
      console.log("Player " + (i + 1) + " hand is: ");
      for (let j = 0; j < table["players"][i].length; j++) {
        console.log(table["players"][i][j].getCardString());
      }
    }
  }

  static score21Individual(cards) {
    let value = 0;
    for (let i = 0; i < cards.length; i++) {
      value += cards[i].intValue;
    }
    if (value > 21) return 0;
    return value;
  }

  static winnerOf21(table) {
    let points = [];
    let cache = [];

    for (let i = 0; i < table["players"].length; i++) {
      let point = Dealer.score21Individual(table["players"][i]);
      points.push(point);

      if (cache[point] >= 1) cache[point] += 1;
      else cache[point] = 1;
    }

    console.log(points);

    let winnerIndex = HelperFunction.maxValueIndex(points);
    if (cache[points[winnerIndex]] > 1) return "It is a draw ";
    else if (cache[points[winnerIndex]] >= 0)
      return "player " + (winnerIndex + 1) + " is the winner";
    else return "No winners..";
  }

  static checkWinner(table) {
    if (table["gameMode"] == "21") return Dealer.winnerOf21(table);
    return "NO GAME";
  }

  static winnerPairOfCards(table) {

    const cardPower = [1, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2];

    let numbers1 = HelperFunction.generateNumberArr(table["players"][0]);
    let numbers2 = HelperFunction.generateNumberArr(table["players"][1]);

    let hashmap1 = HelperFunction.createHashmap(cardPower, numbers1);
    let hashmap2 = HelperFunction.createHashmap(cardPower, numbers2);

    let winner = "draw.";
    let pairOfCards = 0;

    for (let i = 0; i < cardPower.length; i++) {

      if (hashmap1[cardPower[i]] > hashmap2[cardPower[i]]) {

        if (pairOfCards < hashmap1[cardPower[i]]) {

          pairOfCards = hashmap1[cardPower[i]];
          winner = "player 1.";
        }
      } else if (hashmap1[cardPower[i]] < hashmap2[cardPower[i]]) {
        if (pairOfCards < hashmap2[cardPower[i]]) {
          pairOfCards = hashmap2[cardPower[i]];
          winner = "player 2.";
        }
      }
    }
    console.log("The winner of this game is ");
    return winner;
  }
}

let table1 = Dealer.startGame(2, "Pair of Cards");
Dealer.printTableInfo(table1);
console.log(Dealer.winnerPairOfCards(table1));
