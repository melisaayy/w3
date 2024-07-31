const inputBox=document.querySelector("#input-box");
const listContainer=document.querySelector("#list-container");

function addTask(){
    if(inputBox.value===''){
        alert("You must write something");
    }
    else{
        let li =document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputBox.value="";//when we entered value in textbox and click on button,then textbox will resets.
    saveData();
};

listContainer.addEventListener("click",function(e){
    if(e.target.tagName=== "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
    //the  purpose of writing this code is to prevent information from being lost when the page is refreshed or closed.

}
function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");
}
showTask();