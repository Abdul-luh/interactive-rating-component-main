const nums = document.querySelectorAll(".rating");

const clicked = function (params) {
	let answer = params.childNodes[0].nodeValue;
	const result = document.getElementById("result");
	document.querySelector(".Submit").addEventListener("click", () => {
		document.querySelector(".card1").style.display = "none";
		document.querySelector(".card2").classList.remove("hidden");
		result.innerHTML = answer;
	});
	// return answer;
};
