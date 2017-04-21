package org.propulsion_academy.pre_work;

import junit.framework.TestCase;

public class FactorialTest extends TestCase {
	
	public void testFactorialRecursive() {
		int test = 5;
		assertEquals(120, Factorial.factorialRecursive(test));
	}

	public void testFactorialIterative() {
		int test = 5;
		assertEquals(120, Factorial.factorialIterative(test));
	}

	public void testFactorialStream() {
		int test = 5;
		assertEquals(120, Factorial.factorialStream(test));
	}

}
