const farben = ["eichel", "rosen", "schellen", "schilten"]

function setFavicon() {
    var c = Math.floor(Math.random() * 4)
    document.getElementById("favicon").setAttribute("href", "asset/" + farben[c] + ".svg")
}