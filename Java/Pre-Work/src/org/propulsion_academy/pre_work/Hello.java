package org.propulsion_academy.pre_work;

public class Hello {
	public static void main(String[] args) {
		String template = "Hello, ";
		String greeting = args.length > 0 ? "" : template + "Unknown!";
		
		for(int i=0; i<args.length; i++) {
			greeting += (template + args[i] + "!\n"); 
		}	
		
		System.out.println(greeting);
	} 
}
