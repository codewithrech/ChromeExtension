let myLeads=["apple","banana","avocado"];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl=document.getElementById("ul-el");



inputBtn.addEventListener("click",function(){
    myLeads.push(inputEl.value);
    for(let R=0;R<myLeads.length;R++){
        console.log(myLeads[R]);
        ulEl.innerHTML+="<li>" + myLeads[R]+" </li> ";
     

}
inputEl.value=""; 
});
