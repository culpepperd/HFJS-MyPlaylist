function addSongs() {
    var favSong = prompt("What's your favorite song?");
    var song1 = document.getElementById("song1");
    var song2 = document.getElementById("song2");
    var song3 = document.getElementById("song3");
    var song4 = document.getElementById("song4");

    song1.innerHTML = "Blue Suede Strings, by Elvis Pagely";
    song2.innerHTML = "Great Objects on Fire, by Jerry JSON Lewis";
    song3.innerHTML = "I Code the Line, by Johnny JavaScript";
    song4.innerHTML = favSong;
}
window.onload = addSongs;