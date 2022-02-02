let openBtn=document.getElementById("btn-open")
let exitBtn=document.getElementById("exit-btn")

let sideBar=document.querySelector(".sidebar")


exitBtn.onclick=function(){
    sideBar.classList.add("list")
}

openBtn.onclick=function(){
 sideBar.classList.remove("list")
}

