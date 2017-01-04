package org.propulsion_academy.pre_work;

public class Hello {

	static String greeter(String[] people) {
		String template = "Hello, ";
		String greeting = people.length > 0 ? "" : template + "Unknown!";

		for (int i = 0; i < people.length; i++) {
			greeting += (template + people[i] + "!\n");
		}
		return greeting;
	}

	public static void main(String[] args) {
		System.out.println(greeter(args));
	}
}
