function addSongs() {
    var favSong = prompt("What's your favorite song?"); // user inputs favorite song
    var favArtist = prompt("And your favorite artist?");
    var favColor = prompt("Pick a color: Red, Blue, Green, Purple, Yellow, Orange, Blood Orange or Pink.");
    var song1 = document.getElementById("song1");
    song1.setAttribute("class", "redtext");
    var song2 = document.getElementById("song2");
    song2.setAttribute("class", "bluetext");
    var song3 = document.getElementById("song3");
    song3.setAttribute("class", "greentext");
    var song4 = document.getElementById("song4");
    song4.setAttribute("class", colorPicker(favColor));

    song1.innerHTML = "Blue Suede Strings, by Elvis Pagely";
    song2.innerHTML = "Great Objects on Fire, by Jerry JSON Lewis";
    song3.innerHTML = "I Code the Line, by Johnny JavaScript";
    song4.innerHTML = favSong + ", by " + favArtist;

    var colorText = song1.getAttribute("class");
    if (colorText == null) {
        console.log("Hmm, this is returning " + colorText);
    } else {
        console.log("The color of song1 is: " + colorText);
    }

    var colorText = song2.getAttribute("class");
    if (colorText == null) {
        console.log("Hmm, this is returning " + colorText);
    } else {
        console.log("The color of song2 is: " + colorText);
    }

    var colorText = song3.getAttribute("class");
    if (colorText == null) {
        console.log("Hmm, this is returning " + colorText);
    } else {
        console.log("The color of song3 is: " + colorText);
    }

    var colorText = song4.getAttribute("class");
    if (colorText == null) {
        console.log("Hmm, this is returning " + colorText);
    } else {
        console.log("The color of song4 is: " + colorText);
    }

    function colorPicker(userColor) {
        if (userColor == "Red") {
            return "redtext";
        } else if (userColor == "Blue") {
            return "bluetext";
        } else if (userColor == "Green") {
            return "greentext";
        } else if (userColor == "Purple") {
            return "purptext";
        } else if (userColor == "Yellow") {
            return "yellowtext";
        } else if (userColor == "Orange") {
            return "orangetext";
        } else if (userColor == "Blood Orange") {
            return "bloodorangetext";
        } else if (userColor == "Pink") {
            return "pinktext";
        }

        else {
            alert("Try following directions next time.");
            return null;
        }
        //return pickedColor;
    }
    
}
window.onload = addSongs;