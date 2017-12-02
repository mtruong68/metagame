var image1 = document.getElementById("image1");
var image2 = document.getElementById("image2");
var poppyimage = document.getElementById("poppyimage");
var option1 = document.getElementById("option1");
var backoption = document.getElementById("backoption");

var poppytext1 = document.getElementById("poppytext1");
var poppytext2 = document.getElementById("poppytext2");
var poppytext2alt = document.getElementById("poppytext2alt");
var poppy_text3 = document.getElementById("poppytext3");
var poppylove3 = document.getElementById("poppylove3");
var poppylove4 = document.getElementById("poppylove4");
var poppysad = document.getElementById("sadpoppy");

var certainty1 = document.getElementById("certaintytext1");
var certainty2 = document.getElementById("certaintytext2");
var certainty2alt = document.getElementById("certaintytext2alt");
var certainty3 = document.getElementById("certaintytext3");

var poppyclicked = false;
var optionclicked = false;
var poppycanclick = false;
var poppycry = false;
var poppycounter = 0;

//this is the logic for the poppy functions
function poppy_f(){
	if (!optionclicked) {
		image1.style.display = "flex";
		optionclicked = true;
	} else {
		option1.style.display="none";
		backoption.style.display="flex";
	}
}

function poppy_wave(){
	if (!poppyclicked){
		if (poppycry){
			poppyimage.src = "images/poppy4.png";
		} else {
			poppyimage.src = "images/poppy2.png";
		}
	}
}

function poppy_out(){
	if (poppyclicked){
		poppyimage.src = "images/poppy3.png";
	} else {
		if (poppycry) {
			poppyimage.src = "images/poppy4.png";
		} else {
			poppyimage.src = "images/poppy1.png";
		}
	}
}

function poppy_love(){
	if (poppycanclick) {
		++poppycounter;
	}
	if (poppycounter >= 10){
		poppyimage.src = "images/poppy3.png";
		poppyclicked = true;
		poppylove4.style.display = "block";
	}
}

function poppy_text2_f() {
	poppytext1.style.display="none";
	poppytext2.style.display="inline";
}

function poppy_text3_f() {
	poppytext2.style.display="none";
	poppytext3.style.display="inline";
}

function poppy_text4_f() {
	poppylove3.style.display="inline";
	poppycanclick = true;
}

function poppy_text2_alt_f() {
	poppyimage.src="images/poppy4.png";
	poppytext1.style.display="none";
	poppytext2.style.display="none";
	poppytext2alt.style.display="inline";
	poppycry=true;
}

function poppysad_f() {
	poppysad.style.display="inline";
}

//this is the logic for the certainty functions

function certainty_f(){
	if (!optionclicked) {
		image2.style.display = "flex";
		optionclicked = true;
	} else {
		option1.style.display="none";
		backoption.style.display="flex";
	}
}

function certainty_text2_f() {
	certainty1.style.display="none";
	certainty2.style.display="inline";
}

function certainty_text2_alt_f() {
	image2.style.display="none";
	image1.style.display = "flex";
}

function certainty_text3_f() {
	certainty1.style.display="none";
	certainty2.style.display="none";
	certainty3.style.display="inline";
}

