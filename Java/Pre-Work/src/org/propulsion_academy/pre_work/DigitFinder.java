package org.propulsion_academy.pre_work;

public class DigitFinder {
	
	public static int find(long n) {
		int[] numbers = getArrayOfNumbers(n);
		int numOfOps = 0;
		
		while(numbers.length > 1) {
			int newNumber = 1;
			for(int num : numbers) {
				newNumber *= num;
			}
			numOfOps++;
			numbers = getArrayOfNumbers(newNumber);
		}
		
		return numOfOps;
	}
	
	private static int[] getArrayOfNumbers(long n) {
		String[] numbersStringified = new Long(n).toString().split("");
		int[] numbers = new int[numbersStringified.length];
		for (int i = 0; i < numbers.length; i++) {
			numbers[i] = Integer.parseInt(numbersStringified[i]);
		}
		return numbers;
	}
	
	public static void main(String[] args) {
		System.out.println(find(57));
	}
}
