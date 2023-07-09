window.addEventListener('scroll', function() {
    const hero = document.querySelector('.hero');
    const scrollPosition = window.scrollY;
  
    hero.style.opacity = 1 - scrollPosition / window.innerHeight;

    const heroTitle = document.querySelector('.hero h1');
    heroTitle.style.transform = `translateX(-${scrollPosition}px)`;

    const heroDescription = document.querySelector('.hero p');
    heroDescription.style.transform = `translateX(${scrollPosition}px)`;
  });

const candidates = [
  {name: 'John', location: 'New York', jobRole: 'Software Developer' },
  {name: 'Jane', location: 'San Francisco', jobRole: 'Data Analyst' },
  {name: 'David', location: 'London', jobRole: 'Project Manager' },
];

function searchCandidates(event) {
  event.preventDefault();

  const locationInput = document.getElementById('location-input').value.toLowerCase();
  const jobRoleInput = document.getElementById('job-role-input').value.toLowerCase();
  const candidatesList = document.getElementById('candidates-list');

  candidatesList.innerHTML = '';

  candidates.forEach(candidate => {
    const { image, name, location, jobRole } = candidate;

    if (location.toLowerCase().includes(locationInput) && jobRole.toLowerCase().includes(jobRoleInput)) {
      const candidateElement = document.createElement('div');
      candidateElement.classList.add('candidate');
      candidateElement.innerHTML = `
        <img src="../assets/client-1-thumbnail.png"/>
        <h3>${name}</h3>
        <p class="location">${location}</p>
        <p class="job-role">${jobRole}</p>
      `;
      candidatesList.appendChild(candidateElement);
    }
  });
}

const searchForm = document.getElementById('search-form');
searchForm.addEventListener('submit', searchCandidates);

  