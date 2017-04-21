package org.propulsion_academy.pre_work;

import java.util.Arrays;

import junit.framework.TestCase;

public class SortingAndArrayTest extends TestCase {
	
	public void testSortItOut() {
		Double[] test1 = SortingAndArray.sortItOut(1d, 2d, 3d, 4d, 5d, 6d, 7d, 8d, 9d);
		Double[] output1 = {1.0, 3.0, 5.0, 7.0, 9.0, 8.0, 6.0, 4.0, 2.0};
		
		Double[] test2 = SortingAndArray.sortItOut(26.66, 24.01, 52.00, 2.10, 44.15, 1.02, 11.15);
		Double[] output2 = {1.02, 11.15, 52.0, 44.15, 26.66, 24.01, 2.1};
		
		assertTrue(Arrays.equals(test1, output1));
		assertTrue(Arrays.equals(test2, output2));
	}
}
