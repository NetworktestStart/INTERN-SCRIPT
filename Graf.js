var ctx = document.getElementById("canvas").getContext("2d");
    	
// #layer1
	ctx.save();
	ctx.transform(1.000000, 0.000000, 0.000000, 1.000000, 0.000000, -197.000000);
	
// #path10
	ctx.beginPath();
	ctx.lineJoin = 'miter';
	ctx.strokeStyle = 'rgb(0, 0, 0)';
	ctx.lineCap = 'butt';
	ctx.lineWidth = 0.046862;
	ctx.fillStyle = 'rgb(0, 255, 0)';
	ctx.moveTo(3.711728, 241.531480);
	ctx.lineTo(45.599893, 294.810400);
	ctx.lineTo(96.067561, 202.967700);
	ctx.lineTo(91.525472, 200.938030);
	ctx.lineTo(45.599893, 283.647200);
	ctx.lineTo(6.739789, 240.009230);
	ctx.fill();
	ctx.stroke();
	ctx.restore();

console.log("Grafik geladen");
