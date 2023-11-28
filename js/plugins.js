// Toggle Menu List
$(function () {
  $(".toggle-menu").on("click", function () {
    $("nav .main-navbar").toggle(1000);
  });
});

// Shuffle Articles

// Level 1
$(function () {
  $(".btn1").on("click", function () {
    $(".d1").toggle(1000);
    $(
      ".d2, .d3, .d4, .d5, .d11, .d12, .d13, .d121, .d122, .d123, .d124, .d125, .d51, .d52"
    ).fadeOut();
  });
});

$(function () {
  $(".btn2").on("click", function () {
    $(".d2").toggle(1000);
    $(
      ".d1, .d3, .d4, .d5, .d11, .d12, .d13, .d121, .d122, .d123, .d124, .d125, .d51, .d52"
    ).fadeOut();
  });
});

$(function () {
  $(".btn3").on("click", function () {
    $(".d3").toggle(1000);
    $(
      ".d1, .d2, .d4, .d5, .d11, .d12, .d13, .d121, .d122, .d123, .d124, .d125, .d51, .d52"
    ).fadeOut();
  });
});

$(function () {
  $(".btn4").on("click", function () {
    $(".d4").toggle(1000);
    $(
      ".d1, .d2, .d3, .d5, .d11, .d12, .d13, .d121, .d122, .d123, .d124, .d125, .d51, .d52"
    ).fadeOut();
  });
});

$(function () {
  $(".btn5").on("click", function () {
    $(".d5").toggle(1000);
    $(
      ".d1, .d2, .d3, .d4, .d11, .d12, .d13, .d121, .d122, .d123, .d124, .d125, .d51, .d52"
    ).fadeOut();
  });
});

// Level 2
$(function () {
  $(".btn11").on("click", function () {
    $(".d11").toggle(1000);
    $(".d12").fadeOut();
    $(".d13").fadeOut();
  });
});

$(function () {
  $(".btn12").on("click", function () {
    $(".d11").fadeOut();
    $(".d12").toggle(1000);
    $(".d13").fadeOut();
  });
});

$(function () {
  $(".btn13").on("click", function () {
    $(".d11").fadeOut();
    $(".d12").fadeOut();
    $(".d13").toggle(1000);
  });
});

// Level 3
$(function () {
  $(".btn121").on("click", function () {
    $(".d121").toggle(1000);
    $(".d122").fadeOut();
    $(".d123").fadeOut();
    $(".d124").fadeOut();
    $(".d125").fadeOut();
  });
});

$(function () {
  $(".btn122").on("click", function () {
    $(".d121").fadeOut();
    $(".d122").toggle(1000);
    $(".d123").fadeOut();
    $(".d124").fadeOut();
    $(".d125").fadeOut();
  });
});

$(function () {
  $(".btn123").on("click", function () {
    $(".d121").fadeOut();
    $(".d122").fadeOut();
    $(".d123").toggle(1000);
    $(".d124").fadeOut();
    $(".d125").fadeOut();
  });
});

$(function () {
  $(".btn124").on("click", function () {
    $(".d121").fadeOut();
    $(".d122").fadeOut();
    $(".d123").fadeOut();
    $(".d124").toggle(1000);
    $(".d125").fadeOut();
  });
});

$(function () {
  $(".btn125").on("click", function () {
    $(".d121").fadeOut();
    $(".d122").fadeOut();
    $(".d123").fadeOut();
    $(".d124").fadeOut();
    $(".d125").toggle(1000);
  });
});

// Level 4
$(function () {
  $(".btn51").on("click", function () {
    $(".d51").toggle(1000);
    $(".d52").fadeOut();
  });
});

$(function () {
  $(".btn52").on("click", function () {
    $(".d51").fadeOut();
    $(".d52").toggle(1000);
  });
});

$(function () {
  $(".show-over").on("click", function () {
    $(".pro-intro-box").css("height", "fit-content");
    $(".over").css({
      height: "fit-content",
      "margin-bottom": "75px",
    });
    $(".show-over").css("display", "none");
  });
});

$(function () {
  $(".show-less").on("click", function () {
    $(".pro-intro-box").css("height", "400px");
    $(".over").css({
      height: "300px",
      "margin-bottom": "25px",
    });
    $(".show-over").css("display", "block");
  });
});