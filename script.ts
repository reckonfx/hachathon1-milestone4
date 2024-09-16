
const form = document.getElementById("resumeForm") as HTMLFormElement;
const resumeDisplay = document.getElementById("resumeDisplay") as HTMLDivElement;

// handling Form Submission
form.addEventListener("click", (event:Event)=>{
 event.preventDefault(); // restricting the page reload

//  collectiong information
const name = (document.getElementById("name") as HTMLInputElement).value;
const email = (document.getElementById("email") as HTMLInputElement).value;
const phone = (document.getElementById("phone") as HTMLInputElement).value;
const education = (document.getElementById("education") as HTMLInputElement).value;
const experience = (document.getElementById("experience") as HTMLInputElement).value;
const skills = (document.getElementById("skills") as HTMLInputElement).value;


// Generating Resume content dynamically

const resumeHtml = `
<h1><b> Editable Resume </b></h1>
<h2> Personal Information </h2>
<br>
<p><span contentEditable = "true"><b>Name :</b> ${name}</p></span><br>
<p><span contentEditable = "true"><b>Email :</b> ${email}</p></span><br>
<p><span contentEditable = "true"><b>Phone:</b> ${phone}</span></p></span><br>

<h3><b>Education:</b></h3> <p><span contentEditable = "true">${education}</span></p><br>


<h3><b>Experience :</b></h3> 
<p><span contentEditable = "true">${experience}</span></p><br>

<h3>Skills:</h3>
 <p><span contentEditable = "true">${skills}</span></p>
`;

//  Displaying Resume Information

if(resumeDisplay){
    resumeDisplay.innerHTML = resumeHtml;
}else{
    console.error("All Fields are Required to Display")
}

})