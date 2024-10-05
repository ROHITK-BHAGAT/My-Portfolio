var tablinks=document.getElementsByClassName("tab-links");
var tabcontents=document.getElementsByClassName("tab-contents");


function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

let moreBtn=document.getElementById('moreBtn');
let moreProject=document.getElementById('moreProject');
let moreProject1=document.getElementById('moreProject1');

function extraProject(){
    moreProject.style.display="block";
    moreProject1.style.display="block";
}
moreBtn.addEventListener('click',extraProject)


// responsive nav bar
var sidemenu=document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right="0";
}
function closemenu(){
    sidemenu.style.right="-200px";
}




