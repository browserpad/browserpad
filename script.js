var textbox = document.querySelector('#textbox');
var timeoutID = null;
var filenameBox = document.querySelector('#filename');

// load/save cache in local storage
textbox.value = localStorage.getItem('browserpad') || '';
textbox.setSelectionRange(textbox.value.length, textbox.value.length); // place caret at end of content
calcStats(); // update counters after loading
function storeLocally() { localStorage.setItem('browserpad', textbox.value); }
window.beforeunload = storeLocally;

// tab key support
textbox.onkeypress = function (event) {
    if (event.keyCode === 9) {
        event.preventDefault();
        var text = this.value, s = this.selectionStart, e = this.selectionEnd;
        this.value = text.substring(0, s) + '\t' + text.substring(e);
        this.selectionStart = this.selectionEnd = s + 1;
    }
};

textbox.onkeyup = function () {
    calcStats();
    window.clearTimeout(timeoutID); // prevent saving too frequently
    timeoutID = window.setTimeout(storeLocally, 1000);
};

// counters
function calcStats() {
    updateCount('char', textbox.value.length);
    updateCount('word', textbox.value === "" ? 0 : textbox.value.replace(/\s+/g, ' ').split(' ').length);
    updateCount('line', textbox.value === "" ? 0 : textbox.value.split(/\n/).length);
}
function updateCount(item, value) {
    document.querySelector('#' + item + '-count').textContent = value;
}

// save as file
document.querySelector('#save a').onclick = function () {
    this.download = (filenameBox.value || 'browserpad.txt').replace(/^([^.]*)$/, "$1.txt");
    this.href = URL.createObjectURL(new Blob([document.querySelector('#textbox').value], { type: 'text/plain' }));
};

// open file
document.querySelector('#open a').onclick = function () {
    document.querySelector('#open input').click();
};
document.querySelector('#open input').onchange = function () {
    var reader = new FileReader();
    reader.file = this.files[0]; // custom property so the filenameBox can be set from within reader.onload()
    reader.onload = function () {
        filenameBox.value = this.file.name;
        textbox.value = this.result; // this = FileReader
    };
    reader.readAsText(this.files[0]); // this = input
};

// toggle spell-checking
document.querySelector('#spellcheck').onchange = function () {
    textbox.spellcheck = this.checked;
};
textbox.spellcheck = document.querySelector('#spellcheck').checked; // initialize

// print the content
document.querySelector("#print").onclick = function () {
    window.print();
};

// keyboard shortcuts for the save and load functions (`Ctrl+S`, `Ctrl+O`)
document.onkeydown = function (e) {
    if (e.ctrlKey) {
        if (e.keyCode === 83) {
            document.querySelector('#save a').click();
            e.preventDefault();
        }
        else if (e.keyCode === 79) {
            document.querySelector('#open input').click();
            e.preventDefault();
        }
    }
}

// show the about dialog
document.querySelector("#about-icon").onclick = function () {
    document.querySelector("#about").showModal();
};
