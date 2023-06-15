function addSongs() {
    var favSong = prompt("What's your favorite song?");
    var favArtist = prompt("And your favorite artist?");
    var song1 = document.getElementById("song1");
    song1.setAttribute("class", "redtext");
    var song2 = document.getElementById("song2");
    song2.setAttribute("class", "bluetext");
    var song3 = document.getElementById("song3");
    song3.setAttribute("class", "greentext");
    var song4 = document.getElementById("song4");
    song4.setAttribute("class", "purptext");

    song1.innerHTML = "Blue Suede Strings, by Elvis Pagely";
    song2.innerHTML = "Great Objects on Fire, by Jerry JSON Lewis";
    song3.innerHTML = "I Code the Line, by Johnny JavaScript";
    song4.innerHTML = favSong + ", by " + favArtist;
}
window.onload = addSongs;