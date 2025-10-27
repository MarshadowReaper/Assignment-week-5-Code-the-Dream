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
const skillsSection = document.getElementById("skills");
skills.forEach((skill) => {
  const skillList = document.createElement("li");
  skillList.textContent = `${skill}`;
  skillsSection.appendChild(skillList);
});

const messageForm = document.querySelector("form[name=leave_message]");
const messageSection = document.getElementById("messages");
const messageList = messageSection.querySelector("ul");

function toggleMessagesSection() {
  if (messageList.children.length === 0) {
    messageSection.style.display = "none";
  } else {
    messageSection.style.display = "block";
  }
}

messageForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const userName = event.target.userName.value;
  const userEmail = event.target.userEmail.value;
  const userMessage = event.target.userMessage.value;

  const newMessage = document.createElement("li");
  newMessage.innerHTML = `<a href="mailto:${userEmail}">${userName}</a>: <span>${userMessage}</span>`;

  // Create remove button
  const removeButton = document.createElement("button");
  removeButton.type = "button";
  removeButton.innerText = "remove";
  removeButton.addEventListener("click", () => {
    newMessage.remove();
    toggleMessagesSection();
  });

  newMessage.appendChild(removeButton);
  messageList.appendChild(newMessage);

  toggleMessagesSection();
  messageForm.reset();
});

toggleMessagesSection();
const projectList = document.querySelector("#repositories ul");

fetch("https://api.github.com/users/MarshadowReaper/repos")
  .then((response) => {
    if (!response.ok) throw new Error("Failed to fetch repositories");
    return response.json();
  })
  .then((repositories) => {
    repositories.forEach((repo) => {
      const li = document.createElement("li");
      li.innerHTML = `<a href="${repo.html_url}" target="_blank">${repo.name}</a>`;
      projectList.appendChild(li);
    });
  })
  .catch((error) => console.error("Error fetching repositories:", error));
