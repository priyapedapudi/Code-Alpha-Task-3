//Adding work experience textarea when add button is clicked
function addNewWrkExpField(){
    let textareaEl = document.createElement("textarea");
    textareaEl.classList.add("form-control");
    textareaEl.classList.add("workExpField");
    textareaEl.classList.add("mt-2")
    textareaEl.setAttribute("rows", 3);
    textareaEl.setAttribute("placeholder", "Enter Here")


    let wrkExpContEl = document.getElementById("wrkExpContEl");
    let workExpBtnEl = document.getElementById("workExpAddBtnEl");

    wrkExpContEl.insertBefore(textareaEl, workExpBtnEl);
}

//Adding Academic experience textarea when add button is clicked
function addNewAcdmcQfField(){
    let textareaEl = document.createElement("textarea");
    textareaEl.classList.add("form-control");
    textareaEl.classList.add("acdmQfField");
    textareaEl.classList.add("mt-2")
    textareaEl.setAttribute("rows", 3);
    textareaEl.setAttribute("placeholder", "Enter Here")


    let acdmcQfContEl = document.getElementById("acdmcQfContEl");
    let acdmcQfBtnEl = document.getElementById("acdmcQfAddBtnEl");

    acdmcQfContEl.insertBefore(textareaEl, acdmcQfBtnEl);
}


//Adding Skills textarea when add button is clicked
function addNewSkillField(){
    let textareaEl = document.createElement("textarea");
    textareaEl.classList.add("form-control");
    textareaEl.classList.add("skillsField");
    textareaEl.classList.add("mt-2")
    textareaEl.setAttribute("rows", 3);
    textareaEl.setAttribute("placeholder", "Enter Here")


    let skillsContEl = document.getElementById("skillsContEl");
    let skillAddBtnEl = document.getElementById("skillAddBtnEl");

    skillsContEl.insertBefore(textareaEl, skillAddBtnEl);
}


//generating CV
function generateCV(){
    //console.log("generating cv")
    let nameField = document.getElementById("firstName").value;

    let nameT1 = document.getElementById("nameT1");

    nameT1.innerHTML = nameField;

    //direct

    document.getElementById("nameT2").innerHTML = nameField;

    //contact
    document.getElementById("contactT").innerHTML=document.getElementById("contactNumber").value;

    //address
    document.getElementById("addressT").innerHTML=document.getElementById("address").value;

    document.getElementById("addressT").innerHTML=document.getElementById("address").value;
    document.getElementById("mailT").innerHTML=document.getElementById("emailId").value;
    

    document.getElementById("fbT").innerHTML=document.getElementById("fbId").value;
    document.getElementById("instaT").innerHTML=document.getElementById("instaId").value;
    document.getElementById("linkedT").innerHTML=document.getElementById("linkedinId").value;

    //objective

    document.getElementById("objectiveT").innerHTML=document.getElementById("objectiveField").value;

    //work experience
    let wes=document.getElementsByClassName("workExpField");

    let str="";

    for(let e of wes){
        str=str+`<li> ${e.value}</li>`;
    }

    document.getElementById("weT").innerHTML = str;

    //Academic qualification

    let aqs=document.getElementsByClassName("acdmQfField")

    let str1="";

    for(let e of aqs){
        str1 +=`<li> ${e.value}</li>`;
    }

    document.getElementById("aqT").innerHTML = str1;


    //Skills

    let skls=document.getElementsByClassName("skillsField")

    let str3="";

    for(let e of skls){
        str3 +=`<li> ${e.value}</li>`;
    }

    document.getElementById("skillsT").innerHTML = str3;

    
    //code for setting image
    let file=document.getElementById("imgField").files[0];

    console.log(file);

    let reader=new FileReader();

    reader.readAsDataURL(file);
    console.log(reader.result);

    //set the image to template 
    reader.onloadend=function (){
        document.getElementById("imgTemplate").src= reader.result;
    };
    


    document.getElementById("cv-form").style.display="none";
    document.getElementById("cv-template").style.display="block";

    
    
    
    
    
    

}

//print cv

function printCV(){
    window.print();
}