//var images = document.getElementsByTagName("img");
//for (var i = 0, l = images.length; i < l; i++){
      //images[i].src = 'http://placekitten.com/' + images[i].width + '/' + images[i].height;
//}


//change credits div display position 
var totalCredits = document.getElementById("selectedCredits");
var credits = document.createElement("div");
credits.innerHTML = totalCredits.innerHTML;
credits.classList.add("credits");
list = document.getElementsByClassName("electTabsBar");
list[0].appendChild(credits)


var electedClasesThisSemester = document.querySelectorAll(".electTabContent tbody .defaultElected")
function getCourseInfo(courseName){
    for (let i = 0; i < electedClasesThisSemester.length; i++){
        if (electedClasesThisSemester[i].children[2].innerText == courseName){
            return electedClasesThisSemester[i].children[9].innerText
        }
    }
    return ""
}



var calendarTds = document.querySelectorAll("#courseTable table tbody tr td");
for (let i = 0; i < calendarTds.length; i++){
    let node = document.createElement("div");
    node.classList.add("div-to-display")
    let innerHTML = getCourseInfo(calendarTds[i].innerText)
    node.innerHTML = innerHTML;
    if (calendarTds[i].innerHTML != "")
        calendarTds[i].append(node);
}

