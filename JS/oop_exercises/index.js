function Track(artist, title, album) {
    this.artist = artist;
    this.title = title;
    this.album = album;
}

Track.prototype.play = function () {
    return `Playing: ${this.title} by ${this.artist}`
};

Track.prototype.info = function () {
    return `${this.title} from the album ${this.album} by ${this.artist}`;
}


function Player() {
    this.currentTrack = 0;
    this.tracks = [];
}

Player.prototype.add = function (track) {
    if (this.tracks.length === 0)
        this.currentTrack = 1;

    this.tracks.push(track);
};

Player.prototype.play = function () {
    const track = this.tracks[this.currentTrack - 1],
        msg = typeof track === 'object' ? track.play() : track;

    // console.log(msg);
    return msg;
}

Player.prototype.next = function () {
    if (this.currentTrack === this.tracks.length)
        this.currentTrack = 1;
    else this.currentTrack++;
};

Player.prototype.previous = function () {
    if (this.currentTrack === 1)
        this.currentTrack = this.tracks.length;
    else this.currentTrack--;
};

Player.prototype.selectTrack = function (num) {
    if (num < 1 || num > this.tracks.length)
        return;
    this.currentTrack = num;
};

Player.prototype.getTracks = function () {
    let msg = '----------------------------------------\n';
    this.tracks.forEach((track, i) => msg += (`${i + 1}. ${track.info()}\n`));
    msg += '----------------------------------------';
    // console.log(msg);
    return msg;
};

var id;
Player.prototype.playOn = function () {
    console.log(this.tracks[this.currentTrack - 1].play());
    id = setInterval(() => {
        if(this.currentTrack < this.tracks.length) {
            this.currentTrack++;
            console.log(this.tracks[this.currentTrack - 1].play());
        }
    }, 2000);
};

Player.prototype.stop = function () {
    setTimeout(() => {
        clearInterval(id);
        console.log("Stopped the player");
    }, 5000);
};

module.exports.player = Player;
module.exports.track = Track;