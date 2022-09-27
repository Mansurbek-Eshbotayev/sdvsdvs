// Result title
let elTitle = document.querySelector(".shot__title");

// Mini buttons selector
let minBtnCover = document.querySelector(".course__img--cover");
let minBtnScissors = document.querySelector(".course__img--scissors");
let minBtnStone = document.querySelector(".course__img--stone");

// Right Own Images
let rightCoverImg = document.querySelector(".right_cover");
let rightScissorsImg = document.querySelector(".right_scissors");
let rightStoneImg = document.querySelector(".right_stone");

// left Own Images
let leftCoverImg = document.querySelector(".left_cover");
let leftScissorsImg = document.querySelector(".left_scissors");
let leftStoneImg = document.querySelector(".left_stone");

//Buttons starter
let elBtnStart = document.querySelector(".btn__start");
let elBtnAgain = document.querySelector(".btn__again");

//result page
let elLeftResult = document.querySelector(".left__result");
let elRightResult = document.querySelector(".right__result");

// elLeftResult.textContent = 0
// elRightResult.textContent = 0

// frist work your chouse
let myResult = 0
minBtnCover.addEventListener("click", function(){
  rightCoverImg.classList.remove("img__none");
  rightScissorsImg.classList.add("img__none");
  rightStoneImg.classList.add("img__none");
  myResult = 1
});

minBtnScissors.addEventListener("click", function(){
  rightScissorsImg.classList.remove("img__none");
  rightCoverImg.classList.add("img__none");
  rightStoneImg.classList.add("img__none");
  myResult = 2
});

minBtnStone.addEventListener("click", function(){
  rightStoneImg.classList.remove("img__none");
  rightScissorsImg.classList.add("img__none");
  rightCoverImg.classList.add("img__none");
  myResult = 3
});

// rondom count
let count = Math.ceil(Math.random() * (3))
let pcResult = 0

let vertualCover = leftCoverImg;
let vertualScissorsImg = leftScissorsImg
let vertualStoneImg = leftStoneImg

// console.log(count);
function vertualChange(){
  if(count == 1){
    pcResult = 1
    vertualCover.classList.remove("img__none");
    vertualScissorsImg.classList.add("img__none");
    vertualStoneImg.classList.add("img__none");
  }else if(count == 2){
    pcResult = 2
    vertualScissorsImg.classList.remove("img__none");
    vertualCover.classList.add("img__none");
    vertualStoneImg.classList.add("img__none");
  }else{
     pcResult = 3
     vertualStoneImg.classList.remove("img__none");
    vertualScissorsImg.classList.add("img__none");
    vertualCover.classList.add("img__none");
  }
}
let sum = 0;
let sum2 = 0;

elLeftResult.textContent = JSON.parse(window.localStorage.getItem("count"));
elRightResult.textContent = JSON.parse(window.localStorage.getItem("count2"));


function accountShot(){
  if(count == 1 && myResult == 1){
    elTitle.textContent = ("The score is even");

  }else if(count == 2 && myResult == 2){
    elTitle.textContent = ("The score is even");


   
  }else if(count == 3 && myResult == 3){
    elTitle.textContent = ("The score is even");

    
  }else if(count == 1 && myResult == 2){
    elTitle.textContent = ("You Win");
    sum2++;
   
  }else if(count == 1 && myResult == 3){
    elTitle.textContent = ("You lost");
    sum++;
   
  }else if(count == 2 && myResult == 1){
    elTitle.textContent = ("You lost");
    sum++; 
    
  }else if(count == 2 && myResult == 3){
    elTitle.textContent = ("You Win");
    sum2++;
    
  }else if(count == 3 && myResult == 1){
    elTitle.textContent = ("You Win");
    sum2++;
    
  }else if(count == 3 && myResult == 2){
    elTitle.textContent = ("You lost");
    sum++;
   
  }
}

console.log(sum);
console.log(sum2);
elBtnStart.addEventListener("click", function(){
  
  vertualChange();
  accountShot()
  elLeftResult.textContent =  window.localStorage.setItem("count", JSON.stringify(sum));
  elRightResult.textContent = window.localStorage.setItem("count2", JSON.stringify(sum2));
  
  elLeftResult.textContent = Number(JSON.parse(window.localStorage.getItem("count")));
  elRightResult.textContent = Number(JSON.parse(window.localStorage.getItem("count2")));
});

elBtnAgain.addEventListener("click", function(){
  document.location.reload(true);
});






