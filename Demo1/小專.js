
// const text = document.querySelectorAll(".thePaths");

// for(let k = 0; k < text.length; k++){
//     console.log(`text number ${k} length is ${text[k].getTotalLength()}`);
// }

const lastWord = document.querySelector("#twentyone");
const animation = document.querySelector("div.animation");
lastWord.addEventListener("animationend",() => {
    animation.style = "transition:all 2.5s ease; opacity:0; pointer-events:none;";
})

const lastWordMob = document.querySelector("#twentyoneMob");
const animationMob = document.querySelector("div.animationMob");
lastWordMob.addEventListener("animationend",() => {
    animationMob.style = "transition:all 2.5s ease; opacity:0; pointer-events:none;";
})


  function openSeason(evt, seasonName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(seasonName).style.display = "block";
    evt.currentTarget.className += " active";
  }

  
function openSeason2(evt, seasonName) {
  var i, tabcontentMob, tablinksMob;
  tabcontentMob = document.getElementsByClassName("tabcontentMob");
  for (i = 0; i < tabcontentMob.length; i++) {
    tabcontentMob[i].style.display = "none";
  }
  tablinksMob = document.getElementsByClassName("tablinksMob");
  for (i = 0; i < tablinksMob.length; i++) {
    tablinksMob[i].className = tablinksMob[i].className.replace(" active", "");
  }
  document.getElementById(seasonName).style.display = "block";
  evt.currentTarget.className += " active";
}


// --------------------
const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  effect: "fade",
  slidesPerView: 1,
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  speed: 600
});