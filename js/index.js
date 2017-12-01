var image1 = document.getElementById("image1");
var poppyimage = document.getElementById("poppyimage");
var poppyclicked = false;
var poppycounter = 0;

function poppy_f(){
	image1.style.display = "flex";
}

function poppy_wave(){
	if (!poppyclicked){
		poppyimage.src = "../images/poppy2.png";
	}
}

function poppy_out(){
	if (poppyclicked){
		poppyimage.src = "../images/poppy3.png";
	} else {
		poppyimage.src = "../images/poppy1.png";
	}
}

function poppy_love(){
	poppyimage.src = "../images/poppy3.png";
	poppyclicked = true;
}