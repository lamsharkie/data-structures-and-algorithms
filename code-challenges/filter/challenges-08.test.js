'use strict';

/* ------------------------------------------------------------------------------------------------
CHALLENGE 1
Write a function named oddValues that, given an array of integers as input, uses filter to return an array containing only the odd integers.
For example, oddValues([1,2,3]) returns [1,3].
------------------------------------------------------------------------------------------------ */

const oddValues = (arr) => {
    // Solution code here...
  const newArr = arr.filter(value => (value % 2))
  return newArr;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 2
Write a function named filterStringsWithVowels that, given an array of strings as input, uses filter to return an array with only words that contain vowels.
The callback function to filter should include or utilize a regular expression pattern.
For example, filterStringsWithVowels('gregor','hound','xyz') returns ['gregor', 'hound'].
------------------------------------------------------------------------------------------------ */


const filterStringsWithVowels = (arr) => {
    // Solution code here...

  const regex = /[aeiou]/;
  const newArr = arr.filter(arr => (arr.match(regex)));

  return newArr;
};


/* ------------------------------------------------------------------------------------------------
CHALLENGE 3
Write a function named notInFirstArray that, given two arrays as input, uses filter to return an array of all the elements in the second array that are not included in the first array.
For example, notInFirstArray([1,2,3], [1,2,3,4]) returns [4].
------------------------------------------------------------------------------------------------ */

const notInFirstArray = (forbiddenValues, arr) => {
    // Solution code here...
  const newArr = arr.filter(arr => !forbiddenValues.includes(arr));
  return newArr;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 4
Write a function named getBaseStatGreaterThan that, given the snorlaxData, below, and an integer as input, uses filter to return an array containing all stats with a baseStat greater than the integer.
For example, getBaseStatGreaterThan(snorlaxData.stats, 50) will return an array containing the 'special-defense' and 'special-attack' objects.
------------------------------------------------------------------------------------------------ */

const snorlaxData = {
  stats: [
    {
      stat: {
        url: 'https://pokeapi.co/api/v2/stat/6/',
        name: 'speed',
      },
      effort: 5,
      baseStat: 30,
    },
    {
      stat: {
        url: 'https://pokeapi.co/api/v2/stat/5/',
        name: 'special-defense',
      },
      effort: 2,
      baseStat: 110,
    },
    {
      stat: {
        url: 'https://pokeapi.co/api/v2/stat/4/',
        name: 'special-attack',
      },
      effort: 9,
      baseStat: 65,
    },
  ],
  name: 'snorlax',
  weight: 4600,
};

const getBaseStatGreaterThan = (arr, minBaseStat) => {
    // Solution code here...
    const newArr = arr.filter(arr => arr.baseStat > minBaseStat);
    return newArr;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 5
Write a function named getStatName that is an extension of your getBaseStatGreaterThan function from challenge 4. For this function, extend your solution from challenge 4 to only return the name of the stat, rather than the entire stat object.
For example, getStatName(snorlaxData.stats, 50) will return ['special-defense', 'special-attack'].
------------------------------------------------------------------------------------------------ */

const getStatName = (arr, minBaseStat) => {
    // Solution code here...

  const newArr = arr.filter(arr => arr.baseStat > minBaseStat);
  const newArr2 = newArr.map(name => name.stat.name)
  return newArr2;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 6
Write a function named getCharactersWithoutChildren that, given the array of characters, below, uses filter to return an array of all characters without children.
------------------------------------------------------------------------------------------------ */

const characters = [
  {
    name: 'Eddard',
    spouse: 'Catelyn',
    children: ['Robb', 'Sansa', 'Arya', 'Bran', 'Rickon'],
    house: 'Stark',
  },
  {
    name: 'Jon',
    spouse: 'Lysa',
    children: ['Robin'],
    house: 'Arryn',
  },
  {
    name: 'Cersei',
    spouse: 'Robert',
    children: ['Joffrey', 'Myrcella', 'Tommen'],
    house: 'Lannister',
  },
  {
    name: 'Daenarys',
    spouse: 'Khal Drogo',
    children: ['Drogon', 'Rhaegal', 'Viserion'],
    house: 'Targaryen',
  },
  {
    name: 'Mace',
    spouse: 'Alerie',
    children: ['Margaery', 'Loras'],
    house: 'Tyrell',
  },
  {
    name: 'Sansa',
    spouse: 'Tyrion',
    house: 'Stark',
  },
  {
    name: 'Jon',
    spouse: null,
    house: 'Snow',
  },
];

const getCharactersWithoutChildren = (arr) => {
    // Solution code here...

  const newArr = arr.filter(arr => !arr.children);
  return newArr;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 7 - Stretch Goal
Write a function named evenOddNumericValues that, given an array as input, uses filter to remove any non-numeric values, then uses map to generate a new array containing the string 'even' or 'odd', depending on the original value.
For example: evenOddNumericValues(['Gregor', 2, 4, 1]) returns ['even', 'even', 'odd'].
------------------------------------------------------------------------------------------------ */

const evenOddNumericValues = (arr) => {
  'use strict';

/* ------------------------------------------------------------------------------------------------
CHALLENGE 1
Write a function named countNumberOfElements that, given an array as input, uses reduce to count the number of elements in the array.
Note: You may not use the array's built-in length property.
------------------------------------------------------------------------------------------------ */

const countNumberOfElements = (arr) => {
  return arr.reduce((acc) => {
    return acc + 1;
  },0);
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 2
Write a function named returnNames that, given the Star Wars data, below, uses reduce to return an array containing the names of the characters.
------------------------------------------------------------------------------------------------ */

let starWarsData = [{
  name: 'Luke Skywalker',
  height: '172',
  mass: '77',
  hair_color: 'blond',
  skin_color: 'fair',
  eye_color: 'blue',
  birth_year: '19BBY',
  gender: 'male',
},
{
  name: 'C-3PO',
  height: '167',
  mass: '75',
  hair_color: 'n/a',
  skin_color: 'gold',
  eye_color: 'yellow',
  birth_year: '112BBY',
  gender: 'n/a'},
{
  name: 'R2-D2',
  height: '96',
  mass: '32',
  hair_color: 'n/a',
  skin_color: 'white, blue',
  eye_color: 'red',
  birth_year: '33BBY',
  gender: 'n/a'
},
{
  name: 'Darth Vader',
  height: '202',
  mass: '136',
  hair_color: 'none',
  skin_color: 'white',
  eye_color: 'yellow',
  birth_year: '41.9BBY',
  gender: 'male'
},
{
  name: 'Leia Organa',
  height: '150',
  mass: '49',
  hair_color: 'brown',
  skin_color: 'light',
  eye_color: 'brown',
  birth_year: '19BBY',
  gender: 'female'
}];

const returnNames = (arr) => {
  return arr.reduce((acc, val) => {
    acc.push(val.name)
    return acc
  }, []);
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 3
Write a function named reversedString that takes in a string and returns a string with the letters in reverse order.
Note: You must use reduce for this challenge. You may not use the built-in .reverse() string method.
------------------------------------------------------------------------------------------------ */


const reversedString = (str) => {
  return str.split('').reduce((acc, val) =>{
    return val + acc;
  }, '');
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 4
Write a function named countNumberOfChildren that, given the array of characters, below, uses reduce to return the total number of children in the data set.
------------------------------------------------------------------------------------------------ */

const characters = [
  {
    name: 'Eddard',
    spouse: 'Catelyn',
    children: ['Robb', 'Sansa', 'Arya', 'Bran', 'Rickon'],
    house: 'Stark',
  },
  {
    name: 'Jon',
    spouse: 'Lysa',
    children: ['Robin'],
    house: 'Arryn',
  },
  {
    name: 'Cersei',
    spouse: 'Robert',
    children: ['Joffrey', 'Myrcella', 'Tommen'],
    house: 'Lannister',
  },
  {
    name: 'Daenarys',
    spouse: 'Khal Drogo',
    children: ['Drogon', 'Rhaegal', 'Viserion'],
    house: 'Targaryen',
  },
  {
    name: 'Mace',
    spouse: 'Alerie',
    children: ['Margaery', 'Loras'],
    house: 'Tyrell',
  },
  {
    name: 'Sansa',
    spouse: 'Tyrion',
    house: 'Stark',
  },
  {
    name: 'Jon',
    spouse: null,
    house: 'Snow',
  },
];

const countNumberOfChildren = (arr) => {
  return arr.reduce((acc, val) =>{
    if(val.hasOwnProperty('children')){
      return acc + val.children.length;
    }
    return acc;
  }, 0);
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 5
Write a function that, given an array of numbers as input, uses reduce to calculate the array's average value.
Hint: The accumulator should begin as { count: 0, sum: 0 }
------------------------------------------------------------------------------------------------ */

const calculateAverage = (arr) => {
  let aveVal= arr.reduce((acc, val) => {
    acc.count++;
    acc.sum += val;
    return acc;
  },{count: 0, sum: 0});
  return aveVal.sum / aveVal.count;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 6
Write a function named countPrimeNumbers that, given an array elements as input, uses reduce to count the number of elements that are prime numbers.
You are welcome to use the provided isPrime function.
------------------------------------------------------------------------------------------------ */

const isPrime = (value) => {
  for (let i = 2; i < value; i++) {
    if (value % i === 0) {
      return false;
    }
  }
  return value > 1;
};

const countPrimeNumbers = (arr) => {
  return arr.reduce((acc, val) => {
    if(isPrime(val)) {
      return acc + 1;
    } else {
      return acc;
    }
  },0);
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 7 - Stretch Goal
Write a function named extractState that, given the snorlaxData, below, uses reduce to return the object whose 'name' property matches the given string.
If the input array does not have a stat with that specific name, the function should return null.
------------------------------------------------------------------------------------------------ */

const snorlaxData = {
  stats: [
    {
      stat: {
        url: 'https://pokeapi.co/api/v2/stat/6/',
        name: 'speed',
      },
      effort: 5,
      baseStat: 30,
    },
    {
      stat: {
        url: 'https://pokeapi.co/api/v2/stat/5/',
        name: 'special-defense',
      },
      effort: 2,
      baseStat: 110,
    },
    {
      stat: {
        url: 'https://pokeapi.co/api/v2/stat/4/',
        name: 'special-attack',
      },
      effort: 9,
      baseStat: 65,
    },
  ],
  name: 'snorlax',
  weight: 4600,
};

const extractStat = (statName, arr) => {
  // Solution code here...
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 8 - Stretch Goal
Write a function named extractChildren that, given the array of characters from challenge 4, accomplishes the following:
1) Uses filter to return an array of the characters that contain the letter 'a' in their name
2) Then, uses reduce to return an array of all the children's names in the filtered array
------------------------------------------------------------------------------------------------ */

const extractChildren = (arr) => {
  // Solution code here...
};

/* ------------------------------------------------------------------------------------------------
TESTS
All the code below will verify that your functions are working to solve the challenges.
DO NOT CHANGE any of the below code.
Run your tests from the console: jest challenges-09.test.js
------------------------------------------------------------------------------------------------ */

describe('Testing challenge 1', () => {
  test('It should return the length of the array', () => {
    expect(countNumberOfElements([1, 2, 3, 4, 5])).toStrictEqual(5);
  });
});

describe('Testing challenge 2', () => {
  test('It should return an array continaing the names of the characters', () => {
    expect(returnNames(starWarsData)).toStrictEqual([ 'Luke Skywalker', 'C-3PO', 'R2-D2', 'Darth Vader', 'Leia Organa' ]);
    expect(returnNames(starWarsData).length).toStrictEqual(5);
  });
});

describe('Testing challenge 3', () => {
  test('It should return the string with the characters in reverse order', () => {
    expect(reversedString('Code 301')).toStrictEqual('103 edoC');
  });
});

describe('Testing challenge 4', () => {
  test('It should return the total number of children', () => {
    expect(countNumberOfChildren(characters)).toStrictEqual(14);
  });
});

describe('Testing challenge 5', () => {
  test('It should return the average of the numbers in the array', () => {
    expect(calculateAverage([18, 290, 37, 4, 55, 16, 7, 85 ])).toStrictEqual(64);
  });
});

describe('Testing challenge 6', () => {
  test('It should return a count of the prime numbers in the array', () => {
    expect(countPrimeNumbers([1, 2, 13, 64, 45, 56, 17, 8])).toStrictEqual(3);
  });
});

xdescribe('Testing challenge 7', () => {
  test('It should return any stats that match the input', () => {
    expect(extractStat('speed', snorlaxData.stats)).toStrictEqual({ stat: { url: 'https://pokeapi.co/api/v2/stat/6/', name: 'speed' }, effort: 5, baseStat: 30 });
  });
});

xdescribe('Testing challenge 8', () => {
  test('It should return an array containing the names of the children', () => {
    expect(extractChildren(characters)).toStrictEqual([ 'Robb', 'Sansa', 'Arya', 'Bran', 'Rickon', 'Drogon', 'Rhaegal', 'Viserion', 'Margaery', 'Loras' ]);
    expect(extractChildren(characters).length).toStrictEqual(10);
  });
});
};

/* ------------------------------------------------------------------------------------------------
TESTS
All the code below will verify that your functions are working to solve the challenges.
DO NOT CHANGE any of the below code.
Run your tests from the console: jest challenges-08.test.js
------------------------------------------------------------------------------------------------ */

describe('Testing challenge 1', () => {
  test('It should return an array containing only odd integers', () => {
    expect(oddValues([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toStrictEqual([1, 3, 5, 7, 9]);
    expect(oddValues([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).length).toStrictEqual(5);
    expect(oddValues([2,3,4,179])).toStrictEqual([3,179]);
    expect(oddValues([2,4,6,8])).toStrictEqual([]);
  });
});

describe('Testing challenge 2', () => {
  test('It should return an array containing only words that have vowels', () => {
    expect(filterStringsWithVowels(['gregor','hound','xyz'])).toStrictEqual(['gregor', 'hound']);
    expect(filterStringsWithVowels(['gregor','hound','xyz']).length).toStrictEqual(2);
    expect(filterStringsWithVowels(['a', 'b', 'cdefg'])).toStrictEqual(['a', 'cdefg']);
    expect(filterStringsWithVowels(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', ''])).toStrictEqual(['a', 'e', 'i', 'o', 'u']);
  });

  test('It should not contain any words that do not contain vowels', () => {
    expect(filterStringsWithVowels(['gregor','hound','xyz'])).not.toContain('xyz');
  });
});

describe('Testing challenge 3', () => {
  const firstNums = [1, 2, 3];
  const secondNums = [1, 2, 3, 4];

  const firstStrings = ['Demi', 'Gregor', 'Hound'];
  const secondStrings = ['Gary', 'Charlotte', 'Demi', 'Gregor', 'Hound'];

  test('It should return an array that includes any elements not in the first array', () => {
    expect(notInFirstArray(firstNums, secondNums)).toStrictEqual([4]);
    expect(notInFirstArray(firstNums, secondNums).length).toStrictEqual(1);
  });

  test('It should also work with an array of strings', () => {
    expect(notInFirstArray(firstStrings, secondStrings)).toStrictEqual(['Gary', 'Charlotte']);
    expect(notInFirstArray(firstStrings, secondStrings).length).toStrictEqual(2);
  });

  test('It should work with empty arrays', () => {
    expect(notInFirstArray([], [])).toStrictEqual([]);
    expect(notInFirstArray([], [1,2,3,4,5])).toStrictEqual([1,2,3,4,5]);
    expect(notInFirstArray([1,2,3,4,5], [])).toStrictEqual([]);
  });
});

describe('Testing challenge 4', () => {
  test('It should return an array containing the stats that are greater than the input', () => {
    expect(getBaseStatGreaterThan(snorlaxData.stats, 75)).toStrictEqual([ { stat: { url: 'https://pokeapi.co/api/v2/stat/5/', name: 'special-defense' }, effort: 2, baseStat: 110 } ]);
    expect(getBaseStatGreaterThan(snorlaxData.stats, 75).length).toStrictEqual(1);
    expect(getBaseStatGreaterThan(snorlaxData.stats, 110)).toStrictEqual([]);
  });
  test('It should work for non-Snorlax data', () => {
    expect(getBaseStatGreaterThan([{baseStat: 10}, {baseStat: -85}, {baseStat: 0}, {baseStat: -50}], -60)).toStrictEqual([{baseStat: 10}, {baseStat: 0}, {baseStat: -50}]);
  });
});

describe('Testing challenge 5', () => {
  test('It should return the name of the stats that exceed that maximum', () => {
    expect(getStatName(snorlaxData.stats, 50)).toStrictEqual([ 'special-defense', 'special-attack' ]);
    expect(getStatName(snorlaxData.stats, 50).length).toStrictEqual(2);
  });

  test('It should return the name of the stats that exceed that maximum', () => {
    expect(getStatName(snorlaxData.stats, 120)).toStrictEqual([]);
    expect(getStatName(snorlaxData.stats, 120).length).toStrictEqual(0);
  });

  test('It should work for non-snorlax data', () => {
    expect(getStatName([
      {baseStat: 10, stat: {name: 'one'}},
      {baseStat: -85, stat: {name: 'two'}},
      {baseStat: 0, stat: {name: 'three'}},
      {baseStat: -50, stat: {name: 'four'}}
    ], -60)).toStrictEqual(['one', 'three', 'four']);
  });
});

describe('Testing challenge 6', () => {
  test('It should return an array containing characters who do not have children', () => {
    expect(getCharactersWithoutChildren(characters)).toStrictEqual([ { name: 'Sansa', spouse: 'Tyrion', house: 'Stark' }, { name: 'Jon', spouse: null, house: 'Snow' } ]);
    expect(getCharactersWithoutChildren(characters).length).toStrictEqual(2);
  });
});

xdescribe('Testing challenge 7', () => {
  test('It should remove non-integers and return "even" or "odd', () => {
    expect(evenOddNumericValues(['Gregor', 2, 4, 1])).toStrictEqual(['even', 'even', 'odd']);
    expect(evenOddNumericValues(['Gregor', 2, 4, 1]).length).toStrictEqual(3);
    expect(evenOddNumericValues(['a', 'b', 'c'])).toStrictEqual([]);
  });
  test('It should not accept strings that look like numbers', () => {
    expect(evenOddNumericValues(['1', 2, 3, '4', 5,'6'])).toStrictEqual(['even', 'odd', 'odd']);
  });
});