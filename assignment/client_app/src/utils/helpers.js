export const mostFrequent = (arr) => {
  var numberOfItems = {}; // Storing the Array Item with their count
  var compare = 0; //We are going to compare using stored value
  var mostFrequentItem; //We are going to store most frequent item

  for (var i = 0, len = arr.length; i < len; i++) {
    var word = arr[i];

    if (numberOfItems[word] === undefined) {
      //if item does't exist in numberOfItems[word]
      numberOfItems[word] = 1; //set numberOfItems[word] value to 1
    } else {
      //if exists
      numberOfItems[word] = numberOfItems[word] + 1; //incrementing existing value
    }
    if (numberOfItems[word] > compare) {
      //numberOfItems[word] > 0(first time)
      compare = numberOfItems[word]; //set compare to numberOfItems[word]
      mostFrequentItem = arr[i]; //set mostFrequent value
    }
  }

  return {
    numberOfItems,
    mostFrequentItem,
  };
};

export const sortWords = (arr) => {
  return arr.sort();
};
function rFact(num) {
  if (num === 0) {
    return 1;
  } else {
    return num * rFact(num - 1);
  }
}

export const recursive = (num) => {
  let result = [];

  for (let i = 1; i <= num; i++) {
    const res = rFact(i) + i;
    result.push(res);
    if (res >= num) {
      break;
    }
  }

  return result;
};
