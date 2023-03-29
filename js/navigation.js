function navigateTo(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach((page) => {
        if (page.id === pageId) {
            page.classList.add('active');
        } else {
            page.classList.remove('active');
        }
    });
}
function scrollToNextPage() {
    const activePage = document.querySelector('.page.active');
    const nextPage = activePage.nextElementSibling;

    if (nextPage && nextPage.classList.contains('page')) {
        navigateTo(nextPage.id);
    } else {
        navigateTo('main');
    }
}
// Set the default active page

navigateTo('main');