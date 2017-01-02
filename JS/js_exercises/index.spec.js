const f = require('./index'),
    should = require('chai').should();

describe('-- JS basic algorithms --', () => {
    describe('1.Reverse: Write a method that will take a string as input, and return a new string with the same letters in reverse order', () => {
        const input = 'abcd',
            output = 'dcba';
        it(`should be equal to ${output}`, () => {
            f.reverse(input).should.equal(output);
        });
    });

    describe('1.b.Reverse2: Only with build-in methods', () => {
        const input = 'abcd',
            output = 'dcba';
        it(`should be equal to ${output}`, () => {
            f.reverse2(input).should.equal(output);
        });
    });

    describe('2.Factorial: Write a method that takes an integer n in an returns its factorial. Assume n >= 0', () => {
        let inputA = 0,
            outputA = 1,
            inputB = 4,
            outputB = 24;

        it(`should be equal to ${outputA}`, () => {
            f.factorial(inputA).should.equal(outputA);
        });
        it(`should be equal to ${outputB}`, () => {
            f.factorial(inputB).should.equal(outputB);
        });
    });

    describe('3. Longest Word: Write a method that takes in a string. Return the longest word in the string. You may assume that the string contains only letters and spaces. You may use the String split method to aid you in your quest', () => {
        let input = 'This is an amazing test',
            output = 'amazing';
        it(`should be equal to ${output}`, () => {
            f.longest_word(input).should.equal(output);
        });
    });

    describe('4. Sum Nums: Write a method that takes in an integer num and returns the sum of all integers between zero and num, up to and including num', () => {
        let input = 6,
            output = 21;
        it(`should be equal to ${output}`, () => {
            f.sum_nums(input).should.equals(output);
        });
    });

    describe('5. Time Conversions: Write a method that will take in a number of minutes, and returns a string that formats the number into hours:minutes', () => {
        let input = 155,
            output = '2:35';
        it(`should be equal to ${output}`, () => {
            f.time_conversion(input).should.equals(output);
        });
    });

    describe('6. Count Vowels: Write a method that takes a string and returns the number of vowels in the string. You may assume that all the letters are lower cased. You can treat "y" as a consonant', () => {
        let input = 'alphabet',
            output = 3,
            input2 = 'This is a longer string, will it work?',
            output2 = 9;

        it(`should be equal to ${output}`, () => {
            f.count_vowels(input).should.equals(output);
        });
        it(`should be equal to ${output2}`, () => {
            f.count_vowels(input2).should.equals(output2);
        });
    });

    describe('7. Palindrome: Write a method that takes a string and returns true if it is a palindrome. A palindrome is a string that is the same whether written backward or forward. Only lowercase letters will be given', () => {
        let inputA = 'abcd',
            outputA = false,
            inputB = 'abbba',
            outputB = true;

        it(`should be equal to ${outputA}`, () => {
            f.palindrome(inputA).should.equals(outputA);
        });
        it(`should be equal to ${outputB}`, () => {
            f.palindrome(inputB).should.equals(outputB);
        });        
    });

    describe('7.b Longest Palindrome', () => {
        let inputC = 'That trip with a kayak was quite an adventure',
            outputC = 'kayak',
            inputD = 'My dad is a racecar athelete',
            outputD = 'a racecar a';
        it(`should be equal to ${outputC}`, () => {
            f.longestPalindrome(inputC).should.equals(outputC);
        });
        it(`should be equal to ${outputD}`, () => {
            f.longestPalindrome(inputD).should.equals(outputD);
        });
    });

    describe('8. Most Letters: Write a method that takes a string in and returns true if the letter "z" appears within three letters after an "a". You may assume that the string contains only lowercase letters', () => {
        let inputA = 'abbbz',
            outputA = false,
            inputB = 'abz',
            outputB = true,
            inputC = 'abzaabbz',
            outputC = true;

        it(`should be equal to ${outputA}`, () => {
            f.nearby_az(inputA).should.equals(outputA);
        });
        it(`should be equal to ${outputB}`, () => {
            f.nearby_az(inputB).should.equals(outputB);
        });
        it(`should be equal to ${outputC}`, () => {
            f.nearby_az(inputC).should.equals(outputC);
        });
    });

    describe('9. Two Sum: Write a method that takes an array of numbers. If a pair of numbers in the array sums to zero, return the positions of those two numbers. If no pair of numbers sums to zero, return nil', () => {
        let inputA = [1, 3, -1, 5],
            outputA = [[0, 2]],
            inputB = [1, 3, -1, 5, -3],
            outputB = [[0, 2], [1, 4]],
            inputC = [1, 5, 3, -4],
            outputC = 'nil';

        it(`should be equal to ${outputA}`, () => {
            f.two_sum(inputA).should.eql(outputA);
        });
        it(`should be equal to ${outputB}`, () => {
            f.two_sum(inputB).should.eql(outputB);
        });
        it(`should be equal to ${outputC}`, () => {
            f.two_sum(inputC).should.eql(outputC);
        });
    });

    describe('10. Is Power of Two: Write a method that takes in a number and returns true if it is a power of 2. Otherwise, return false. You may want to use the % modulo operation. 5 % 2 returns the remainder when dividing 5 by 2; therefore, 5 % 2 == 1. In the case of 6 % 2, since 2 evenly divides 6 with no remainder, 6 % 2 == 0', () => {
        let inputA = 8,
            outputA = true,
            inputB = 24,
            outputB = false,
            inputC = 1,
            outputC = true,
            inputD = 0,
            outputD = false;

        it(`should be equal to ${outputA}`, () => {
            f.is_power_of_two(inputA).should.equals(outputA);
        });
        it(`should be equal to ${outputB}`, () => {
            f.is_power_of_two(inputB).should.equals(outputB);
        });
        it(`should be equal to ${outputC}`, () => {
            f.is_power_of_two(inputC).should.equals(outputC);
        });
        it(`should be equal to ${outputD}`, () => {
            f.is_power_of_two(inputD).should.equals(outputD);
        });
    });
});