"use strict"
let choice;
let compscore = 0;
let userscore = 0;
alert("lets play a game");
alert("enter any 1 of them\n1. rock\n2. paper\n3. scissors");
do{
const myChoice = prompt("enter your choice");
alert("you choosed "+ myChoice);
if(myChoice==null||myChoice!=="rock"&&myChoice!=="paper"&&myChoice!=="scissors"){
    alert("invalid input");
    break;
}
//choices for computer 
const Choices = ["rock", "paper", "scissors"];
//it is to get random number
let min = 0;
let max = 2;
console.log(Math);
let randomindex = (Math.floor(Math.random()*(max-min+1)+min));
//alert("my choosed random index is",randomindex);
let compChoice = Choices[randomindex];
alert("i will choose "+ compChoice); //-----it is to see what computer choosed randomly-----
if(myChoice==compChoice){
    alert("it's a tie");
}
else if(myChoice=='rock'&&compChoice=='scissors'||myChoice=='paper'&&compChoice=='rock'||myChoice=='scissors'&&compChoice=='paper'){
    alert("you won the game!")
    userscore++;
}
else{
    alert("you lose the game!");
    compscore++;
}
choice= prompt("do you wanna play again?\nyes\nno")
if(choice!=="yes"&&choice!=="no"){
    alert("invalid input");
    break;
}
}while(choice == "yes");
alert("your score is "+ userscore+"\ncomputuer score is "+compscore);
