const keyBox = document.getElementById("keyBox");
const whichBox = document.getElementById("whichBox");
const locBox = document.getElementById("locBox");
const codeBox = document.getElementById("codeBox");
const pageTitle = document.getElementById("pageTitle");
const keyDesc = document.getElementById("keyDesc");

document.onkeydown = function(e) {
    console.log(e.which + " = event.which, " + e.key + " = event.key, " + e.location + " = event.location, "+ e.code + " = event.code");
    
    whichBox.innerHTML = e.which;
    keyBox.innerHTML = e.key;
    locBox.innerHTML = e.location;
    codeBox.innerHTML = e.code;

    keyDesc.innerHTML = e.key;

    pageTitle.innerHTML = e.key + ' | ' + e.which + ' | ' + e.code;

    if (e.which === 32) {
        keyDesc.innerHTML = "(Space Bar)";
    }
    return false;
}
