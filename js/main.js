const accordionItemsHeaders = document.querySelectorAll('.accordion-item-header');
const btn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('menu');

// Function For Mobile-Nav
function navToggle() {
    btn.classList.toggle('open')
    mobileMenu.classList.toggle('hidden')
    document.body.classList.toggle('no-scroll')
    mobileMenu.preventDefault;
    
}

// Click Event For Mobile Nav
btn.addEventListener('click', navToggle);

//Function For Mobile Footer Accordion
accordionItemsHeaders.forEach((accordionItemsHeader) => {
    accordionItemsHeader.addEventListener('click', (e) => {

        accordionItemsHeader.classList.toggle('active')
        const accordionItemBody = accordionItemsHeader.nextElementSibling;

        if(accordionItemsHeader.classList.contains('active')) {
            accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + 'px'
        }
        else {
            accordionItemBody.style.maxHeight = 0
        }
    })
})