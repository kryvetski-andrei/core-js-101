/* *************************************************************************************************
 *                                                                                                *
 * Please read the following tutorial before implementing tasks:                                   *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling  *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration              *
 *                                                                                                *
 ************************************************************************************************ */


/**
 * Returns the 'Fizz','Buzz' or an original number using the following rules:
 * 1) return original number
 * 2) but if number multiples of three return 'Fizz'
 * 3) for the multiples of five return 'Buzz'
 * 4) for numbers which are multiples of both three and five return 'FizzBuzz'
 *
 * @param {number} num
 * @return {any}
 *
 * @example
 *   2 =>  2
 *   3 => 'Fizz'
 *   5 => 'Buzz'
 *   4 => 4
 *  15 => 'FizzBuzz'
 *  20 => 'Buzz'
 *  21 => 'Fizz'
 *
 */
function getFizzBuzz(num) {
  if (num % 3 === 0 && num % 5 === 0) return 'FizzBuzz';
  if (num % 3 === 0) return 'Fizz';
  if (num % 5 === 0) return 'Buzz';
  return num;
}


/**
 * Returns the factorial of the specified integer n.
 *
 * @param {number} n
 * @return {number}
 *
 * @example:
 *   1  => 1
 *   5  => 120
 *   10 => 3628800
 */
function getFactorial(n) {
  let result = 1;

  for (let i = 1; i <= n; i += 1) {
    result *= i;
  }

  return result;
}


/**
 * Returns the sum of integer numbers between n1 and n2 (inclusive).
 *
 * @param {number} n1
 * @param {number} n2
 * @return {number}
 *
 * @example:
 *   1,2   =>  3  ( = 1+2 )
 *   5,10  =>  45 ( = 5+6+7+8+9+10 )
 *   -1,1  =>  0  ( = -1 + 0 + 1 )
 */
function getSumBetweenNumbers(n1, n2) {
  let result = 0;

  for (let i = n1; i <= n2; i += 1) {
    result += i;
  }

  return result;
}


/**
 * Returns true, if a triangle can be built with the specified sides a, b, c
 * and false in any other ways.
 *
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {bool}
 *
 * @example:
 *   1,2,3    =>  false
 *   3,4,5    =>  true
 *   10,1,1   =>  false
 *   10,10,10 =>  true
 */
function isTriangle(a, b, c) {
  return !(a + b <= c || a + c <= b || b + c <= a);
}


/**
 * Returns true, if two specified axis-aligned rectangles overlap, otherwise false.
 * Each rectangle representing by object
 *  {
 *     top: 5,
 *     left: 5,
 *     width: 20,
 *     height: 10
 *  }
 *
 *  (5;5)
 *     -------------
 *     |           |
 *     |           |  height = 10
 *     -------------
 *        width=20
 *
 * NOTE: Please use canvas coordinate space (https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes#The_grid),
 * it differs from Cartesian coordinate system.
 *
 * @param {object} rect1
 * @param {object} rect2
 * @return {bool}
 *
 * @example:
 *   { top: 0, left: 0, width: 10, height: 10 },
 *   { top: 5, left: 5, width: 20, height: 20 }    =>  true
 *
 *   { top: 0, left: 0, width: 10, height: 10 },
 *   { top:20, left:20, width: 20, height: 20 }    =>  false
 *
 */
function doRectanglesOverlap(rect1, rect2) {
  const getCoordinatesOfCorners = (rectangle) => ({
    topLeft: {
      x: rectangle.left,
      y: rectangle.top,
    },
    topRight: {
      x: rectangle.left + rectangle.width,
      y: rectangle.top,
    },
    bottomLeft: {
      x: rectangle.left,
      y: rectangle.top + rectangle.height,
    },
    bottomRight: {
      x: rectangle.left + rectangle.width,
      y: rectangle.top + rectangle.height,
    },
  });
  const coordinatesOfCornersOfRect1 = getCoordinatesOfCorners(rect1);
  const coordinatesOfCornersOfRect2 = getCoordinatesOfCorners(rect2);

  return !(coordinatesOfCornersOfRect1.topLeft.x > coordinatesOfCornersOfRect2.bottomRight.x
    || coordinatesOfCornersOfRect2.topLeft.x > coordinatesOfCornersOfRect1.bottomRight.x
    || coordinatesOfCornersOfRect1.topLeft.y > coordinatesOfCornersOfRect2.bottomRight.y
    || coordinatesOfCornersOfRect2.topLeft.y > coordinatesOfCornersOfRect1.bottomRight.y
  );
}


