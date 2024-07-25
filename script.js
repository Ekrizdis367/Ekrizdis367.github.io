const result = document.getElementById("cmd-result-p");
const textInput = document.getElementById("command");
const pages = document.getElementsByClassName("page");

/*
Get-Home
Get-Resume
*/

document.getElementById('cmd').style.display = "none";

$(
    function() {
        $("#cmd").draggable();
    }
)

textInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();
        var c = document.getElementById("command").value;
        run(c);
    }
})

function cmd() {
    var c = document.getElementById('cmd').style.display
    if (c === "none") {document.getElementById('cmd').style.display = "block";}
    else if (c === "block") {document.getElementById('cmd').style.display = "none";}
}

function page(id) {
    for (let i = 0; i < pages.length; i++) {
        const element = pages[i];
        element.style.display = "none";
    }
    document.getElementById(id).style.display = "flex";
}

function run(command) {
    textInput.value = '';
    result.innerText = '';
    result.style.color = '';
    switch (command) {
        case 'get-help':
            result.innerText = "You can run these commands:\n";
            result.innerText += "get-home\n"
            result.innerText += "get-resume\n"
            result.innerText += "exit\n"
            break;
        case 'get-home':
            page("hello");
            break;
        case 'get-resume':
            page("resume");
            break;
        case 'dir':
            result.innerText = "There are no directories, this is a website?"
            break;
        case 'cd':
            result.innerText = "There are no directories, this is a website?"
            break;
        case 'exit':
            cmd()
            break;
        default:
            result.style.color = "red";
            result.innerText = "Invalid!";
            break;
    }
}