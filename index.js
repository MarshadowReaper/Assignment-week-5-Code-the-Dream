const body = document.body;

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
const skillsSection = document.getElementById("Skills");
skills.forEach((skill) => {
  const skillList = document.createElement("li");
  skillList.textContent = `${skill}`;
  skillsSection.appendChild(skillList);
});

const messageForm = document.querySelector("form[name=leave_message]");
messageForm.addEventListener("submit", (event) => {
  const userName = event.target.userName.value;
  const userEmail = event.target.userEmail.value;
  const userMessage = event.target.userMessage.value;

  event.preventDefault();
  console.log("Name: ", userName);
  console.log("Email: ", userEmail);
  console.log("Message: ", userMessage);
});

function toggleMessagesSection() {
  const messageSection = document.getElementById("messages");
  const messageList = messageSection.querySelector("ul");
  if (messageList.children.length === 0) {
    messageSection.style.display = "none";
  } else {
    messageSection.style.display = "block";
  }
}

const newMessage = document.createElement("li");
newMessage.innerHTML = `<a href="mailto: ${userEmail}"></a>${userName}<a> <span> wrote: ${userMessage} </span></a>`;

const removeButton = document.createElement("button");
removeButton.innerText = "remove";
removeButton.className = "remove-btn";
removeButton.type = "button";
removeButton.addEventListener("click", function () {
  const entry = removeButton.parentNode;
  entry.remove();
  toggleMessagesSection();
});
newMessage.appendChild(removeButton);
messageList.appendChild(newMessage);
toggleMessagesSection();
messageForm.reset();

fetch("https://api.github.com/users/MarshadowReaper/repos")
  .then((response) => {
    if (response.ok) {
      throw new Error("Failed to fetch repositories");
    }
    return response.json();
  })

  .then((repositories) => {
    console.log("Repositories: ", repositories);
  })
  .catch((error) => {
    console.error("Error: ", error);
  });
const projectSection = document.getElementById("projects");
const projectList = projectSection.querySelector("ul");
for (let i = 0; i < repositories.length; i++) {
  const project = document.createElement("li");
  project.innerHTML = `<a href="${repositories[i].html_url}" target="_blank">${repositories[i].name}</a>`;
  projectList.appendChild(project);
}
