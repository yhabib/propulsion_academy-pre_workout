package org.propulsion_academy.pre_work;

import java.util.Arrays;
import java.util.stream.IntStream;

public class Primes {

	static boolean isPrime(int n) {
		if (n == 1)
			return false;
		for (int i = 2; i < n; i++) {
			if (n % i == 0)
				return false;
		}
		return true;
	}

	public static void main(String[] args) {
		int[] primes = IntStream.iterate(1, n -> n + 1).filter(Primes::isPrime).limit(20).toArray();

		System.out.println(Arrays.toString(primes));
	}
}
