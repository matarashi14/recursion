class HelperFunction{
    static maxValueIndex(intArr){
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
}

export default HelperFunction