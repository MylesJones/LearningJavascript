function printingTable() {
    var body = document.getElementsByTagName("body")[0];

    var tbl = document.createElement("table");
    var tblBody = document.createElement("tbody");

    for (var j = 0; j < 9; j++) {
        var row = document.createElement("tr");

        for (var i = 0; i < 9; i++) {
            var cell = document.createElement("td");

            var numberInput = document.createElement("input");
            numberInput.setAttribute("type", "number");
            numberInput.setAttribute("class", "squares")

            cell.appendChild(numberInput);
            row.appendChild(cell);
        }
        tblBody.appendChild(row)
    }
    tbl.appendChild(tblBody);
    body.appendChild(tbl)
}

function playSudoku() {
    // load in sudoku class and call all methods from the class to enable the game to be played.
    //dynamically check input?
}