/**
 * Returns true, if point lies inside the circle, otherwise false.
 * Circle is an object of
 *  {
 *     center: {
 *       x: 5,
 *       y: 5
 *     },
 *     radius: 20
 *  }
 *
 * Point is object of
 *  {
 *     x: 5,
 *     y: 5
 *  }
 *
 * @param {object} circle
 * @param {object} point
 * @return {bool}
 *
 * @example:
 *   { center: { x:0, y:0 }, radius:10 },  { x:0, y:0 }     => true
 *   { center: { x:0, y:0 }, radius:10 },  { x:10, y:10 }   => false
 *
 */
function isInsideCircle(circle, point) {
  const distance = Math.sqrt((circle.center.x - point.x) ** 2 + (circle.center.y - point.y) ** 2);

  return distance < circle.radius;
}


/**
 * Returns the first non repeated char in the specified strings otherwise returns null.
 *
 * @param {string} str
 * @return {string}
 *
 * @example:
 *   'The quick brown fox jumps over the lazy dog' => 'T'
 *   'abracadabra'  => 'c'
 *   'entente' => null
 */
function findFirstSingleChar(str) {
  const numbersOfChars = {};

  str
    .split('')
    .filter((element) => element !== ' ')
    .forEach((char) => {
      if (!numbersOfChars[char]) {
        numbersOfChars[char] = 1;
      } else {
        numbersOfChars[char] += 1;
      }
    });

  return Object.keys(numbersOfChars).find((key) => numbersOfChars[key] === 1);
}


/**
 * Returns the string representation of math interval,
 * specified by two points and include / exclude flags.
 * See the details: https://en.wikipedia.org/wiki/Interval_(mathematics)
 *
 * Please take attention, that the smaller number should be the first in the notation
 *
 * @param {number} a
 * @param {number} b
 * @param {bool} isStartIncluded
 * @param {bool} isEndIncluded
 * @return {string}
 *
 * @example
 *   0, 1, true, true   => '[0, 1]'
 *   0, 1, true, false  => '[0, 1)'
 *   0, 1, false, true  => '(0, 1]'
 *   0, 1, false, false => '(0, 1)'
 * Smaller number has to be first :
 *   5, 3, true, true   => '[3, 5]'
 *
 */
function getIntervalString(a, b, isStartIncluded, isEndIncluded) {
  const numbers = [a, b].sort((c, d) => c - d).join(', ');
  const openedBracket = isStartIncluded ? '[' : '(';
  const closedBracket = isEndIncluded ? ']' : ')';

  return `${openedBracket}${numbers}${closedBracket}`;
}


/**
 * Reverse the specified string (put all chars in reverse order)
 *
 * @param {string} str
 * @return {string}
 *
 * @example:
 * 'The quick brown fox jumps over the lazy dog' => 'god yzal eht revo spmuj xof nworb kciuq ehT'
 * 'abracadabra' => 'arbadacarba'
 * 'rotator' => 'rotator'
 * 'noon' => 'noon'
 */
function reverseString(str) {
  return str.split('').reverse().join('');
}


/**
 * Reverse the specified integer number (put all digits in reverse order)
 *
 * @param {number} num
 * @return {number}
 *
 * @example:
 *   12345 => 54321
 *   1111  => 1111
 *   87354 => 45378
 *   34143 => 34143
 */
function reverseInteger(num) {
  return parseFloat(num.toString().split('').reverse().join(''));
}


/**
 * Validates the CCN (credit card number) and return true if CCN is valid
 * and false otherwise.
 *
 * See algorithm here : https://en.wikipedia.org/wiki/Luhn_algorithm
 *
 * @param {number} cnn
 * @return {boolean}
 *
 * @example:
 *   79927398713      => true
 *   4012888888881881 => true
 *   5123456789012346 => true
 *   378282246310005  => true
 *   371449635398431  => true
 *
 *   4571234567890111 => false
 *   5436468789016589 => false
 *   4916123456789012 => false
 */
function isCreditCardNumber(ccn) {
  const result = [];
  const arrayOfNumbers = ccn.toString().split('').reverse().map((string) => parseFloat(string));

  arrayOfNumbers.forEach((number, index) => {
    if (index % 2 !== 0) {
      if (number * 2 > 9) {
        result.push(number * 2 - 9);
      } else {
        result.push(number * 2);
      }
    } else {
      result.push(number);
    }
  });

  const sum = result.reduce((acc, number) => acc + number, 0);

  return sum % 10 === 0;
}

