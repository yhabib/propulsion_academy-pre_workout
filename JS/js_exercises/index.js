module.exports = {
    reverse: reverse,
    reverse2: reverse2,
    factorial: factorial,
    longest_word: longest_word,
    sum_nums: sum_nums,
    time_conversion: time_conversion,
    count_vowels: count_vowels,
    palindrome: palindrome,
    findLongestPalindrome: findLongestPalindrome,
    nearby_az: nearby_az,
    two_sum: two_sum,
    is_power_of_two: is_power_of_two,
    translateToHindu_Arabic: translateToHindu_Arabic,
    translateToRoman: translateToRoman
};

function reverse(input) {
    let arr = input.split(''),
        sol = '';

    while (arr.length > 0)
        sol += arr.pop();

    return sol;
}

function reverse2(input) {
    var arr = input.split('');
    return arr.reduceRight((a, b) => a+b);
}

function factorial(num) {
    if (num < 0)
        return -1;
    else if (num === 0)
        return 1;
    else return num * factorial(num - 1);
}

function longest_word(str) {
    const arr = str.split(' ');

    return arr.reduce((a, b) => a.length > b.length ? a : b);
}

function sum_nums(num) {
    if (num === 0) return 0;
    return num + sum_nums(num - 1);
}

function time_conversion(time) {
    const min = Math.floor(time / 60),
        secs = time % 60;
    if (secs > 60) {
        secs -= 60;
        min++;
    }
    return `${min}:${secs}`;
}

function count_vowels(input) {
    const regex = new RegExp(/[aeiou]/, 'gi');
    return input.match(regex).length;
}

function palindrome(word) {
    return word === reverse2(word);
}

function findLongestPalindrome(input) {
    const reversed = reverse2(input);
    let longestPalindrome = '';
    
    for(let i=0; i<input.length-1; i++) {
        let slice = input[i];
        for(let j=i+1; j<input.length; j++) {
            slice += input[j];
            if(reversed.includes(slice)) {
                if(slice.length > longestPalindrome.length)
                    longestPalindrome = slice;
            }
            else break;
        }
    }
    
    return longestPalindrome;
}

function nearby_az(word) {
    if (word.indexOf('z') === -1 && word.indexOf('a') === -1)
        return false;

    const arr = word.split('z');
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].lastIndexOf('a') > -1 && arr[i].lastIndexOf('a') < arr[i].length - 3)
            return false;
    }
    return true;
}

function two_sum(arr) {
    const output = [];
    for (let i = 0; i < Math.floor(arr.length / 2); i++) {
        if (arr.lastIndexOf(-arr[i]) > -1)
            output.push([i, arr.lastIndexOf(-arr[i])]);
    }
    return output.length > 0 ? output : 'nil';
}

function is_power_of_two(num) {
    if (num === 0) return false;
    if (num === 1) return true;
    return num % 2 !== 0 ? false : is_power_of_two(num / 2);
}

function paintFill(image, point, newValue) {
    // first the point
    const oldValue = image[point];
    image[point] = newValue;

    // check if the neightbors have the same value
    

    // update point
}

function translateToHindu_Arabic(roman) {
    const romans = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM','M'];
    const decimals = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
    const decimalComposition = roman.split('').map(r => decimals[romans.indexOf(r)]);

    let output = 0;
    
    for(let i=0; i<decimalComposition.length; i++) {
        if(i < decimalComposition.length - 1 && decimalComposition[i] < decimalComposition[i+1])
            output -= decimalComposition[i];
        else
            output += decimalComposition[i];
    }
    return output;
}
function translateToRoman(num) {
  const romans = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM','M'];
  const decimals = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
  let romanNum = "";

  while(num > 0){
    for (var i=0; i<decimals.length; i++) {
      if(num >= 1000) {
        romanNum += romans[romans.length - 1];
        num -= decimals[decimals.length -1];
        break;   
      }
      else if(num / decimals[i] < 1){
        romanNum += romans[i-1];
        num -= decimals[i-1];
        break;   
      }
    }
  }
  return romanNum;
}