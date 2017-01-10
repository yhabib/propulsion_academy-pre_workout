package org.propulsion_academy.pre_work;

import java.util.Arrays;
import java.util.stream.IntStream;

import junit.framework.TestCase;

public class PrimesTest extends TestCase {
	
	public void testPrimes(){
		int [] input = IntStream.iterate(1, n -> n + 1)
						.filter(Primes::isPrime)
						.limit(20)
						.toArray();
		
		String test = "[2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71]";
		
		assertEquals(test, Arrays.toString(input));
	}

}
