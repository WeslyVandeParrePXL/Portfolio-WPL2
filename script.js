function showProject() {
    const projectSections = document.querySelectorAll('.projectSection');
    projectSections.forEach(section => {
        section.style.display = 'none';
    });

    const selectedProjectId = document.getElementById('projectDropdown').value;
    const selectedProject = document.getElementById(selectedProjectId);
    if (selectedProject) {
        selectedProject.style.display = 'block';
    }

}

showProject();


// Voor deze code heb ik wat hulp gekregen via Stack overflow en van junior collega's.