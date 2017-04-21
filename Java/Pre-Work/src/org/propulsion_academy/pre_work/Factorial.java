package org.propulsion_academy.pre_work;

import java.util.stream.IntStream;

public class Factorial {

	static int factorialStream(int n) {
		return IntStream.rangeClosed(1, n).reduce(1, (a, b) -> a * b);
	}

	static int factorialRecursive(int n) {
		if (n == 0 || n == 1)
			return 1;
		return n * factorialRecursive(n - 1);
	}

	static int factorialIterative(int n) {
		int factorial = 1;
		while (n > 0) {
			factorial *= n;
			n--;
		}
		return factorial;
	}
}
