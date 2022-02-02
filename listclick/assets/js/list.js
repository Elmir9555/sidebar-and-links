let inpt=document.getElementById("inpt")
let ul=document.getElementById("ul")

inpt.addEventListener("keyup",function(e){
    if(e.keyCode==13){
        ul.innerHTML=""
       for (let i = 1; i <= this.value; i++) {
        let li=document.createElement("li")
        li.className="list-group-item"
        li.innerHTML=i
        ul.append(li)
        let icon=document.createElement("i")
        icon.className="fas fa-times"
        ul.children[i-1].append(icon)
        li.style.position="relative"
        icon.style.position="absolute"
        icon.style.right="20px"
        

        icon.onclick=function(){
            li.remove()
            
        }
        
       }
       inpt.value=""
       
       
       
    }
})

