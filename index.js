let myLeads=[];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl=document.getElementById("ul-el");


inputBtn.addEventListener("click",function(){
    myLeads.push(inputEl.value);
    renderLeads();
    
    
    inputEl.value=""; 
});
function renderLeads(){
    let listItems="";
  
    for(let R=0;R<myLeads.length;R++){
        // listItems+="<li> <a target='_blank' href='"+myLeads[R]+"'>"+myLeads[R]+"</a> </li> "; 
        //instead of this we can use this method
        listItems+=`
        <li>
         <a target='_blank' href='${myLeads[R]}'>${myLeads[R]}</a> 
        </li>
         `; 
    ulEl.innerHTML=listItems;
}   
}
//creat element
        //set text content
     //append to ul
       // const li=document.createElement("li");
       // li.innerHTML=myLeads[R];
       // ulEl.append(li); 
        