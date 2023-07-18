
colors = ["red","#CB2821","#4E5452","#C6A664","#4C2F27","#1B5583","#231A24","#E4A010","#F44611","#2C5545","orange","teal","cyan","gold","dimgray","black"]

i = 1

function change(){
	var a = document.querySelector("#globe");
	a.style.background = colors[i];
	i++;
	i = i%16;
}