/*eslint-env browser*/

var select = document.getElementById("selectNumber"); 
var options = ["Sahkira - album one", "Sahkira - album two", "Sahkira - album tree", "Sahkira - album four", "Sahkira - album five"]; 

for(var i = 0; i < options.length; i++) {
    var opt = options[i];
    var el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    
}
    
/* var Jukebox = function () {
    "use strict";
    var albums = [], self;
    
    self = {
        addAlbum: function (album) {
            albums.push(album);
        },
        favoriteAlbum: function () {
            var max = -1, fav, i;

            for (i = 0; i < albums.length; i += 1) {
                if (albums[i].played > max) {
                    max = albums[i].played;
                    fav = albums[i];
                }
            }
            return fav.display();
        }
    };
    return self;
};

var Album = function (artist, title) {
    "use strict";
    var self = {
        played: 0,
        play: function () {
            self.played += 1;
        },
        display: function () {
            return artist + " : " + title + ". The album has been played " + this.played + " times.";
        }
    };
    return self;
};

var jbox = new Jukebox();
var album1 = new Album("Operation Ivy", "Energy");
var album2 = new Album("Blink 182", "Dude Ranch");
var album3 = new Album("New Found Glory", "Sticks and Stones");

jbox.addAlbum(album1);
jbox.addAlbum(album2);
jbox.addAlbum(album3);

album1.play();
album1.play();
album1.play();
album2.play();
album3.play();

window.console.log("You favorite album is: " + jbox.favoriteAlbum()); */