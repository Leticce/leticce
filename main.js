/* 
    MAIN.JS
    Handles specific interactions like Back to Top.
    Data loading for Projects is handled in individual file scripts or here if centralized.
*/

document.addEventListener('DOMContentLoaded', () => {

    /* --- BACK TO TOP LOGIC --- */
    const backBtn = document.getElementById('backToTop');

    if (backBtn) {
        window.addEventListener('scroll', () => {
            // Show button after 200px scroll
            if (window.scrollY > 200) {
                backBtn.classList.add('visible');
            } else {
                backBtn.classList.remove('visible');
            }
        });

        backBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

});
