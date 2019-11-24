function isEmpty(str) {
    return (!str || str.length === 0);
}

function isWhiteSpace(str) {
    var ws = "\t\n\r ";
    for (i = 0; i < str.length; i++)
    {
        var c = str.charAt(i);
        if (ws.indexOf(c) > -1)
        {
            return true;
        }
    }
    return false;
}

function checkString(str, msg) {
    if (isWhiteSpace(str) || isEmpty(str)) {
        alert(msg);
        return false;
    }
    else return true;
}

function validate(form) {
    checkString(form.elements["imie"].value, "złe imie");
    checkString(form.elements["nazwisko"].value, "złe nazwisko");
    checkString(form.elements["wiadomosc"].value, "zła wiadomość");
    checkEmail(form.elements["email"].value, "zły email");
}

function checkEmail(str) {
    if (isWhiteSpace(str)) alert("Podaj właściwy e-mail");
    else {
        at = str.indexOf("@");
        if (at < 1) { alert("Nieprawidłowy e-mail");
        return false;
        }
        else {
            var l = -1;
            for (var i = 0; i < str.length; i++) {
                var c = str.charAt(i);
                if (c == ".") l = i;
            } if ((l < (at + 2)) || (l == str.length - 1)) alert("Nieprawidłowy e-mail");
        }
        return true;
    }
}