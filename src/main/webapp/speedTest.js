const testWrapper = document.querySelector(".test-wrapper");
const testArea = document.querySelector("#test-area");
const originText = document.querySelector("#origin-text p").innerHTML;
const resetButton = document.querySelector("#reset");
const theTimer = document.querySelector(".timer");


var timer = [0,0,0,0];
var interval;
var timerRunning = false;
var testText = ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
 "Times New Roman is a serif typeface designed for legibility in body text. It was commissioned by the British newspaper The Times in 1931 and conceived by Stanley Morison, the artistic advisor to the British branch of the printing equipment company Monotype, in collaboration with Victor Lardent, a lettering artist in the Times' advertising department.",
 "A sports car, or sportscar, is a small, usually two-seater automobile designed for spirited performance and nimble handling. The term sports car was used in The Times, London in 1919.",
 "Kumquats are a group of small fruit-bearing trees in the flowering plant family Rutaceae.",
 "Microsoft Windows is a group of several graphical operating system families, all of which are developed, marketed, and sold by Microsoft.",
 "Java is a general-purpose computer-programming language that is concurrent, class-based, object-oriented, and specifically designed to have as few implementation dependencies as possible. It is intended to let application developers write once, run anywhere , meaning that compiled Java code can run on all platforms that support Java without the need for recompilation.",
 "Avada Kedavra",
 "A computer mouse is a hand-held pointing device that detects two-dimensional motion relative to a surface. This motion is typically translated into the motion of a pointer on a display, which allows a smooth control of the graphical user interface. The first public demonstration of a mouse controlling a computer system was in 1968.",
 "Professor Albus Percival Wulfric Brian Dumbledore is the headmaster of the wizarding school Hogwarts. He is the founder and leader of the Order of the Phoenix, an organisation dedicated to fighting Lord Voldemort.",
 "Gimli, the dwarf, is chosen to represent the race of Dwarves in the Fellowship of the Ring. As such, he is one of the primary characters of the novel. In the course of the adventure, Gimli aids the Ring-bearer Frodo Baggins, participates in the War of the Ring, and becomes close friends with Legolas, overcoming an ancient enmity of Dwarves and Elves."];

function randomizer(testTexts) {	
	return testText[Math.floor(Math.random()*Math.floor(testTexts))];	
}

var sss = document.getElementById("origin-text").innerText = randomizer(testText.length);

function leadingZero(time) {
    if (time <= 9) {
        time = "0" + time;
    }
    return time;
}

// Run a standard minute/second/hundredths timer:
function runTimer() {
	let currentTime = leadingZero(timer[0]) + ":" + leadingZero(timer[1]) + ":" + leadingZero(timer[2]);
	theTimer.innerHTML = currentTime;
	timer[3]++;

	timer[0] = Math.floor((timer[3]/100)/60);
	timer[1] = Math.floor((timer[3]/100) - (timer[0] * 60));
	timer[2] = Math.floor(timer[3] - (timer[1] * 100) - (timer[0] * 6000));
}

// Match the text entered with the provided text on the page:
function spellCheck() {
	let textEntered = testArea.value;
	let originTextMatch = originText.substring(0,textEntered.length);

	if (textEntered == sss) {
		clearInterval(interval);
		testWrapper.style.borderColor = "#429890";
	} else {
		if (textEntered == originTextMatch) {
			testWrapper.style.borderColor = "#65CCf3";
		} else {
			testWrapper.style.borderColor = "#E95D0F";
		}
	}
}

// Start the timer:
function start() {
	let textEnterdLength = testArea.value.length;
	if (textEnterdLength === 0 && !timerRunning) {
		timerRunning = true;
		interval = setInterval(runTimer, 10);
	}

}

// Reset everything:
function reset() {
	clearInterval(interval);
	interval = null;
	timer = [0,0,0,0];
	timerRunning = false;
	window.location.reload(true);
	document.getElementById("origin-text").innerText = randomizer(testText.length);
	testArea.value = "";
	theTimer.innerHTML = "00:00:00";
	testWrapper.style.borderColor = "grey";
}

// Event listeners for keyboard input and the reset
testArea.addEventListener("keypress", start, false);
testArea.addEventListener("keyup", spellCheck);
resetButton.addEventListener("click", reset, false);

//testText[Math.random()*testTexts];