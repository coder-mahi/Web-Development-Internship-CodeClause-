window.onload = function () {
    let nav_option=document.getElementsByClassName("nav_option")[0];
    let sidebar=document.getElementsByClassName("sidebar")[0];
    sidebar.addEventListener("click",()=>{
            console.log("clicked");
            nav_option.classList.toggle("nav_option_click");
            if(sidebar.innerHTML===`<i class="fa-solid fa-bars fa-1.3x"></i>`){
            sidebar.innerHTML=`<i class="fa-solid fa-xmark"></i>`
            }
            else{
                sidebar.innerHTML=`<i class="fa-solid fa-bars fa-1.3x"></i>`
            }
    })

let h1= document.getElementById('skill_name_span');
let name =["frontend developer","ui designer","web developer"];
let countletter=0;
let count =0;

update();
function update()
{   countletter++;
    h1.innerText =" "+name[count].slice(0,countletter);
    if(countletter===name[count].length)
    {
        count++
        countletter=0;
    }
    if (count===name.length) {
        count=0;
    }
    
    setTimeout(update,400);
 
}
}
const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        }
        else{

            entry.target.classList.remove('show')
        }
    })
})
const observerl = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('showl')
        }
        else{

            entry.target.classList.remove('showl')
        }
    })
})
const observerr = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('showr')
        }
        else{

            entry.target.classList.remove('showr')
        }
    })
})

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el)=>
    observer.observe(el));
const hiddenElements1 = document.querySelectorAll('.hiddenl');
hiddenElements1.forEach((el)=>
    observerl.observe(el));
const hiddenElementsr = document.querySelectorAll('.hiddenr');
hiddenElementsr.forEach((el)=>
    observerr.observe(el));
