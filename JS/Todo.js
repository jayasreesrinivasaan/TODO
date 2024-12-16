let infield = document.getElementById("infield");
let con = document.getElementById("con")

infield.addEventListener("keypress",(event)=>{
    if(event.key === "Enter" && infield.value.trim() !== "")
    {
        addTask(infield.value.trim());
        infield.value = "";
    }
});

function addTask(ttext)
{

    let tdiv = document.createElement("div")
    tdiv.className = 'task';

    let checkbox = document.createElement("input")
    checkbox.type="checkbox"
    tdiv.appendChild(checkbox)
    checkbox.addEventListener("change",()=>{
        tdiv.classList.toggle("strikethrough");
    });

    let tspan = document.createElement("span");
    tspan.textContent = ttext;
    tdiv.appendChild(tspan)

    let del = document.createElement("button")
    del.textContent = "Delete"
    tdiv.appendChild(del)
    del.addEventListener("click",()=>{
        con.removeChild(tdiv)
    });
        
    con.appendChild(tdiv);
}