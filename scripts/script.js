document.addEventListener("DOMContentLoaded", function() {
    const projects = document.querySelectorAll('.project');

    function revealProjects() {
        const triggerBottom = window.innerHeight / 5 * 4;
        projects.forEach(project => {
            const boxTop = project.getBoundingClientRect().top;
            if (boxTop < triggerBottom) {
                project.classList.add('animate_animated', 'animate_fadeInUp');
                project.style.opacity = '1';
            } else {
                project.classList.remove('animate_animated', 'animate_fadeInUp');
                project.style.opacity = '0';
            }
        });
    }

    window.addEventListener('scroll', revealProjects);
    revealProjects();
});
