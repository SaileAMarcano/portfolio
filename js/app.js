const workGrid = document.getElementById("work-grid");
const workCount = document.getElementById("work-count");

function createCard(project) {
    const tags = project.stack
        .map((tech) => `<li class="tag">${tech}</li>`)
        .join("");

    const demoLink = project.demo
        ? `<a class="card-link" href="${project.demo}" target="_blank" rel="noopener">Live demo </a>`
        : "";

    return `
        <li class="card card-${project.status}">
        <figure class="card-figure">
        <img src="${project.image}" alt="${project.alt}" width="480" height="300" loading="lazy">
        </figure>
        
        <div class="card-body">
        <div class="card-head">
        <h3 class="card-title">${project.title}</h3>
        <span class="card-status">${project.status}</span>
        </div>
        
        <p class="card-text">${project.description}</p>
        
        <ul class="card-tags">${tags}</ul>
        
        <div class="card-links">
        ${demoLink}
        <a class="card-link" href="${project.repo}" target="_blank" rel="noopener">Code</a>
        </div>
        </div>
        </li>
        `;
}

function renderProjects(list) {
    workGrid.innerHTML = list.map(createCard).join("");
    workCount.textContent = `${list.length} projects`;
}

renderProjects(projects);