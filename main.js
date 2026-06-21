// Write your code below
function findLongestWord(word1, word2, word3) {
    var longest = word1;

    if (word2.length > longest.length) {
        longest = word2;
    }
    
    if (word3.length > longest.length) {
        longest = word3;
    }

    return longest;
}