var random1 = Math.floor(Math.random()*6)+1;
var random2 = Math.floor(Math.random()*6)+1;
 var randomImg1 = "dice"+random1+".png";
 var randomImg2 = "dice"+random2+".png";
document.querySelector(".img1").setAttribute("src",randomImg1);
document.querySelector(".img2").setAttribute("src",randomImg2);



if(random2===5){
    document.querySelector(".img2").setAttribute("src","./assets/dice5.png");
}else if (random2===4){
    document.querySelector(".img2").setAttribute("src","./assets/dice4.png");
    
}else if (random2===3){
    document.querySelector(".img2").setAttribute("src","./assets/dice3.png");
    
}else if (random2===2){
    document.querySelector(".img2").setAttribute("src","./assets/dice2.png");
    
}else{
    document.querySelector(".img2").setAttribute("src","./assets/dice1.png");   
}


if(random1>random2){
    document.querySelector("div>h1").innerHTML="🚩Player1 Wins!";
}
else if(random1<random2){
    document.querySelector("div>h1").innerHTML="Player2 Wins!🚩";
    
}
else{
    document.querySelector("div>h1").innerHTML="Oops! Again Refresh";

}

document.firstElementChild.lastElementChild.firstElementChild.firstElementChild