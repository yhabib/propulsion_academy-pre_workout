package org.propulsion_academy.pre_work_oop_js_exercise;

public class Main {
	public static void main(String[] args) {
		Player player = new Player("myPlayer");
		Track track1 = new Track("Incubus", "Drive", "Make Yourself");
		Track track2 = new Track("Ritchie Valens", "La Bamba", "La Bamba");
		Track track3 = new Track("Red Hot Chilli Peppers", "Californication", "Californication");
		
		player.add(track1);
		player.add(track2);
		player.add(track3);
		player.play();	
		player.next();
		player.play();
		player.next();
		player.play();
		player.previous();
		player.play();
		
		player.selectTrack(2);
		
		player.printTracksInfo();
	}
}
