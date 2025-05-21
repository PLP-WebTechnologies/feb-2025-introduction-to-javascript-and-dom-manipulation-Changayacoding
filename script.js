// Change text content dynamically
document.getElementById('changeNameBtn').addEventListener('click', () => {
  const nameEl = document.getElementById('profile-name');
  if (nameEl.textContent === 'Jane Doe') {
    nameEl.textContent = 'John Smith';
  } else {
    nameEl.textContent = 'Jane Doe';
  }
});

// Modify CSS styles via JS (toggle dark mode)
document.getElementById('toggleThemeBtn').addEventListener('click', () => {
  const card = document.getElementById('profile-card');
  card.classList.toggle('dark');
});

// Add or remove an element when button clicked (skill)
let skillAdded = false;
document.getElementById('addRemoveSkillBtn').addEventListener('click', () => {
  const skillsList = document.getElementById('skills-list');
  if (!skillAdded) {
    const newSkill = document.createElement('li');
    newSkill.id = 'newSkill';
    newSkill.textContent = 'ReactJS';
    skillsList.appendChild(newSkill);
    skillAdded = true;
  } else {
    const skill = document.getElementById('newSkill');
    if (skill) {
      skillsList.removeChild(skill);
    }
    skillAdded = false;
  }
});
