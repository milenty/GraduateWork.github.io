import {getRequestFormattedDate} from "../utils/utils";
import {getAxisFormattedDate} from "../utils/utils";
export class Statistics {
    constructor (dataStorage, keyWordElement, analyticsNewsPerWeekElement, analyticsNewsKeywordElement, newsGridDataElements )
    {
        this.dataStorage = dataStorage;
        this.keyWordElement = keyWordElement;
        this.analyticsNewsPerWeekElement = analyticsNewsPerWeekElement;
        this.analyticsNewsKeywordElement = analyticsNewsKeywordElement;
        this.newsGridDataElements = newsGridDataElements;
        this.showStatistics();       
    }

    showStatistics() {
        this.keyWordElement.textContent = "«" + this.dataStorage.resultKeyWord() + "»";
        this.analyticsNewsPerWeekElement.textContent = this.getNewsCount();
        this.analyticsNewsKeywordElement.textContent = this.getWordRefCount();

        //Получаем массив статистики
        let wordRefPerDateArr = this.getWordRefPerDateArr();
        //Всего упоминаний за период
        let wordRefAllDate = 0;

        //Всего упоминаний
        //Перебираем все уникальные даты со статистикой по количеству упоминаний и суммируем для получения общего количества
        wordRefPerDateArr.forEach(item => {wordRefAllDate = wordRefAllDate + item.wordRefPerDateCount});

        //Бежим по всем элементам, статистику в которые требуется вывести
        this.newsGridDataElements.forEach(item => {
            let wordRefPerDateCount = 0;
            let wordRefPerDateArrIndex = -1;
            //Если на дату связанную с элементом есть данные статистики - берем их, то 
            wordRefPerDateArrIndex = wordRefPerDateArr.findIndex(function(wordRefPerDate) {
                    return (getRequestFormattedDate(new Date(wordRefPerDate.publishedAt)) === item.publishedAt);
            });

            if (wordRefPerDateArrIndex >=0)
                wordRefPerDateCount = wordRefPerDateArr[wordRefPerDateArrIndex].wordRefPerDateCount;
            /*wordRefPerDateArr.forEach(wordRefPerDate => {
                    if (getRequestFormattedDate(new Date(wordRefPerDate.publishedAt)) === item.publishedAt)
                        wordRefPerDateCount = wordRefPerDateCount + wordRefPerDate.wordRefPerDateCount;
                });*/ 

            item.axisYGridElement.textContent = getAxisFormattedDate(item.publishedAt);
            const itemPer = (100 * wordRefPerDateCount/wordRefAllDate).toFixed(2);
            item.axisXGridElement.textContent = itemPer.toString();
            item.dataGridElement.style.width = itemPer.toString() + '%';
        });
    }

    //Количество новостей
    getNewsCount(){
        //Забираем новости из Хранилища
        let cardsArr = this.dataStorage.getCards();
        let newsCount = 0;
        
        //Если новости есть, то определяем количество
        if (cardsArr != null)
            newsCount = cardsArr.length;
        
        return newsCount;
    }

    //Количество упоминаний
    getWordRefCount(){
        //Забираем ключевое слово из хранилища
        const keyWord = this.dataStorage.resultKeyWord();
        //Определяем регулярное выражение
        const regex = new RegExp(keyWord, 'gi');
        //Получаем карточки из хранилища
        let cardsArr = this.dataStorage.getCards();
        //Счетчик вхождений ключевого слова в заголовки новостей
        let wordRefCount = 0;
        //Если карточки есть
        if (cardsArr != null)
        {
            //Перебираем карточки
            cardsArr.forEach(item => {
                //проверяем вхождение
                let wordRefCountArr = item.title.toString().match(regex);
                //Если массив вхождений определен
                if (wordRefCountArr != null)
                    wordRefCount = wordRefCount + wordRefCountArr.length;
            }, this);
        }
        return wordRefCount;
    }

    //Количество упоминаний по датам
    getWordRefPerDateArr(){
        //Забираем ключевое слово из хранилища
        const keyWord = this.dataStorage.resultKeyWord();
        //Определяем регулярное выражение
        const regex = new RegExp(keyWord, 'gi');
        //Получаем карточки из хранилища
        let cardsArr = this.dataStorage.getCards();
        //Определяем переменную для храниния вхождения ключевого слова в каждую новость (заголовок + тело)
        let wordRefCount = 0;
        //Определяем результирующий массив дат и количесва вхождений для каждой даты
        let wordRefPerDateArr = [];
        //Переменная для поиска индекса элемента по дате
        let wordRefPerDateIndex = -1;
        //Если карточки есть
        if (cardsArr != null)
        {
            //Перебираем карточки
            cardsArr.forEach(item => {
                wordRefPerDateIndex = -1;
                wordRefCount = 0;
                //Если в результирующем массиве уже есть карточки
                if (wordRefPerDateArr.length > 0)
                {
                    //Ищем есть ли в массиве запись с датой равной текущей перебираемой карточки и получаем индекс
                    wordRefPerDateIndex = wordRefPerDateArr.findIndex(function(wordRefPerDate) {
                        return getRequestFormattedDate(new Date(wordRefPerDate.publishedAt)) === getRequestFormattedDate(new Date(item.publishedAt));
                    });
                }

                //Если не нашли в результирующем массиве запись с датой, то добавляем
                if (wordRefPerDateIndex < 0)
                    wordRefPerDateIndex = wordRefPerDateArr.push({publishedAt:getRequestFormattedDate(new Date(item.publishedAt)),wordRefPerDateCount:0})-1;

                //проверяем вхождение
                let wordRefCountArr = (item.title + item.description).toString().match(regex);

                if (wordRefCountArr != null)
                    wordRefCount = wordRefCountArr.length;

                wordRefPerDateArr[wordRefPerDateIndex].wordRefPerDateCount = wordRefPerDateArr[wordRefPerDateIndex].wordRefPerDateCount + wordRefCount;
            }, this);
        }
        //Выдаем массив по дням с количеством упоминаний по каждому дню
        return wordRefPerDateArr;
    }
}