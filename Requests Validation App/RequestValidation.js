function validateUser() {
    if (document.getElementById("uname").value === "" && document.getElementById("upass").value === "") {
        button.disabled = true;
    } else {
        button.disabled = false;
    }
}

var input = document.getElementById("uname");
var password = document.getElementById("upass");
var btn = document.getElementById("submit");
btn.disabled = true;
input.addEventListener("change", validateUser);
