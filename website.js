var outer = document.getElementById("items");
var puzzles = [];
window.onload = function() {
    getPuzzles();
}


function getPuzzles() { // not tested
    var tmp = getCookie("items").split("øπø");
    if (tmp == "") return;
    for (let val in tmp) {
        val = val.split("√∫√");
        val[6] = val[6].split("∑∑∑");
        puzzles.push(val);
    }
    return;
}

function render() {
    
}
