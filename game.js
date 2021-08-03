class Sudoku {
    constructor() {


    }

    pickPuzzle(n) {
        var fr = new FileReader();
        fr.onload = function () {
            document.getElementById('output')
                .textContent = fr.result;
        }

        fr.readAsText(this.files[0]);
    }

    printingTable() {
        var body = document.getElementsByTagName("body")[0];

        var tbl = document.createElement("table");
        var tblBody = document.createElement("tbody");

        for (var j = 0; j < 9; j++) {
            var row = document.createElement("tr");

            for (var i = 0; i < 9; i++) {

                var cell = document.createElement("td");

                // if (!(document.getElementById(String(i) + String(j)).value == "")) {

                // }

                var numberInput = document.createElement("input");
                numberInput.setAttribute("type", "number");
                numberInput.setAttribute("class", "squares");
                numberInput.setAttribute("id", String(i) + String(j));

                cell.appendChild(numberInput);
                row.appendChild(cell);
            }
            tblBody.appendChild(row)
        }
        tbl.appendChild(tblBody);
        body.appendChild(tbl)
    }
}


function playSudoku() {
    // load in sudoku class and call all methods from the class to enable the game to be played.
    //dynamically check input?
    game = new Sudoku();
    game.printingTable();
}
