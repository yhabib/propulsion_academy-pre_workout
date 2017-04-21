package org.propulsion_academy.pre_work;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class SortingAndArray {
	public static Double[] sortItOut(Double... array) {
		List<Double> evens = new ArrayList();
		List<Double> odds = new ArrayList();

//		for (int i = 0; i < array.length; i++) {
//			Double number = array[i];
		for(Double number : array) {
			if (java.lang.Math.floor(number) % 2 == 0)
				evens.add(number);
			else
				odds.add(number);
		}
		Collections.sort(odds);
		Collections.sort(evens);
		Collections.reverse(evens);
		
		odds.addAll(evens);
		
		return odds.toArray(array);
	}
}
