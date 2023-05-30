//document.getElementById("count-el").innerText=5
// let count=0//initialization
// console.log(count)//printing and testing and debugging
/*
Initializing count to 0. 
Incrementing count when button is clicked. 
Changing count-el in HTML to reflect new count
*/
let saveEl=document.getElementById("save-el")
let countEl=document.getElementById("count-el")
let count=0
function increment(){
    //console.log("Clicked")
    count+=1
    countEl.textContent=count
    //console.log(count)
}
//creating a save() function which logs out the count when called
function save(){
    let countStr=count+" - "
    saveEl.textContent+=countStr
    countEl.textContent=0
    //console.log(count)
    count=0
}