package org.propulsion_academy.pre_work;

public class Fibonacci {
	static int fibonacci(int n) {
		if (n == 0)
			return 0;
		else if (n == 1)
			return 1;
		else
			return fibonacci(n - 1) + fibonacci(n - 2);
	}

	// varags
	public static void main(String... args) {
		if (args.length == 0) {
			System.err.println("Error: you must supply which Fibonacci number to compute");
			System.exit(1);
		}
		for (int i = 0; i < args.length; i++) {
			System.out.println(fibonacci(Integer.parseInt(args[i])));
		}
	}
}
