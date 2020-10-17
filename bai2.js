let message = prompt("Hãy nhập vào")
if (message == "Employee") {
    message = "Hello"
}
else if (message == "Director") {
    message = "Greetings"
}
else if (message == "") {
    message = "No login"
}
else {
    message = ""
}
alert(message)