class NewsUI {
    constructor() {
        this.newsContainer = document.querySelector('.news-wrap .row');
    }

    /**
     * 
     * @param {Object} article 
     */
    addArticle(article) {
        // console.time();
        // const template = NewsUI.generateArticleTemplate(article);
        // console.timeEnd();
        // this.newsContainer.insertAdjacentHTML("afterbegin", template);

        console.time();
        const template = NewsUI.generateAlternativeArticleTemplate(article);
        console.timeEnd();
        this.newsContainer.appendChild(template);
    }


    clearContainer() {
        let first = this.newsContainer.firstElementChild;
        while (first) {
            this.newsContainer.removeChild(first);
            first = this.newsContainer.firstElementChild;
        }
    }

    /**
     * 
     * @param {Object} article 
     */
    static generateArticleTemplate(article) {
        return `
        <div class="col s12 m6">
            <div class="card">
                <div class="card-image">
                    <img src="${article.urlToImage}">
                </div>
                <div class="card-content">
                    <span class="card-title">${article.title || ''}</span>

                    <p>${article.description || ''}</p>
                </div>
                <div class="card-action">
                    <a href="${article.url}" target="_blank">Read more</a>
                </div>
            </div>
        </div>
        `;
    }

    /**
     * 
     * @param {Object} article 
     */
    static generateAlternativeArticleTemplate(article) {

        let articleMarkup = document.createElement('div');
        articleMarkup.className = "col s12 m6";

        let card = document.createElement('div');
        card.className = "card";

        let cardImage = document.createElement('div');
        cardImage.className = "card-image";

        let img = document.createElement('img');
        img.src = article.urlToImage;

        let cardContent = document.createElement('div');
        cardContent.className = "card-content";

        let cardTitle = document.createElement('span');
        cardTitle.className = "card-title";
        cardTitle.textContent = article.title || '';

        let p = document.createElement('p');
        p.textContent = article.description || '';

        let cardAction = document.createElement('div');
        cardAction.className = "card-action";

        let a = document.createElement('a');
        a.href = article.url;
        a.target = "_blank";
        a.textContent = "Read more";

        articleMarkup.appendChild(card).appendChild(cardImage).appendChild(img);
        card.appendChild(cardContent).appendChild(cardTitle);
        card.appendChild(cardContent).appendChild(p);
        card.appendChild(cardAction).appendChild(a);

        return articleMarkup;
    }
}

class ModalUI {
    constructor() {
        this.modalContent = document.querySelector('.modal');
        $('.modal').modal();
    }

    /**
     * 
     * @param {Object} article 
     */
    showModal(text = ENV.textNewsNotFound) {
        const template = ModalUI.generateModalTemplate(text);
        this.modalContent.insertAdjacentHTML("afterbegin", template);
        $('.modal').modal('open');
    }

    clearModal() {
        let first = this.modalContent.firstElementChild;
        while (first) {
            this.modalContent.removeChild(first);
            first = this.modalContent.firstElementChild;
        }
    }

    /**
    * 
    * @param {String} text 
    */
    static generateModalTemplate(text = ENV.textNewsNotFound) {
        return `
                <div class="modal-content">
                    <h4>${text}</h4>
                </div>

                <div class="modal-footer">
                    <a href="#!" class="modal-close waves-effect waves-green btn-flat">OK</a>
                </div> 
        `;
    }
}