/**
 * Returns the digital root of integer:
 *   step1 : find sum of all digits
 *   step2 : if sum > 9 then goto step1 otherwise return the sum
 *
 * @param {number} n
 * @return {number}
 *
 * @example:
 *   12345 ( 1+2+3+4+5 = 15, 1+5 = 6) => 6
 *   23456 ( 2+3+4+5+6 = 20, 2+0 = 2) => 2
 *   10000 ( 1+0+0+0+0 = 1 ) => 1
 *   165536 (1+6+5+5+3+6 = 26,  2+6 = 8) => 8
 */
function getDigitalRoot(num) {
  const arrayOfNumbers = num.toString().split('').map((string) => parseFloat(string));
  const sum = arrayOfNumbers.reduce((acc, number) => acc + number, 0);

  if (sum > 9) return getDigitalRoot(sum);
  return sum;
}


/**
 * Returns true if the specified string has the balanced brackets and false otherwise.
 * Balanced means that is, whether it consists entirely of pairs of opening/closing brackets
 * (in that order), none of which mis-nest.
 * Brackets include [],(),{},<>
 *
 * @param {string} str
 * @return {boolean}
 *
 * @example:
 *   '' => true
 *   '[]'  => true
 *   '{}'  => true
 *   '()   => true
 *   '[[]' => false
 *   ']['  => false
 *   '[[][][[]]]' => true
 *   '[[][]][' => false
 *   '{)' = false
 *   '{[(<{[]}>)]}' = true
 */
function isBracketsBalanced(str) {
  const squareBrackets = {
    opened: '[',
    closed: ']',
  };
  const roundBrackets = {
    opened: '(',
    closed: ')',
  };
  const curlyBrackets = {
    opened: '{',
    closed: '}',
  };
  const angleBrackets = {
    opened: '<',
    closed: '>',
  };

  const arrayOfTypesOfBrackets = [squareBrackets, roundBrackets, curlyBrackets, angleBrackets];
  const arrayOfBrackets = str.split('');
  const stack = [];

  arrayOfBrackets.forEach((bracket) => {
    arrayOfTypesOfBrackets.forEach((type) => {
      if (Object.values(type).includes(bracket)) {
        if (stack[stack.length - 1] === type.opened && bracket === type.opened) {
          stack.push(bracket);
        } else if (bracket === type.closed && stack[stack.length - 1] === type.opened) {
          stack.pop();
        } else {
          stack.push(bracket);
        }
      }
    });
  });

  return stack.length === 0;
}


/**
 * Returns the string with n-ary (binary, ternary, etc, where n <= 10)
 * representation of specified number.
 * See more about
 * https://en.wikipedia.org/wiki/Binary_number
 * https://en.wikipedia.org/wiki/Ternary_numeral_system
 * https://en.wikipedia.org/wiki/Radix
 *
 * @param {number} num
 * @param {number} n, radix of the result
 * @return {string}
 *
 * @example:
 *   1024, 2  => '10000000000'
 *   6561, 3  => '100000000'
 *    365, 2  => '101101101'
 *    365, 3  => '111112'
 *    365, 4  => '11231'
 *    365, 10 => '365'
 */
function toNaryString(num, n) {
  return num.toString(n);
}


/**
 * Returns the common directory path for specified array of full filenames.
 *
 * @param {array} pathes
 * @return {string}
 *
 * @example:
 *   ['/web/images/image1.png', '/web/images/image2.png']  => '/web/images/'
 *   ['/web/assets/style.css', '/web/scripts/app.js',  'home/setting.conf'] => ''
 *   ['/web/assets/style.css', '/.bin/mocha',  '/read.me'] => '/'
 *   ['/web/favicon.ico', '/web-scripts/dump', '/verbalizer/logs'] => '/'
 */
function getCommonDirectoryPath(pathes) {
  const stack = [];
  let result = '';
  const minLenghtOfPath = pathes.sort((a, b) => a.length - b.length)[0].length;

  const recursion = (n) => {
    if (n <= minLenghtOfPath) {
      pathes.forEach((path) => {
        if (stack.length === 0) {
          stack.push(path[n]);
        } else if (stack[stack.length - 1] === path[n]) {
          stack.push(path[n]);
        }
      });

      if (stack.length === pathes.length) {
        result += [...new Set(stack)].join('');
        stack.length = 0;
      }

      return recursion(n + 1);
    }

    return result.slice(0, result.lastIndexOf('/') + 1);
  };

  return recursion(0);
}


