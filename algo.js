/* 
  Efficiently combine two already sorted multiset arrays 
  into an array containing the sorted set intersection of the two.

  Output: only the shared values between the two arrays (de-duped).

  Venn Diagram Visualization (bottom) https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
*/



/**
 * Efficiently combine the two sorted arrays into a new array that is the a sorted set intersection.
 * Venn Diagram Visualization (bottom):
 * @see https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} sortedA
 * @param {Array<number>} sortedB Both sets are multi-sets (multi in that it can contain multiple dupes).
 * @returns {Array<number>} The sorted set intersection: a new array that is sorted and contains only the shared values
 *    between the two arrays de-duped.
 */



const numbersA2 = [0, 1, 2, 2, 2, 7];
const numbersB2 = [2, 2];
const expected2 = [2];

const numbersA3 = [0, 1, 2, 2, 2, 7];
const numbersB3 = [10];
const expected3 = [];

const numbersA1 = [0, 1, 2, 2, 2, 7];
const numbersB1 = [2, 2, 6, 6, 7];
const expected1 = [2, 7];

function orderedIntersection(sortedA, sortedB) {
  let empty = [];
  let i = 0;
  let j = 0;
  // Set variables

  while (i < sortedA.length && j < sortedB.length) {
    // while loop iterates thorught both arrays
    if (sortedA[i] === sortedB[j]) {
      // when we find two points that match:
      if (empty.length === 0 || sortedA[i] !== empty[empty.length-1]) {
        // checking to see if empty arr is empty OR if sortedA[i] does not equal the last postion in the array empty
      empty.push(sortedA[i]);
      }
      i++
      j++
      }
    else if (sortedA[i] < sortedB[j]) {
      // how to navigate the while loop
      i++
    }
    else {
      j++
    }
  }
  return empty
}


console.log(orderedIntersection(numbersA1, numbersB1))
console.log(orderedIntersection(numbersA2, numbersB2))
console.log(orderedIntersection(numbersA3, numbersB3))

/*****************************************************************************/