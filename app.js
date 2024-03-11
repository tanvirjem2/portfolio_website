const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controlls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');


function pageTransitions() {
    // Button click active class
    for (let i = 0; i < sectBtn.length; i++) {
        sectBtn[i].addEventListener('click', function () {
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].classList.remove('active-btn'); // Remove the active class from the current button
            this.classList.add('active-btn'); // Add the active class to the clicked button
        });
    }

    // Section Active class
    allSections.addEventListener('click', (e) => {
        // Log the value of the data-id attribute for debugging
        console.log(e.target.dataset.id);

        // Get the data-id attribute value
        const id = e.target.dataset.id;

        // Check if the clicked element has a data-id attribute
        if (id) {
            // Remove 'active' class from all buttons
            sectBtns.forEach((btn) => {
                btn.classList.remove('active');
            });

            // Add 'active' class to the clicked button
            e.target.classList.add('active');

            // Remove 'active' class from all sections
            sections.forEach((section) => {
                section.classList.remove('active');
            });

            // Add 'active' class to the section with the corresponding id
            const element = document.getElementById(id);
            if (element) {
                element.classList.add('active');
            } else {
                console.error(`Element with id ${id} not found.`);
            }
        }
    });

    // Toggle theme
    const themeBtn = document.querySelector('.theme-btn')

    themeBtn.addEventListener('click', () => {
        let element = document.body;
        element.classList.toggle('light-mode')
    })

}

pageTransitions();
