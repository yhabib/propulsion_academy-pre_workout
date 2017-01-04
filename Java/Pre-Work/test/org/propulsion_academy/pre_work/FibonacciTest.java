package org.propulsion_academy.pre_work;

import junit.framework.TestCase;

public class FibonacciTest extends TestCase {

	public void testFibonacci() {
		int test1 = 2;
		int test2 = 12;

		assertEquals(1, Fibonacci.fibonacci(test1));
		assertEquals(144, Fibonacci.fibonacci(test2));
	}

}
