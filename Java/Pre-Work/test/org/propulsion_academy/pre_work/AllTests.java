package org.propulsion_academy.pre_work;

import junit.framework.Test;
import junit.framework.TestSuite;

public class AllTests {

	public static Test suite() {
		TestSuite suite = new TestSuite(AllTests.class.getName());
		// $JUnit-BEGIN$
		suite.addTestSuite(FibonacciTest.class);
		suite.addTestSuite(HelloTest.class);
		suite.addTestSuite(FactorialTest.class);
		suite.addTestSuite(PrimesTest.class);
		// $JUnit-END$
		return suite;
	}

}
