function getNumber(value) {
    // console.log(value)
    var killer = document.getElementById('killer');
    var people = document.getElementById('people')
    if (value < 4 || value > 18) {
        return
    } else {
        killer.innerHTML = parseInt(value / 3)
        people.innerHTML = value - parseInt(value / 3)
    }

}

function getWatch() {
    var inputNum = document.getElementById('inputNum').value
    // console.log(inputNum)
    if (inputNum < 4 || inputNum > 18) {
        alert('请输入正确的玩家数量')
        return
    } else {
        window.location.href = "3_watch1.html"
    }
}