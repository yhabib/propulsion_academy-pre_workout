const Player = require('./index').player,
      Track = require('./index').track,
      should = require('chai').should(),
      expect = require('chai').expect;

describe('-- JS Object Oriented Programming --', () => {
    let player;
    beforeEach('creates an object before each test', () => {
        player = new Player();
    });

    describe('checks the instace of Player', () => {
        it('should be defined', () => {
            expect(player).to.exist;
        });
        it('should has an empty array for the tracks', () => {
            player.tracks.length.should.equals(0);
        });
        it('should has currentTrack to 0', () => {
            player.currentTrack.should.equals(0);
        });
    });
    describe('inserts a new song into the player and plays it', () => {
        beforeEach('inserts a new song', () => player.add('Californication'));
        
        it('should contains the new song', () => {    
            player.tracks.includes('Californication').should.equals(true);
        });
        it('should play the added song', () => {
            player.play().should.equals('Californication');
        });
        it('should has currentTrack to 1', () => {
            player.currentTrack.should.equals(1);
        });
    });

    describe('inserts a couple of songs and allows to navigate between them', () => {
        beforeEach('inserts some songs', () => {
            player.add('Californication');
            player.add('Under the bridge');
            player.add('Snow');
        });
        it('should contains three songs', () => {
           player.tracks.length.should.equals(3);
        });
        it('should play the first song added', () => {
            player.play().should.equals('Californication');
        });
        it('should play the next one', () => {
            player.next();
            player.play().should.equals('Under the bridge');
        });
        it('should play the first one if reaches the end of the array', () => {
            player.next();
            player.next();
            player.next();
            player.play().should.equals('Californication');
        });
        it('should play the last one if current is 1 and previos is called', () => {
            player.previous();
            player.play().should.equals('Snow');
        });
    });

    describe('inserts tracks into the player', () => {
        beforeEach(() => {
            player.add(new Track('Incubus', 'Drive', 'Make Yourself'));
            player.add(new Track('Ritchie Valens', 'La Bamba', 'La Bamba'));
        });
        it('should have two tracks', () => {
           player.tracks.length.should.equals(2);
        });
        it('should play the first', () => {
            player.play().should.equals('Playing: Drive by Incubus');
        }); 
    });

    describe('bonus exercises', () => {
        beforeEach(() => {
            player.add(new Track('Incubus', 'Drive', 'Make Yourself'));
            player.add(new Track('Ritchie Valens', 'La Bamba', 'La Bamba'));
            player.add(new Track('Impala Ray', 'Stay', 'StayAlbum'));
            player.add(new Track('Red Hot Chili Peppers', 'Californication', 'Californication'));
            player.add(new Track('Red Hot Chili Peppers', 'Snow', 'Stadium Arcadium'));
        });
        it('should have two tracks', () => {
           player.tracks.length.should.equals(4);
        });
        it('should play the first', () => {
            player.play().should.equals('Playing: Drive by Incubus');
        }); 
        it('should play the third after selecting it', () => {
            player.selectTrack(3);
            player.play().should.equals('Playing: Stay by Impala Ray');
        });
        it('should print the info about all the tracks', () => {
            const output = `----------------------------------------
1. Drive from the album Make Yourself by Incubus
2. La Bamba from the album La Bamba by Ritchie Valens
3. Stay from the album StayAlbum by Impala Ray
4. Californication from the album Californication by Red Hot Chili Peppers
----------------------------------------`;
            player.getTracks().should.equals(output);
        });

        it('should play every song until the end', () =>{
            player.playOn();
        });
        it('should stop it after 3seg', () =>{
            player.stop();
        });
    });
});