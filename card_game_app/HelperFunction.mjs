class HelperFunction {
  static maxValueIndex(intArr) {
    let maxIndex = 0;
    let maxValue = intArr[0];

    for (let i = 1; i < intArr.length; i++) {
      if (intArr[i] > maxValue) {
        maxValue = intArr[i];
        maxIndex = i;
      }
    }
    return maxIndex;
  }
  
  static createHashmap(cardPower, numberArr) {
    let hashmap = {};
    for (let i = 0; i < cardPower.length; i++) {
      hashmap[cardPower[i]] = 0;
    }
    for (let i = 0; i < numberArr.length; i++) {
      hashmap[numberArr[i]]++;
    }
    return hashmap;
  }

  static generateNumberArr(playerhand) {
    let intArr = [];
    for (let i = 0; i < playerhand.length; i++) {
      intArr.push(playerhand[i].intValue);
    }
    return intArr;
  }
}

export default HelperFunction;
