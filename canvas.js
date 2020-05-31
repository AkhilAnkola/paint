window.addEventListener("load", () => {
	const canvas = document.querySelector("#canvas");
	const ctx = canvas.getContext("2d");

	//Resizing
	canvas.height = window.innerHeight;
	canvas.width = window.innerWidth;

	//ctx.fillRect(100, 100, 200, 500);
	//ctx.strokeStyle = ''

	//variable
	let painting = false;

	function startPosition(){
		painting = true;
	}
	function finishedPosition(){
		painting = false;
		ctx.beginPath();
	}
	function draw(e){
		if(!painting) return;
		ctx.lineWidth = 10;
		ctx.lineCap = "round";
		ctx.strokeStyle = "black";

		ctx.lineTo(e.clientX, e.clientY);
		ctx.stroke();
		ctx.beginPath();
		ctx.moveTo(e.clientX, e.clientY);
	}
	//Event List
	canvas.addEventListener('mousedown',startPosition);
	canvas.addEventListener('mouseup',finishedPosition);
	canvas.addEventListener('mousemove',draw);
});