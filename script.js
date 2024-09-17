const containerElement = document.querySelector(".container");

// Looping to create 50 divs with color containers
for (let index = 0; index < 50; index++) {
    
    // Creating a div element
    const colorContainer = document.createElement("div");
    colorContainer.classList.add("color-container");

    // Creating a span element to hold the color code
    const colorCodeEl = document.createElement("span");
    colorCodeEl.classList.add("color-code");

    // Creating a button element for copy functionality
    const copyBtn = document.createElement("button");
    copyBtn.innerText = "copy";

    // Appending the span and button to the color container
    colorContainer.appendChild(colorCodeEl);
    colorContainer.appendChild(copyBtn);

    // Appending the color container to the main container
    containerElement.appendChild(colorContainer);
}

// Function to generate random hex color codes
function RandomColorGenerator() {
    const chars = "0123456789ABCDEF";
    const colorCodeLength = 6;
    let colorCode = "";

    for (let index = 0; index < colorCodeLength; index++) {
        const randomNum = Math.floor(Math.random() * chars.length);
        colorCode += chars[randomNum];
    }

    return colorCode;
}

// Selecting all color-container elements after they are created
const MainColour = document.querySelectorAll(".color-container");

// Function to assign random colors and update the text
function ColorGenerator() {
    for (let i = 0; i < MainColour.length; i++) {
        const ColorContainerEl = MainColour[i];
        const NewColorCode = RandomColorGenerator();
        const ColorCodeEl = ColorContainerEl.querySelector(".color-code");

        // Set the background color and display the color code in the span
        ColorContainerEl.style.backgroundColor = "#" + NewColorCode;
        ColorCodeEl.innerText = "#" + NewColorCode;
    }
}

// Calling the color generator function to populate the containers
ColorGenerator();

// Function to copy text to clipboard
function copyClipBoard(text) {
    navigator.clipboard.writeText(text)
    .then(() => {
        alert("Copied to clipboard: " + text);
    })
    .catch((error) => {
        console.error("An error occurred!", error);
    });
}

// Adding event listeners for the copy buttons
MainColour.forEach((ColorContainerEl) => {
    const copyBtnEl = ColorContainerEl.querySelector("button");
    const colorCodeEl = ColorContainerEl.querySelector(".color-code");

    copyBtnEl.addEventListener("click", () => {
        const colorCode = colorCodeEl.innerText;
        copyClipBoard(colorCode);
    });
});
