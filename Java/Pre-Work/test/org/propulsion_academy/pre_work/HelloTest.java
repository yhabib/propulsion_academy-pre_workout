package org.propulsion_academy.pre_work;

import junit.framework.TestCase;

public class HelloTest extends TestCase {

	public void testHello() {
		String[] test1 = {};
		String[] test2 = { "Dogbert", "Catbert", "Ratbert" };

		assertEquals("Hello, Unknown!", Hello.greeter(test1));
		assertEquals("Hello, Dogbert!\nHello, Catbert!\nHello, Ratbert!\n", Hello.greeter(test2));
	}
}
