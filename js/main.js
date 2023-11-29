import translat from "./translate.js";

/* Toggle Dir Of Page */
const langSelector = document.querySelector("select");

langSelector.addEventListener("change", (event) => {
  setLang(event.target.value);
  localStorage.setItem("lang", event.target.value);
});

document.addEventListener("DOMContentLoaded", () => {
  setLang(localStorage.getItem("lang"));
});

const setLang = (language) => {
  const elements = document.querySelectorAll("[data-lang]");
  elements.forEach((ele) => {
    const transKey = ele.getAttribute("data-lang");
    ele.textContent = translat[language][transKey];
    document.location.reload;
  });
  let slider = document.querySelectorAll("#sl");
  let ulslider = document.querySelectorAll("#ul");
  let spara = document.querySelectorAll("#spara");

  if (language === "ar") {
    document.dir = "rtl";
    $(slider).removeClass("ltr");
    $(slider).addClass("rtl");
    $(ulslider).removeClass("ulltr");
    $(ulslider).addClass("ulrtl");
    $(".form span").removeClass("left");
    $(".form span").addClass("right");
    $(".back ul").removeClass("ulleft");
    $(".back ul").addClass("ulright");
    $(".list li").removeClass("liltr");
    $(".list li").addClass("lirtl");
    $(spara).addClass("spcial-paragraphrtl");
    $(".about-intro li").removeClass("nameltr");
    $(".about-intro li").addClass("namertl");
    $(".imgen").css("display", "none");
    $(".imgar").css("display", "block");
    $("ol").css("list-style", "arabic-indic");
  } else {
    document.dir = "ltr";
    $(slider).removeClass("rtl");
    $(slider).addClass("ltr");
    $(ulslider).removeClass("ulrtl");
    $(ulslider).addClass("ulltr");
    $(".form span").removeClass("right");
    $(".form span").addClass("left");
    $(".back ul").removeClass("ulright");
    $(".back ul").addClass("ulleft");
    $(".list li").removeClass("lirtl");
    $(".list li").addClass("liltr");
    $(spara).removeClass("spcial-paragraphrtl");
    $(".about-intro li").removeClass("namertl");
    $(".about-intro li").addClass("nameltr");
    $(".imgar").css("display", "none");
    $(".imgen").css("display", "block");
    $("ol").css("list-style", "decimal");
  }
};

/* Products Shuffle */
let list = document.querySelectorAll(".list li");
let cards = document.querySelectorAll(".card");

list.forEach((li) => {
  li.addEventListener("click", removeSelected);
  li.addEventListener("click", chooseCard);
});

function removeSelected() {
  list.forEach((li) => {
    li.classList.remove("selected");
    this.classList.add("selected");
  });
}

function chooseCard() {
  cards.forEach((card) => {
    $(card).css("display", "none");
  });
  document.querySelectorAll(this.dataset.cat).forEach((pr) => {
    $(pr).show(500);
  });
}

/* Products List Shuffle */
let prolist = document.querySelectorAll(".links ul li button");
let protext = document.querySelectorAll(".protext");

prolist.forEach((proli) => {
  proli.addEventListener("click", removeBtnActive);
  proli.addEventListener("click", chooseProtext);
});

function removeBtnActive() {
  prolist.forEach((proli) => {
    proli.classList.remove("btn-active");
    this.classList.add("btn-active");
  });
}

function chooseProtext() {
  protext.forEach((prte) => {
    $(prte).css("display", "none");
  });
  document.querySelectorAll(this.dataset.show).forEach((pr) => {
    $(pr).css("display", "flex");
  });
}

// No Copy Text & Images

document.oncontextmenu = function () {
  return false;
};
document.onkeydown = function (e) {
  if (e.keyCode == 123) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == "I".charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == "J".charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.keyCode == "U".charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == "C".charCodeAt(0)) {
    return false;
  }
};
