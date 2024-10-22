var textbox = document.querySelector('#textbox');
var timeoutID = null;
var filenameBox = document.querySelector('#filename');

// Automatically load/save cache in local storage when opening and closing the page
textbox.value = localStorage.getItem('browserpad') || '';
textbox.setSelectionRange(textbox.value.length, textbox.value.length); // Place caret at end of content
calcStats(); // Update counters after loading
function storeLocally() { localStorage.setItem('browserpad', textbox.value); }
window.beforeunload = storeLocally;

// Allow inputting tabs in the textarea instead of changing focus to the next element
// (must use onkeydown to prevent default behavior of moving focus)
textbox.onkeydown = function (event) {
    if (event.key === "Tab") {
        event.preventDefault();
        var text = this.value, s = this.selectionStart, e = this.selectionEnd;
        this.value = text.substring(0, s) + '\t' + text.substring(e);
        this.selectionStart = this.selectionEnd = s + 1;
    }
};

textbox.onkeyup = function () {
    // Calculate text stats (using onkeyup is needed to update the count when deleting text)
    calcStats();

    // Auto-save to local storage (at most once per second)
    window.clearTimeout(timeoutID);
    timeoutID = window.setTimeout(storeLocally, 1000);
};

// Calculate and display character, words and line counts
function calcStats() {
    updateCount('char', textbox.value.length);
    updateCount('word', textbox.value === "" ? 0 : textbox.value.replace(/\s+/g, ' ').split(' ').length);
    updateCount('line', textbox.value === "" ? 0 : textbox.value.split(/\n/).length);
}
function updateCount(item, value) {
    document.querySelector('#' + item + '-count').textContent = value;
}

// Save textarea contents as a text file
document.querySelector('#save a').onclick = function () {
    this.download = (filenameBox.value || 'browserpad.txt').replace(/^([^.]*)$/, "$1.txt");
    this.href = URL.createObjectURL(new Blob([document.querySelector('#textbox').value], { type: 'text/plain' }));
};

// Load contents from a text file
document.querySelector('#open a').onclick = function () {
    document.querySelector('#open input').click();
};
document.querySelector('#open input').onchange = function () {
    var reader = new FileReader();
    reader.file = this.files[0]; // Custom property so the filenameBox can be set from within reader.onload()
    reader.onload = function () {
        filenameBox.value = this.file.name;
        textbox.value = this.result; // this = FileReader object
    };
    reader.readAsText(this.files[0]); // this = input element
};

//Toggle Fullwidth vs 80 Column
document.querySelector('#fullwidth').onchange = function () {
    if (this.checked == true) {
        document.getElementById('textbox').style.width = "calc(80ch + 1.5em + " + (textbox.offsetWidth - textbox.clientWidth) + "px)";
    } else {
        document.getElementById('textbox').style.width = "100%";
    }
};

// Toggle spell-checking
document.querySelector('#spellcheck').onchange = function () {
    textbox.spellcheck = this.checked;
};
textbox.spellcheck = document.querySelector('#spellcheck').checked; // Initialize

// Print the content
document.querySelector("#print").onclick = function () {
    window.print();
};

// Keyboard shortcuts for the save and load functions (`Ctrl+S`, `Ctrl+O`)
document.onkeydown = function (event) {
    if (event.ctrlKey) {
        if (event.key === "s") {
            document.querySelector('#save a').click();
            event.preventDefault();
        }
        else if (event.key === "o") {
            document.querySelector('#open input').click();
            event.preventDefault();
        }
    }
}

// Show the about dialog
document.querySelector("#about-icon").onclick = function () {
    document.querySelector("#about").showModal();
};
