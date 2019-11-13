var PROGRAMING_LANG = [
	"cat",
	"fish",
	"elephant",
	"squirrel",
	"dog",
	"bird",
	"dolphin",
	"monkey",
	"tiger",
	"lion",
	"mouse",
	"crocodile",
	"camel",
	"butterfly"
];

function randomWord() {
	return PROGRAMING_LANG[Math.floor(Math.random() * PROGRAMING_LANG.length)];
}

export { randomWord };
