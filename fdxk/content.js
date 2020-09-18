//var images = document.getElementsByTagName("img");
//for (var i = 0, l = images.length; i < l; i++){
      //images[i].src = 'http://placekitten.com/' + images[i].width + '/' + images[i].height;
//}

var totalCredits = document.getElementById("selectedCredits");
var credits = document.createElement("div");
credits.innerHTML = totalCredits.innerHTML;
credits.classList.add("credits");
list = document.getElementsByClassName("electTabsBar");
list[0].appendChild(credits)
