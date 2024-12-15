function updateLastModified() {
    var lastModified = document.lastModified;
    console.log("Last Modified Date and Time: " + lastModified);
    var lastModifiedElement = document.getElementById("lastModified");
    if (lastModifiedElement) {
        lastModifiedElement.innerHTML = "<br>Last Modified: " + lastModified;
    }
}

window.addEventListener("load", updateLastModified);