package org.propulsion_academy.pre_work_oop_js_exercise;

public class Track {
	String Artist;
	String Title;
	String Album;
	
	public Track(String artist, String title, String album) {
//		super();
		Artist = artist;
		Title = title;
		Album = album;
	}

	public String getArtist() {
		return Artist;
	}

	public String getTitle() {
		return Title;
	}

	public String getAlbum() {
		return Album;
	}

	public void play() {
		System.out.println("Playing " + this.getTitle());
	}

	public String showInfo() {
		return this.Title + " from the album " + this.Album + " by " + this.Artist;
	}	
}
