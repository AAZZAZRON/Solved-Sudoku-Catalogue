var filters = new Set();
var num;
var sudokus;
window.onload = function() {
    num = document.getElementById("posts").children[0].id.split("-")[1];
    num = parseInt(num);
    sudokus = document.getElementById("posts").children;
    for (let i = 0; i < num; i += 1) {
        let localTags = sudokus[i].classList.value.split(" ");
        for (let j = 0; j < localTags.length; j += 1) {
            filters.add(localTags[j]);
        }
    }
    filters = Array.from(filters);
    console.log(filters);
}
