document.getElementById('resumeForm')?.addEventListener("submit", function(event) {
    event.preventDefault();

    // Type assertions
    const profilepictureInput = document.getElementById("profilepicture") as HTMLInputElement;
    const nameElement = document.getElementById("name") as HTMLInputElement;
    const surnameElement = document.getElementById("surname") as HTMLInputElement; 
    const emailElement = document.getElementById("email") as HTMLInputElement;
    const phoneElement = document.getElementById("phone") as HTMLInputElement;
    const addressElement = document.getElementById("address") as HTMLInputElement;
    const educationElement = document.getElementById("education") as HTMLInputElement;
    const experienceElement = document.getElementById("experience") as HTMLInputElement;
    const skillsElement = document.getElementById("skills") as HTMLInputElement;

    if (profilepictureInput && nameElement && surnameElement && emailElement && phoneElement && addressElement && educationElement && experienceElement && skillsElement) {
        const name = nameElement.value;
        const surname = surnameElement.value;
        const email = emailElement.value;
        const phone = phoneElement.value;
        const address = addressElement.value;
        const education = educationElement.value;
        const experience = experienceElement.value;
        const skills = skillsElement.value;

        // Profile picture handling
        const profilepicturefile = profilepictureInput.files?.[0];
        const profilepictureURL = profilepicturefile ? URL.createObjectURL(profilepicturefile) : "";

        // Resume output
        const resumeOutput = `
            <h2>Resume</h2>
            ${profilepictureURL ? `<img src="${profilepictureURL}" alt="profile picture" class="profilepicture">` : ''}
            <p><strong>Name:</strong><span id="edit-name" class="editable"> ${name}</span> </p>
            <p><strong>Surname:</strong> <span id="edit-surname" class="editable"> ${surname}</span> </p>
            <p><strong>Email:</strong><span id="edit-email" class="editable"> ${email}</span> </p>
            <p><strong>Phone Number:</strong><span id="edit-phone" class="editable"> ${phone}</span> </p>
            <p><strong>Address:</strong><span id="edit-address" class="editable"> ${address}</span> </p>

            <h3>Education</h3>
            <pid="edit-education" class="editable">${education}</p>

            <h3>Experience</h3>
            <pid="edit-experience" class="editable">${experience}</p>

            <h3>Skills</h3>
            <pid="edit-skill" class="editable">${skills}</p>
        `;

        const resumeOutputElement = document.getElementById("resumeoutput");
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            makeEditable();
        } else {
            console.error("Resume output element is missing");
        }
    } else {
        console.error("One or more input elements are missing");
    }
});

function makeEditable(){
    const editableElements = document.querySelectorAll(' .editable');
    editableElements.forEach(Element => {
        Element.addEventListener(' click' , function(){
            const currentElement = Element as HTMLElement;
            const currentvalue = currentElement.textContent ||"";

            // replace content:
            if (currentElement.tagName === "p" || currentElement.tagName === 'SPAN'){
                const input = document.createElement('input')
                input.type = 'text'
                input.value = currentvalue
                input.classList.add('editing-input')


                input.addEventListener('blur', function (){
                    currentElement.textContent =input.value;
                    currentElement.style.display ='inline'
                    input.remove()
                })


                currentElement.style.display='name'
                currentElement.parentNode?.insertBefore(input, currentElement)
                input.focus()
            }
        })
    })


}