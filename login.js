//login.js
//Core Prototype

function login() {
    var form = document.forms[0];
    form.what.value = "login";
    form.action = "https://edenprairie_students.na.rapidbiz.com/php/scl/edenprairie/index.php"
    form.submit();
}