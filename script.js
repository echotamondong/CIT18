document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const navbarLinks = document.querySelectorAll(".navbar a");

    function setActiveSection() {
        let currentScroll = window.scrollY;

        sections.forEach((section, index) => {
            const offsetTop = section.offsetTop - 150; 
            const offsetBottom = offsetTop + section.offsetHeight;

            if (currentScroll >= offsetTop && currentScroll < offsetBottom) {
                navbarLinks.forEach((link) => link.classList.remove("active"));
                navbarLinks[index].classList.add("active");
            }
        });
    }

    window.addEventListener("scroll", setActiveSection);
    
    setActiveSection();
});
