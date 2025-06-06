// For the Footer
const today = new Date();
const thisYear = today.getFullYear();

const footer = document.createElement("footer");
document.body.appendChild(footer);

const copyright = document.createElement("p");
copyright.innerHTML = `&copy; Carolina Gutierrez ${thisYear}`;
footer.appendChild(copyright);

// For the Skills Section
const skills = ["JavaScript", "HTML", "CSS", "Python", "GitHub", "Data Analysis", "Biodiversity Research", "Problem Solving", "Science Communication"];
const skillsSection = document.getElementById("skills");
const skillsList = skillsSection.querySelector("ul");

for (let i = 0; i < skills.length; i++) {
  const skill = document.createElement("li");
  skill.innerText = skills[i];
  skillsList.appendChild(skill);
}

//Week 12 message form:

// My try for stretch GOAL: Initially hide the messages section
document.getElementById("messages").style.display = "none";

//Week 12 message form regular:
const messageForm = document.forms["leave_message"];

messageForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form from refreshing the page

  const usersName = event.target.usersName.value;
  const usersEmail = event.target.usersEmail.value;
  const usersMessage = event.target.usersMessage.value;

  console.log(usersName, usersEmail, usersMessage); // Just to verify values

  // Select the message section and list
  const messageSection = document.getElementById("messages");
  const messageList = messageSection.querySelector("ul");
  // My try at STRETCH GOAL: Show messages section when a new message is added
  messageSection.style.display = "block";


  // Create a new message <li> element
  const newMessage = document.createElement("li");

  newMessage.innerHTML = `
    <a href="mailto:${usersEmail}">${usersName}</a>
    <span>: ${usersMessage}</span>
  `;

  // Create and configure the remove button
  const removeButton = document.createElement("button");
  // My try at STRETCH GOAL: Edit button
const editButton = document.createElement("button");
editButton.innerText = "edit";
editButton.type = "button";

// My try at STRETCH GOAL: Add event listener to handle editing the message
editButton.addEventListener("click", function () {
  const newMessageText = prompt("Edit your message:", usersMessage);
  if (newMessageText !== null) {
    newMessage.querySelector("span").innerText = `: ${newMessageText}`;
  }
});
//Regular part of the assignment:
  removeButton.innerText = "remove";
  removeButton.type = "button";

  removeButton.addEventListener("click", function () {
    const entry = removeButton.parentNode;
    entry.remove();
    // My try at STRETCH GOAL: Hide the messages section if there are no messages left
if (messageList.children.length === 0) {
  messageSection.style.display = "none";
}
  });

  // Append the remove button and new message to the list
  newMessage.appendChild(removeButton);
  // My try at STRETCH GOAL: Add edit button to the message
newMessage.appendChild(editButton);
  //Regular part of the lesson:
  messageList.appendChild(newMessage);

  // Clear the form
  messageForm.reset();
});

// Week 13 GitHub Repositories Section
const GITHUB_USERNAME = "carolinagutierrez2024";

fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos`)
  .then(response => response.json())
  .then(repositories => {
    console.log(repositories); // Log repos to verify

    const projectSection = document.getElementById("Projects");
    const projectList = projectSection.querySelector("ul");

    //Just trying to see if I can make them link-able or clickable:
    for (let i = 0; i < repositories.length; i++) {
      const project = document.createElement("li");

      const link = document.createElement("a");
      link.href = repositories[i].html_url;
      link.innerText = repositories[i].name;
      link.target = "_blank"; // Open in a new tab
      link.rel = "noopener noreferrer"; // Security best practice

      project.appendChild(link);
      projectList.appendChild(project);
    }
  })
  .catch(error => {
    console.error("Error fetching GitHub repositories:", error);

    const projectSection = document.getElementById("Projects");
    const errorMessage = document.createElement("p");
    errorMessage.innerText = "Unable to load GitHub repositories at this time.";
    projectSection.appendChild(errorMessage);
  });

  //To display the repos
  function displayRepositories(repositories) {
  const projectSection = document.getElementById('Projects');
  const projectList = projectSection.querySelector('ul'); // assumes <ul> is inside #projects

  for (let i = 0; i < repositories.length; i++) {
    const project = document.createElement('li');
    project.innerText = repositories[i].name;
    projectList.appendChild(project);
  }
}

// Dark Mode Toggle
const darkModeSwitch = document.getElementById("darkModeSwitch");

darkModeSwitch.addEventListener("change", function () {
  document.body.classList.toggle("dark-mode");
});


// Hamburger Menu Toggle
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});