/**
 * Returns the product of two specified matrixes.
 * See details: https://en.wikipedia.org/wiki/Matrix_multiplication
 *
 * @param {array} m1
 * @param {array} m2
 * @return {array}
 *
 * @example:
 *   [[ 1, 0, 0 ],       [[ 1, 2, 3 ],           [[ 1, 2, 3 ],
 *    [ 0, 1, 0 ],   X    [ 4, 5, 6 ],     =>     [ 4, 5, 6 ],
 *    [ 0, 0, 1 ]]        [ 7, 8, 9 ]]            [ 7, 8, 9 ]]
 *
 *                        [[ 4 ],
 *   [[ 1, 2, 3]]    X     [ 5 ],          =>     [[ 32 ]]
 *                         [ 6 ]]
 *
 */
function getMatrixProduct(m1, m2) {
  const result = [];

  for (let i = 0; i < m1.length; i += 1) {
    result.push([]);
    for (let j = 0; j < m2[0].length; j += 1) {
      let sum = 0;
      for (let k = 0; k < m1[0].length; k += 1) {
        sum += m1[i][k] * m2[k][j];
      }
      result[i][j] = sum;
    }
  }

  return result;
}


/**
 * Returns the evaluation of the specified tic-tac-toe position.
 * See the details: https://en.wikipedia.org/wiki/Tic-tac-toe
 *
 * Position is provides as 3x3 array with the following values: 'X','0', undefined
 * Function should return who is winner in the current position according to the game rules.
 * The result can be: 'X','0',undefined
 *
 * @param {array} position
 * @return {string}
 *
 * @example
 *
 *   [[ 'X',   ,'0' ],
 *    [    ,'X','0' ],       =>  'X'
 *    [    ,   ,'X' ]]
 *
 *   [[ '0','0','0' ],
 *    [    ,'X',    ],       =>  '0'
 *    [ 'X',   ,'X' ]]
 *
 *   [[ '0','X','0' ],
 *    [    ,'X',    ],       =>  undefined
 *    [ 'X','0','X' ]]
 *
 *   [[    ,   ,    ],
 *    [    ,   ,    ],       =>  undefined
 *    [    ,   ,    ]]
 *
 */
function evaluateTicTacToePosition(position) {
  const GAME_FIELD_SIZE = 3;

  const checkRows = () => {
    const row = [];

    for (let i = 0; i < position.length; i += 1) {
      for (let j = 0; j < position[i].length; j += 1) {
        row.push(position[i][j]);
      }
      if (
        row.every((element) => element === row[0])
        && row.length === GAME_FIELD_SIZE
        && row[0] !== undefined
      ) {
        break;
      } else {
        row.length = 0;
      }
    }

    return row.length === 0 ? undefined : row[0];
  };

  const checkColumns = () => {
    const column = [];

    for (let i = 0; i < position[0].length; i += 1) {
      for (let j = 0; j < position.length; j += 1) {
        column.push(position[j][i]);
      }
      if (
        column.every((element) => element === column[0])
        && column.length === GAME_FIELD_SIZE
      ) {
        break;
      } else {
        column.length = 0;
      }
    }

    return column.length === 0 ? undefined : column[0];
  };

  const checkMainDiagonal = () => {
    const diagonal = [];

    for (let i = 0; i < position.length; i += 1) {
      diagonal.push(position[i][i]);
    }

    return diagonal.every((element) => element === diagonal[0])
      && diagonal.length === GAME_FIELD_SIZE
      ? diagonal[0]
      : undefined;
  };

  const checkSideDiagonal = () => {
    const diagonal = [];

    for (let i = 0; i < position.length; i += 1) {
      diagonal.push(position[i][position.length - 1 - i]);
    }

    return diagonal.every((element) => element === diagonal[0])
      && diagonal.length === GAME_FIELD_SIZE
      ? diagonal[0]
      : undefined;
  };

  return checkRows() || checkColumns() || checkMainDiagonal() || checkSideDiagonal();
}


module.exports = {
  getFizzBuzz,
  getFactorial,
  getSumBetweenNumbers,
  isTriangle,
  doRectanglesOverlap,
  isInsideCircle,
  findFirstSingleChar,
  getIntervalString,
  reverseString,
  reverseInteger,
  isCreditCardNumber,
  getDigitalRoot,
  isBracketsBalanced,
  toNaryString,
  getCommonDirectoryPath,
  getMatrixProduct,
  evaluateTicTacToePosition,
};
