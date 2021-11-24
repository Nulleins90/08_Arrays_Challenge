
/*** Mini-Challenge  */
// Satzbau + Punktuation

// Vereinbarung:
// "S" (sentence) --> "."  Ich bin Max.
// "Q" (question) --> "?"  Bist du Max?
// "E" (exclamation) --> "!"  Ich bin!

// Parameter --> funktion satzbau([ ...], "Q"){ ...}


/*** Funktion mit Array als Parameter */
// mögliche Tests:
output(getSentence(["Anführungszeichen", "nicht", "vergessen"], "E"));
output(correctParas(["Bist", "du", "Max"], "12"));
output(getSentence(["Bist", "du", "Max", "Mustermann", "der", "Dritte"], "e"));


function getSentence(arr, op) {
    let sentence = "";
    const gap = " ";
    for (let i = 0; i < arr.length; i++) {
        sentence += arr[i]
        if (i < arr.length - 1) {
            sentence += gap;
        }
    }
    sentence += choosePunctuation(op);
    return sentence;
}

function choosePunctuation(op) {
    switch (op) {
        case "S":
        case "s":
            return ".";
        case "Q":
        case "q":
            return "?";
        case "E":
        case "e":
            return "!";
        default:
            return "stop";
    }
}

function correctParas(arr, op) {
    let punctuation = choosePunctuation(op);
    if (arr.length == 0) {
        return "Es wurden keine Wörter angegeben.";
    }
    else if (punctuation == "stop") {
        return "Kein korrektes Satzzeichen.";
    } else {
        return "OK";
    }
}
// Modul: Ausgabe in Konsole : Test
//  output("hi"); 
function output(outputStr) {
    console.log(outputStr);
}