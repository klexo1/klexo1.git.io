var devilFruit = Math.floor(Math.random() * 9)
var bomb = Math.floor(Math.random() * 9)
const treasure = (location) => {
    if (devilFruit == location) {
        document.getElementById(location).innerHTML = "🏆" 
        alert ("you won !")}
    else if (bomb == location) {
        document.getElementById(location).innerHTML = "💣"
        alert ("you lose !")}
    else {
        document.getElementById(location).innerHTML = "💢"
    }
}


