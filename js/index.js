var image1 = document.getElementById("image1");
var poppyimage = document.getElementById("poppyimage");
var option1 = document.getElementById("option1");
var backoption = document.getElementById("backoption");

var poppy_text1 = document.getElementById("poppytext1");
var poppy_text2 = document.getElementById("poppytext2");
var poppy_text3 = document.getElementById("poppytext3");
var poppylove3 = document.getElementById("poppylove3");
var poppylove4 = document.getElementById("poppylove4");

var poppyclicked = false;
var optionclicked = false;
var poppycanclick = false;
var poppycounter = 0;

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
		poppyimage.src = "images/poppy2.png";
	}
}

function poppy_out(){
	if (poppyclicked){
		poppyimage.src = "images/poppy3.png";
	} else {
		poppyimage.src = "images/poppy1.png";
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


