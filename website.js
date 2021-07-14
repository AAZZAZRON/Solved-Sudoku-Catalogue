var filters = new Set();
var num;
var sudokus;
checkboxes = [];

window.onload = function() {
    num = document.getElementById("posts").children[0].id.split("-")[1];
    num = parseInt(num);
    sudokus = document.getElementById("posts").children;
    for (let i = 0; i < num; i += 1) {
        let localTags = sudokus[i].classList.value.split(" ");
        for (let j in localTags) {
            filters.add(localTags[j]);
        }
    }
    filters = Array.from(filters);
    console.log(filters);
    filters.sort();

    // add filters
    for (let i = 0; i < filters.length; i += 1) {
        let label = document.createElement("label");
        let input = document.createElement("input");
        let text = document.createElement("text");
        text.className = "text";
        text.innerText = filters[i];
        input.type = "checkbox";
        input.name = filters[i];
        

        label.appendChild(input);
        label.appendChild(text);
        document.getElementById("tags").appendChild(label);
        input.onclick = applyChanges;
        checkboxes.push(input);
    }

    // set up filter button
    document.getElementById("overSelect").onclick = function() {
        if (document.getElementById("tags").style.display == "block") document.getElementById("tags").style.display = "none";
        else document.getElementById("tags").style.display = "block";
    }
}

function applyChanges() {
    var clicked = [];
    for (let i = 0; i < checkboxes.length; i += 1) {
        if (checkboxes[i].checked) {
            clicked.push(checkboxes[i].name);
        }
    }
    for (let i = 0; i < sudokus.length; i += 1) {
        var show = 1;
        var c = new Set(sudokus[i].classList.value.split(" "));
        for (let j = 0; j < clicked.length; j += 1) {
            if (!c.has(clicked[j])) {
                show = 0;
                break;
            }
        }
        if (show) sudokus[i].style.display = "";
        else sudokus[i].style.display = "none";
    }
}
