const hasDuplicate = arr => new Set(arr).size !== arr.length;
const answer4 = hasDuplicate([1,3,2,1]) // true
const answer5= hasDuplicate([1,5,-1,4]) // false

function isVowel(char){
    return 'aeiou'.includes(char);
}
function vowelCount(str){
    const vowelMap = new Map();
    for(let char of str){
        let lowerCaseChar = char.toLowerCase()
        if(isVowel(lowerCaseChar)){
            if(vowelMap.has(lowerCaseChar)){
                vowelMap.set(lowerCaseChar, vowelMap.get(lowerCaseChar) + 1);
            }else{
                vowelMap.set(lowerCaseChar, 1);
            }
          }
       }
    return vowelMap;
}
const answer6 = vowelCount('awesome') // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
const answer7 = vowelCount('Colt') // Map { 'o' => 1 }