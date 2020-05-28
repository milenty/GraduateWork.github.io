import {SUCCESS, FAILURE, REQUEST_ERROR_MESSAGE} from '../constants/constants';
import {initialCards} from '../constants/initialCards';

export class SearchInput {
    constructor (newsApi, searchButton, searchInput, searchCallbackStart, searchCallbackEnd, dataStorage)
    {
        this.newsApi = newsApi;
        this.searchButton = searchButton;
        this.searchInput = searchInput;
        this.searchCallbackStart = searchCallbackStart;
        this.searchCallbackEnd = searchCallbackEnd;
        this.searchButton.addEventListener("click", this.searchButtonClickHandler.bind(this));
        this.dataStorage = dataStorage;
    }

    searchButtonClickHandler() {
        this.searchExecute(this.searchInput.value);
    }

    searchExecute(keyWord) {
        this.dataStorage.resetCards();
        this.searchCallbackStart();//Стартуем прелоадер
        ////////////////////////////////////////////////////////////
        this.newsApi.getNews(keyWord).then(res => {
            if (res.ok) {
                return res.json();
            }
              // если ошибка, переходим в catch
                return Promise.reject(`Ошибка: ${res.status}`);
            })
        .then((result) => {
            //Сохранить результат и карточки в хранилище
            this.dataStorage.setCards(JSON.stringify({DATEFROM:this.newsApi.getParams().from,DATETO:this.newsApi.getParams().to,KEYWORD:keyWord,RESULT:SUCCESS,ERRORMESSAGE:""}),JSON.stringify(result));
            this.searchCallbackEnd();
        }).catch((err) => {
            //Сохранить результат и ошибку в хранилище
            this.dataStorage.setCards(JSON.stringify({DATEFROM:this.newsApi.getParams().from,DATETO:this.newsApi.getParams().to,KEYWORD:keyWord,RESULT:FAILURE,ERRORMESSAGE:REQUEST_ERROR_MESSAGE}));
            this.searchCallbackEnd();
        });
        /////////////////////////////////////////////////////////////
       /* this.dataStorage.setCards(JSON.stringify({DATEFROM:this.newsApi.getParams().from,DATETO:this.newsApi.getParams().to,KEYWORD:keyWord,RESULT:SUCCESS,ERRORMESSAGE:""}), JSON.stringify(initialCards));
        this.searchCallbackEnd();*/
        ////////////////////////////////////////////////////////////
    }
};

