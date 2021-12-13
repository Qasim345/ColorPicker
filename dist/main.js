/*

  Copyright ⓒ2021. Created by ❤ Qasim Sarwari in Acode.

*/
// loader
setTimeout(function() {
  $(".loader-box").hide();
}, 3000);
// flag
var f = 0;
// nav toggle
$("#menu-btn").click(()=> {
  if (f == 0) {
    f = 1;
    $(".back,#menu-btn,#menu").addClass("act");
    $("#menu-btn").html("arrow_forward")
  } else {
    f = 0;
    $(".back,#menu-btn,#menu").removeClass("act");
    $("#menu-btn").html("menu")
  }
});
// outside clicking
document.onclick = ((e)=> {
  if (e.target.id !== "menu" && e.target.id !== "menu-btn" && e.target.id !== "mode") {
    $(".back,#menu-btn,#menu").removeClass("act");
    $("#menu-btn").html("menu")
  }
});
// light & dark mode
$("#mode").click(()=> {
  if (f == 0) {
    f = 1;
    $("#mode").html("light_mode").addClass("act");
    $("body,.navbar,#menu,.box,.codes,.rang,.text").addClass("dark")
  } else {
    f = 0;
    $("#mode").html("dark_mode").removeClass("act");
    $("body,.navbar,#menu,.box,.codes,.rang,.text").removeClass("dark");
  }
});
// copy to clicpboard
$("#rgb-copy").click(()=> {
  var tx = document.getElementById("rgb");
  tx.select();
  tx.setSelectionRange(0, 99999);
  document.execCommand("copy");
  alert("Rgb code Copied!");
  tx.blur();
});
$("#hex-copy").click(()=> {
  var tx = document.getElementById("hex");
  tx.select();
  tx.setSelectionRange(0, 99999);
  document.execCommand("copy");
  alert("Hex code Copied!");
  tx.blur();
});
// live chenge background
$("#hex").on("keyup", ()=> {
  $(".box").css("background", $("#hex").val());
});
$("#rgb").on("keyup", ()=> {
  $(".box").css("background", $("#rgb").val());
});
// about & help page
$("#about").click(()=> {
  $(".back,.text").addClass("up");
  $(".text div h2").html("About us");
  $(".text p").html("This color picker created by Qasim Sarwari, using html, css, javascript, jQuery. Coded in mobile by acode app and converted to apk using java in AIDE..<br />If you have question or problem, contact us.<br><br>Email: qasimsarwari2020@gmail.com");
});
$("#help").click(()=> {
  $(".back,.text").addClass("up");
  $(".text div h2").html("How to use");
  $(".text p").html("Please use rang sliders to generate a color code, then you see color on preview page and code on above input. click on copy button to copy your color code in clipboard. thanks.<br>Good luck dear user.<br><br>Telegram channel: <a href='https://t.me/qasim_tech'>@qasim_tech</a>");
});
$("#close-text").click(()=> {
  $(".back,.text").removeClass("up");
});

// genrete color code
function col() {
  var red = $("#red").val();
  var green = $("#green").val();
  var blue = $("#blue").val();
  $(".red").html(red);
  $(".green").html(green);
  $(".blue").html(blue);
  var color = "rgb("+red+","+green+","+blue+")";
  $(".box").css("background",
    color);
  $("#rgb").val(color);
  rhex = Number(red).toString(16);
  ghex = Number(green).toString(16);
  bhex = Number(blue).toString(16);
  var hex = "";
  if (rhex < 10)
    rhex = "0"+rhex;
  if (ghex < 10)
    ghex = "0"+ghex;
  if (bhex < 10)
    bhex = "0"+bhex;
  hex = "#"+rhex+ghex+bhex;
  $("#hex").val(hex);
}
// random color
$(".box").on("touchstart", ()=> {
  var r = Math.round(Math.random() * 255);
  var g = Math.round(Math.random() * 255);
  var b = Math.round(Math.random() * 255);
  var rgb = "rgb(" +r+","+g+","+b+")";
  $("#red").val(r);
  $("#green").val(g);
  $("#blue").val(b);
  $(".box").css("background",rgb);
  $("#rgb").val(rgb);
  var hCode = "#" + Math.random().toString(16).substr(-6);
  $(".box").css("background", hCode);
  $("#hex").val(hCode)
})