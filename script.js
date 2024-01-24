let ans = Math.floor(Math.random()*10+1);
let i = 0;
document.getElementById("submitButton").onclick = function() {
        i += 1;
        let guess = document.getElementById("guess").value;
        if (guess == ans) {
                document.getElementById("result").innerHTML = `correct! it took you ${i} guesses.`;
                document.getElementById("submitButton").disabled = true;
                document.getElementById("resetButton").style.display = "block";
        } else if (guess < ans) {
                document.getElementById("result").innerHTML = "too small!";

        } else {
                document.getElementById("result").innerHTML = "too big!";
        }
}

function resetGame() {
    ans = Math.floor(Math.random()*10+1);
    i = 0;
    document.getElementById("result").innerHTML = "keep guessing...";
    document.getElementById("guess").value = "";
    document.getElementById("resetButton").style.display = "none";
    document.getElementById("submitButton").disabled = false; // Re-enable the guess button.
}
