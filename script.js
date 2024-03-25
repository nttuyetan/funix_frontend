"use strict";

/* ABOUT: Require an email address */
let hiddenPersonalInfo = hideElement("personal-info");

document
  .getElementById("email-request")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const emailData = "sinhvien@funix.edu.vn";
    let inputtedEmail = document.getElementById("inputEmail").value;

    if (isEmail(inputtedEmail) && checkEmailData(inputtedEmail, emailData)) {
      document.getElementById("personal-info").style.display = "block";
      hideElement("data-request");
    }
  });

function isEmail(inputtedEmail) {
  const emailPattern =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (inputtedEmail.trim() === "") {
    alert("This field is required.");
    return false;
  }

  if (!inputtedEmail.match(emailPattern)) {
    alert("It is not an email address.");
    return false;
  }

  return true;
}

function checkEmailData(inputtedEmail, emailData) {
  if (inputtedEmail === emailData) {
    return true;
  } else {
    alert("Not found!");
    return false;
  }
}

/* JOB INFO: View more - View less */
let hiddenExperience = hideElement("experience");
let hiddentEducation = hideElement("education");
let hiddenActivities = hideElement("activities");
let hiddenHobbies = hideElement("hobbies");
let hiddenLanguages = hideElement("languages");
let hiddenSkills = hideElement("skills");

function toggleElements(elementId) {
  let element = document.getElementById(elementId);
  let viewLink = document.getElementById(elementId + "-view");

  if (element.style.display === "none") {
    if (elementId === "hobbies") {
      element.style.display = "grid";
    } else {
      element.style.display = "block";
    }

    viewLink.innerText = "View less";
  } else {
    element.style.display = "none";
    viewLink.innerText = "View more";
  }
}

/* Other functions */
function hideElement(elementId) {
  let hiddenElement = document.getElementById(elementId);

  hiddenElement.style.display = "none";
}
