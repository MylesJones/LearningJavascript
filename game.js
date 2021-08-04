class Sudoku {
    constructor() {


    }

    pickPuzzle() {

        var result = null;
        var xmlhttp = new XMLHttpRequest();

        if (!xmlhttp) {
            alert('Giving up :( Cannot create an XMLHTTP instance');
            return "Mewh";
        }

        xmlhttp.open("GET", "LearningJavascript\sudokus.txt", true);
        xmlhttp.send();
        
        result = xmlhttp.responseText;

        if (result == null) {
            result = "This doesn't work :("
        }

        return result
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
        body.appendChild(tbl);
    }
}


function playSudoku() {
    // load in sudoku class and call all methods from the class to enable the game to be played.
    //dynamically check input?
    game = new Sudoku();
    game.printingTable();
    document.getElementById("test").innerHTML = game.pickPuzzle();
}

