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
const messageForm = document.querySelector("form[name=leave_messages]");
messageForm.addEventListener("submit", (event) => {
  const userName = event.target.userName.value;
  const userEmail = event.target.userEmail.value;
  const userMessage = event.target.userMessage.value;

  event.preventDefault();
  console.log("Name: ", userName);
  console.log("Email: ", userEmail);
  console.log("Message: ", userMessage);
});
const messageSection = document.getElementById("messages");
const messageList = messageSection.querySelector("ul");
const newMessage = document.createElement("li");
newMessage.innerHTML = `<a href="mailto:< ${userEmail} >">${userName}</a> <span> wrote: ${userMessage} </span>`;

const removeButton = document.createElement("button");
removeButton.innerText = "remove";
removeButton.className = "remove-btn";
removeButton.type = "button";
removeButton.addEventListener("click", (event) => {
  const entry = removeButton.parentNode;
  entry.remove();
});
removeButton.appendChild(document.createTextNode("newMessage"));
newMessage.appendChild(messageList);
messageForm.reset();
