let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const dltBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")
const ulEl = document.getElementById("ul-el")
// const tabs = [
//     {url: "https://www.linkedin.com/in/per-harald-borgen/"}
// ]
// how to get this url? ----------------- tabs[0].url


// to make data we entered stay past refresh ------- we use LocalStorage
// localStorage.setItem("value-name", "value")
// localStorage.setItem("myLeads", "hello");
// localStorage.getItem("myLeads")
// localStorage.clear();
// we caan get the value from localStorage using value name -------
// limitation of localStorage --- // PS: both key and value need to be strings
// so we cant push arrays directly to localStorage, it needs to be strings
// JSON.stringify and JSON.parse helps
// JSON.stringify ------ to turn the object or item into a string
// JSON.parse ---------- to turn from string back to array or object

// let myLeads = `["hello"]` ------------myLeads is a string now
// myLeads = JSON.parse(myLeads) ------- conveting it to array
// myLeads.push("www.h.com")   ----------- pushing element to array
// myLeads = JSON.stringify(myLeads) ------- conveting to string
// console.log(typeof myLeads) ----- will return string

const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )
if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads);
}
console.log(leadsFromLocalStorage)

// parameter of the function, we can call it anything
// just make sure, within the function, we refer it by the same name as in the  parameter
function render(urmom) {
    let listItems = ""
    for (let v = 0; v < urmom.length; v++) {
        // this just simply renders it out
        // ulEl.textContent += myLeads[v] + " ";
        // using innerHTML actually reads the strings
    //  listItems += "<li><a href='" +  myLeads[v]  + "' target = '_blank'>" +  myLeads[v]  + "</a></li>";
        
    // going to use TEMPLATE STRINGS instead

        // another ay instead of inner html
        // const li = document.createElement("li")  // create element
        // li.textContent = myLeads[i]     // set text content
        // ulEl.append(li)     // append to ul

    // template string:
    listItems  += 
    `<li>
        <a target = '_blank' href=' ${urmom[v]} '>  ${urmom[v]}  </a>
    </li>`


    }
    ulEl.innerHTML = listItems
}
inputBtn.addEventListener("click", function(){
    // console.log("Button clicked from addEventListener")
    myLeads.push(inputEl.value)
    console.log(myLeads)
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads);
    inputEl.value = "";
   
})
dltBtn.addEventListener("dblclick", function(){
    localStorage.clear();
    myLeads = [];
    render(myLeads);
    console.log(myLeads);
})
tabBtn.addEventListener("click", function(){
    // myLeads.push(document.URL);

    // looking for active tab, active window
    // when function finds a tab it iwll trigger this variable
    // for this to work we need to GIVE IT PERMISSION IN JSON FILE
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url) //this is also exactly how to get the current tab
        localStorage.setItem("myLeads", JSON.stringify(myLeads));
        render(myLeads);
        
    })
   
})

// const c = "hello"
// let hi = `${c},
// hope you are doing well`
// console.log(hi)