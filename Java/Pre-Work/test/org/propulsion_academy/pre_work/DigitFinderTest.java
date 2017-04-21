package org.propulsion_academy.pre_work;

import junit.framework.TestCase;

public class DigitFinderTest extends TestCase {
	
	public void testFind() {
		assertEquals(DigitFinder.find(57), 3);
		assertEquals(DigitFinder.find(5923), 2);
		assertEquals(DigitFinder.find(90), 1);
		assertEquals(DigitFinder.find(7), 0);
		assertEquals(DigitFinder.find(999), 4);
	}
}
