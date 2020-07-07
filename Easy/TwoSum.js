/*
Given an array of integers, return an array containing the 
indices of the two numbers that add up to a specific target. 
It may be assumed that each input would have exactly one solution, 
and the same element may not be used twice. Lastly, the array cannot be sorted.
*/

var twoSum = function (nums, target) {
  numsIndexes = {}

  for (let i = 0; i < nums.length; i += 1) {
    let currentDifference = target - nums[i]

    if (
      numsIndexes[currentDifference] !== undefined &&
      numsIndexes[currentDifference] !== i
    ) {
      return [i, numsIndexes[currentDifference]]
    } else {
      numsIndexes[nums[i]] = i
    }
  }
}

/*
SOLUTION EXPLANATION:
Create an object containing the key-value pairs of the element and its index, respectively.
Iterate through array. For currentElement, compute currentDifference.
If currentDifference exists in hashTable and currentElementIndex !== hashTable[currentDifference], return the indices of each element.
If currentDifference does not exist or the indices of both elements are equal, move to the next element in the array.

*/

/*
BIG 0

HASH TABLE
A hash table is a collection of key and value pairs. 
A hash function is used to map values to indexes, also known as keys. T
hese key and value pairs allow for constant lookup time.


The main benefit of using a hash table is the O(1) lookup time. 
Instead of needing to loop through a list of values to find the correct one, 
once the values are mapped to some sort of unique key, the value can be referenced 
immediately with the use of its key.

*/
