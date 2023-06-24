function winnerPairOfCards(player1, player2) {
  const cardPower = [
    "A",
    "K",
    "Q",
    "J",
    "10",
    "9",
    "8",
    "7",
    "6",
    "5",
    "4",
    "3",
    "2",
  ];

  // それぞれのhashmapを作成
  let player1Hand = createHashmap(cardPower, player1);
  let player2Hand = createHashmap(cardPower, player2);

  // 最大枚数をセット
  let maxCount = 0;
  // 勝者のデフォルト値をセット
  let winner = "draw";

  for (let i = 0; i < cardPower.length; i++) {
    let p1 = player1Hand[cardPower[i]];
    let p2 = player2Hand[cardPower[i]];

    if (p1 > p2) {
      if (p1 > maxCount) {
        maxCount = p1;
        winner = "player1";
      }
    } else if (p2 > p1) {
      if (p2 > maxCount) {
        maxCount = p2;
        winner = "player2";
      }
    }
  }

  return winner;
}

function createHashmap(cardPower, playerHand) {
  // hashmapを作成
  let hashmap = {};

  // 初期値0を設定
  for (let i = 0; i < cardPower.length; i++) {
    hashmap[cardPower[i]] = 0;
  }

  // hashmapに手札の枚数を反映
  for (let i = 0; i < playerHand.length; i++) {
    hashmap[playerHand[i].substring(1)]++;
  }

  return hashmap;
}
