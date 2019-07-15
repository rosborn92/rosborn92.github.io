var treasureLocation = Math.floor(Math.random()*9)
var bombLocation = Math.floor(Math.random()*9)
var counter = 8

function treasure(id){

    document.getElementById("counter").innerHTML=counter
    counter -= 1

    if (treasureLocation === bombLocation){
        bombLocation = Math.floor(Math.random()*9)
    }

    if (id !== treasureLocation && id !== bombLocation){
        document.getElementById(id).innerHTML = "😤"

    } else if (id === treasureLocation){
        document.getElementById(id).innerHTML = "💎"
        setTimeout(function () { window.location.reload(alert ("Argh, Maty. You found me booty!"))}, 200)

    } else if (id === bombLocation){
        document.getElementById(id).innerHTML = "💣"
        setTimeout(function () { window.location.reload(alert ("Sorry, mate. Try again."))}, 200)

    }
}
