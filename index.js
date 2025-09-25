const boby = document.body;

let footer = document.createElement("footer");
body.appendChild(footer);

const today = new Date();
const thisYear = today.getFullYear();

const copyright = document.createElement("p");

footer = document.querySelector("footer");

copyright.innerHTML = `\u00A9 Tajee Goode${thisYear} `;
footer.appendChild(copyright);

footer.style.textAlign = "center";

const skills = ["JavaScript", "HTML", "CSS", "Java"];
const skillsSection = document.getElementById("skills");
const skillsList = skillsSection.querySelector("ul");

for (let i = 0; i < skills.length; i++) {
  const skill = document.createElement("li");
  skill.innerText = skills[i];
  skillsList.appendChild(skill);
}
