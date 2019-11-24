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

function checkStringAndFocus(obj, msg) {
    var str = obj.value;
    var errorFieldName = "e_" + obj.name.substr(2, obj.name.lenght);
    if (isWhiteSpace(str) || isEmpty(str)) {
        document.getElementById(errorFieldName).innerHTML = msg;
        obj.focus();
        return false;
    }
    else return true;
}

function validate(form) {
    checkStringAndFocus(form.elements["e_imie"], "złe imie");
    checkStringAndFocus(form.elements["e_nazwisko"], "złe nazwisko");
    checkStringAndFocus(form.elements["e_wiadomosc"], "zła wiadomość");
    checkStringAndFocus(form.elements["e_mail"], "zły email");
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