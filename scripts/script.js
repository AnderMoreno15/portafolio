document.addEventListener("DOMContentLoaded", function() {
    const projects = document.querySelectorAll('.project');

    function revealProjects() {
        const triggerBottom = window.innerHeight / 5 * 4;
        projects.forEach(project => {
            const boxTop = project.getBoundingClientRect().top;
            if (boxTop < triggerBottom) {
                project.classList.add('animate_animated'); // Activar animación al entrar
            }
        });
    }

    window.addEventListener('scroll', revealProjects);
    revealProjects();
});
