const newsService = new NewsService();
const uiService = new NewsUI();
const uiModal = new ModalUI();

// UI Elements
const form = document.forms['newsControlForm'];
const countrySelect = form['country'];
const categorySelect = form['category'];
const searchSelect = form['search'];

/**
 * 
 * @param {Event} event 
 */
function onSelectChange(event) {
    const country = countrySelect.value;
    const category = categorySelect.value;

    searchSelect.value = "";

    if (!country || !category) return console.error('Введите страну и категорию для поиска');

    newsService.getTopHeadlinesNews(category, country, (response) => {
        const { totalResults, articles } = response;

        uiService.clearContainer();

        articles.forEach((article) => uiService.addArticle(article));

    });
}

/**
 * 
 * @param {Event} event 
 */
function onSearchChange(event) {
    const search = searchSelect.value;

    if (search.length < 4) {
        return console.log("Введите значение для поиска (мин. 4 символа)");
    }

    newsService.getEverythingSearchNews(search, (response) => {
        const { totalResults, articles } = response;
        if (totalResults) {
            uiService.clearContainer();
            articles.forEach((article) => uiService.addArticle(article));
        } else {
            uiModal.clearModal();
            uiModal.showModal();
        }
    });
}


countrySelect.addEventListener('change', onSelectChange);
categorySelect.addEventListener('change', onSelectChange);
searchSelect.addEventListener('keyup', onSearchChange);