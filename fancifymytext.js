
// Function to alert "Hello, world!"
function sayHello() {
    alert("Hello, world!");
}

// Function to increase the text size
function makeTextBigger() {
    const textArea = document.getElementById("textArea");
    textArea.style.fontSize = "24pt";
}

// Function to apply styles based on selected radio button
function applyStyle() {
    const textArea = document.getElementById("textArea");
    const fancyShmancy = document.getElementById("fancyShmancy");

    if (fancyShmancy.checked) {
        // Apply FancyShmancy styles
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
    } else {
        // Remove styles for BoringBetty
        textArea.style.fontWeight = "normal";
        textArea.style.color = "black";
        textArea.style.textDecoration = "none";
    }
}

// Function to add "Moo" suffix and uppercase the text
function addMoo() {
    const textArea = document.getElementById("textArea");
    const sentences = textArea.value.split(".");
    for (let i = 0; i < sentences.length - 1; i++) {
        sentences[i] += "-Moo";
    }
    textArea.value = sentences.join(".").toUpperCase();
}
