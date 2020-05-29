import {NORESULT_MESSAGE, REQUEST_ERROR_MESSAGE, NORESULT_DESCRIBE_MESSAGE} from '../constants/constants';
export class NewsCardList {
    constructor (newsCardListElement, dataStorage, createCard, preloader, noResult, noResultTitle, noResultSubtitle) {
        this.newsCardListElement = newsCardListElement;
        this.preloaderElement = preloader;
        this.noResultElement = noResult;
        this.noResultTitle = noResultTitle;
        this.noResultSubtitle = noResultSubtitle;
        this.dataStorage = dataStorage;
        //Создатель карточек
        this.createCard = createCard;
        //Массив хранит ключ-значение
        this.cards = [];
        this.pageSize = 3;
        this.pageNumber = 0;
        this.newsListButton = document.querySelector(".news-list__button");
        this.newsListButton.addEventListener("click", this.newsListButtonClickHandler.bind(this));
    }
    
    newsListButtonClickHandler(){
        this.showCards();
    }

    //Отображает карточки
    showCards(){
        this.pageNumber++;
        //Проверить наличия карточек
        this.cards.slice((this.pageNumber - 1)*this.pageSize, this.pageNumber*this.pageSize).forEach((card) => {
            card.showCard(this.newsCardListElement)})

        if ((this.pageNumber * this.pageSize) >= this.cards.length) {
            this.newsListButton.style.display= "none";
        }
        else
            this.newsListButton.style.display= "";
    }

    //Получаем карточки
    getCards(){
        let cardsArr = this.dataStorage.getCards();
        if (cardsArr != null)
        {
            this.cards = cardsArr.map(function(item) {
                return this.createCard(item.title, item.urlToImage, item.publishedAt, item.description, item.url);
            }, this);
        }
    }

    //Очищаем коллекцию карточек
    resetCards(){
        this.dataStorage.resetCards();
        this.cards.forEach((card) => {card.removeCard();});
        //this.cards.forEach((card) => {this.removeCard(card)});
        this.pageNumber = 0;
        this.cards = [];
    }

    //Запустить прелоадер
    startPreloader(){
        this.resetCards();
        this.preloaderElement.style.display = "flex";
        this.noResultElement.style.display = "none";
        this.newsCardListElement.parentElement.style.display = "none";
    }

    //Остановить прелоадер
    stopPreloader(){
        //Получаем карточки
        this.getCards();
        this.preloaderElement.style.display = "none";
        //Проверяем успешность выполнения запроса
        if (this.dataStorage.resultSuccess() === true)
        {
            if (this.cards.length === 0)
            {
                //Надо отобразить блок noresult
                this.noResultElement.style.display = "flex";
                this.noResultTitle.textContent = NORESULT_MESSAGE;
                this.noResultSubtitle.textContent = NORESULT_DESCRIBE_MESSAGE;
            }
            else
            {
                //Отображаем карточки
                this.showCards();
                this.newsCardListElement.parentElement.style.display = "flex";
            }
        }
        else
        {
            //Надо отобразить блок c noresult с выводом this.dataStorage.resultError()
            this.noResultElement.style.display = "flex";
            this.noResultTitle.textContent = REQUEST_ERROR_MESSAGE;
            //Выводим в консоль а не в this.noResultSubtitle из-за длины сообщения
            console.log(this.dataStorage.resultError());
            this.noResultSubtitle.textContent = "";
        }
    }
}
