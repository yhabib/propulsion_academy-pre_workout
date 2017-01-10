package org.propulsion_academy.pre_work_oop_js_exercise;

import java.util.ArrayList;
import java.util.Timer;
import java.util.TimerTask;

public class Player {
	// fields with no access modificator --> the whole package has access to it
	String name;
	int position;
	ArrayList<Track> tracks;

	public Player(String name) {
		this.name = name;
		this.position = 0;
		this.tracks = new ArrayList<Track>();
	}

	public void add(Track track) {
		tracks.add(track);
	}

	public void play() {
		tracks.get(this.position).play();
	}

	public void playEveryTwoSeconds() {
		 new Timer().scheduleAtFixedRate(new TimerTask() {
			@Override
			public void run() {
				play();
				next();
			}
		}, 0, 2000);
	}

	public void next() {
		if (this.tracks.size() - 1 > this.position)
			this.position++;
		else if (this.tracks.size() - 1 == this.position)
			this.position = 0;
	}

	public void previous() {
		if (this.position > 0)
			this.position--;
		else if (this.position == 0)
			this.position = this.tracks.size() - 1;
	}

	public void selectTrack(int n) {
		if (n >= 0 && n <= this.tracks.size() - 1) {
			this.position = n;
		} else
			System.err.println("There is no track for that position");
	}

	public void printTracksInfo() {
		System.out.println("---- Tracks Info: ----");
		this.tracks.forEach(track -> System.out.println(track.showInfo()));
		System.out.println("------------------------------------");
	}
}

// setTimeout
//new android.os.Handler().postDelayed(
//	    new Runnable() {
//	        public void run() {
//	            Log.i("tag","A Kiss after 5 seconds");
//	        }
//	}, 5000);

