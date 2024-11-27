var input = document.getElementById("input");
var ulContainer = document.getElementById("ul-container");

function add(){
    if(input.value === ""){
        alert("PLEASE ADD SOMETHING!")
    }else{
        var li = document.createElement("li");
        li.innerHTML = input.value;
        ulContainer.appendChild(li);
        var span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    input.value = "";
}
ulContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
}, false);
