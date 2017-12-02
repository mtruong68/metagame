var body = document.getElementById("sorry");
var nomore = document.getElementById("nomore");
var sorrycounter = 0;
var sorrydiv = [];

function init() {
	for (i=0; i<6;++i){
		sorrydiv.push(document.getElementById("sorrytext"+i));
	}
}

function sorry_f(){	
	++sorrycounter;

	if (sorrycounter < 4){
		body.innerHTML+= " im sorry";
	} else if (sorrycounter >= 4 && sorrycounter < 9)
	{
		sorrydiv[sorrycounter-3].style.display="inline-flex";
	} else {
		nomore.style.display="block";
	}
}

init();