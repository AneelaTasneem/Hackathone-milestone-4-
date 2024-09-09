var _a;
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    var _a;
    event.preventDefault();
    // Type assertions
    var profilepictureInput = document.getElementById("profilepicture");
    var nameElement = document.getElementById("name");
    var surnameElement = document.getElementById("surname");
    var emailElement = document.getElementById("email");
    var phoneElement = document.getElementById("phone");
    var addressElement = document.getElementById("address");
    var educationElement = document.getElementById("education");
    var experienceElement = document.getElementById("experience");
    var skillsElement = document.getElementById("skills");
    if (profilepictureInput && nameElement && surnameElement && emailElement && phoneElement && addressElement && educationElement && experienceElement && skillsElement) {
        var name_1 = nameElement.value;
        var surname = surnameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var address = addressElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        // Profile picture handling
        var profilepicturefile = (_a = profilepictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilepictureURL = profilepicturefile ? URL.createObjectURL(profilepicturefile) : "";
        // Resume output
        var resumeOutput = "\n            <h2>Resume</h2>\n            ".concat(profilepictureURL ? "<img src=\"".concat(profilepictureURL, "\" alt=\"profile picture\" class=\"profilepicture\">") : '', "\n            <p><strong>Name:</strong><span id=\"edit-name\" class=\"editable\"> ").concat(name_1, "</span> </p>\n            <p><strong>Surname:</strong> <span id=\"edit-surname\" class=\"editable\"> ").concat(surname, "</span> </p>\n            <p><strong>Email:</strong><span id=\"edit-email\" class=\"editable\"> ").concat(email, "</span> </p>\n            <p><strong>Phone Number:</strong><span id=\"edit-phone\" class=\"editable\"> ").concat(phone, "</span> </p>\n            <p><strong>Address:</strong><span id=\"edit-address\" class=\"editable\"> ").concat(address, "</span> </p>\n\n            <h3>Education</h3>\n            <pid=\"edit-education\" class=\"editable\">").concat(education, "</p>\n\n            <h3>Experience</h3>\n            <pid=\"edit-experience\" class=\"editable\">").concat(experience, "</p>\n\n            <h3>Skills</h3>\n            <pid=\"edit-skill\" class=\"editable\">").concat(skills, "</p>\n        ");
        var resumeOutputElement = document.getElementById("resumeoutput");
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            makeEditable();
        }
        else {
            console.error("Resume output element is missing");
        }
    }
    else {
        console.error("One or more input elements are missing");
    }
});
function makeEditable() {
    var editableElements = document.querySelectorAll(' .editable');
    editableElements.forEach(function (Element) {
        Element.addEventListener(' click', function () {
            var _a;
            var currentElement = Element;
            var currentvalue = currentElement.textContent || "";
            // replace content:
            if (currentElement.tagName === "p" || currentElement.tagName === 'SPAN') {
                var input_1 = document.createElement('input');
                input_1.type = 'text';
                input_1.value = currentvalue;
                input_1.classList.add('editing-input');
                input_1.addEventListener('blur', function () {
                    currentElement.textContent = input_1.value;
                    currentElement.style.display = 'inline';
                    input_1.remove();
                });
                currentElement.style.display = 'name';
                (_a = currentElement.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(input_1, currentElement);
                input_1.focus();
            }
        });
    });
}
