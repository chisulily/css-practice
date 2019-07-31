
var sinterval;
function startBling(){
    clearInterval(sinterval)
    sinterval = setInterval(changeColor,100)
    
}

function endBling(){
    clearInterval(sinterval)
    var items = document.getElementsByClassName('item')
    for (let i = 0; i < items.length; i++) {
        items[i].style.backgroundColor = "#ffa600"
    }
}

function changeColor(){
    var items = document.getElementsByClassName('item')
    for (let i = 0; i < items.length; i++) {
        items[i].style.backgroundColor = 'rgb(' + Math.round(Math.random() * 255) + "," + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 10) + ')'
    }
}
