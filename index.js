let myLeads=[];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl=document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn")
const tabBtn=document.getElementById("tab-btn");
let leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") );

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}
function render(data){
    let listItems="";
   for(let R=0;R<data.length;R++){
        // listItems+="<li> <a target='_blank' href='"+myLeads[R]+"'>"+myLeads[R]+"</a> </li> "; 
        //instead of this we can use this method
        listItems+=`
        <li>
         <a target='_blank' href='${data[R]}'>
         ${data[R]}
         </a> 
        </li>
         `; 
    
    // localStorage.setItem("mezgeb",myLeads[R]);
    // localStorage.clear(); 
    //   console.log(localStorage.getItem("mezgeb"));
} 
ulEl.innerHTML=listItems;  
}


deleteBtn.addEventListener("click", function() {
    localStorage.clear();
    myLeads=[];
    render(myLeads);
})


tabBtn.addEventListener("click", function(){
    chrome.tabs.query({active:true,currentWindow:true},function(tabs){
        myLeads.push(tabs[0].url);
        localStorage.setItem("myLeads",JSON.stringify(myLeads));
        render(myLeads);
    })
})

inputBtn.addEventListener("click",function(){
    myLeads.push(inputEl.value);
    inputEl.value=""; 
   localStorage.setItem("myLeads", JSON.stringify(myLeads) )
   render(myLeads);
//    console.log(localStorage.getItem("myLeads"));
});

//creat element
        //set text content
     //append to ul
       // const li=document.createElement("li");
       // li.innerHTML=myLeads[R];
       // ulEl.append(li); 
      