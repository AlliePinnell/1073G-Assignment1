// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Constants for main button query selectors
const noun1 = document.getElementById("noun1"); // Button to cycle through the first set of nouns
const verb = document.getElementById("verb"); // Button to cycle through verbs
const adjective = document.getElementById("adjective"); // Button to cycle through adjectives
const noun2 = document.getElementById("noun2"); // Button to cycle through the second set of nouns
const setting = document.getElementById("setting"); // Button to cycle through settings

// Constants for p tag to display query selectors
const choosenNoun1 = document.getElementById("choosenNoun1"); // Displays the selected first noun
const choosenVerb = document.getElementById("choosenVerb"); // Displays the selected verb
const choosenAdjective = document.getElementById("choosenAdjective"); // Displays the selected adjective
const choosenNoun2 = document.getElementById("choosenNoun2"); // Displays the selected second noun
const choosenSetting = document.getElementById("choosenSetting"); // Displays the selected setting

// Constants for final buttons and p tags
const playback = document.getElementById("playback"); // Button to generate and display the story
const story = document.getElementById("story"); // <p> tag where the final story is displayed
const studentId = document.getElementById("studentId"); // <p> tag to display the student ID

// Variables for pre-defined arrays
const noun1List = [
	"The turkey",
	"Mom",
	"Dad",
	"The dog",
	"My teacher",
	"The elephant",
	"The cat",
];

const verbList = [
	"sat on",
	"ate",
	"danced with",
	"saw",
	"doesn't like",
	"kissed",
];

const adjectiveList = [
	"a funny",
	"a scary",
	"a goofy",
	"a slimy",
	"a barking",
	"a fat",
];

const noun2List = ["goat", "monkey", "fish", "cow", "frog", "bug", "worm"];

const settingList = [
	"on the moon",
	"on the chair",
	"in my spaghetti",
	"in my soup",
	"on the grass",
	"in my shoes",
];

// Variables for count to grab array elements
let noun1Count = 0; // Index for noun1List
let verbCount = 0; // Index for verbList
let adjectiveCount = 0; // Index for adjectiveList
let noun2Count = 0; // Index for noun2List
let settingCount = 0; // Index for settingList

/* Functions
-------------------------------------------------- */

// Function to handle clicks on the noun1 button
function noun1_on_click() {
	// variable to get array element and displaying it
	var element = noun1List[noun1Count];
	choosenNoun1.textContent = element;

	// if-else to change count setting
	if (noun1Count >= noun1List.length - 1) {
		noun1Count = 0;
	} else {
		noun1Count++;
	}

	//Student ID text showing up
	studentId.textContent = "Allie Pinnell - 1268163";
}

// Function to handle clicks on the verb button
function verb_on_click() {
	// variable to get array element and displaying it
	var element = verbList[verbCount];
	choosenVerb.textContent = element;

	// if-else to change count setting
	if (verbCount >= verbList.length - 1) {
		verbCount = 0;
	} else {
		verbCount++;
	}

	//Student ID text showing up
	studentId.textContent = "Allie Pinnell - 1268163";
}

// Function to handle clicks on the adjective button
function adjective_on_click() {
	// variable to get array element and displaying it
	var element = adjectiveList[adjectiveCount];
	choosenAdjective.textContent = element;

	// if-else to change count setting
	if (adjectiveCount >= adjectiveList.length - 1) {
		adjectiveCount = 0;
	} else {
		adjectiveCount++;
	}

	//Student ID text showing up
	studentId.textContent = "Allie Pinnell - 1268163";
}

// Function to handle clicks on the noun2 button
function noun2_on_click() {
	// variable to get array element and displaying it
	var element = noun2List[noun2Count];
	choosenNoun2.textContent = element;

	// if-else to change count setting
	if (noun2Count >= noun2List.length - 1) {
		noun2Count = 0;
	} else {
		noun2Count++;
	}

	//Student ID text showing up
	studentId.textContent = "Allie Pinnell - 1268163";
}

// Function to handle clicks on the setting button
function setting_on_click() {
	// variable to get array element and displaying it
	var element = settingList[settingCount];
	choosenSetting.textContent = element;

	// if-else to change count setting
	if (settingCount >= settingList.length - 1) {
		settingCount = 0;
	} else {
		settingCount++;
	}

	//Student ID text showing up
	studentId.textContent = "Allie Pinnell - 1268163";
}

// concatenate the user story and display
function playback_on_click() {
	const element =
		choosenNoun1.textContent +
		" " +
		choosenVerb.textContent +
		" " +
		choosenAdjective.textContent +
		" " +
		choosenNoun2.textContent +
		" " +
		choosenSetting.textContent;
	story.textContent = element;

	//Student ID text showing up
	studentId.textContent = "Allie Pinnell - 1268163";
}

// grabbing random element from arrays, concatenate and display
function random_on_click() {
	// Select random elements from each list
	var element1 = noun1List[Math.floor(Math.random() * noun1List.length)];
	choosenNoun1.textContent = element1;
	var element2 = verbList[Math.floor(Math.random() * verbList.length)];
	choosenVerb.textContent = element2;
	var element3 =
		adjectiveList[Math.floor(Math.random() * adjectiveList.length)];
	choosenAdjective.textContent = element3;
	var element4 = noun2List[Math.floor(Math.random() * noun2List.length)];
	choosenNoun2.textContent = element4;
	var element5 = settingList[Math.floor(Math.random() * settingList.length)];
	choosenSetting.textContent = element5;

	// Build and display the random story
	story.textContent =
		element1 +
		" " +
		element2 +
		" " +
		element3 +
		" " +
		element4 +
		" " +
		element5;

	//Student ID text showing up
	studentId.textContent = "Allie Pinnell - 1268163";
}

// Function to clear the story and reset counters
function clear_on_click() {
	// Clear the displayed story and selected words
	story.textContent = " ";
	choosenNoun1.textContent = "";
	choosenVerb.textContent = "";
	choosenAdjective.textContent = "";
	choosenNoun2.textContent = "";
	choosenSetting.textContent = "";

	// Reset counts for each word type
	noun1Count = 0;
	verbCount = 0;
	adjectiveCount = 0;
	noun2Count = 0;
	settingCount = 0;

	// Display student ID
	studentId.textContent = "Allie Pinnell - 1268163";
}

/* Event Listeners
-------------------------------------------------- */

// Add event listeners to buttons to handle user interaction
noun1.addEventListener("click", noun1_on_click); // When noun1 button is clicked
verb.addEventListener("click", verb_on_click); // When verb button is clicked
adjective.addEventListener("click", adjective_on_click); // When adjective button is clicked
noun2.addEventListener("click", noun2_on_click); // When noun2 button is clicked
setting.addEventListener("click", setting_on_click); // When setting button is clicked
playback.addEventListener("click", playback_on_click); // When playback button is clicked
random.addEventListener("click", random_on_click); // When random button is clicked
clear.addEventListener("click", clear_on_click); // When clear button is clicked
