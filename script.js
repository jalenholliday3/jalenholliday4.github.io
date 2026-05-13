function calculateTotal() {
    let total = 0;

    if (document.querySelector("#jersey").checked) {
        total += 90;
    }

    if (document.querySelector("#kit").checked) {
        total += 75;
    }

    if (document.querySelector("#scarf").checked) {
        total += 25;
    }

    if (document.querySelector("#hat").checked) {
        total += 30;
    }

    document.querySelector("#calcResult").innerHTML =
        "Total Price: $" + total;
}

function validateForm() {
    let name = document.querySelector("#name").value;

    if (name == "") {
        alert("Please enter your name before submitting.");
        return false;
    }

    return true;
}