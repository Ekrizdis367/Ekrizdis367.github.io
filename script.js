var fs = require('fs');
var files = fs.readdirSync('/pics/');

files.forEach(file => {
    var img = document.createElement("img");
    img.src = file;
    var src = document.getElementById("skills");
    src.appendChild(img);
});