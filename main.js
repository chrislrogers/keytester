const keyBox = document.getElementById("keyBox");
const whichBox = document.getElementById("whichBox");
const locBox = document.getElementById("locBox");
const codeBox = document.getElementById("codeBox");

const keyCodeBox = document.getElementById("keyCodeBox");
const shiftKeyBox = document.getElementById("shiftKeyBox");
const altKeyBox = document.getElementById("altKeyBox");
const ctrlKeyBox = document.getElementById("ctrlKeyBox");
const metaKeyBox = document.getElementById("metaKeyBox");
const repeatBox = document.getElementById("repeatBox");

const pageTitle = document.getElementById("pageTitle");
const keyDesc = document.getElementById("keyDesc");
const moreButton = document.getElementById("moreButton");

document.onkeydown = function(e) {
    console.log(e.which + " = event.which, " + e.key + " = event.key, " + e.location + " = event.location, "+ e.code + " = event.code");
    
    whichBox.innerHTML = e.which;
    keyBox.innerHTML = e.key;
    locBox.innerHTML = e.location;
    codeBox.innerHTML = e.code;
    
    keyCodeBox.innerHTML = e.keyCode;
    shiftKeyBox.innerHTML = e.shiftKey;
    altKeyBox.innerHTML = e.altKey;
    ctrlKeyBox.innerHTML = e.ctrlKey;
    metaKeyBox.innerHTML = e.metaKey;
    repeatBox.innerHTML = e.repeat;

    keyDesc.innerHTML = e.key;

    pageTitle.innerHTML = e.key + ' | ' + e.which + ' | ' + e.code;

    if (e.which === 32) {
        keyDesc.innerHTML = "(Space Bar)";
    }
    return false;
}

function expand() {
    content = document.getElementById("more");
    if (content.style.display === "block") {
      content.style.display = "none";
      moreButton.innerHTML = "Show More";
    }
    else {
      content.style.display = "block";
      moreButton.innerHTML = "Show Less";
    }
}
