var numsquares=6;
var colours=pickRandomColour(6);
var squares=document.querySelectorAll(".square");
var truecolor=document.querySelector("#code");
var message=document.querySelector("#message");
var heading=document.querySelector("h1");
var pickcolor=pickcolorRandom();
var reset=document.querySelector("#reset");
truecolor.innerHTML=pickcolor;
var easy=document.querySelector("#easy");
var hard=document.querySelector("#hard");
var h2=document.querySelector("h2");
var medium=document.querySelector("#medium");
easy.addEventListener("click",function(){
	hard.classList.remove("selected");
	medium.classList.remove("selected");
	easy.classList.add("selected");
	numsquares=2;
	colours=pickRandomColour(numsquares);
	pickcolor=pickcolorRandom();
	truecolor.innerHTML=pickcolor;
	for(var i=0;i<squares.length;i++)
	{
		if(colours[i])
		{
			squares[i].style.background=colours[i];
		}
		else
		{
			squares[i].style.display="none";
		}
	}
})
medium.addEventListener("click",function(){
	hard.classList.remove("selected");
	easy.classList.remove("selected");
	medium.classList.add("selected");
	numsquares=4;
	colours=pickRandomColour(numsquares);
	pickcolor=pickcolorRandom();
	for(var i=0;i<squares.length;i++)
	{
		if(colours[i])
		{
			squares[i].style.background=colours[i];
			squares[i].style.display="block";
		}
		else
		{
			squares[i].style.display="none";
		}
	}
})
hard.addEventListener("click",function(){
	easy.classList.remove("selected");
	medium.classList.remove("selected");
	hard.classList.add("selected");
	numsquares=6;
	colours=pickRandomColour(numsquares);
	pickcolor=pickcolorRandom();
	truecolor.innerHTML=pickcolor;
	for(var i=0;i<squares.length;i++)
	{
		squares[i].style.background=colours[i];
		squares[i].style.display="block";
	}
})
reset.addEventListener("click",function(){
	colours=pickRandomColour(numsquares);
	pickcolor=pickcolorRandom();
	truecolor.innerHTML=pickcolor;
	for(var i=0;i<squares.length;i++)
	{
		squares[i].style.background=colours[i];
	}
	heading.style.background="brown";
	h2.style.background="brown";
	reset.innerHTML="New Colors";
	message.innerHTML="";
})
for(var i=0;i<squares.length;i++)
{
	squares[i].style.background=colours[i];
}
for(var i=0;i<squares.length;i++)
{
	squares[i].addEventListener("click",function(){
		console.log(this.style.background);
		if(this.style.background===pickcolor)
		{
			//alert("CORRECT!")
			message.innerHTML="BRAVO!";
			changecolors(this.style.background);
			heading.style.background=pickcolor;
			h2.style.background=pickcolor;
			reset.innerHTML="Play again?";
		}
		else
		{
			this.style.background="#232323";
			message.innerHTML="OOPS! Try again!";
		}
	})
}
function changecolors(color)
{
	for(var i=0;i<squares.length;i++)
	{
		squares[i].style.background=color;
	}
}
function pickcolorRandom(){
	var random=Math.floor(Math.random()*colours.length);
	return colours[random];
}
function pickRandomColour(num)
{
	var arr=[];
	for(var i=0;i<num;i++)
	{
		arr[i]=onecolour();
	}
	return arr;
}
function onecolour()
{
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);
	return "rgb("+ r+", "+g+", "+b+")";
}